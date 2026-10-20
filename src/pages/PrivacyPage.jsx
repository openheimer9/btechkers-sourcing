import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { SITE_CONFIG } from '../config/site';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy — Data Handling & Confidentiality"
        description="Btechkers Global Sourcing Privacy Policy: Learn how we collect, process, and protect your commercial sourcing inquiries, contact details and business catalogues."
        canonicalUrl="https://sourcing.btechkers.com/privacy-policy"
      />

      <section className="page-hero" aria-label="Privacy Policy Header">
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <span className="page-hero__eyebrow">Legal &amp; Data Governance</span>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__subtitle">
            How Btechkers handles commercial inquiry information, client contact details and uploaded manufacturer catalogues.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="prose">
            <p>
              <em>Last updated: October 2024. This policy serves as an operational draft subject to ongoing review and formal legal counsel.</em>
            </p>

            <h2>1. Overview and Scope</h2>
            <p>
              Btechkers ("we", "our", or "us") operates the international B2B sourcing and procurement agency website accessible at <strong>https://sourcing.btechkers.com</strong>. We take business confidentiality seriously. This Privacy Policy details what information we collect from visitors, prospective buyers, and supply partners, how it is processed, and how you may contact us regarding your personal and business data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily submit through our online requirement and collaboration forms, direct email inquiries, or WhatsApp communications:
            </p>
            <ul>
              <li>
                <strong>Contact Identification:</strong> Full name, professional role, business name, company registration location, and business email address.
              </li>
              <li>
                <strong>Communication Channels:</strong> Telephone numbers and WhatsApp numbers provided for coordination.
              </li>
              <li>
                <strong>Commercial Sourcing Specifications:</strong> Product descriptions, required technical tolerances, material compositions, estimated order volumes, target price benchmarks, preferred sourcing geographies, and destination delivery ports.
              </li>
              <li>
                <strong>Supplier Profiles &amp; Catalogues:</strong> Business models, export credentials, factory location details, and uploaded PDF catalogues or company profiles submitted by prospective supply partners.
              </li>
            </ul>

            <h2>3. How Inquiry Information Is Used</h2>
            <p>Information submitted to Btechkers is utilized exclusively for legitimate business purposes:</p>
            <ul>
              <li>To evaluate project feasibility and match your requirements with verified manufacturers and producers within our network.</li>
              <li>To contact you regarding quotations, product availability, sampling schedules, or factory visit feasibility.</li>
              <li>To coordinate supplier communication, sample dispatch, and procurement follow-up.</li>
              <li>To review prospective manufacturers and sourcing agents for potential inclusion in our collaborative network.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your commercial data or contact details to third-party marketing companies or generic lead aggregators.
            </p>

            <h2>4. Third-Party Form Processing (FormSubmit)</h2>
            <p>
              Our website contact forms and supplier registration mechanisms utilize <strong>FormSubmit</strong> (formsubmit.co), an external secure form-routing service, to transmit inquiries directly to our designated trade desk email. Data submitted via these forms is transmitted over encrypted Secure Sockets Layer (SSL/TLS) protocols. Please review FormSubmit's privacy documentation for details on their data transmission handling.
            </p>

            <h2>5. Handling of Product Catalogues &amp; Technical Drawings</h2>
            <p>
              PDF catalogues, spec sheets and technical drawings submitted through our website are shared strictly on a confidential need-to-know basis with vetted candidate manufacturers solely to obtain accurate technical feasibility assessments and commercial pricing quotes. We maintain standard commercial confidentiality regarding your proprietary designs.
            </p>

            <h2>6. Data Retention &amp; Security</h2>
            <p>
              We retain commercial inquiry records for as long as necessary to fulfill project evaluation, maintain business records, or comply with applicable legal obligations. While we implement standard industry security practices to safeguard data transmission, no internet-based data storage or electronic transmission can be guaranteed 100% impenetrable.
            </p>

            <h2>7. Your Data Rights &amp; Contact Inquiries</h2>
            <p>
              You have the right to request access to the contact details we hold regarding your business, request corrections to inaccurate records, or ask for the deletion of your inquiry details from our active operational database.
            </p>
            <p>
              To exercise these rights or raise questions regarding our data handling practices, please contact our data desk directly:
            </p>
            <p>
              <strong>Email:</strong> {SITE_CONFIG.contact.email}<br />
              <strong>Agency:</strong> {SITE_CONFIG.fullName}<br />
              <strong>Website:</strong> {SITE_CONFIG.domain}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
