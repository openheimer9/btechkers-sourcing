# PROJECT_SETUP.md — Btechkers Sourcing Website

Complete operational handbook and technical setup guide for the Btechkers International B2B Sourcing website (`https://sourcing.btechkers.com`).

---

## 1. HOW TO INSTALL DEPENDENCIES

Ensure Node.js (version 18 or higher) is installed on your operating system.

Open your terminal, navigate into the project directory, and run:

```bash
cd "C:\Users\Admin\OneDrive\Desktop\sourcing web\btechkers-sourcing"
npm install
```

All required dependencies (`react`, `react-dom`, `react-router-dom`, `lucide-react`, `react-helmet-async`, `vite`) are locked in `package-lock.json`.

---

## 2. HOW TO RUN DEVELOPMENT MODE

To launch the local hot-reloading development server:

```bash
npm run dev
```

By default, Vite will start the local server at `http://localhost:5173/`. Open this URL in any modern web browser to view and test the application live.

---

## 3. HOW TO CREATE A PRODUCTION BUILD

To build the optimized static assets for deployment:

```bash
npm run build
```

This compiles all React components, CSS stylesheets, and images into the `dist/` directory.

To test the production build locally before uploading:

```bash
npm run preview
```

---

## 4. WHERE TO CHANGE EMAIL AND PHONE NUMBERS

All business contact details, email addresses, phone numbers, and WhatsApp messages are centralized in a single configuration file:

**File path:** `src/config/site.js`

Open this file to edit:

```javascript
// Change placeholder values to your live business contact details:
export const CONTACT_EMAIL = 'sourcing@btechkers.com'; // Your official receiving email
export const CONTACT_PHONE = '+91 98765 43210';         // Your primary office phone
export const WHATSAPP_NUMBER = '919876543210';          // WhatsApp number (with country code, no + or spaces)

// Prefilled WhatsApp messages (optional customization):
export const WHATSAPP_BUYER_MESSAGE = 'Hello Btechkers, I would like to discuss a sourcing requirement.';
export const WHATSAPP_SUPPLIER_MESSAGE = 'Hello Btechkers, I am interested in joining your international supply network.';
```

Once updated, these changes will automatically apply across:
- The website Header contact buttons
- The Footer email, phone, and WhatsApp links
- The `/contact` page buyer inquiries and mailto links
- The `/collaborate` page partner WhatsApp cards
- The floating WhatsApp button (`WhatsAppFloat.jsx`)
- The recipient address for all FormSubmit submissions

---

## 5. WHERE TO UPDATE LOGO AND IMAGE PATHS

All graphic and photographic asset paths are maintained in:

**File path:** `src/config/assets.js`

### Adding Real Images:
1. Copy your image files into the public directory: `public/images/`.
   - Brand logos: `public/images/branding/`
   - Hero images: `public/images/hero/`
   - Industry photos: `public/images/industries/`
   - About page photos: `public/images/about/`
   - Case study photos: `public/images/case-studies/`
   - Blog photos: `public/images/blog/`
2. Update the corresponding key in `src/config/assets.js`.

### Updating the Two Horizontal About Profile Cards:
In `src/config/assets.js`, locate:
```javascript
about: {
  cardOne: '/images/about/about-card-one.jpg', // Replace with real photo for Card 1
  cardTwo: '/images/about/about-card-two.jpg', // Replace with real photo for Card 2
  surat: '/images/about/surat-india.jpg',
  team: '/images/about/team.jpg',
}
```

*Note: All image components use `ImageWithFallback`. If an image file has not yet been placed in `public/images/`, the website displays an elegant neutral icon placeholder rather than a broken image graphic.*

---

## 6. HOW TO ADD NEW BLOG ARTICLES

All blog articles are stored statically as structured JavaScript objects:

**File path:** `src/data/blogPosts.js`

To add a new article, append a new object to the `BLOG_POSTS` array:

```javascript
{
  id: 11,
  slug: 'your-new-article-slug',
  title: 'Your Article Title Here',
  seoTitle: 'Your SEO Optimized Page Title',
  metaDescription: '150-160 character summary for search engine results.',
  canonicalUrl: 'https://sourcing.btechkers.com/blog/your-new-article-slug',
  author: 'Btechkers Sourcing Team',
  publishedDate: '2026-10-20',
  readTime: '6 min read',
  category: 'Sourcing Strategy', // Must match one of BLOG_CATEGORIES
  summary: 'Brief overview displayed on the blog listing card.',
  featuredImage: '/images/blog/your-image.jpg',
  content: `
## Introduction
Your markdown-formatted article content here.

- Bullet point 1
- Bullet point 2

### Subheading
Paragraph text with **bold terms** as needed.
  `
}
```

