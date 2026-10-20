// ============================================================
// UTILITY HELPERS
// ============================================================

import {
  SITE_CONFIG,
  isPlaceholderWhatsApp,
  isPlaceholderPhone,
} from '../config/site.js';

/**
 * formatDate
 * Converts an ISO date string (e.g. '2024-09-10') to a human-readable
 * date string (e.g. 'September 10, 2024').
 *
 * @param {string} dateString - ISO-format date string
 * @returns {string} formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  } catch {
    return dateString;
  }
}

/**
 * truncateText
 * Truncates a string to maxLength characters, appending '…' if shortened.
 *
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + '\u2026';
}

/**
 * slugify
 * Converts arbitrary text into a URL-safe slug.
 *
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * getWhatsAppLink
 * Builds a safe wa.me deep-link URL with an optional pre-filled message.
 * Handles digits-only formatting and falls back gracefully when in placeholder mode.
 *
 * @param {string} [number]  - WhatsApp number (defaults to configured number)
 * @param {string} [message] - Optional pre-filled message text
 * @returns {string} wa.me URL
 */
export function getWhatsAppLink(
  number = SITE_CONFIG.contact.whatsapp,
  message = SITE_CONFIG.contact.whatsappMessage
) {
  const safeMsg = message ? `?text=${encodeURIComponent(message)}` : '';

  if (isPlaceholderWhatsApp(number)) {
    // In placeholder / demo mode, return generic wa.me share link with message
    return `https://wa.me/${safeMsg}`;
  }

  const digits = String(number).replace(/\D/g, '');
  return `https://wa.me/${digits}${safeMsg}`;
}

/**
 * getMailtoLink
 * Generates a mailto: link with optional subject.
 *
 * @param {string} [email]
 * @param {string} [subject]
 * @returns {string}
 */
export function getMailtoLink(
  email = SITE_CONFIG.contact.email,
  subject = ''
) {
  const base = `mailto:${email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

/**
 * getTelLink
 * Generates a clean tel: phone link.
 *
 * @param {string} [phone]
 * @returns {string}
 */
export function getTelLink(phone = SITE_CONFIG.contact.phone) {
  if (isPlaceholderPhone(phone)) {
    return '#setup-phone';
  }
  const clean = phone.replace(/[^\d+]/g, '');
  return `tel:${clean}`;
}

/**
 * cn
 * Merges multiple className strings/values into a single space-separated
 * string, filtering out falsy values.
 *
 * @param {...(string|boolean|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
