import { Mail, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import BuyerForm from '../components/BuyerForm';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS } from '../data/faqs';
import { SITE_CONFIG, isPlaceholderWhatsApp } from '../config/site';
import { getWhatsAppLink, getMailtoLink, getTelLink } from '../utils/helpers';
import { ASSETS } from '../config/assets';
import './ContactPage.css';

export default function ContactPage() {
  const whatsappUrl = getWhatsAppLink(
    SITE_CONFIG.contact.whatsapp,
    SITE_CONFIG.contact.whatsappBuyerMessage
  );
  const emailMailto = getMailtoLink(
    SITE_CONFIG.contact.email,
    'Buyer Sourcing Inquiry — Btechkers'
  );
  const phoneTel = getTelLink(SITE_CONFIG.contact.phone);

  return (
    <>
      <SEO
        title="Sourcing & India Export Inquiries | Contact Btechkers"
        description="Contact Btechkers, your trusted sourcing and export company in India. Connect with your Indian export partner for global sourcing and procurement, or request direct export supply to export products from India through verified Indian manufacturers and suppliers."
        canonicalUrl="https://sourcing.btechkers.com/contact"
        breadcrumbs={[{ name: 'Contact', url: '/contact' }]}
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.contact})` }}
        aria-label="Contact Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Contact & Sourcing / Export Request' }]} />
          <span className="page-hero__eyebrow">Direct Procurement &amp; Export Desk</span>
          <h1 className="page-hero__title">
            Tell Us What You're Looking to Source or Import.
          </h1>
          <p className="page-hero__subtitle">
            Share your product requirements and specifications with Btechkers — your sourcing and export company in India. Whether you require global sourcing and procurement representation or are looking to export products from India through a reliable Indian export partner, our team will review feasibility and coordinate tailored B2B product sourcing and export solutions.
          </p>
        </div>
      </section>

      {/* ── Contact Section (Left: Info & Process, Right: Buyer Form) ── */}
      <section className="section bg-light" aria-label="Sourcing Requirement Form and Contact Info">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Contact Information, Direct Channels & Sourcing Process */}
            <aside className="contact-info-column" aria-label="Company Contact Details">
              {/* Direct Channels Card */}
              <div className="contact-card">
                <h3>Direct Sourcing Inquiries</h3>
                <p className="contact-card-sub">
                  Prefer direct communication with our procurement team? Connect via direct email, telephone or WhatsApp.
                </p>

                <div className="contact-channel-list">
                  {/* Email */}
                  <div className="contact-channel-item">
                    <div className="contact-channel-icon" aria-hidden="true">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="contact-channel-label">Email Trade Desk</span>
                      <a href={emailMailto} className="contact-channel-val">
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-channel-item">
                    <div className="contact-channel-icon" aria-hidden="true">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="contact-channel-label">Phone Support</span>
                      <a href={phoneTel} className="contact-channel-val">
                        {SITE_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-channel-item">
                    <div className="contact-channel-icon bg-whatsapp" aria-hidden="true">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="contact-channel-label">WhatsApp Sourcing Desk</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-channel-val"
                      >
                        {isPlaceholderWhatsApp(SITE_CONFIG.contact.whatsapp)
                          ? 'Open WhatsApp Desk'
                          : `+${SITE_CONFIG.contact.whatsapp}`}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp contact-whatsapp-btn"
                >
                  <MessageSquare size={18} />
                  Chat Directly on WhatsApp
                </a>

                <div className="response-time-badge">
                  <Clock size={15} aria-hidden="true" />
                  <span>Standard response time: Within 24 business hours</span>
                </div>
              </div>

              {/* Process Explanation Card */}
              <div className="contact-card next-steps-card">
                <h3>What Happens After You Submit?</h3>
                <ol className="next-steps-list">
                  <li>
                    <strong>Requirement Evaluation:</strong> Our sourcing team reviews your specifications, quality standards, target volumes and destination country requirements.
                  </li>
                  <li>
                    <strong>Manufacturer Matching &amp; Screening:</strong> We consult our direct network of 10,000+ connections and 2,000+ verified suppliers to identify matching production capabilities.
                  </li>
                  <li>
                    <strong>Direct Sourcing Dialogue:</strong> We return initial feasibility feedback, sample availability, lead time projections and commercial options.
                  </li>
                </ol>
              </div>

              {/* Commercial Confidentiality Note */}
              <div className="contact-card confidentiality-aside">
                <ShieldCheck size={26} className="confidentiality-icon" aria-hidden="true" />
                <div>
                  <h4>Commercial Confidentiality</h4>
                  <p>
                    All product specifications, drawings, formulations, and commercial estimates shared with Btechkers are treated under strict commercial confidentiality.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Buyer Sourcing Inquiry Form */}
            <main className="contact-form-column" aria-label="Buyer Sourcing Form">
              <div className="contact-form-header">
                <h2>Buyer Sourcing &amp; Export Inquiry Form</h2>
                <p>
                  Select your service interest and provide product specifications. Complete details enable our specialists to return accurate manufacturer options or export quotations.
                </p>
              </div>

              <BuyerForm />
            </main>
          </div>
        </div>
      </section>

      {/* ── Contact & Sourcing FAQs ────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="contact-faq-heading">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Inquiry FAQs"
            title="Frequently Asked Questions Before Inquiring"
            subtitle="Understand our inquiry review process, response timelines, commercial flexibility and confidential data handling."
            centered
          />
          <FAQAccordion
            faqs={FAQS.filter((f) =>
              [
                'what-does-btechkers-do',
                'can-btechkers-export-from-india',
                'difference-sourcing-vs-export',
                'bulk-orders-private-label',
                'shipping-export-documentation',
                'which-countries-source',
                'direct-manufacturers',
                'supplier-verification',
                'china-sourcing',
                'minimum-order-quantity',
                'service-costs',
                'buyer-supplier-relationship',
                'unlisted-products',
              ].includes(f.id)
            )}
          />
        </div>
      </section>
    </>
  );
}