Once added, remember to add the new article URL to `public/sitemap.xml`.

---

## 7. HOW TO EDIT INDUSTRY & SERVICE CONTENT

- **Industries:** Edit `src/data/industries.js` to modify product categories, descriptions, or sourcing markets.
- **Services:** Edit `src/data/services.js` to adjust service group titles, descriptions, and capabilities.
- **Trade Agreements:** Edit `src/data/tradeAgreements.js` to update status, signing dates, or official source links.
- **FAQs:** Edit `src/data/faqs.js` to add, remove, or revise questions and answers.

---

## 8. HOW FORMSUBMIT WORKS

Both the Buyer Sourcing Form (`BuyerForm.jsx`) and the Supplier Registration Form (`SupplierForm.jsx`) use **FormSubmit** (`https://formsubmit.co/`), a secure, free-tier form-to-email routing service.

- **Zero Server Setup:** Form submissions are dispatched directly via AJAX POST requests from the user's browser.
- **Format:** Inquiries arrive in your email inbox formatted as clean, structured tables containing all submitted parameters.
- **Security:** Equipped with hidden honeypot spam traps (`_honey`) and CAPTCHA handling.
- **File Attachments:** The supplier form attaches PDF company profiles and product catalogues (up to 5MB) directly to the notification email using multipart form data.
- **Safe Demo Mode:** If `CONTACT_EMAIL` remains set to the placeholder `YOUR_EMAIL@example.com`, the form runs in Demo Mode (validates all inputs and displays a simulated success card without sending emails to fictitious addresses).

---

## 9. HOW TO ACTIVATE THE FORMS (ONE-TIME STEP)

FormSubmit requires a one-time email address confirmation to prevent spam abuse:

1. Open `src/config/site.js` and set `CONTACT_EMAIL` to your real receiving email address (e.g. `sourcing@btechkers.com`).
2. Deploy the website or run locally (`npm run dev`).
3. Navigate to `/contact` and submit a test inquiry with your name and email.
4. Open the inbox of the email address specified in `CONTACT_EMAIL`.
5. Look for an email from **FormSubmit** (`submissions@formsubmit.co`) with the subject *"Action Required: Activate Form"*.
6. Click the confirmation link in that email.
7. **Form is now active!** All future buyer inquiries from `/contact` and supplier registrations from `/collaborate` will be instantly delivered to your inbox.

---

## 10. HOW TO DEPLOY TO SOURCING.BTECHKERS.COM

The main domain `btechkers.com` already exists on your hosting infrastructure. The sourcing site must be hosted on the subdomain `sourcing.btechkers.com`.

### Build Specifications:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18 or 20

### Hosting Options:

#### Option A: Netlify / Vercel
1. Create a new site from your Git repository.
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Add Custom Domain: `sourcing.btechkers.com`
5. Note: Netlify SPA rewrites are already configured via `public/_redirects` (`/*  /index.html  200`). For Vercel, a `vercel.json` rewrite can be added if needed.

#### Option B: cPanel / Apache Subdomain
1. In cPanel, create the subdomain `sourcing.btechkers.com` pointing to a document root folder (e.g., `public_html/sourcing`).
2. Run `npm run build` locally.
3. Upload the contents of the `dist/` directory into that folder.
4. Ensure an `.htaccess` file exists in that folder with SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

#### Option C: Nginx
Configure the server block for `sourcing.btechkers.com`:
```nginx
server {
    server_name sourcing.btechkers.com;
    root /var/www/sourcing.btechkers.com/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### DNS Configuration:
Add a DNS record in your domain registrar/DNS manager for `btechkers.com`:
- **Type:** `CNAME` (or `A` record pointing to your server IP)
- **Host / Name:** `sourcing`
- **Target / Value:** Your hosting provider's assigned domain or IP
- **TTL:** Automatic or 3600

### SSL Certificate:
Enable a free Let's Encrypt SSL certificate for `sourcing.btechkers.com` to ensure all HTTPS connections and form submissions are secure.

---

## 11. REMAINING MANUAL VERIFICATION ITEMS

Before public announcement:
1. [ ] Replace `'YOUR_EMAIL@example.com'` in `src/config/site.js` with your real receiving email.
2. [ ] Replace `'YOUR_PHONE_NUMBER'` and `'YOUR_WHATSAPP_NUMBER'` in `src/config/site.js`.
3. [ ] Perform the one-time FormSubmit email activation step.
4. [ ] Upload actual high-resolution team photos, Surat base photo, and hero banner to `public/images/`.
5. [ ] Perform a live test submission on `/contact` (buyer form) and `/collaborate` (partner form with PDF upload).
6. [ ] Verify SSL certificate is active on `https://sourcing.btechkers.com`.
