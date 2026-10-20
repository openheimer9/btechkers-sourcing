import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

/**
 * ScrollToTop
 *
 * Dual-purpose component:
 * 1. Scrolls window to (0, 0) whenever the route pathname changes.
 * 2. Renders a fixed "back to top" button that becomes visible after
 *    the user scrolls 400 px down the page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // ── Route-change scroll reset ─────────────────────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // ── Scroll-position visibility listener ───────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case the page loads mid-scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp size={20} aria-hidden="true" />
    </button>
  );
}
