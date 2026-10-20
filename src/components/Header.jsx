import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ASSETS } from '../config/assets';
import './Header.css';

// ── Navigation structure ─────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Global Network', to: '/global-network' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Why Source from India', to: '/source-from-india' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'Collaborate With Us', to: '/collaborate' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

// ── Helper: is a path active? ────────────────────────────────
function isActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname.startsWith(to);
}

// ── Desktop Dropdown Item ────────────────────────────────────
function DropdownNavItem({ item, pathname }) {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const anyChildActive = item.dropdown.some((c) => isActive(pathname, c.to));

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
      navRef.current?.querySelector('button')?.focus();
    }
  }

  return (
    <li
      className={`nav-item${isOpen ? ' open' : ''}`}
      ref={navRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!navRef.current?.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      role="none"
    >
      <button
        className={`nav-dropdown-trigger${anyChildActive ? ' active' : ''}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {item.label}
        <ChevronDown size={15} className={`nav-chevron${isOpen ? ' rotated' : ''}`} aria-hidden="true" />
      </button>

      <ul className={`nav-dropdown${isOpen ? ' open' : ''}`} role="menu" aria-label={`${item.label} submenu`}>
        {item.dropdown.map((child) => (
          <li key={child.to} role="none">
            <Link
              to={child.to}
              role="menuitem"
              className={`nav-dropdown__link${isActive(pathname, child.to) ? ' active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

// ── Main Header Component ────────────────────────────────────
export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // ── Scroll listener ────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialise
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Body class for sticky offset ──────────────────────────
  useEffect(() => {
    document.body.classList.add('has-sticky-header');
    return () => document.body.classList.remove('has-sticky-header');
  }, []);

  // ── Close mobile menu on route change ─────────────────────
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setResourcesOpen(false);
  }

  // ── Prevent body scroll when menu is open ─────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, []);

  // ── Escape key closes mobile menu ─────────────────────────
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => { if (e.key === 'Escape') closeMobile(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen, closeMobile]);

  const resourcesChildActive = NAV_LINKS
    .find((n) => n.label === 'Resources')
    ?.dropdown.some((c) => isActive(pathname, c.to));

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="header__inner">

            {/* ── Logo ── */}
            <Link to="/" className="header__logo" aria-label={`${SITE_CONFIG.name} — go to homepage`}>
              {!logoError ? (
                <>
                  <img
                    src={ASSETS.logo}
                    alt={`${SITE_CONFIG.name} Global Sourcing & Export logo`}
                    className="header__logo-img"
                    width="42"
                    height="42"
                    onError={() => setLogoError(true)}
                  />
                  <div className="header__brand">
                    <span className="header__logo-text">{SITE_CONFIG.name}</span>
                    <span className="header__logo-sub">Sourcing &amp; Export</span>
                  </div>
                </>
              ) : (
                <div className="header__brand">
                  <span className="header__logo-text">{SITE_CONFIG.name}</span>
                  <span className="header__logo-sub">Sourcing &amp; Export</span>
                </div>
              )}
            </Link>

            {/* ── Desktop navigation ── */}
            <nav className="header__nav" aria-label="Main navigation">
              <ul className="header__nav-list">
                {NAV_LINKS.map((item) => {
                  if (item.dropdown) {
                    return <DropdownNavItem key={item.label} item={item} pathname={pathname} />;
                  }
                  return (
                    <li key={item.to} className="nav-item">
                      <Link
                        to={item.to}
                        className={`nav-link${isActive(pathname, item.to) ? ' active' : ''}`}
                        aria-current={isActive(pathname, item.to) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ── Actions ── */}
            <div className="header__actions">
              <Link
                to="/contact"
                className="btn btn--primary header__cta"
                aria-label="Submit your sourcing requirement"
              >
                Submit Your Requirement
              </Link>

              <button
                className="header__hamburger"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`mobile-menu-overlay${mobileOpen ? ' open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ── */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Header row */}
        <div className="mobile-menu__header">
          <Link
            to="/"
            className="mobile-menu__logo"
            onClick={closeMobile}
            aria-label={`${SITE_CONFIG.name} — go to homepage`}
          >
            {!logoError ? (
              <>
                <img
                  src={ASSETS.logo}
                  alt={`${SITE_CONFIG.name} Global Sourcing & Export logo`}
                  className="mobile-menu__logo-img"
                  width="38"
                  height="38"
                  onError={() => setLogoError(true)}
                />
                <div className="header__brand">
                  <span className="header__logo-text">{SITE_CONFIG.name}</span>
                  <span className="header__logo-sub">Sourcing &amp; Export</span>
                </div>
              </>
            ) : (
              <span className="mobile-menu__logo-text">{SITE_CONFIG.name}</span>
            )}
          </Link>
          <button
            className="mobile-menu__close"
            onClick={closeMobile}
            aria-label="Close navigation menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links body */}
        <div className="mobile-menu__body">
          <ul style={{ listStyle: 'none' }}>
            {NAV_LINKS.map((item) => {
              if (item.dropdown) {
                return (
                  <li key={item.label}>
                    <button
                      className={`mobile-accordion__trigger${resourcesChildActive ? ' active-section' : ''}`}
                      onClick={() => setResourcesOpen((o) => !o)}
                      aria-expanded={resourcesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`mobile-accordion__chevron${resourcesOpen ? ' rotated' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <ul
                      className={`mobile-accordion__panel${resourcesOpen ? ' open' : ''}`}
                      style={{ listStyle: 'none' }}
                    >
                      {item.dropdown.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className={`mobile-accordion__sub-link${isActive(pathname, child.to) ? ' active' : ''}`}
                            onClick={closeMobile}
                            aria-current={isActive(pathname, child.to) ? 'page' : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`mobile-nav__link${isActive(pathname, item.to) ? ' active' : ''}`}
                    onClick={closeMobile}
                    aria-current={isActive(pathname, item.to) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="mobile-menu__footer">
          <Link
            to="/contact"
            className="btn btn--primary"
            onClick={closeMobile}
            aria-label="Submit your sourcing requirement"
          >
            Submit Your Requirement
          </Link>
        </div>
      </nav>
    </>
  );
}
