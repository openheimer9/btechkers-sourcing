import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

// Core entry page loaded eagerly for instant LCP
import HomePage from './pages/HomePage';

// Lazy-loaded route chunks for fast initial bundle delivery
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const GlobalNetworkPage = lazy(() => import('./pages/GlobalNetworkPage'));
const SourceFromIndiaPage = lazy(() => import('./pages/SourceFromIndiaPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CollaboratePage = lazy(() => import('./pages/CollaboratePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import './App.css';

function PageFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-slate-blue)',
      }}
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="form-spinner" style={{ width: '32px', height: '32px', borderWidth: '3px', borderColor: 'rgba(58, 80, 107, 0.2)', borderTopColor: 'var(--color-slate-blue)' }} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <ScrollToTop />
          <Header />
          <main id="main-content" className="main-content">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                {/* Core Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/global-network" element={<GlobalNetworkPage />} />
                <Route path="/source-from-india" element={<SourceFromIndiaPage />} />
                {/* Route alias for why-source-from-india */}
                <Route path="/why-source-from-india" element={<Navigate to="/source-from-india" replace />} />

                {/* Resources */}
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />

                {/* Partnership & Inquiries */}
                <Route path="/collaborate" element={<CollaboratePage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Legal & Status */}
                <Route path="/privacy-policy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />

                {/* 404 Fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}
