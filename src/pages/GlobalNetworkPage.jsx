import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { REGIONS } from '../data/regions';
import { ASSETS } from '../config/assets';
import './GlobalNetworkPage.css';

export default function GlobalNetworkPage() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <>
      <SEO
        title="Global Sourcing Network — India, Indonesia, Africa, Europe & China"
        description="Btechkers operates through an international sourcing network. Ground-level factory visits in India and Indonesia, collaborative regional partners in Africa, the UK and EU, and remote sourcing in China."
        canonicalUrl="https://sourcing.btechkers.com/global-network"
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.globalNetwork})` }}
        aria-label="Global Network Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Global Network' }]} />
          <span className="page-hero__eyebrow">International Footprint</span>
          <h1 className="page-hero__title">
            Global Connections, Supported by Regional Expertise.
          </h1>
          <p className="page-hero__subtitle">
            We bridge international buyers with specialized manufacturing markets through a collaborative partner architecture. From on-the-ground factory inspections in Asia to regional trade desks in Africa and Europe.
          </p>
        </div>
      </section>

      {/* ── Interactive Map Section ──────────────────────────── */}
      <section className="section bg-navy text-white" aria-labelledby="interactive-map-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Interactive Geographic Coverage"
            title="Global Sourcing Corridors"
            subtitle="Click on any highlighted sourcing corridor to explore regional capabilities, on-ground verification scope and specialized export sectors."
            centered
            dark
          />

          {/* Quick Region Selector (accessible on all screen sizes, collapses SVG map on mobile) */}
          <div className="network-quick-selector" role="tablist" aria-label="Select Sourcing Corridor">
            {REGIONS.map((reg) => (
              <button
                key={reg.id}
                type="button"
                role="tab"
                aria-selected={activeRegion.id === reg.id}
                className={`network-quick-chip ${activeRegion.id === reg.id ? 'active' : ''}`}
                onClick={() => setActiveRegion(reg)}
              >
                <span className="quick-chip-flag">{reg.flag}</span>
                <span>{reg.name}</span>
              </button>
            ))}
          </div>


        </div>
      </section>

      {/* ── Detailed Region Cards (All 6 Markets) ────────────── */}
      <section className="section bg-light" aria-labelledby="detailed-markets-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Market Capabilities"
            title="Comprehensive Regional Sourcing Profiles"
            subtitle="Understand our exact ground-level capabilities, verification access and sector specialties across each market."
          />

          <div className="region-profiles-grid">
            {REGIONS.map((reg) => (
              <div key={reg.id} className="region-profile-box card">
                <div className="region-profile-box__media">
                  <ImageWithFallback
                    src={ASSETS.countries[reg.id]}
                    alt={`${reg.name} sourcing`}
                    className="region-profile-box__img"
                  />
                  <span className="region-profile-flag-badge">{reg.flag}</span>
                </div>
                <div className="region-profile-box__content">
                  <div className="region-profile-box__top">
                    <div>
                      <h3 className="region-profile-title">{reg.name}</h3>
                      <span className="region-profile-sub">{reg.tagline}</span>
                    </div>
                  </div>

                  <div className="region-profile-caps">
                    {reg.capabilityLabels.map((cap) => (
                      <span key={cap} className="region-cap-tag">
                        {cap}
                      </span>
                    ))}
                  </div>

                  <p className="region-profile-text">{reg.description}</p>

                  <div className="region-profile-list">
                    <strong>Specialized Sourcing Sectors:</strong>
                    <ul>
                      {reg.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {reg.base && (
                    <div className="region-profile-base">
                      <MapPin size={14} />
                      <span>{reg.base}</span>
                    </div>
                  )}

                  <Link
                    to={`/contact?country=${encodeURIComponent(reg.name)}`}
                    className="btn btn--secondary btn--sm"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }}
                  >
                    Inquire About {reg.name} Sourcing <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Boundaries Disclaimer */}
          <div className="network-disclaimer-card">
            <ShieldCheck size={28} className="network-disclaimer-icon" />
            <div>
              <h4>Ethical Representation &amp; Operational Boundaries</h4>
              <p>
                To maintain complete business honesty, Btechkers states our capabilities precisely:
                We conduct physical factory audits through our on-ground teams in India and Indonesia. In Africa, the UK and the European Union, operations are executed collaboratively through established regional trade partners. In China, procurement is coordinated remotely via long-standing manufacturing relationships. We do not claim permanent corporate offices or resident inspection teams where they do not physically exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expand to Additional Markets CTA ──────────────────── */}
      <section className="section bg-white text-center">
        <div className="container">
          <div className="network-cta-box">
            <h2 className="section-title">Need to Source From Another Market?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Our international network extends through cross-border trade relationships. If your target product lies outside these primary markets, share your specifications and we will evaluate feasibility.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Submit Sourcing Requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
