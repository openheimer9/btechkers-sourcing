import { Users, Factory, ShieldCheck, CheckCircle2, ArrowDown, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import SupplierForm from '../components/SupplierForm';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS } from '../data/faqs';
import { SITE_CONFIG, isPlaceholderWhatsApp } from '../config/site';
import { getWhatsAppLink } from '../utils/helpers';
import { ASSETS } from '../config/assets';
import './CollaboratePage.css';

export default function CollaboratePage() {
  const scrollToForm = () => {
    const el = document.getElementById('collaboration-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const partnerWhatsappUrl = getWhatsAppLink(
    SITE_CONFIG.contact.whatsapp,
    SITE_CONFIG.contact.whatsappSupplierMessage
  );

  return (
    <>
      <SEO
        title="Collaborate With Us | B2B Sourcing Partners & Manufacturers | Btechkers"
        description="Collaborate with Btechkers as an independent sourcing professional, regional procurement expert, or verified manufacturing partner. Explore global B2B sourcing partnerships."
        canonicalUrl="https://sourcing.btechkers.com/collaborate"
        breadcrumbs={[{ name: 'Collaborate', url: '/collaborate' }]}
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.collaborate})` }}
        aria-label="Collaborate Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Collaborate' }]} />
          <span className="page-hero__eyebrow">International Sourcing Network</span>
          <h1 className="page-hero__title">
            Let's Build Better Sourcing Connections Together.
          </h1>
          <p className="page-hero__subtitle">
            Btechkers expands through genuine commercial relationships. Whether you are an experienced regional sourcing professional with on-ground reach, or an established manufacturer seeking qualified international buyers, we welcome collaborative partnerships.
          </p>
        </div>
      </section>

      {/* ── Two Audiences Overview ───────────────────────────── */}
      <section className="section bg-white" aria-labelledby="collaboration-pathways-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Collaboration Pathways"
            title="Two Ways to Partner With Btechkers"
            subtitle="Our collaborative architecture connects two key stakeholder groups across the international trade ecosystem."
            centered
          />

          <div className="collab-audiences-grid">
            {/* Audience A: Sourcing Professionals */}
            <div className="collab-audience-card">
              <div className="collab-audience-card__icon" aria-hidden="true">
                <Users size={32} />
              </div>
              <span className="collab-audience-card__tag">Pathway A: Sourcing Professionals</span>
              <h3 className="collab-audience-card__title">
                Independent Sourcing Agents &amp; Regional Procurement Specialists
              </h3>
              <p className="collab-audience-card__desc">
                We collaborate with independent sourcing agents, procurement specialists, regional sourcing experts, supply-chain professionals, and manufacturing-network partners worldwide. Btechkers welcomes collaboration with professionals who can contribute valuable industry knowledge, supplier relationships, and regional capabilities.
              </p>
              <div className="collab-criteria-box">
                <h4>Collaboration Opportunities:</h4>
                <ul>
                  <li><CheckCircle2 size={16} /> Partner on active international buyer mandates requiring regional coverage.</li>
                  <li><CheckCircle2 size={16} /> Coordinate physical supplier visits, quality checks, and local market representation.</li>
                  <li><CheckCircle2 size={16} /> Share category specialization across textiles, agro-commodities, jewellery, or engineering.</li>
                  <li><CheckCircle2 size={16} /> Commercial partnership model (Note: This is a business partnership, not an employment or job vacancy).</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn--secondary btn--sm collab-card-cta"
              >
                Register as Sourcing Professional <ArrowDown size={14} />
              </button>
            </div>

            {/* Audience B: Manufacturers & Producers */}
            <div className="collab-audience-card">
              <div className="collab-audience-card__icon" aria-hidden="true">
                <Factory size={32} />
              </div>
              <span className="collab-audience-card__tag">Pathway B: Manufacturers &amp; Producers</span>
              <h3 className="collab-audience-card__title">
                Manufacturers, Producers, Exporters &amp; Wholesalers
              </h3>
              <p className="collab-audience-card__desc">
                We invite legitimate manufacturing facilities, agricultural producers, export houses, and reputable wholesalers to introduce their product lines and manufacturing capabilities. Potential partners can share product categories, manufacturing capabilities, and export credentials for review by our international procurement desk.
              </p>
              <div className="collab-criteria-box">
                <h4>Network Requirements:</h4>
                <ul>
                  <li><CheckCircle2 size={16} /> Direct manufacturing or primary processing capability with export experience.</li>
                  <li><CheckCircle2 size={16} /> Verifiable business registration, tax documentation, and export licences.</li>
                  <li><CheckCircle2 size={16} /> Compliance with relevant international quality and destination-market standards.</li>
                  <li><CheckCircle2 size={16} /> Willingness to facilitate sample orders and ground-level factory verification.</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn--secondary btn--sm collab-card-cta"
              >
                Register as Supply Partner <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Verification Standard & Direct WhatsApp CTA ── */}
      <section className="section bg-light" aria-label="Verification Standards & Direct Partner Contact">
        <div className="container">
          <div className="collab-middle-grid">
            <div className="qualification-note-card">
              <ShieldCheck size={36} className="qualification-icon" aria-hidden="true" />
              <div>
                <h3>Our Network Verification Standards</h3>
                <p>
                  To maintain trust with international buyers, Btechkers does not guarantee automatic partnership acceptance. All prospective manufacturing and sourcing partners undergo structured background evaluation and document verification. Submitting your profile enables our sourcing team to review your capabilities against current and upcoming buyer requirements.
                </p>
              </div>
            </div>

            <div className="partner-direct-card">
              <div className="partner-direct-icon" aria-hidden="true">
                <MessageSquare size={28} />
              </div>
              <div>
                <h4>Prefer Direct WhatsApp Discussion?</h4>
                <p>
                  Connect directly with our international partnership desk on WhatsApp to discuss collaboration opportunities.
                </p>
                <a
                  href={partnerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--sm"
                >
                  <MessageSquare size={16} />
                  {isPlaceholderWhatsApp(SITE_CONFIG.contact.whatsapp)
                    ? 'Connect on WhatsApp'
                    : `WhatsApp: +${SITE_CONFIG.contact.whatsapp}`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Registration Form Section ────────────────── */}
      <section id="collaboration-form-section" className="section bg-white" aria-labelledby="form-heading">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="collab-form-header text-center">
            <span className="section-eyebrow">Partnership Registration</span>
            <h2 id="form-heading" className="section-title">
              Supply Partner &amp; Sourcing Professional Registration
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Please provide complete details regarding your business operations, product lines and manufacturing capabilities. You may optionally attach your product catalogue in PDF format (maximum 5MB).
            </p>
          </div>

          {/* Supplier/Partner Form Component */}
          <SupplierForm />
        </div>
      </section>

      {/* ── Partner & Collaboration FAQs ───────────────────────── */}
      <section className="section bg-light" aria-labelledby="collab-faq-heading">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Partner FAQs"
            title="Frequently Asked Questions for Partners & Suppliers"
            subtitle="Details on how we collaborate with independent sourcing professionals and onboard verified manufacturing partners."
            centered
          />
          <FAQAccordion
            faqs={FAQS.filter((f) =>
              [
                'agency-collaboration',
                'supplier-verification',
                'factory-visits',
                'buyer-supplier-relationship',
                'custom-manufacturing',
                'china-sourcing',
                'which-countries-source',
              ].includes(f.id)
            )}
          />
        </div>
      </section>
    </>
  );
}
