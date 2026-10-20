// ============================================================
// HOMEPAGE — Btechkers Global Sourcing & Procurement
// All 13 sections built completely.
// ============================================================

import { useEffect } from 'react';
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
  Globe,
  Target,
  MessageSquare,
  Layers,
  Factory,
  Users,
  Network,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Shirt,
  Wheat,
  Gem,
  UtensilsCrossed,
  Heart,
  Sparkles,
  MessageCircle,
  Ship,
  Boxes,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ASSETS } from '../config/assets';
import { FEATURED_SERVICES } from '../data/services';
import { FEATURED_INDUSTRIES, INDUSTRIES } from '../data/industries';
import { FAQS } from '../data/faqs';
import { getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import ImageWithFallback from '../components/ImageWithFallback';
import InteractiveConnectionMap from '../components/InteractiveConnectionMap';
import './HomePage.css';

// ── Icon lookup map ──────────────────────────────────────────
const ICON_MAP = {
  Search,
  ShieldCheck,
  Building2,
  Package,
  Handshake,
  FlaskConical,
  Tag,
  BarChart3,
  Globe,
  Factory,
  Users,
  Network,
  Shirt,
  Wheat,
  Gem,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Ship,
  Boxes,
};

function DynamicIcon({ name, size = 24, className = '' }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

// ════════════════════════════════════════════════════════════════
// MAIN HOMEPAGE COMPONENT
// ════════════════════════════════════════════════════════════════

export default function HomePage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Global Sourcing, Procurement & India Export Solutions"
        description="Btechkers is a trusted sourcing and export company in India. Your Indian export partner for global sourcing and procurement, helping international businesses export products from India through verified Indian manufacturers and suppliers with tailored B2B product sourcing and export solutions."
        canonicalUrl="https://sourcing.btechkers.com/"
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      <HeroSection />

      {/* ── SECTION 2: TRUST INDICATORS ─────────────────────── */}
      <TrustBar />

      {/* ── SECTION 2.5: DUAL BUSINESS MODELS ─────────────────── */}
      <DualModelsSection />

      {/* ── SECTION 3: WHAT WE DO ────────────────────────────── */}
      <ServicesSection />

      {/* ── SECTION 4: INDUSTRIES ────────────────────────────── */}
      <IndustriesSection />

      {/* ── SECTION 5: GLOBAL NETWORK ────────────────────────── */}
      <GlobalNetworkSection />

      {/* ── SECTION 6: WHY BTECHKERS ─────────────────────────── */}
      <WhyBteckkersSection />

      {/* ── SECTION 7: SOURCING PROCESS ──────────────────────── */}
      <ProcessSection />

      {/* ── SECTION 8: SOURCE FROM INDIA ─────────────────────── */}
      <IndiaSection />

      {/* ── SECTION 9: CASE STUDIES ──────────────────────────── */}
      <CaseStudiesSection />

      {/* ── SECTION 10: WHO WE WORK WITH ─────────────────────── */}
      <ClientTypesSection />

      {/* ── SECTION 11: COLLABORATION INVITATION ─────────────── */}
      <CollaborationSection />

      {/* ── SECTION 12: FAQ ──────────────────────────────────── */}
      <FAQSection />

      {/* ── SECTION 13: FINAL CTA ────────────────────────────── */}
      <FinalCTASection />
    </>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 1 — HERO
// ════════════════════════════════════════════════════════════════

function HeroSection() {
  return (
    <section className="hero" aria-label="Homepage hero">
      {/* SVG world connection lines background */}
      <div className="hero__bg-lines" aria-hidden="true">
        <svg
          className="hero__svg-lines"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none">
            <line x1="720" y1="300" x2="200" y2="150" className="hero-line hero-line--1" />
            <line x1="720" y1="300" x2="1100" y2="200" className="hero-line hero-line--2" />
            <line x1="720" y1="300" x2="400" y2="420" className="hero-line hero-line--3" />
            <line x1="720" y1="300" x2="1250" y2="380" className="hero-line hero-line--4" />
            <line x1="720" y1="300" x2="900" y2="480" className="hero-line hero-line--5" />
            <line x1="720" y1="300" x2="150" y2="350" className="hero-line hero-line--6" />
            <circle cx="200" cy="150" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--1" />
            <circle cx="1100" cy="200" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--2" />
            <circle cx="400" cy="420" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--3" />
            <circle cx="1250" cy="380" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--4" />
            <circle cx="900" cy="480" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--5" />
            <circle cx="150" cy="350" r="4" fill="rgba(255,255,255,0.15)" className="hero-dot hero-dot--6" />
            <circle cx="720" cy="300" r="6" fill="rgba(255,255,255,0.25)" />
          </g>
          {/* Dot grid pattern */}
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Optional hero image overlay */}
      <div className="hero__img-overlay" aria-hidden="true">
        <ImageWithFallback
          src={ASSETS.hero.main}
          alt=""
          className="hero__img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Global Sourcing &amp; Export Solutions</span>
          <h1 className="hero__title">
            Global Sourcing.<br />
            India Export Supply.<br />
            Trusted Worldwide.
          </h1>
          <p className="hero__lead">
            Your trusted Indian export partner for global sourcing and procurement.
            As an established sourcing and export company in India, Btechkers delivers complete
            B2B product sourcing and export solutions — whether you need on-ground sourcing
            representation across international markets or direct supply from verified Indian manufacturers and suppliers to
            safely export products from India.
          </p>
          <p className="hero__supporting">
            On-ground presence in <strong>India &amp; Indonesia</strong>. Direct B2B export supply and trading solutions from <strong>India</strong>. Regional partner network across <strong>Europe, the UK, and Africa</strong>. Remote sourcing contacts in <strong>China</strong>.
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--white btn--lg">
              Submit Sourcing Requirement
            </Link>
            <Link
              to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
              className="btn btn--white-outline btn--lg"
            >
              Request an Export Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 2 — TRUST BAR
// ════════════════════════════════════════════════════════════════

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Key figures">
      <div className="container">
        <ul className="trust-bar__list" role="list">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <li key={idx} className="trust-bar__item">
              <span className="trust-bar__value">{stat.value}</span>
              <span className="trust-bar__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// DUAL BUSINESS MODELS — SOURCING REPRESENTATION & INDIA EXPORT
// ════════════════════════════════════════════════════════════════

function DualModelsSection() {
  return (
    <section className="section dual-models-section" id="business-models" aria-labelledby="dual-models-heading">
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Two Complementary Models"
            title="Sourcing Representation or Direct India Export Supply"
            subtitle="Choose the model that fits your operational needs: hire us as your international sourcing representative, or purchase Indian products directly through Btechkers."
            centered
          />
        </div>

        <div className="dual-models-grid reveal-on-scroll">
          {/* Model 1: Global Sourcing & Procurement */}
          <div className="dual-model-card">
            <span className="dual-model-badge">Model 1 • Representative</span>
            <div className="dual-model-header">
              <div className="dual-model-icon">
                <Globe size={26} />
              </div>
              <h3 className="dual-model-title">Global Sourcing &amp; Procurement</h3>
            </div>
            <p className="dual-model-desc">
              We act as your dedicated on-ground sourcing representative across international markets. We identify verified manufacturers, audit facilities, compare quotations, negotiate commercial terms, and coordinate samples. You purchase directly from manufacturers with our professional guidance.
            </p>
            <ul className="dual-model-list">
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Direct Manufacturer Purchasing:</strong> Contract directly with factories — no unnecessary intermediary markups.</span>
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Multi-Market Coverage:</strong> Factory audits in India &amp; Indonesia; regional partner network across Africa, the UK, and Europe.</span>
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Independent Representation:</strong> Supplier verification, quotation benchmarking, and sampling follow-up aligned strictly with your interests.</span>
              </li>
            </ul>
            <div className="dual-model-footer">
              <Link to="/services" className="btn btn--secondary">
                Explore Sourcing Services <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Model 2: India Export Solutions */}
          <div className="dual-model-card dual-model-card--highlight">
            <span className="dual-model-badge dual-model-badge--accent">Model 2 • Direct Supply</span>
            <div className="dual-model-header">
              <div className="dual-model-icon">
                <Ship size={26} />
              </div>
              <h3 className="dual-model-title">India Export Solutions &amp; Supply</h3>
            </div>
            <p className="dual-model-desc">
              Import products with confidence by partnering with Btechkers as your <strong>Indian export partner</strong>. We provide end-to-end <strong>B2B product sourcing and export solutions</strong> to help international buyers <strong>export products from India</strong> — sourcing from verified <strong>Indian manufacturers and suppliers</strong>, managing OEM/ODM development, overseeing quality inspections, and supplying goods directly to your business.
            </p>
            <ul className="dual-model-list">
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Direct B2B Supply:</strong> Consolidated procurement, transparent export quotations, and commercial coordination from India.</span>
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Custom Manufacturing &amp; Private Label:</strong> OEM/ODM specification alignment, tooling, sample approval, and branded packaging.</span>
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span><strong>Export Compliance &amp; Freight:</strong> Order consolidation, export documentation, and logistics coordination through licensed freight partners.</span>
              </li>
            </ul>
            <div className="dual-model-footer">
              <Link
                to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
                className="btn btn--primary"
              >
                Request an Export Quote <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <p className="dual-model-subnote reveal-on-scroll">
          * Product availability, MOQ, commercial terms and export feasibility depend on the specific requirement. Btechkers coordinates with licensed freight forwarders and customs professionals.
        </p>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 3 — SERVICES
// ════════════════════════════════════════════════════════════════

function ServiceCard({ service }) {
  return (
    <article className="service-card card">
      <div className="service-card__icon-wrap">
        <DynamicIcon name={service.icon} size={26} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.shortDescription}</p>
      <Link to={service.slug} className="service-card__link">
        Learn More <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </article>
  );
}

function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="What We Do"
            title="Global Sourcing Representation &amp; Direct India Export Supply"
            subtitle="From supplier discovery and factory audits to direct product supply and export coordination from India, our services are tailored to your business model."
            centered
          />
        </div>
        <div className="grid grid-3 services-section__grid reveal-on-scroll">
          {FEATURED_SERVICES.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
        <div className="services-section__cta reveal-on-scroll">
          <Link to="/services" className="btn btn--primary">
            View All Services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 4 — INDUSTRIES
// ════════════════════════════════════════════════════════════════

function IndustryCard({ industry }) {
  return (
    <article className="industry-card card">
      <div className="industry-card__img-wrap">
        <ImageWithFallback
          src={industry.image}
          alt={industry.name}
          className="industry-card__img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="industry-card__icon-badge">
          <DynamicIcon name={industry.icon} size={20} />
        </div>
      </div>
      <div className="industry-card__body">
        <h3 className="industry-card__title">{industry.name}</h3>
        <p className="industry-card__desc">{industry.shortDescription}</p>
        <div className="industry-card__markets">
          {industry.sourcingMarkets.map((m) => (
            <span key={m} className="tag tag--blue">
              {m}
            </span>
          ))}
        </div>
        <Link to={`/industries/${industry.slug}`} className="industry-card__link">
          Explore <ChevronRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function IndustriesSection() {
  // Featured 3 + 3 more non-featured
  const featured = FEATURED_INDUSTRIES; // textiles, agriculture, jewellery
  const additional = INDUSTRIES.filter((i) => !i.featured).slice(0, 3);
  const displayed = [...featured, ...additional];

  return (
    <section className="section industries-section bg-light" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Industries"
            title="One Network. Multiple Industries."
            subtitle="From textiles and agriculture to jewellery, food and industrial goods — our sourcing network spans a broad range of product categories."
            centered
          />
        </div>
        <div className="industries-section__grid reveal-on-scroll">
          {displayed.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
        <div className="industries-section__note reveal-on-scroll">
          <p>
            Don&rsquo;t see your industry?{' '}
            <Link to="/contact" className="industries-section__note-link">
              Tell us what you&rsquo;re looking for
            </Link>
            &nbsp;— we can explore sourcing options for a broad range of products.
          </p>
        </div>
        <div className="industries-section__cta reveal-on-scroll">
          <Link to="/industries" className="btn btn--primary">
            Explore All Industries <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 5 — GLOBAL NETWORK (INTERACTIVE CONNECTION MAP)
// ════════════════════════════════════════════════════════════════

function GlobalNetworkSection() {
  return (
    <section
      className="section global-network-section bg-navy"
      id="global-network"
      aria-labelledby="network-heading"
    >
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Our Global Network"
            title="International Connections. On-Ground Understanding."
            subtitle="Explore our active sourcing corridors and trade hubs across India, Indonesia, Kenya, the UK, Europe, China, North America, and Oceania. Move your mouse over any country on the map to inspect regional capabilities."
            centered
            dark
          />
        </div>

        {/* Interactive Global Network Connection Map */}
        <div className="global-network__map-wrap reveal-on-scroll">
          <InteractiveConnectionMap />
        </div>

        <div className="global-network__cta reveal-on-scroll">
          <Link to="/global-network" className="btn btn--white">
            Explore Full Global Network Capabilities <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 6 — WHY BTECHKERS
// ════════════════════════════════════════════════════════════════

const BENEFITS = [
  {
    icon: Factory,
    title: 'Direct Manufacturer Relationships',
    desc: 'We maintain direct working relationships with manufacturers and producers across multiple markets.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification Before Recommendation',
    desc: 'We verify every supplier through background checks, document reviews and site visits where available.',
  },
  {
    icon: BarChart3,
    title: 'Multiple Supplier Quotations Compared',
    desc: 'We gather and compare quotations from multiple suitable suppliers so you can make informed decisions.',
  },
  {
    icon: Building2,
    title: 'Physical Factory Visits',
    desc: 'On-ground factory visits are available in India and Indonesia through our own team.',
  },
  {
    icon: Globe,
    title: 'Regional Sourcing Expertise',
    desc: 'Local knowledge and on-ground understanding across our key sourcing markets.',
  },
  {
    icon: Target,
    title: 'Personalized Sourcing Strategies',
    desc: 'Every project is tailored to your specific product requirements, budget and sourcing objectives.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Clear, honest communication throughout the sourcing process — no hidden steps or surprise costs.',
  },
  {
    icon: Layers,
    title: 'Support Across Procurement Stages',
    desc: 'From initial supplier identification right through to sampling and procurement coordination.',
  },
];

function WhyBteckkersSection() {
  return (
    <section
      className="section why-section"
      id="why-btechkers"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Why Btechkers"
            title="More Than Supplier Contacts. A Partner You Can Work With."
            subtitle="We go beyond sending lists of contacts — we invest in understanding your requirement, verifying our suppliers, and supporting your sourcing project from start to finish."
            centered
          />
        </div>
        <div className="grid grid-4 why-section__grid reveal-on-scroll">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="benefit-card">
                <div className="benefit-card__icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__desc">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 7 — SOURCING PROCESS
// ════════════════════════════════════════════════════════════════

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understand Your Requirement',
    desc: 'We begin by reviewing your sourcing inquiry in detail — the product, specifications, target market, volumes and any specific requirements you have.',
  },
  {
    num: '02',
    title: 'Identify Suitable Suppliers',
    desc: 'We search our established network and relevant markets to identify manufacturers, producers and exporters that match your specifications.',
  },
  {
    num: '03',
    title: 'Supplier Verification',
    desc: 'Before presenting suppliers to you, we conduct background checks, review documentation and, where available, arrange physical factory visits.',
  },
  {
    num: '04',
    title: 'Compare Quotations',
    desc: 'We collect and compare quotations from multiple suitable suppliers, reviewing pricing, MOQ, lead times and other commercial terms.',
  },
  {
    num: '05',
    title: 'Buyer Selection & Negotiation',
    desc: 'We present verified options and assist you in evaluating suppliers. We support commercial discussions and negotiations with your preferred supplier.',
  },
  {
    num: '06',
    title: 'Procurement Coordination',
    desc: 'Once a supplier is selected, we coordinate sampling, production follow-up, documentation and logistics support as agreed in the project scope.',
  },
];

function ProcessSection() {
  return (
    <section
      className="section process-section bg-light"
      id="how-we-work"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Work"
            subtitle="A structured, transparent sourcing process designed to connect you with the right suppliers efficiently."
            centered
          />
        </div>

        <ol className="process-steps reveal-on-scroll" role="list">
          {PROCESS_STEPS.map((step, idx) => (
            <li
              key={idx}
              className={`process-step process-step--${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="process-step__connector" aria-hidden="true">
                <span className="step-number">{step.num}</span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <span className="process-step__line" />
                )}
              </div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="process-section__note reveal-on-scroll">
          <CheckCircle2 size={16} aria-hidden="true" />
          Service scope is customized for every project.
        </p>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 8 — WHY SOURCE FROM INDIA
// ════════════════════════════════════════════════════════════════

const INDIA_POINTS = [
  { title: 'Extensive Textile Ecosystem', desc: 'One of the world\'s largest textile and apparel manufacturing bases, from raw fibre to finished garments.' },
  { title: 'Skilled & Diverse Production', desc: 'A large, skilled manufacturing workforce across engineering, pharmaceuticals, gems, jewellery and consumer goods.' },
  { title: 'Product Diversity', desc: 'India manufactures an extraordinary range of products — from handcrafted goods to precision engineering components.' },
  { title: 'Export Infrastructure', desc: 'Well-established ports, logistics networks and export procedures supporting international trade at scale.' },
  { title: 'International Trade Agreements', desc: 'Growing international trade ties making it easier and more cost-effective to source from India.' },
];

function IndiaSection() {
  return (
    <section
      className="section india-section bg-slate"
      id="source-from-india"
      aria-labelledby="india-heading"
    >
      <div className="container">
        <div className="india-section__inner">
          <div className="india-section__content reveal-on-scroll">
            <SectionHeading
              eyebrow="Source &amp; Export From India"
              title="Discover India's Manufacturing &amp; Export Advantage"
              subtitle="As a dedicated sourcing and export company in India, Btechkers connects international businesses directly with verified Indian manufacturers and suppliers across textiles, precious materials, agro-commodities, and engineered goods. We offer both on-ground global sourcing and procurement representation and direct B2B product sourcing and export solutions to safely export products from India."
              dark
            />
            <ul className="india-points" role="list">
              {INDIA_POINTS.map((pt, idx) => (
                <li key={idx} className="india-point">
                  <CheckCircle2
                    size={18}
                    className="india-point__icon"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="india-point__title">{pt.title}</strong>
                    <p className="india-point__desc">{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="india-section__actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              <Link to="/source-from-india" className="btn btn--white">
                Discover Sourcing in India{' '}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
                className="btn btn--white-outline"
              >
                Request an Export Quote{' '}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="india-section__image reveal-on-scroll">
            <ImageWithFallback
              src={ASSETS.hero.india}
              alt="Manufacturing in India"
              className="india-section__img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 9 — CASE STUDIES
// ════════════════════════════════════════════════════════════════

const CASE_STUDIES = [
  {
    id: 'sportswear',
    title: 'Custom Fabric Sourcing for a European Sportswear Brand',
    category: 'Textiles & Apparel',
    overview:
      'A European sportswear brand required high-performance fabrics for a new activewear collection. We identified and verified suitable fabric mills in India, coordinated samples, compared quotations and facilitated commercial discussions.',
    image: ASSETS.caseStudies.sportswear,
    market: 'India',
    slug: '/case-studies/sportswear-fabric',
  },
  {
    id: 'innerwear',
    title: 'Fabric Sourcing for a European Innerwear Brand',
    category: 'Textiles & Apparel',
    overview:
      'An established European innerwear brand needed fabric sourcing support for a new product line. We worked through India\'s textile manufacturing network to identify suitable suppliers, arrange samples and coordinate commercial discussions.',
    image: ASSETS.caseStudies.innerwear,
    market: 'India',
    slug: '/case-studies/innerwear-fabric',
  },
];

function CaseStudiesSection() {
  return (
    <section
      className="section case-studies-section"
      id="case-studies"
      aria-labelledby="case-studies-heading"
    >
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Our Work"
            title="Selected Sourcing Projects"
            subtitle="A selection of sourcing projects demonstrating our approach and capabilities."
            centered
          />
        </div>
        <div className="grid grid-2 case-studies-section__grid reveal-on-scroll">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="case-study-card card">
              <div className="case-study-card__img-wrap">
                <ImageWithFallback
                  src={cs.image}
                  alt={cs.title}
                  className="case-study-card__img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="case-study-card__category">{cs.category}</span>
              </div>
              <div className="case-study-card__body">
                <div className="case-study-card__meta">
                  <MapPin size={13} aria-hidden="true" />
                  <span>{cs.market}</span>
                </div>
                <h3 className="case-study-card__title">{cs.title}</h3>
                <p className="case-study-card__overview">{cs.overview}</p>
                <Link to={cs.slug} className="case-study-card__link">
                  Read More <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="case-studies-section__cta reveal-on-scroll">
          <Link to="/case-studies" className="btn btn--primary">
            View Case Studies <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 10 — WHO WE WORK WITH
// ════════════════════════════════════════════════════════════════

const CLIENT_TYPES = [
  'Importers & Exporters',
  'Brands & Private-Label Businesses',
  'Retailers & Wholesalers',
  'Distributors',
  'Manufacturers',
  'Startups',
  'Established Enterprises',
  'Sourcing Agencies',
];

function ClientTypesSection() {
  return (
    <section
      className="section client-types-section bg-light"
      id="who-we-work-with"
      aria-labelledby="clients-heading"
    >
      <div className="container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Our Clients"
            title="Who We Work With"
            subtitle="We work with a wide range of businesses and professionals looking to source products from international markets."
            centered
          />
        </div>
        <div className="client-chips reveal-on-scroll" role="list" aria-label="Client types">
          {CLIENT_TYPES.map((type, idx) => (
            <span key={idx} className="client-chip" role="listitem">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 11 — COLLABORATION
// ════════════════════════════════════════════════════════════════

function CollaborationSection() {
  return (
    <section
      className="section collab-section"
      id="collaborate"
      aria-labelledby="collab-heading"
    >
      <div className="container">
        <div className="collab-section__inner reveal-on-scroll">
          <div className="collab-section__icon" aria-hidden="true">
            <Handshake size={40} />
          </div>
          <SectionHeading
            eyebrow="Partnership"
            title="Are You a Sourcing Professional or Manufacturing Partner?"
            subtitle="We are always open to building relationships with complementary sourcing professionals, regional experts, freight partners, manufacturers and others who can enhance our network and service offering."
            centered
          />
          <Link to="/collaborate" className="btn btn--primary btn--lg">
            Explore Partnership Opportunities <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 12 — FAQ
// ════════════════════════════════════════════════════════════════

function FAQSection() {
  const displayFaqs = FAQS.slice(0, 8);

  return (
    <section
      className="section faq-section bg-light"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container faq-section__container">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our services, how we work and what to expect."
            centered
          />
        </div>
        <div className="faq-section__accordion reveal-on-scroll">
          <FAQAccordion faqs={displayFaqs} />
        </div>
        <div className="faq-section__cta reveal-on-scroll">
          <Link to="/contact" className="btn btn--secondary">
            Have More Questions? Contact Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION 13 — FINAL CTA
// ════════════════════════════════════════════════════════════════

function FinalCTASection() {
  return (
    <section
      className="section final-cta-section bg-slate"
      id="get-in-touch"
      aria-labelledby="final-cta-heading"
    >
      <div className="container">
        <div className="final-cta-section__inner reveal-on-scroll">
          <h2 className="final-cta-section__title section-title--white">
            Looking for a Global Sourcing or India Export Partner?
          </h2>
          <p className="final-cta-section__desc">
            Share your requirements and let us explore suitable sourcing options or provide direct export quotations through our verified manufacturer network. There is no cost to submitting an initial inquiry.
          </p>
          <div className="final-cta-section__ctas">
            <Link to="/contact" className="btn btn--white btn--lg">
              Submit Sourcing Requirement
            </Link>
            <Link
              to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
              className="btn btn--white-outline btn--lg"
            >
              Request an Export Quote
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white-outline btn--lg"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
