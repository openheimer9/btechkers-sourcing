import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config/site.js';

/**
 * SEO component — manages <head> meta tags via react-helmet-async.
 *
 * Props:
 *   title        — page-level title (without suffix)
 *   description  — page meta description
 *   canonicalUrl — full canonical URL for this page
 *   ogImage      — open-graph image URL (absolute or root-relative)
 *   ogType       — 'website' | 'article' (default: 'website')
 *   article      — article metadata { publishedTime, modifiedTime, author, tags }
 *   breadcrumbs  — array of { name, url } for BreadcrumbList schema
 *   faqs         — array of { question, answer } for FAQPage schema (AEO)
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  article = null,
  breadcrumbs = null,
  faqs = null,
}) {
  const { seo, fullName, domain } = SITE_CONFIG;

  // Resolved values with fallbacks
  const resolvedTitle = title
    ? `${title} ${seo.titleSuffix}`
    : seo.defaultTitle;
  const resolvedDescription = description || seo.defaultDescription;
  const resolvedOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`)
    : `${domain}${seo.ogImage}`;
  const resolvedCanonical = canonicalUrl || domain;

  // ── JSON-LD: Organisation (shown on every page) ───────────────
  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: fullName,
    url: domain,
    logo: `${domain}/images/branding/btechkers-logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  };

  // ── JSON-LD: BlogPosting / Article (AEO & SEO optimized) ──────
  const articleSchema =
    ogType === 'article' && article
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: resolvedDescription,
          image: resolvedOgImage,
          url: resolvedCanonical,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': resolvedCanonical,
          },
          datePublished: article.publishedTime || '',
          dateModified: article.modifiedTime || article.publishedTime || '',
          author: {
            '@type': 'Organization',
            name: article.author || fullName,
            url: domain,
          },
          publisher: {
            '@type': 'Organization',
            name: fullName,
            logo: {
              '@type': 'ImageObject',
              url: `${domain}/images/branding/btechkers-logo.png`,
            },
          },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: [
              '.article-hero__title',
              '.aeo-direct-answer__summary',
              '.article-hero__lead',
            ],
          },
          keywords: Array.isArray(article.tags)
            ? article.tags.join(', ')
            : article.tags || '',
        }
      : null;

  // ── JSON-LD: FAQPage Schema (AEO Engine Snippets) ─────────────
  const faqSchema =
    faqs && Array.isArray(faqs) && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null;

  // ── JSON-LD: BreadcrumbList (when breadcrumbs prop provided) ──
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: domain },
            ...breadcrumbs.map((bc, idx) => ({
              '@type': 'ListItem',
              position: idx + 2,
              name: bc.name,
              item: bc.url ? `${domain}${bc.url}` : resolvedCanonical,
            })),
          ],
        }
      : null;

  return (
    <Helmet>
      {/* ── Primary ───────────────────────────────────────── */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={resolvedCanonical} />

      {/* ── Open Graph ────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:site_name" content={fullName} />

      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && article?.publishedTime && (
        <meta
          property="article:published_time"
          content={article.publishedTime}
        />
      )}
      {ogType === 'article' && article?.modifiedTime && (
        <meta
          property="article:modified_time"
          content={article.modifiedTime}
        />
      )}
      {ogType === 'article' && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {ogType === 'article' &&
        Array.isArray(article?.tags) &&
        article.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* ── Twitter Card ──────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      {seo.twitterHandle && (
        <meta name="twitter:site" content={seo.twitterHandle} />
      )}

      {/* ── Structured Data ───────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(organisationSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
