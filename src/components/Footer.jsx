import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, isPlaceholderWhatsApp } from '../config/site';
import { getWhatsAppLink, getMailtoLink, getTelLink } from '../utils/helpers';
import { ASSETS } from '../config/assets';
import './Footer.css';

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46V10.9M7.86 6.3a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62.9 0 1.62-.73 1.62-1.62 0-.89-.72-1.62-1.62-1.62Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            {/* Column 1: Brand & Overview */}
            <div className="footer__col">
              <Link to="/" className="footer__logo" aria-label={`${SITE_CONFIG.name} — go to homepage`}>
                {!logoError ? (
                  <img
                    src={ASSETS.logoWhite || ASSETS.logo}
                    alt={`${SITE_CONFIG.name} Global Sourcing logo`}
                    className="footer__logo-img"
                    width="38"
                    height="38"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="footer__logo-text">{SITE_CONFIG.name}</span>
                )}
              </Link>
              <div className="footer__tagline">{SITE_CONFIG.tagline}</div>
              <p className="footer__desc">
                International B2B sourcing, procurement, and India export solutions connecting businesses worldwide with verified manufacturers, producers and suppliers.
              </p>
              <div className="footer__social" aria-label="Social media profiles">
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Instagram profile"
                  >
                    <InstagramIcon size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer__col">
              <h3 className="footer__col-heading">Quick Links</h3>
              <ul className="footer__links">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/about" className="footer__link">About Us</Link></li>
                <li><Link to="/services" className="footer__link">Services</Link></li>
                <li><Link to="/services#india-export-solutions" className="footer__link">India Export Solutions</Link></li>
                <li><Link to="/industries" className="footer__link">Industries</Link></li>
                <li><Link to="/global-network" className="footer__link">Global Network</Link></li>
                <li><Link to="/collaborate" className="footer__link">Collaborate With Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="footer__col">
              <h3 className="footer__col-heading">Resources</h3>
              <ul className="footer__links">
                <li><Link to="/source-from-india" className="footer__link">Why Source from India</Link></li>
                <li><Link to="/case-studies" className="footer__link">Case Studies</Link></li>
                <li><Link to="/blog" className="footer__link">Blog &amp; Insights</Link></li>
                <li><Link to="/contact" className="footer__link">Submit Requirement</Link></li>
                <li><Link to="/privacy-policy" className="footer__link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer__link">Terms &amp; Disclaimer</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Details */}
            <div className="footer__col">
              <h3 className="footer__col-heading">Contact Us</h3>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <Mail size={16} className="footer__contact-icon" />
                  <div className="footer__contact-detail">
                    <span className="footer__contact-label">Email Inquiries</span>
                    <a href={getMailtoLink(SITE_CONFIG.contact.email, 'Sourcing Inquiry — Btechkers')} className="footer__contact-value">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </li>
                <li className="footer__contact-item">
                  <Phone size={16} className="footer__contact-icon" />
                  <div className="footer__contact-detail">
                    <span className="footer__contact-label">Phone Support</span>
                    <a href={getTelLink(SITE_CONFIG.contact.phone)} className="footer__contact-value">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="footer__contact-item">
                  <MessageSquare size={16} className="footer__contact-icon" />
                  <div className="footer__contact-detail">
                    <span className="footer__contact-label">WhatsApp Sourcing Desk</span>
                    <a
                      href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp, SITE_CONFIG.contact.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__contact-value"
                    >
                      {isPlaceholderWhatsApp(SITE_CONFIG.contact.whatsapp)
                        ? 'Connect on WhatsApp'
                        : `+${SITE_CONFIG.contact.whatsapp}`}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer__divider" />

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="footer__legal-links">
              <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
              <span className="footer__legal-sep" aria-hidden="true">•</span>
              <Link to="/terms" className="footer__legal-link">Terms &amp; Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
