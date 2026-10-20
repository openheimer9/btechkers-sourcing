import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shirt,
  Wheat,
  Gem,
  Settings,
  ShieldCheck,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MapPin,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { ASSETS } from '../config/assets';
import {
  TRADE_AGREEMENTS,
  LAST_REVIEWED,
  AGREEMENT_STATUS_LABELS,
  AGREEMENT_STATUS_COLORS,
} from '../data/tradeAgreements';
import './SourceFromIndiaPage.css';

export default function SourceFromIndiaPage() {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAgreements = statusFilter === 'all'
    ? TRADE_AGREEMENTS
    : TRADE_AGREEMENTS.filter((item) => item.status === statusFilter);

  return (
    <>
      <SEO
        title="Why Source & Export From India — Manufacturing Diversity & Trade Agreements"
        description="Learn why international businesses choose Btechkers as their Indian export partner. As a premier sourcing and export company in India, we connect you with verified Indian manufacturers and suppliers to safely export products from India."
        canonicalUrl="https://sourcing.btechkers.com/source-from-india"
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.india})` }}
        aria-label="Why Source & Export From India Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Why Source & Export From India' }]} />
          <span className="page-hero__eyebrow">Strategic Manufacturing &amp; Export Hub</span>
          <h1 className="page-hero__title">
            Why Source &amp; Export From India? Manufacturing Diversity &amp; Direct Trade Supply
          </h1>
          <p className="page-hero__subtitle">
            As an established sourcing and export company in India, Btechkers operates as your trusted Indian export partner. We deliver complete B2B product sourcing and export solutions across textiles, precious materials, agro-commodities, and engineering goods — connecting international buyers with verified Indian manufacturers and suppliers through on-ground global sourcing and procurement representation or direct export supply.
          </p>
        </div>
      </section>

      {/* ── Section 1: Strategic Manufacturing Ecosystem ─────── */}
      <section className="section bg-white" aria-labelledby="ecosystem-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Industrial Scale"
            title="India's Multi-Sector Manufacturing Ecosystem"
            subtitle="India has evolved beyond low-complexity assembly into a vertically integrated manufacturing powerhouse with skilled technical workforces and mature raw-material supply chains."
          />

          <div className="india-sectors-grid">
            {/* Sector 1: Textiles */}
            <div className="india-sector-card card">
              <div className="india-sector-card__media">
                <ImageWithFallback
                  src={ASSETS.industries.textiles}
                  alt="Textiles & Apparel Manufacturing in India"
                  className="india-sector-card__img"
                />
                <div className="india-sector-card__icon">
                  <Shirt size={22} />
                </div>
              </div>
              <div className="india-sector-card__body">
                <h3>Textiles &amp; Apparel Manufacturing</h3>
                <p>
                  India operates a complete vertical textile chain from raw cotton, synthetic polymer spinning and yarn preparation to automated weaving, specialized processing and ready-to-wear garment confection.
                </p>
                <ul className="india-sector-features">
                  <li>Major clusters: Surat (Gujarat), Tiruppur &amp; Coimbatore (Tamil Nadu), Bengaluru, Panipat.</li>
                  <li>Comprehensive capacity across woven, knitted, activewear functional fabrics and home textiles.</li>
                  <li>Established compliance with international certification standards (OEKO-TEX, GOTS, ISO).</li>
                </ul>
              </div>
            </div>

            {/* Sector 2: Gems & Jewellery */}
            <div className="india-sector-card card">
              <div className="india-sector-card__media">
                <ImageWithFallback
                  src={ASSETS.industries.jewellery}
                  alt="Gems, Diamonds & Jewellery Sourcing in Surat, India"
                  className="india-sector-card__img"
                />
                <div className="india-sector-card__icon">
                  <Gem size={22} />
                </div>
              </div>
              <div className="india-sector-card__body">
                <h3>Gems, Diamonds &amp; Jewellery</h3>
                <p>
                  India processes a substantial majority of the world's cut and polished diamonds and holds significant global leadership in precision lab-grown diamond synthesis (CVD/HPHT) and finished gold jewellery casting.
                </p>
                <ul className="india-sector-features">
                  <li>Major clusters: Surat &amp; Ahmedabad (Gujarat), Mumbai (SEEPZ), Jaipur (Rajasthan).</li>
                  <li>World-renowned cutting, polishing, custom CAD design and high-purity precious metal hallmarking.</li>
                  <li>Direct access to certified natural and lab-grown stones with international grading reports.</li>
                </ul>
              </div>
            </div>

            {/* Sector 3: Agriculture */}
            <div className="india-sector-card card">
              <div className="india-sector-card__media">
                <ImageWithFallback
                  src={ASSETS.industries.agriculture}
                  alt="Agriculture & Agro-Commodities Sourcing from India"
                  className="india-sector-card__img"
                />
                <div className="india-sector-card__icon">
                  <Wheat size={22} />
                </div>
              </div>
              <div className="india-sector-card__body">
                <h3>Agriculture &amp; Agro-Commodities</h3>
                <p>
                  Rich agro-climatic diversity positions India as a premier international producer of spices, rice, oilseeds, tea, coffee, pulses and processed food commodities.
                </p>
                <ul className="india-sector-features">
                  <li>Leading producer of diverse spices, basmati &amp; non-basmati rice, sesame and groundnuts.</li>
                  <li>Modern food-processing, sorting and packing infrastructure for containerized bulk export.</li>
                  <li>Rigorous export documentation compliance with APEDA, Spices Board and global phytosanitary standards.</li>
                </ul>
              </div>
            </div>

            {/* Sector 4: Engineering */}
            <div className="india-sector-card card">
              <div className="india-sector-card__media">
                <ImageWithFallback
                  src={ASSETS.industries.metals}
                  alt="Engineering, Metals & Industrial Goods Manufacturing in India"
                  className="india-sector-card__img"
                />
                <div className="india-sector-card__icon">
                  <Settings size={22} />
                </div>
              </div>
              <div className="india-sector-card__body">
                <h3>Engineering, Metals &amp; Industrial Goods</h3>
                <p>
                  From precision automotive components and high-grade metal castings to electrical assemblies, valves, fasteners and structural fabrications.
                </p>
                <ul className="india-sector-features">
                  <li>Significant engineering hubs across Gujarat, Maharashtra, Tamil Nadu and Haryana.</li>
                  <li>Competence in precision CNC machining, custom OEM forging, casting and tooling.</li>
                  <li>Strong engineering research base with high technical English language fluency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Surat & Gujarat Advantage ─────────────── */}
      <section className="section bg-light" aria-labelledby="gujarat-heading">
        <div className="container">
          <div className="gujarat-box">
            <div className="gujarat-box__content">
              <span className="section-eyebrow">Strategic Regional Base</span>
              <h2 id="gujarat-heading">The Surat &amp; Gujarat Sourcing Advantage</h2>
              <p>
                Gujarat accounts for a substantial share of India's maritime exports and industrial output. Operating from our primary base in Surat gives Btechkers immediate physical proximity to critical production corridors:
              </p>
              <div className="gujarat-grid">
                <div className="gujarat-point">
                  <MapPin size={18} className="text-slate" />
                  <div>
                    <strong>Surat Diamond Bourse &amp; Cutting Hub:</strong> Direct factory contact with primary diamond cutters and jewellery manufacturers without intermediaries.
                  </div>
                </div>
                <div className="gujarat-point">
                  <MapPin size={18} className="text-slate" />
                  <div>
                    <strong>Surat Textile Industrial Zones:</strong> Direct access to Pandesara, Sachin and surrounding GIDC industrial clusters producing millions of metres of textiles daily.
                  </div>
                </div>
                <div className="gujarat-point">
                  <MapPin size={18} className="text-slate" />
                  <div>
                    <strong>Maritime Freight Connectivity:</strong> Immediate access to Hazira Port and overnight logistics transit to JNPT (Mumbai), streamlining ocean freight documentation and customs clearance.
                  </div>
                </div>
                <div className="gujarat-point">
                  <MapPin size={18} className="text-slate" />
                  <div>
                    <strong>Gujarat Industrial Corridor:</strong> Seamless rail and road access to chemical manufacturing in Ankleshwar, heavy engineering in Vadodara and ceramics in Morbi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Ground-Level Verification ─────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="verification-split">
            <div className="verification-text">
              <span className="section-eyebrow">Risk Mitigation</span>
              <h2>Supplier Selection &amp; Physical Factory Audits in India</h2>
              <p>
                While India offers immense manufacturing capabilities, partnering with the right supplier is paramount. Commercial directories and B2B portals often list intermediaries, commission agents or operations that misrepresent their capacity.
              </p>
              <p>
                Because our team is physically located on the ground in western India, we provide genuine verification that remote buyers cannot perform:
              </p>
              <ul className="verification-checklist">
                <li><CheckCircle2 size={16} /> Physical on-site visits to inspect machinery, clean rooms and assembly lines</li>
                <li><CheckCircle2 size={16} /> Validation of GST registration, Importer-Exporter Code (IEC) and factory licences</li>
                <li><CheckCircle2 size={16} /> Direct evaluation of production schedules, labour standards and material storage</li>
                <li><CheckCircle2 size={16} /> Collection of initial production samples directly from the factory floor</li>
              </ul>
              <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                Request On-Ground Factory Inspection
              </Link>
            </div>

            <div className="verification-badge-panel">
              <div className="v-stat-card">
                <ShieldCheck size={36} className="v-stat-icon" />
                <div className="v-stat-title">Direct On-Ground Audits</div>
                <div className="v-stat-desc">
                  Physical factory visits in India and Indonesia by our team to confirm operational reality before you commit capital.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: DEDICATED TRADE AGREEMENTS SECTION ────── */}
      <section id="trade-agreements" className="section bg-navy text-white" aria-labelledby="trade-agreements-heading">
        <div className="container">
          <div className="trade-agreements-header">
            <div>
              <span className="section-eyebrow text-accent">International Trade Frameworks</span>
              <h2 id="trade-agreements-heading" className="section-title section-title--white">
                India's International Trade Agreements
              </h2>
              <p className="section-subtitle section-subtitle--white">
                India actively negotiates bilateral and multilateral trade pacts (FTAs, CEPAs, CECAs, TEPAs) to facilitate duty-advantaged trade corridors. Review verified agreement statuses below.
              </p>
            </div>
            <div className="trade-review-badge">
              <Calendar size={16} />
              <span>Last reviewed: {LAST_REVIEWED}</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="agreement-filter-bar">
            <button
              className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              All Agreements ({TRADE_AGREEMENTS.length})
            </button>
            <button
              className={`filter-btn ${statusFilter === 'in-force' ? 'active' : ''}`}
              onClick={() => setStatusFilter('in-force')}
            >
              Currently In Force ({TRADE_AGREEMENTS.filter(a => a.status === 'in-force').length})
            </button>
            <button
              className={`filter-btn ${statusFilter === 'signed' ? 'active' : ''}`}
              onClick={() => setStatusFilter('signed')}
            >
              Signed / Awaiting Implementation ({TRADE_AGREEMENTS.filter(a => a.status === 'signed').length})
            </button>
            <button
              className={`filter-btn ${statusFilter === 'negotiating' ? 'active' : ''}`}
              onClick={() => setStatusFilter('negotiating')}
            >
              Under Active Negotiation ({TRADE_AGREEMENTS.filter(a => a.status === 'negotiating').length})
            </button>
          </div>

          {/* Agreement Cards Grid */}
          <div className="agreements-cards-grid">
            {filteredAgreements.map((agreement) => {
              const statusStyle = AGREEMENT_STATUS_COLORS[agreement.status] || {};
              const statusLabel = AGREEMENT_STATUS_LABELS[agreement.status];

              return (
                <div key={agreement.id} className="agreement-card">
                  <div className="agreement-card__top">
                    <span className="agreement-card__flag">{agreement.flag}</span>
                    <div className="agreement-card__title-box">
                      <h3 className="agreement-card__country">{agreement.country}</h3>
                      <span className="agreement-card__type-tag">{agreement.agreementType}</span>
                    </div>
                  </div>

                  <h4 className="agreement-card__name">{agreement.agreementName}</h4>

                  <div className="agreement-card__status-wrap">
                    <span
                      className="agreement-status-pill"
                      style={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.text,
                        borderColor: statusStyle.border,
                      }}
                    >
                      {statusLabel}
                      {agreement.inForceDate && ` (${agreement.inForceDate})`}
                      {agreement.signedDate && ` (${agreement.signedDate})`}
                    </span>
                  </div>

                  <p className="agreement-card__desc">{agreement.shortDescription}</p>

                  <div className="agreement-card__relevance">
                    <strong>Sourcing Relevance:</strong> {agreement.sourcingRelevance}
                  </div>

                  {agreement.importantNote && (
                    <div className="agreement-card__warning">
                      <AlertTriangle size={14} />
                      <span>{agreement.importantNote}</span>
                    </div>
                  )}

                  <div className="agreement-card__footer">
                    <a
                      href={agreement.officialSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="agreement-card__official-link"
                    >
                      Official Government Source <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational Disclaimer */}
          <div className="trade-disclaimer-card">
            <AlertTriangle size={24} className="trade-disclaimer-icon" />
            <div>
              <h4>Important Commercial &amp; Tariff Advisory</h4>
              <p>
                Preferential tariff access and concessional import duty benefits are strictly product-specific. Actual duties assessed by customs authorities depend upon exact 6-to-8 digit Harmonized System (HS) classifications, compliance with Rules of Origin (ROO) criteria, verified Certificates of Origin (COO), and formal operational implementation dates. Btechkers does not guarantee zero duties or unconditional tariff savings. Buyers must verify specific duty schedules with destination customs authorities or licensed customs brokers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ─────────────────────────────── */}
      <section className="section bg-white text-center">
        <div className="container">
          <div className="india-cta-box">
            <h2 className="section-title">Discover Sourcing &amp; Export Opportunities in India</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Connect directly with verified Indian manufacturers or request direct export supply with the security and local coordination of our team in Surat.
            </p>
            <div className="india-cta-actions">
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
