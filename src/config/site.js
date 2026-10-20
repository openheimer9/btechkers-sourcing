// ============================================================
// SITE CONFIGURATION
// All contact details and brand settings are managed centrally here.
// Replace placeholders with your verified business details.
// ============================================================

export const CONTACT_EMAIL = 'info@btechkers.com';
export const CONTACT_PHONE = '+91 9537732108';
export const WHATSAPP_NUMBER = '919537732108'; // digits only, e.g. 441234567890 or 919876543210

export const WHATSAPP_BUYER_MESSAGE =
  'Hello Btechkers, I would like to discuss a sourcing requirement.';
export const WHATSAPP_SUPPLIER_MESSAGE =
  'Hello Btechkers, I am interested in joining your international supply network.';

/**
 * Checks whether an email address is still the default setup placeholder.
 */
export function isPlaceholderEmail(email = CONTACT_EMAIL) {
  if (!email) return true;
  return (
    email.includes('example.com') ||
    email.includes('YOUR_EMAIL') ||
    email.toLowerCase() === 'your_email@example.com'
  );
}

/**
 * Checks whether the phone number is still the default setup placeholder.
 */
export function isPlaceholderPhone(phone = CONTACT_PHONE) {
  if (!phone) return true;
  return phone.includes('YOUR_PHONE') || phone === 'YOUR_PHONE_NUMBER';
}

/**
 * Checks whether the WhatsApp number is still the default setup placeholder.
 */
export function isPlaceholderWhatsApp(number = WHATSAPP_NUMBER) {
  if (!number) return true;
  const digits = number.replace(/\D/g, '');
  return digits.length < 7 || number.includes('YOUR_WHATSAPP');
}

export const SITE_CONFIG = {
  name: 'Btechkers',
  fullName: 'Btechkers — Global Sourcing & Export Solutions',
  tagline: 'Connecting the World • Sourcing & Export Solutions',
  domain: 'https://sourcing.btechkers.com',
  description:
    'Btechkers is a trusted sourcing and export company in India. As your dedicated Indian export partner and sourcing specialist, we provide comprehensive B2B product sourcing and export solutions, global sourcing and procurement representation, and direct product supply to help international buyers export products from India through verified Indian manufacturers and suppliers.',

  // ── Central Contact Settings ───────────────────────────────
  contact: {
    email: CONTACT_EMAIL,
    phone: CONTACT_PHONE,
    whatsapp: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_BUYER_MESSAGE,
    whatsappBuyerMessage: WHATSAPP_BUYER_MESSAGE,
    whatsappSupplierMessage: WHATSAPP_SUPPLIER_MESSAGE,
  },

  // ── Social ───────────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/company/btechkers',
    instagram: 'https://instagram.com/btechkers',
    twitter: '',
    facebook: '',
  },

  // ── SEO defaults ─────────────────────────────────────────
  seo: {
    titleSuffix: '| Btechkers Global Sourcing & Export Solutions',
    defaultTitle: 'Btechkers — Global Sourcing, Procurement & India Export Solutions',
    defaultDescription:
      'Your trusted Indian export partner for global sourcing and procurement. As a premier sourcing and export company in India, Btechkers delivers reliable B2B product sourcing and export solutions, connecting international businesses with verified Indian manufacturers and suppliers to safely export products from India.',
    ogImage: '/images/branding/og-image.jpg',
    twitterHandle: '@btechkers',
  },

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { value: '10,000+', label: 'Direct Business Connections' },
    { value: '2,000+', label: 'Verified Suppliers' },
    { value: 'Multi-Market', label: 'Sourcing Network' },
    { value: 'Export & Sourcing', label: 'Tailored Solutions' },
  ],
};
