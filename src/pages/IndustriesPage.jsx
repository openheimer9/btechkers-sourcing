import { Link } from 'react-router-dom';
import {
  Shirt,
  Wheat,
  Gem,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Factory,
  Box,
  Settings,
  Home,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { INDUSTRIES, FEATURED_INDUSTRIES } from '../data/industries';
import { ASSETS } from '../config/assets';
import './IndustriesPage.css';

// ── Icon map ─────────────────────────────────────────────────
// 'Armchair' may not exist in this version of lucide-react.
// Fall back to Factory for any unknown icon strings.
const ICON_MAP = {
  Shirt,
  Wheat,
  Gem,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Factory,
  Box,
  Settings,
  Home,
  Wrench,
};

function IndustryIcon({ name, size = 26 }) {
  const IconComponent = ICON_MAP[name] || Factory;
  return <IconComponent size={size} aria-hidden="true" />;
}

// ── Featured industry row ─────────────────────────────────────
function FeaturedIndustryRow({ industry, index }) {
  return (
    <div
      id={industry.slug}
      className={`featured-industry-row${index % 2 === 1 ? ' featured-industry-row--reversed' : ''}`}
    >
      {/* Left: image + market tags */}
      <div className="featured-industry-row__media">
        <ImageWithFallback
          src={industry.image}
          alt={`${industry.name} sourcing`}
          className="featured-industry-row__img"
        />
        <div className="featured-industry-markets" aria-label="Sourcing markets">
          <span className="market-tag-label">Key Markets:</span>
          {industry.sourcingMarkets.map((m) => (
            <span key={m} className="market-tag-pill">{m}</span>
          ))}
        </div>
      </div>

      {/* Right: content */}
      <div className="featured-industry-row__content">
        <div className="featured-industry-header">
          <div className="featured-industry-icon" aria-hidden="true">
            <IndustryIcon name={industry.icon} size={28} />
          </div>
          <div>
            <h2 className="featured-industry-title">{industry.name}</h2>
            <p className="featured-industry-short">{industry.shortDescription}</p>
          </div>
        </div>

        <p className="featured-industry-desc">{industry.description}</p>

        <div className="featured-products-box">
          <h4 className="featured-products-heading">Commonly Sourced Products</h4>
          <div className="featured-products-grid">
            {industry.products.map((product) => (
              <div key={product} className="featured-product-item">
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>{product}</span>
              </div>
            ))}
          </div>
        </div>

        {industry.note && (
          <div className="industry-caution-note" role="note">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>{industry.note}</span>
          </div>
        )}

        <div className="featured-industry-action" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link
            to={`/contact?category=${encodeURIComponent(industry.name)}`}
            className="btn btn--primary"
          >
            Inquire About {industry.name} Sourcing
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to={`/contact?service=Import+Products+from+India+%2F+Export+Supply&category=${encodeURIComponent(industry.name)}`}
            className="btn btn--secondary"
          >
            Request Export Quote
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Additional industry card ──────────────────────────────────
function IndustryCard({ industry }) {
  return (
    <article id={industry.slug} className="industry-card card">
      <div className="industry-card__img-wrap">
        <ImageWithFallback
          src={industry.image}
          alt={`${industry.name} sourcing`}
          className="industry-card__img"
        />
      </div>
      <div className="industry-card__body">
        <div className="industry-card__header">
          <div className="industry-card__icon" aria-hidden="true">
            <IndustryIcon name={industry.icon} size={22} />
          </div>
          <h3 className="industry-card__title">{industry.name}</h3>
        </div>

        <p className="industry-card__desc">{industry.shortDescription}</p>

        <ul className="industry-card__products" aria-label="Sample products">
          {industry.products.slice(0, 4).map((p) => (
            <li key={p} className="industry-card__product-item">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="industry-card__footer">
          <span className="industry-markets-label">
            {industry.sourcingMarkets.join(' · ')}
          </span>
          <Link
            to={`/contact?category=${encodeURIComponent(industry.name)}`}
            className="btn btn--secondary btn--sm"
          >
            Request Sourcing
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function IndustriesPage() {
  const otherIndustries = INDUSTRIES.filter((ind) => !ind.featured);

  return (
    <>
      <SEO
        title="Industries We Source & Export — Textiles, Agriculture, Jewellery & More"
        description="Explore diverse industry sectors with Btechkers, a leading sourcing and export company in India. Partner with verified Indian manufacturers and suppliers to export products from India through our comprehensive B2B product sourcing and export solutions."
        canonicalUrl="https://sourcing.btechkers.com/industries"
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.industries})` }}
        aria-label="Industries overview"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Industries' }]} />
          <span className="page-hero__eyebrow">
            Product Sectors &amp; Sourcing Capabilities
          </span>
          <h1 className="page-hero__title">
            One Collaborative Network.{' '}
            <br className="industries-hero-break" />
            Multiple Manufacturing Sectors.
          </h1>
          <p className="page-hero__subtitle">
            We deliver tailored B2B product sourcing and export solutions across key international industries — from textiles and agricultural commodities to jewellery, food products, industrial goods, and custom OEM manufacturing. International buyers can connect with verified Indian manufacturers and suppliers to export products from India or leverage our global sourcing and procurement network.
          </p>
        </div>
      </section>

      {/* ── Primary Sourcing Sectors (featured 3) ────────────── */}
      <section
        className="section bg-white"
        aria-labelledby="primary-sectors-heading"
      >
        <div className="container">
          <SectionHeading
            id="primary-sectors-heading"
            eyebrow="Primary Sourcing Sectors"
            title="Our Deepest Sourcing Expertise"
            subtitle="These three sectors represent our highest-volume supplier relationships, ground-level auditing capabilities and most established international buyer connections."
          />

          <div className="featured-industries-wrap">
            {FEATURED_INDUSTRIES.map((industry, index) => (
              <FeaturedIndustryRow
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Sourcing Sectors ───────────────────────── */}
      <section
        className="section bg-light"
        aria-labelledby="additional-sectors-heading"
      >
        <div className="container">
          <SectionHeading
            id="additional-sectors-heading"
            eyebrow="Additional Sourcing Sectors"
            title="Broader Procurement Capabilities"
            subtitle="Beyond our three primary sectors, we support sourcing across a wide range of industries through our multi-market partner ecosystem."
            centered
          />

          <div className="additional-industries-grid">
            {otherIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>

          {/* Can't find your industry? callout */}
          <div className="unlisted-box" role="complementary" aria-label="Custom sourcing enquiry">
            <div className="unlisted-box__inner">
              <div className="unlisted-box__icon-wrap" aria-hidden="true">
                <MessageCircle size={36} />
              </div>
              <div className="unlisted-box__text">
                <h3>Can't Find Your Industry?</h3>
                <p>
                  We can explore sourcing assistance and direct export supply from India for a broad range of legally tradable products,
                  subject to applicable regulations in both exporting and importing countries. If your product category is not listed above,
                  tell us what you're looking for — our team will evaluate sourcing and export feasibility.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn btn--primary btn--lg unlisted-box__cta"
              >
                Submit Your Requirement
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────── */}
      <section className="section--sm bg-white" aria-label="Operational disclaimer">
        <div className="container">
          <div className="industry-disclaimer-box">
            <ShieldCheck size={20} className="industry-disclaimer-box__icon" aria-hidden="true" />
            <p>
              <strong>Important Note:</strong> Btechkers is a professional sourcing and export company in India — not an online marketplace or stocking distributor. Products are sourced and exported on order from verified Indian manufacturers and suppliers according to agreed buyer specifications. International buyers can engage us as an Indian export partner or for global sourcing and procurement across relevant product categories, subject to product availability, MOQ, commercial terms, and destination market compliance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
