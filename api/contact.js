// ============================================================
// BTECHKERS SOURCING — SERVERLESS CONTACT & INQUIRY API
// Compatible with Vercel Serverless Functions & local Vite dev
// Destination: info@btechkers.com via SMTP
// ============================================================

import nodemailer from 'nodemailer';

// Simple in-memory rate limiter for serverless container instances
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// Clean up old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000).unref?.();

// Input sanitization: strips HTML tags and controls length
function sanitize(input, maxLength = 1000) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);
}

// Email format validation
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) && trimmed.length <= 120;
}

/**
 * Creates or retrieves the SMTP transporter instance.
 * Returns null if required SMTP credentials are not yet configured.
 */
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    return null;
  }

  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
    },
  });
}

export default async function handler(req, res) {
  // CORS & method check
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  // Rate Limiting
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a minute before submitting again.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    // ── Anti-Spam: Honeypot checks ──────────────────────────
    if (body._honey || body.company_website_url_hp || body.fax) {
      // Silently return success to mislead spambots
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received.',
      });
    }

    // ── Form Type & Core Field Extraction ───────────────────
    const type = body.type === 'supplier' ? 'supplier' : 'buyer';

    const fullName = sanitize(body.full_name || body.name || body.contact_person, 100);
    const email = (body.email || '').trim().toLowerCase();
    const phone = sanitize(body.phone, 50);
    const company = sanitize(body.company_name || body.company, 100);
    const country = sanitize(body.country || body.location, 80);
    const productCategory = sanitize(
      body.product_category || body.category || 'General Sourcing',
      100
    );
    const message = sanitize(
      body.product_description ||
        body.description ||
        body.message ||
        body.primary_products ||
        body.requirements,
      3000
    );
    const specifications = sanitize(body.specifications || body.certifications, 2000);
    const estimatedQuantity = sanitize(body.estimated_quantity || body.production_capacity, 100);
    const targetPrice = sanitize(body.target_price, 80);
    const preferredMarket = sanitize(body.preferred_sourcing_country, 100);
    const destinationCountry = sanitize(body.destination_country, 80);
    const timeline = sanitize(body.required_timeline, 80);
    const additionalNotes = sanitize(body.additional_requirements || body.export_experience, 1000);
    const serviceInterest = sanitize(body.service_interest || body.service || '', 100);
    const sourcePage = sanitize(body.source_page || '/contact', 100);

    // ── Validation ──────────────────────────────────────────
    const errors = {};

    if (!fullName || fullName.length < 1) {
      errors.full_name = 'Full name is required.';
    }

    if (!email || !isValidEmail(email)) {
      errors.email = 'A valid business email address is required.';
    }

    if (!message || message.length < 1) {
      errors.product_description = 'Product description / inquiry message is required.';
    }

    if (Object.keys(errors).length > 0) {
      console.warn('[VALIDATION_REJECTED]', {
        errors,
        received: { fullName, email, productCategory, messageLen: message?.length },
      });
      const firstErrorMessage = Object.values(errors)[0];
      return res.status(400).json({
        success: false,
        error: firstErrorMessage || 'Please fill in all required fields accurately.',
        validationErrors: errors,
      });
    }

    // ── Email Recipient & Sender Configuration ───────────────
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@btechkers.com';
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      (process.env.SMTP_USER
        ? `"Btechkers Sourcing" <${process.env.SMTP_USER}>`
        : '"Btechkers Sourcing" <info@btechkers.com>');

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toUTCString();

    const subject =
      type === 'supplier'
        ? `New Supplier Network Application — ${fullName}`
        : `New Website Inquiry — ${fullName} (${serviceInterest || productCategory || 'General'})`;

    // ── Email Content Generation ─────────────────────────────
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #182230; margin: 0; padding: 0; background-color: #F7F9FB; }
    .container { max-width: 600px; margin: 20px auto; background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #EDF2F6; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background-color: #24384F; color: #FFFFFF; padding: 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #EDF2F6; }
    .body { padding: 28px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: #EDF2F6; color: #3A506B; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th, td { padding: 10px 12px; text-align: left; font-size: 14px; border-bottom: 1px solid #EDF2F6; }
    th { width: 35%; color: #667085; font-weight: 600; background: #F7F9FB; }
    td { color: #182230; }
    .message-box { background: #F7F9FB; border-left: 4px solid #3A506B; padding: 16px; margin: 20px 0; border-radius: 0 6px 6px 0; font-size: 14px; white-space: pre-wrap; word-break: break-word; }
    .footer { background: #EDF2F6; padding: 16px 28px; font-size: 12px; color: #667085; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Btechkers Global Sourcing Desk</h1>
      <p>Direct Inbound Inquiry Received via sourcing.btechkers.com</p>
    </div>
    <div class="body">
      <div class="badge">${type === 'supplier' ? 'Supplier Partnership Application' : 'Buyer Sourcing Requirement'}</div>
      
      <table>
        <tr><th>Visitor Name</th><td><strong>${fullName}</strong></td></tr>
        <tr><th>Email Address</th><td><a href="mailto:${email}">${email}</a></td></tr>
        ${serviceInterest ? `<tr><th>Service Interest</th><td><strong>${serviceInterest}</strong></td></tr>` : ''}
        ${company ? `<tr><th>Company Name</th><td>${company}</td></tr>` : ''}
        ${phone ? `<tr><th>Phone / WhatsApp</th><td>${phone}</td></tr>` : ''}
        ${country ? `<tr><th>Buyer Location</th><td>${country}</td></tr>` : ''}
        ${productCategory ? `<tr><th>Category</th><td>${productCategory}</td></tr>` : ''}
        ${estimatedQuantity ? `<tr><th>Estimated Quantity</th><td>${estimatedQuantity}</td></tr>` : ''}
        ${targetPrice ? `<tr><th>Target Price / Budget</th><td>${targetPrice}</td></tr>` : ''}
        ${preferredMarket ? `<tr><th>Preferred Market</th><td>${preferredMarket}</td></tr>` : ''}
        ${destinationCountry ? `<tr><th>Destination Port</th><td>${destinationCountry}</td></tr>` : ''}
        ${timeline ? `<tr><th>Required Timeline</th><td>${timeline}</td></tr>` : ''}
        <tr><th>Originating Page</th><td>${sourcePage}</td></tr>
        <tr><th>Timestamp</th><td>${formattedDate} (${timestamp})</td></tr>
      </table>

      <h3 style="font-size: 15px; margin: 20px 0 8px; color: #24384F;">Product Description &amp; Requirements</h3>
      <div class="message-box">${message}</div>

      ${specifications ? `
      <h3 style="font-size: 15px; margin: 20px 0 8px; color: #24384F;">Technical Specifications / Standards</h3>
      <div class="message-box">${specifications}</div>
      ` : ''}

      ${additionalNotes ? `
      <h3 style="font-size: 15px; margin: 20px 0 8px; color: #24384F;">Additional Requirements</h3>
      <div class="message-box">${additionalNotes}</div>
      ` : ''}
    </div>
    <div class="footer">
      Sent from the official inquiry form at <a href="https://sourcing.btechkers.com" style="color: #3A506B;">sourcing.btechkers.com</a>. Reply directly to this email to contact the visitor.
    </div>
  </div>
</body>
</html>
`.trim();

    const textContent = `
============================================================
BTECHKERS GLOBAL SOURCING — NEW INQUIRY
============================================================
Type: ${type.toUpperCase()}
Visitor Name: ${fullName}
Email Address: ${email}
Service Interest: ${serviceInterest || 'N/A'}
Company: ${company || 'N/A'}
Phone/WhatsApp: ${phone || 'N/A'}
Location: ${country || 'N/A'}
Category: ${productCategory || 'N/A'}
Estimated Quantity: ${estimatedQuantity || 'N/A'}
Target Price: ${targetPrice || 'N/A'}
Preferred Market: ${preferredMarket || 'N/A'}
Destination Port: ${destinationCountry || 'N/A'}
Timeline: ${timeline || 'N/A'}
Originating Page: ${sourcePage}
Timestamp: ${formattedDate}

------------------------------------------------------------
PRODUCT DESCRIPTION & REQUIREMENTS:
${message}
------------------------------------------------------------
${specifications ? `SPECIFICATIONS:\n${specifications}\n------------------------------------------------------------\n` : ''}
${additionalNotes ? `ADDITIONAL NOTES:\n${additionalNotes}\n------------------------------------------------------------\n` : ''}
Reply-To: ${email}
============================================================
`.trim();

    // ── SMTP Server Dispatch ─────────────────────────────────
    const transporter = getTransporter();

    if (!transporter) {
      // SMTP credentials are not configured yet in this environment.
      // Transparent simulation mode: validates entire payload, logs cleanly, returns acceptance instructions.
      console.log(
        `[INQUIRY VALIDATED] From: ${fullName} <${email}> | Category: ${productCategory} | Target: ${toEmail} | Mode: Simulation (SMTP_HOST / SMTP_USER not configured)`
      );

      return res.status(200).json({
        success: true,
        mode: 'simulation',
        message:
          'Your requirement was validated successfully. (Live dispatch requires SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS environment variables configured).',
        inquirySummary: {
          name: fullName,
          email,
          category: productCategory,
          recipient: toEmail,
          timestamp,
        },
      });
    }

    try {
      const info = await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject,
        html: htmlContent,
        text: textContent,
      });

      console.log('[SMTP_SENT] Message ID:', info.messageId, 'Accepted:', info.accepted);

      return res.status(200).json({
        success: true,
        mode: 'live',
        id: info.messageId,
        message: 'Your sourcing requirement has been accepted and transmitted to info@btechkers.com.',
      });
    } catch (smtpErr) {
      console.error('[SMTP_ERROR]', smtpErr.code, smtpErr.message);
      return res.status(502).json({
        success: false,
        error:
          'Our mail server could not transmit the message at this moment. Please try again shortly or reach us directly at info@btechkers.com.',
      });
    }
  } catch (error) {
    console.error('[SERVER_ERROR]', error?.message || error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your inquiry. Please try again later.',
    });
  }
}
