import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.js';

/**
 * Breadcrumb
 *
 * Renders a navigational breadcrumb trail with automatic "Home" as the
 * first crumb. The last item is treated as the current page (no link).
 * Injects a JSON-LD BreadcrumbList structured data block.
 *
 * Props:
 *   items — array of { label: string, href?: string }
 *           The final item is always the current page and is rendered
 *           without a link regardless of whether href is provided.
 */
export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  // Prepend Home crumb
  const allCrumbs = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  // ── JSON-LD BreadcrumbList ────────────────────────────────────
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allCrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.href
        ? crumb.href.startsWith('http')
          ? crumb.href
          : `${SITE_CONFIG.domain}${crumb.href}`
        : undefined,
    })),
  };

  return (
    <>
      {/* ── Structured Data ──────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Visual Breadcrumb ─────────────────────────────── */}
      <nav
        className="breadcrumb"
        aria-label="Breadcrumb"
      >
        <ol
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {allCrumbs.map((crumb, index) => {
            const isLast = index === allCrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={`${crumb.label}-${index}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {/* Separator (not before the first item) */}
                {!isFirst && (
                  <ChevronRight
                    size={14}
                    className="breadcrumb-separator"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  /* Current page — no link */
                  <span
                    className="breadcrumb-current"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  /* Ancestor crumbs — linked */
                  <Link
                    to={crumb.href}
                    aria-label={isFirst ? `Go to ${crumb.label}` : undefined}
                  >
                    {isFirst ? (
                      <>
                        <Home size={13} aria-hidden="true" style={{ marginRight: '0.25rem', verticalAlign: 'middle' }} />
                        <span className="sr-only">Home</span>
                      </>
                    ) : (
                      crumb.label
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
