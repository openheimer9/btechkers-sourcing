import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { SITE_CONFIG } from '../config/site';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service & Commercial Disclaimer"
        description="Terms of service, procurement scope limitations, and operational disclaimers for Btechkers Global Sourcing & Procurement."
        canonicalUrl="https://sourcing.btechkers.com/terms"
      />

      <section className="page-hero" aria-label="Terms Header">
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Terms & Disclaimer' }]} />
          <span className="page-hero__eyebrow">Commercial Terms &amp; Scope</span>
          <h1 className="page-hero__title">Terms &amp; Disclaimer</h1>
          <p className="page-hero__subtitle">
            Operational boundaries, procurement advisory scope, and legal disclaimers governing the use of Btechkers sourcing services and website.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="prose">
            <p>
              <em>Last updated: October 2024. These terms constitute an operational draft and general business advisory subject to customized project contracts.</em>
            </p>

            <h2>1. Nature of Agency Services</h2>
            <p>
              Btechkers operates as an independent international B2B sourcing, procurement, and export solutions company. We provide commercial coordination, manufacturer identification, preliminary supplier background verification, sample facilitation, procurement assistance, and direct export supply from India. Btechkers is neither a manufacturing factory owner nor operates its own freight shipping fleet.
            </p>

            <h2>2. Customized Scope &amp; Sourcing Feasibility</h2>
            <p>
              All sourcing and export projects are evaluated on an individual, case-by-case basis. Sourcing and export feasibility depend upon market availability, raw material cycles, buyer order quantities, technical tolerances, required lead times, and current geopolitical trade conditions. Product availability, MOQ, commercial terms, and export feasibility depend on the specific requirement. An initial requirement submission does not constitute a binding contract until formal terms of engagement are mutually agreed upon in writing.
            </p>

            <h2>3. Engagement Models: Sourcing Representation &amp; Direct Export Supply</h2>
            <p>
              Depending on the project scope and client requirements, Btechkers operates through two complementary engagement structures:
            </p>
            <ul>
              <li>
                <strong>Global Sourcing &amp; Procurement Representation:</strong> Btechkers acts as the buyer's on-ground sourcing representative. Buyers enter into commercial manufacturing contracts directly with selected third-party manufacturers, while Btechkers coordinates supplier verification, quotation benchmarking, sampling, and inspections.
              </li>
              <li>
                <strong>India Export Solutions &amp; Product Supply:</strong> Btechkers coordinates procurement from Indian manufacturers and producers, manages OEM/ODM customization, quality inspections, and export documentation, and supplies/exports products directly to international buyers under agreed commercial terms.
              </li>
            </ul>
            <p>
              While Btechkers conducts supplier verification and quality coordination to mitigate risks, all international transactions remain subject to commercial contracts, product specifications, and destination import regulations.
            </p>

            <h2>4. Pricing, Quotations &amp; Minimum Order Quantities</h2>
            <p>
              Price quotes, MOQ requirements, production lead times, and shipping terms (Incoterms) presented during preliminary discussions are provided by independent manufacturers and are subject to market fluctuations (e.g. currency variations, commodity raw material shifts, and fuel surcharges). Btechkers does not guarantee fixed lowest market prices.
            </p>

            <h2>5. Legal Compliance &amp; Sanctions</h2>
            <p>
              Btechkers conducts all sourcing operations in strict adherence to applicable domestic and international laws, export licensing controls, trade embargoes, and international sanctions. We will not explore or facilitate sourcing requests for goods prohibited by law, uncertified regulated pharmaceuticals, hazardous contraband, or products intended for illegal trade corridors.
            </p>

            <h2>6. Customs, Logistics &amp; Regulatory Services Disclaimer</h2>
            <p>
              Btechkers is not a licensed customs brokerage firm, legal advisory firm, or freight carrier. Freight forwarding, customs entry filings, import duty assessments, and phytosanitary clearance must be executed by licensed third-party forwarders, customs brokers, and regulatory specialists in destination jurisdictions. Any customs guidance or trade agreement overviews published on this website are for general informational purposes only and do not constitute formal legal or tax counsel.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Btechkers and its collaborative partners shall not be held liable for indirect, incidental, or consequential damages resulting from manufacturer production delays, shipping line transit disruptions, customs entry holds, raw material shortages, or force majeure events outside our reasonable operational control.
            </p>

            <h2>8. Inquiries &amp; Legal Clarifications</h2>
            <p>
              For any questions regarding our operational scope or formal engagement agreements, please contact:
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
