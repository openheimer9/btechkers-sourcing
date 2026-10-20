// ============================================================
// SERVICES PAGE — Btechkers Global Sourcing
// 20 services across 4 logical groups
// ============================================================

import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  Building2,
  Package,
  Handshake,
  FlaskConical,
  Tag,
  BarChart3,
  ClipboardCheck,
  FileText,
  Scale,
  Ship,
  Boxes,
  RefreshCw,
  UserCheck,
  Network,
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  Anchor,
  FileCheck,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import FAQAccordion from '../components/FAQAccordion';
import { SERVICES, SERVICE_GROUPS } from '../data/services';
import { FAQS } from '../data/faqs';
import { ASSETS } from '../config/assets';
import './ServicesPage.css';

// ── Icon lookup ───────────────────────────────────────────────
const ICON_MAP = {
  Search, ShieldCheck, Building2, Package, Handshake,
  FlaskConical, Tag, BarChart3, ClipboardCheck, FileText,
  Scale, Ship, Boxes, RefreshCw, UserCheck, Network, Globe,
  Layers, Anchor, FileCheck,
};

function ServiceIcon({ name, size = 24 }) {
  const Icon = ICON_MAP[name] || Package;
  return <Icon size={size} aria-hidden="true" />;
}

// ── Engagement Features ───────────────────────────────────────
const ENGAGEMENT_FEATURES = [
  'Dual Pathways: Global Sourcing Representation or Direct India Export Supply',
  'No fixed pricing packages — arrangements are project-specific and scope-based',
  'Select individual services or commission end-to-end procurement coordination',
  'Buyers can purchase directly from factories or import via Btechkers as export partner',
  'Physical factory visits available in India and Indonesia; other markets through partner networks',
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Sourcing Representation & India Export Solutions"
        description="Comprehensive B2B product sourcing and export solutions from Btechkers, a premier sourcing and export company in India. Serving as your Indian export partner and representative for global sourcing and procurement to help you source and export products from India."
        canonicalUrl="https://sourcing.btechkers.com/services"
      />

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.services})` }}
        aria-label="Services Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <span className="page-hero__eyebrow">End-to-End Procurement &amp; Export Support</span>
          <h1 className="page-hero__title">
            Global Sourcing Representation &amp; India Export Solutions
          </h1>
          <p className="page-hero__subtitle">
            From global sourcing and procurement representation across multi-market networks to acting as your dedicated Indian export partner, Btechkers provides tailored B2B product sourcing and export solutions to safely source and export products from India.
          </p>
        </div>
      </section>

      {/* ── Flexible Engagement Banner ────────────────────────── */}
      <section className="section bg-white" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="engagement-banner">
            <div className="engagement-banner__text">
              <span className="section-eyebrow">Flexible Business Models</span>
              <h2 id="engagement-heading">
                Two Ways to Partner: Sourcing Representation or Direct Export Supply
              </h2>
              <p>
                International buyers operate with distinct operational needs. Btechkers provides two complementary engagement pathways to support your procurement objectives:
              </p>
              <div className="models-comparison" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #3A506B' }}>
                  <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#24384F' }}>1. Sourcing Representative</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#4B5565', lineHeight: '1.5' }}>
                    We research, audit, and negotiate on your behalf while you contract and purchase directly from the manufacturer. Ideal for buyers seeking direct factory relationships with on-ground oversight.
                  </p>
                </div>
                <div style={{ background: '#F0F6FA', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #2D7D9A' }}>
                  <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#24384F' }}>2. India Export Partner</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#4B5565', lineHeight: '1.5' }}>
                    Btechkers sources from Indian manufacturers, oversees OEM/ODM development, manages quality inspections and export documentation, and supplies products directly to your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="engagement-features">
              {ENGAGEMENT_FEATURES.map((feat, i) => (
                <div key={i} className="engagement-feat-item">
                  <CheckCircle2 size={18} className="engagement-feat-icon" aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Groups ────────────────────────────────────── */}
      {SERVICE_GROUPS.map((group, gi) => {
        const groupServices = SERVICES.filter((s) => s.group === group.id);
        const isLight = gi % 2 === 1;
        return (
          <section
            key={group.id}
            id={group.id}
            className={`section service-group-section${isLight ? ' bg-light' : ' bg-white'}`}
            aria-labelledby={`group-heading-${group.id}`}
          >
            <div className="container">
              <div className="service-group__header">
                <div>
                  <span className="section-eyebrow">
                    Group {gi + 1} of {SERVICE_GROUPS.length}
                  </span>
                  <h2
                    id={`group-heading-${group.id}`}
                    className="service-group__title"
                  >
                    {group.title}
                  </h2>
                  <p className="service-group__subtitle">{group.description}</p>
                </div>
                <span className="service-group__count">
                  {groupServices.length} service{groupServices.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="service-cards-grid">
                {groupServices.map((service) => {
                  // global number across all services
                  const globalIdx = SERVICES.findIndex((s) => s.id === service.id);
                  return (
                    <article
                      key={service.id}
                      id={service.id}
                      className="service-detail-card"
                    >
                      <div className="service-detail-card__header">
                        <div className="service-detail-card__icon">
                          <ServiceIcon name={service.icon} size={24} />
                        </div>
                        <span className="service-detail-card__num">
                          {String(globalIdx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="service-detail-card__title">{service.title}</h3>
                      <p className="service-detail-card__short">{service.shortDescription}</p>
                      <p className="service-detail-card__body">{service.description}</p>
                      <div className="service-detail-card__footer">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="service-detail-card__action"
                        >
                          Inquire About This Service <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Compliance Note ───────────────────────────────────── */}
      <section className="section bg-light" aria-labelledby="compliance-heading">
        <div className="container">
          <div className="compliance-box">
            <div className="compliance-box__icon" aria-hidden="true">
              <Scale size={32} />
            </div>
            <div className="compliance-box__content">
              <h3 id="compliance-heading">Transparent Operational Standards</h3>
              <p>
                Btechkers operates as a commercial sourcing coordinator and procurement
                consultant. We connect buyers with verified manufacturers, facilitate
                commercial negotiations and coordinate logistics through licensed freight
                forwarders and customs brokers.{' '}
                <strong>
                  Btechkers does not hold a customs brokerage licence
                </strong>{' '}
                and does not guarantee third-party regulatory approvals. Shipping and customs
                coordination is facilitated through appropriate external professionals.
                All trade operations must comply strictly with applicable international
                regulations, sanctions and destination market legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services FAQs ─────────────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="services-faq-heading">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Service Questions"
            title="Frequently Asked Questions About Our Services"
            subtitle="Clear answers on how we structure our sourcing support, factory visits, negotiations and procurement coordination."
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
                'supplier-verification',
                'factory-visits',
                'custom-manufacturing',
                'private-label',
                'minimum-order-quantity',
                'service-costs',
                'shipping-assistance',
                'documentation-assistance',
                'buyer-supplier-relationship',
                'ongoing-procurement',
              ].includes(f.id)
            )}
          />
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="section bg-navy" aria-labelledby="services-cta-heading">
        <div className="container">
          <div className="services-cta-box">
            <h2
              id="services-cta-heading"
              className="section-title section-title--white"
            >
              Every sourcing requirement is different. So is our approach.
            </h2>
            <p
              className="section-subtitle section-subtitle--white"
              style={{ margin: '0 auto 2rem' }}
            >
              Connect with our sourcing desk to discuss your product specifications,
              target markets and the level of support you require. There is no cost to
              submitting an initial enquiry.
            </p>
            <div className="services-cta-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--white btn--lg">
                Discuss Sourcing Requirement <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
                className="btn btn--white-outline btn--lg"
              >
                Request an Export Quote <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
