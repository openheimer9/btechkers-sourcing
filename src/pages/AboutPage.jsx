import { Link } from 'react-router-dom';
import { Target, Eye, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { ASSETS } from '../config/assets';
import './AboutPage.css';

const REGIONAL_EXPERTS = [
  {
    country: 'India',
    flag: '🇮🇳',
    location: 'Surat, Gujarat',
    experience: '4 years of sourcing experience',
    capabilities: 'On-ground network & physical factory visits',
    description:
      'Our primary sourcing hub with direct connections across textiles, jewellery and manufactured goods throughout Gujarat and western India.',
  },
  {
    country: 'Indonesia',
    flag: '🇮🇩',
    location: 'Jakarta & regional hubs',
    experience: '8 years of regional sourcing experience',
    capabilities: 'On-ground network & physical factory visits',
    description:
      'Established regional presence across furniture, textiles, agro commodities and consumer goods, with the ability to arrange physical factory visits.',
  },
  {
    country: 'Nairobi, Kenya',
    flag: '🇰🇪',
    location: 'Nairobi — regional African coverage',
    experience: '5 years of regional sourcing experience',
    capabilities: 'Regional partner network — Africa',
    description:
      'Partner-based coverage supporting agricultural commodity sourcing and selected export opportunities across eastern and wider African markets.',
  },
  {
    country: 'Croatia (EU)',
    flag: '🇭🇷',
    location: 'Croatia & European corridors',
    experience: 'More than 10 years of sourcing experience',
    capabilities: 'European collaborative partner',
    description:
      'Experienced European sourcing and trade coordination across EU supply channels, regulatory compliance and partner qualification.',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    location: 'UK',
    experience: '6 years of sourcing & logistics experience',
    capabilities: 'Supply chain & logistics expertise',
    description:
      'Cross-border procurement advisory, UK import coordination and supply-chain logistics expertise supporting our international client base.',
  },
];

const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Understand Your Requirement',
    desc: 'We begin by studying your product specifications, technical requirements, export standards, target costs and lead time expectations in detail.',
  },
  {
    number: '02',
    title: 'Identify Suitable Suppliers',
    desc: 'We cross-reference your requirements against our active network of manufacturers and producers to identify the best-fit sourcing candidates.',
  },
  {
    number: '03',
    title: 'Supplier Verification',
    desc: 'We review business registrations, production capacity and export records. Physical factory visits are available in India and Indonesia.',
  },
  {
    number: '04',
    title: 'Compare Quotations',
    desc: 'We collect comparable quotations from multiple qualified suppliers, detailing unit pricing, MOQ, payment terms and sampling schedules.',
  },
  {
    number: '05',
    title: 'Support Buyer Selection',
    desc: 'We assist you in evaluating options, reviewing samples and understanding the commercial differences between shortlisted suppliers.',
  },
  {
    number: '06',
    title: 'Procurement Coordination',
    desc: 'Depending on agreed scope, we support production monitoring, pre-shipment quality coordination, documentation and freight connections.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Btechkers — Sourcing & Export Company in India"
        description="About Btechkers — a premier sourcing and export company in India. We operate as your on-ground Indian export partner and representative for global sourcing and procurement, delivering tailored B2B product sourcing and export solutions."
        canonicalUrl="https://sourcing.btechkers.com/about"
      />

      {/* ── 1. Page Hero ─────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.about})` }}
        aria-label="About Us Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <span className="page-hero__eyebrow">About Btechkers</span>
          <h1 className="page-hero__title">
            Global Sourcing Representation &amp; Direct India Export Solutions.
          </h1>
          <p className="page-hero__subtitle">
            Btechkers connects international businesses with manufacturing opportunities worldwide. As an established sourcing and export company in India, we operate as an on-ground sourcing representative across global markets and as a trusted Indian export partner for businesses purchasing products from India.
          </p>
        </div>
      </section>

      {/* ── 2. Who We Are ────────────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="who-we-are-heading">
        <div className="container">
          <div className="about-split">
            {/* Text column */}
            <div className="about-split__text">
              <span className="section-eyebrow">Who We Are</span>
              <h2 id="who-we-are-heading" className="section-title">
                An Agency Built on Real Business Relationships
              </h2>
              <p>
                Btechkers is an independent <strong>sourcing and export company in India</strong> operating through two complementary business models designed to give international buyers complete procurement flexibility: <strong>global sourcing and procurement</strong> representation across international markets, and serving as a dedicated <strong>Indian export partner</strong> delivering comprehensive <strong>B2B product sourcing and export solutions</strong>.
              </p>
              <p>
                Whether you need on-ground representation to audit factories across Asia and Europe or wish to <strong>export products from India</strong> directly through verified <strong>Indian manufacturers and suppliers</strong>, we study client requirements in detail, verify production credentials, compare quotations, coordinate OEM/ODM customization, and support procurement and export operations — providing genuine, accountable assistance at every stage.
              </p>
              <p>
                Our international reach encompasses on-ground teams in India and Indonesia, collaborative partner networks across Africa, Europe, and the United Kingdom, and remote contacts in China. Across our operations, our network encompasses over 10,000 direct business connections, of which more than 2,000 are verified suppliers.
              </p>
              <p className="about-split__note">
                <strong>Please note:</strong> The 10,000+ connections represent the breadth of our
                business network; they are not all verified suppliers. Our 2,000+ verified suppliers
                are distinct, individually assessed manufacturing contacts.
              </p>
            </div>

            {/* Stats card column */}
            <div className="about-split__media">
              <div className="about-stats-card">
                <div className="about-stats-grid">
                  <div className="about-stat-item">
                    <span className="about-stat-item__value">10,000+</span>
                    <span className="about-stat-item__label">Direct Business Connections</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-item__value">2,000+</span>
                    <span className="about-stat-item__label">Verified Suppliers</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-item__value">Multi&#8209;Market</span>
                    <span className="about-stat-item__label">International Sourcing Markets</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-item__value">Tailored</span>
                    <span className="about-stat-item__label">Personalized Sourcing Solutions</span>
                  </div>
                </div>
                <p className="about-stats-card__note">
                  The 10,000+ figure represents total business network connections — not all are
                  verified suppliers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Approach ──────────────────────────────────── */}
      <section className="section bg-light" aria-labelledby="approach-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Methodology"
            title="A Disciplined, Buyer-Centric Approach"
            subtitle="We do not simply forward unvetted lists. Every sourcing project follows a structured process designed to protect buyer interests and deliver actionable options."
            centered
          />

          <div className="approach-grid">
            {APPROACH_STEPS.map((step) => (
              <div key={step.number} className="approach-card">
                <div className="approach-card__number">{step.number}</div>
                <h3 className="approach-card__title">{step.title}</h3>
                <p className="approach-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Regional Expertise ────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="regional-expertise-heading">
        <div className="container">
          <SectionHeading
            eyebrow="On-Ground Capabilities"
            title="Our Collaborative Sourcing Network"
            subtitle="Our sourcing capabilities are built through an international collaborative network of regional experts."
          />

          <div className="regional-grid">
            {REGIONAL_EXPERTS.map((region) => (
              <div key={region.country} className="regional-card">
                <div className="regional-card__top">
                  <span className="regional-card__flag" role="img" aria-label={region.country}>
                    {region.flag}
                  </span>
                  <div>
                    <h3 className="regional-card__country">{region.country}</h3>
                    <span className="regional-card__loc">
                      <MapPin size={12} aria-hidden="true" />
                      {region.location}
                    </span>
                  </div>
                </div>
                <div className="regional-card__badge">{region.experience}</div>
                <div className="regional-card__caps">{region.capabilities}</div>
                <p className="regional-card__desc">{region.description}</p>
              </div>
            ))}
          </div>

          <div className="collab-note">
            <p>
              <strong>Partners operate as one unified collaborative team</strong> from the client's
              perspective. In markets where physical factory visits are not conducted directly by our
              core team, services are delivered through vetted regional partners under unified
              project coordination.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Our Base: Surat, India ────────────────────────── */}
      <section id="surat" className="section bg-navy text-white" aria-labelledby="surat-heading">
        <div className="container">
          <div className="surat-split">
            <div className="surat-content">
              <span className="section-eyebrow text-accent">Strategic Hub</span>
              <h2 id="surat-heading" className="section-title section-title--white">
                Our Base in Surat, India
              </h2>
              <p className="text-light">
                Surat is a major industrial city in the state of Gujarat, India, offering powerful
                strategic advantages for international procurement and export operations.
              </p>
              <ul className="surat-features">
                <li>
                  <strong>Diamond Cutting &amp; Polishing:</strong> Surat's diamond cutting and
                  polishing ecosystem is globally recognized for processing natural rough diamonds,
                  with a growing and technologically advanced lab-grown diamond industry.
                </li>
                <li>
                  <strong>Jewellery Manufacturing &amp; Trading:</strong> Direct access to
                  established jewellery manufacturers, casting facilities and export houses serving
                  international buyers.
                </li>
                <li>
                  <strong>Strong Textile Production:</strong> Surat is a major textile and synthetic
                  fabric manufacturing hub in India, with comprehensive capacity across woven,
                  blended and processed fabrics.
                </li>
                <li>
                  <strong>Gujarat's Wider Manufacturing Strengths:</strong> Proximity to
                  engineering, chemicals, ceramics and agricultural processing across Gujarat's
                  industrial corridors.
                </li>
                <li>
                  <strong>Logistics Infrastructure:</strong> Strategic access to Hazira Port and
                  strong connectivity to JNPT (Nhava Sheva) supports sea freight consolidation and
                  timely container dispatch for export.
                </li>
              </ul>
            </div>

            <div className="surat-media">
              <ImageWithFallback
                src={ASSETS.about.surat}
                alt="Surat industrial and manufacturing infrastructure, Gujarat, India"
                className="surat-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Introduction Image Cards ──────────────────────── */}
      <section className="section bg-light" aria-labelledby="team-profiles-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership &amp; Operations"
            title="Introduction Cards"
            subtitle="Profile image cards — upload your images via src/config/assets.js (aboutCardOne, aboutCardTwo)"
            centered
          />

          <div className="profile-cards-grid">
            {/* Card 1 */}
            <div className="profile-card">
              <div className="profile-card__img-wrap">
                <ImageWithFallback
                  src={ASSETS.about.cardOne}
                  alt="Btechkers sourcing management and global trade"
                  className="profile-card__img"
                />
              </div>
              <div className="profile-card__caption">
                <h4>Sourcing Management &amp; Global Trade</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="profile-card">
              <div className="profile-card__img-wrap">
                <ImageWithFallback
                  src={ASSETS.about.cardTwo}
                  alt="Btechkers on-ground operations and supplier verification"
                  className="profile-card__img"
                />
              </div>
              <div className="profile-card__caption">
                <h4>On-Ground Operations &amp; Supplier Verification</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Mission & Vision ──────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="mission-vision-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission &amp; Vision"
            centered
          />
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card__icon">
                <Target size={28} />
              </div>
              <h3 className="mission-card__title">Our Mission</h3>
              <p className="mission-card__text">
                Connect international buyers with verified manufacturers and seamless export solutions through reliable
                business relationships, regional expertise and responsible procurement coordination.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card__icon">
                <Eye size={28} />
              </div>
              <h3 className="mission-card__title">Our Vision</h3>
              <p className="mission-card__text">
                Build lasting international business connections through an accessible and
                trustworthy sourcing network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ─────────────────────────────────────── */}
      <section className="section bg-pale">
        <div className="container text-center">
          <div className="about-cta-box">
            <h2 className="section-title">Ready to Discuss Your Sourcing or Export Requirement?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Share your product specifications with our trade desk. We will review feasibility
              and identify suitable manufacturers or export supply options through our verified network.
            </p>
            <div className="about-cta-actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Submit Sourcing Requirement
              </Link>
              <Link
                to="/contact?service=Import+Products+from+India+%2F+Export+Supply"
                className="btn btn--secondary btn--lg"
              >
                Request an Export Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
