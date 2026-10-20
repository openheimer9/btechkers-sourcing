import { Link } from 'react-router-dom';
import { CheckCircle2, Home, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../config/site';
import { getWhatsAppLink } from '../utils/helpers';

export default function ThankYouPage() {
  const whatsappUrl = getWhatsAppLink(
    SITE_CONFIG.contact.whatsapp,
    'Hello Btechkers, I just submitted an inquiry on your website.'
  );

  return (
    <>
      <SEO
        title="Thank You — Inquiry Received | Btechkers Global Sourcing"
        description="Your sourcing requirement has been successfully submitted to Btechkers Global Sourcing."
      />

      <section className="section bg-light text-center" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <CheckCircle2 size={40} />
          </div>

          <span className="section-eyebrow">Transmission Confirmed</span>
          <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Thank You. Your Inquiry Has Been Received.
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto 1.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Our international trade desk has received your specifications. A sourcing specialist will review project feasibility and contact you within 24 business hours.
          </p>

          <div style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(58, 80, 107, 0.1)', marginBottom: '2.5rem', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-dark-text)' }}>
              Next Steps:
            </h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--color-muted-grey)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Our team checks current factory capacities and raw material benchmarks.</li>
              <li>We compile initial feasibility observations and preliminary quotation parameters.</li>
              <li>We reach out via your provided email or WhatsApp to coordinate next steps.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary btn--lg">
              <Home size={18} /> Return to Homepage
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--lg">
              <MessageSquare size={18} /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
