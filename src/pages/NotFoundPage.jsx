import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Btechkers Global Sourcing"
        description="The page you are looking for does not exist or has been moved."
      />

      <section className="section bg-light text-center" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-eyebrow">Error 404</span>
          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Page Not Found
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
            The page you requested could not be located. It may have been relocated, or the URL address may contain a typographical error.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary btn--lg">
              <Home size={18} /> Return to Homepage
            </Link>
            <Link to="/services" className="btn btn--secondary btn--lg">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Submit Sourcing Requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
