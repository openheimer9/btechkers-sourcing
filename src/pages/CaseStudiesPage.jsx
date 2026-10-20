import { Link } from 'react-router-dom';
import { Lock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { ASSETS } from '../config/assets';
import './CaseStudiesPage.css';

export default function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Sourcing Case Studies — Fabric Procurement for European Brands"
        description="Review documented sourcing case studies from Btechkers: custom technical fabric procurement for a European sportswear label and delicate knit sourcing for a European innerwear brand."
        canonicalUrl="https://sourcing.btechkers.com/case-studies"
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.caseStudies})` }}
        aria-label="Case Studies Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Case Studies' }]} />
          <span className="page-hero__eyebrow">Proven Sourcing Execution</span>
          <h1 className="page-hero__title">
            Documented Sourcing Projects: Real International Engagements
          </h1>
          <p className="page-hero__subtitle">
            To preserve strict client non-disclosure agreements and commercial confidentiality, client identities and proprietary formulations are anonymized. The case studies below represent confirmed sourcing engagements managed through our network.
          </p>
        </div>
      </section>

      {/* ── Case Studies Detail List ─────────────────────────── */}
      <section className="section bg-white" aria-labelledby="case-studies-heading">
        <div className="container">
          <div className="case-study-full-row">
            <div className="case-study-full-row__media">
              <ImageWithFallback
                src={ASSETS.caseStudies.sportswear}
                alt="Custom technical fabric sourcing for sportswear brand"
                className="case-study-full-img"
              />
              <div className="case-study-tag-bar">
                <span className="case-study-badge">Textiles &amp; Technical Apparel</span>
                <span className="case-study-privacy-pill">
                  <Lock size={12} /> Privacy Protected
                </span>
              </div>
            </div>

            <div className="case-study-full-row__content">
              <div className="case-study-meta">
                <span>Sector: Activewear &amp; Functional Textiles</span>
                <span>•</span>
                <span>Client: European Sportswear Brand</span>
              </div>
              <h2 className="case-study-title">
                Custom Fabric Sourcing for a European Sportswear Brand
              </h2>

              <div className="case-study-breakdown">
                <div className="case-study-block">
                  <h4>Client Requirement</h4>
                  <p>
                    A European sportswear label required a high-performance blended fabric meeting stringent stretch recovery, moisture management and durability specifications. The client sought direct factory access in India to establish a stable, repeatable supply line while circumventing multi-tiered agent markups.
                  </p>
                </div>

                <div className="case-study-block">
                  <h4>The Sourcing Challenge</h4>
                  <p>
                    Standard market catalogues offered generic polyester-spandex blends that failed the client's abrasion resistance and colour-fastness requirements. Furthermore, initial remote sampling with unverified mills produced inconsistent fabric density (GSM) and dye lot discrepancies.
                  </p>
                </div>

                <div className="case-study-block">
                  <h4>Btechkers' Approach &amp; Solution</h4>
                  <p>
                    Our on-ground team conducted localized research within Gujarat and Maharashtra's specialized synthetic knitting mills:
                  </p>
                  <ul>
                    <li>Screened mills with certified high-gauge circular knitting and OEKO-TEX certified dyeing facilities.</li>
                    <li>Physically visited candidate production units in western India to audit machinery, quality testing labs and batch consistency.</li>
                    <li>Facilitated direct technical dialogue between the client's garment technologists and the mill's dyeing masters to develop custom lab dips.</li>
                  </ul>
                </div>

                <div className="case-study-block">
                  <h4>Project Outcome</h4>
                  <p>
                    The client successfully approved custom production strike-offs matching all required technical tolerances. Btechkers coordinated initial sample yardage followed by production order follow-up and pre-shipment documentation support.
                  </p>
                </div>
              </div>

              <div className="case-study-placeholder-note">
                <small>
                  <em>Note: Specific brand names, proprietary fabric blends, delivery destinations and financial figures are omitted in compliance with client Non-Disclosure Agreements (NDAs).</em>
                </small>
              </div>
            </div>
          </div>

          <hr className="case-divider" />

          {/* Case Study 2 */}
          <div className="case-study-full-row">
            <div className="case-study-full-row__media">
              <ImageWithFallback
                src={ASSETS.caseStudies.innerwear}
                alt="Fabric sourcing for European innerwear brand"
                className="case-study-full-img"
              />
              <div className="case-study-tag-bar">
                <span className="case-study-badge">Intimate Apparel &amp; Knits</span>
                <span className="case-study-privacy-pill">
                  <Lock size={12} /> Privacy Protected
                </span>
              </div>
            </div>

            <div className="case-study-full-row__content">
              <div className="case-study-meta">
                <span>Sector: Intimate Apparel &amp; Premium Knits</span>
                <span>•</span>
                <span>Client: European Innerwear Brand</span>
              </div>
              <h2 className="case-study-title">
                Fabric Sourcing for a European Innerwear Brand
              </h2>

              <div className="case-study-breakdown">
                <div className="case-study-block">
                  <h4>Client Requirement</h4>
                  <p>
                    A European brand specializing in premium intimate apparel required high-grade modal, micro-modal and combed cotton blended knits offering ultra-soft skin feel, high breathability and reliable shape retention across repeated commercial washing cycles.
                  </p>
                </div>

                <div className="case-study-block">
                  <h4>The Sourcing Challenge</h4>
                  <p>
                    Innerwear fabrics demand exceptionally low defect tolerances, zero chemical irritant residue, and micro-precision yarn spinning. The buyer required suppliers capable of providing rigorous OEKO-TEX Standard 100 certification and batch-level testing validation.
                  </p>
                </div>

                <div className="case-study-block">
                  <h4>Btechkers' Approach &amp; Solution</h4>
                  <p>
                    Deploying our sourcing network across western and southern Indian knitwear corridors:
                  </p>
                  <ul>
                    <li>Identified three qualified vertical spinning and knitting operations with established European export credentials.</li>
                    <li>Obtained and cross-compared laboratory test reports covering pilling resistance, tensile strength and dimensional stability.</li>
                    <li>Arranged structured sample couriers with comprehensive technical data sheets directly to the client's design headquarters.</li>
                  </ul>
                </div>

                <div className="case-study-block">
                  <h4>Project Outcome</h4>
                  <p>
                    The buyer selected a preferred production partner through our network and established direct commercial purchasing terms, achieving the desired softness and international certification requirements.
                  </p>
                </div>
              </div>

              <div className="case-study-placeholder-note">
                <small>
                  <em>Note: Commercial terms, factory identities and specific client data are held strictly confidential in accordance with procurement ethics.</em>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Verification & Confidentiality Policy ─────── */}
      <section className="section bg-light">
        <div className="container">
          <div className="confidentiality-card">
            <ShieldCheck size={32} className="confidentiality-icon" />
            <div>
              <h3>Our Commitment to Commercial Privacy</h3>
              <p>
                Btechkers strictly honors non-disclosure agreements with all clients. We do not publish proprietary buyer names, order volumes, pricing details or exclusive supplier arrangements as public marketing promotional material without formal written authorization. When you source through Btechkers, your supply chain strategies remain strictly protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies CTA ─────────────────────────────────── */}
      <section className="section bg-white text-center">
        <div className="container">
          <div className="case-cta-box">
            <h2 className="section-title">Have a Similar Sourcing Challenge?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Let our team evaluate your technical specifications and identify vetted manufacturers capable of meeting your exact standards.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Submit Your Requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
