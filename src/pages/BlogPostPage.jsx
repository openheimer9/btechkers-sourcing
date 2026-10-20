import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ListCollapse,
  Share2,
  Copy,
  Check,
  ChevronDown,
  ShieldCheck,
  Building2,
  HelpCircle,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ImageWithFallback from '../components/ImageWithFallback';
import { BLOG_POSTS } from '../data/blogPosts';
import { BLOG_AEO_DATA } from '../data/blogAeoData';
import { formatDate } from '../utils/helpers';
import './BlogPostPage.css';

// Slugify helper to create URL-safe anchor IDs for headings
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Markdown-like text formatter to turn ## and - and bold into JSX with anchor IDs
function FormattedContent({ content }) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let inTable = false;
  let tableRows = [];

  const flushList = (key) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${key}`} className="article-list">
          {currentList.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushTable = (key) => {
    if (tableRows.length > 0) {
      const [header, ...bodyRows] = tableRows;
      elements.push(
        <div key={`table-${key}`} className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                {header.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Table row detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (trimmed.includes('---')) {
        return;
      }
      flushList(index);
      const cols = trimmed
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());
      tableRows.push(cols);
      inTable = true;
      return;
    } else if (inTable) {
      flushTable(index);
    }

    // Unordered list
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      const rawText = trimmed.substring(2);
      const htmlText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      currentList.push(htmlText);
      return;
    } else {
      flushList(index);
    }

    if (!trimmed) {
      return;
    }

    // Heading 2 with anchor ID
    if (trimmed.startsWith('## ')) {
      const headingText = trimmed.substring(3);
      const anchorId = slugifyHeading(headingText);
      elements.push(
        <h2 key={index} id={anchorId} className="article-h2">
          {headingText}
        </h2>
      );
      return;
    }

    // Heading 3 with anchor ID
    if (trimmed.startsWith('### ')) {
      const headingText = trimmed.substring(4);
      const anchorId = slugifyHeading(headingText);
      elements.push(
        <h3 key={index} id={anchorId} className="article-h3">
          {headingText}
        </h3>
      );
      return;
    }

    // Horizontal rule
    if (trimmed === '---') {
      elements.push(<hr key={index} className="article-hr" />);
      return;
    }

    // Standard paragraph with inline bolding
    const formattedParagraph = trimmed.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );

    elements.push(
      <p
        key={index}
        className="article-p"
        dangerouslySetInnerHTML={{ __html: formattedParagraph }}
      />
    );
  });

  flushList('final');
  flushTable('final');

  return <div className="article-body prose">{elements}</div>;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const aeo = post ? BLOG_AEO_DATA[post.slug] || null : null;

  // Reading progress state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ open by default for AEO crawlers

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract TOC headings dynamically from post content
  const tableOfContents = useMemo(() => {
    if (!post || !post.content) return [];
    const lines = post.content.split('\n');
    const toc = [];
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        const text = trimmed.substring(3);
        toc.push({
          text,
          id: slugifyHeading(text),
        });
      }
    });
    return toc;
  }, [post]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post) {
    return (
      <div
        className="section bg-light text-center"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container">
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0 2rem' }}>
            The requested sourcing guide could not be located or may have been updated.
          </p>
          <Link to="/blog" className="btn btn--primary">
            <ArrowLeft size={16} /> Return to Knowledge Base
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (same category or others excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id)
    .sort((a, _b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  return (
    <>
      {/* ── Scroll Reading Progress Bar ────────────────────────── */}
      <div
        className="article-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <SEO
        title={post.seoTitle || post.title}
        description={post.metaDescription || post.summary}
        canonicalUrl={post.canonicalUrl}
        ogImage={post.featuredImage}
        ogType="article"
        article={{
          publishedTime: post.publishedDate,
          modifiedTime: post.updatedDate || post.publishedDate,
          author: post.author,
          tags: [post.category, 'International Sourcing', 'India Manufacturing', 'Btechkers'],
        }}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: post.title },
        ]}
        faqs={aeo?.faqs || null}
      />

      {/* ── Article Header ────────────────────────────────────── */}
      <header
        className="article-hero article-hero--has-bg"
        style={{ '--hero-bg': `url(${post.featuredImage})` }}
        aria-label="Article header"
      >
        <div className="container article-hero__container">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="article-hero__cat-badge">{post.category}</div>

          <h1 className="article-hero__title">{post.title}</h1>

          <p className="article-hero__lead">{post.summary}</p>

          <div className="article-hero__meta">
            <span className="article-meta-item">
              <User size={15} /> {post.author}
            </span>
            <span aria-hidden="true">•</span>
            <span className="article-meta-item">
              <Calendar size={15} /> {formatDate(post.publishedDate)}
            </span>
            <span aria-hidden="true">•</span>
            <span className="article-meta-item">
              <Clock size={15} /> {post.readingTime}
            </span>
            <span aria-hidden="true">•</span>
            <span className="article-meta-item article-meta-item--badge">
              <ShieldCheck size={14} /> Fact-Checked
            </span>
          </div>
        </div>
      </header>

      {/* ── Article Content Layout ───────────────────────────── */}
      <section className="section bg-white article-section">
        <div className="container">
          <div className="article-layout">

            {/* Main Article Body */}
            <main className="article-main" id="article-main">
              {post.featuredImage && (
                <div className="article-featured-img-wrap">
                  <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.title}
                    className="article-featured-img"
                  />
                </div>
              )}

              {/* ── AEO DIRECT ANSWER / AI OVERVIEW CALLOUT BOX ── */}
              {aeo && aeo.directAnswer && (
                <section
                  className="aeo-direct-answer"
                  aria-label="Direct Sourcing Answer &amp; Key Takeaways"
                >
                  <div className="aeo-direct-answer__header">
                    <div className="aeo-direct-answer__badge">
                      <Sparkles size={15} />
                      <span>Direct Answer / Sourcing Summary</span>
                    </div>
                    <span className="aeo-direct-answer__verified">
                      <CheckCircle2 size={14} /> On-Ground Reviewed
                    </span>
                  </div>

                  <p className="aeo-direct-answer__summary">
                    {aeo.directAnswer}
                  </p>

                  {/* Key Takeaways */}
                  {aeo.keyTakeaways && aeo.keyTakeaways.length > 0 && (
                    <div className="aeo-direct-answer__takeaways">
                      <h4 className="aeo-takeaways-heading">
                        Key Procurement Takeaways:
                      </h4>
                      <ul className="aeo-takeaways-list">
                        {aeo.keyTakeaways.map((point, idx) => (
                          <li key={idx}>
                            <span className="aeo-takeaway-check">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quick Sourcing Metrics Snapshot */}
                  {aeo.quickStats && aeo.quickStats.length > 0 && (
                    <div className="aeo-metrics-grid">
                      {aeo.quickStats.map((stat, idx) => (
                        <div key={idx} className="aeo-metric-card">
                          <span className="aeo-metric-card__label">
                            {stat.label}
                          </span>
                          <span className="aeo-metric-card__value">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* ── In-Article Mobile TOC ── */}
              {tableOfContents.length > 0 && (
                <nav
                  className="article-toc article-toc--mobile"
                  aria-label="Table of Contents"
                >
                  <div className="article-toc__title">
                    <ListCollapse size={16} />
                    <span>Table of Contents</span>
                  </div>
                  <ol className="article-toc__list">
                    {tableOfContents.map((item, idx) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>
                          <span className="toc-num">{idx + 1}.</span> {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* ── Core Formatted Markdown Content ── */}
              <FormattedContent content={post.content} />

              {/* ── Share Toolbar ── */}
              <div className="article-share-bar" aria-label="Share this article">
                <span className="article-share-bar__label">
                  <Share2 size={16} /> Share Knowledge Guide:
                </span>
                <div className="article-share-bar__actions">
                  <button
                    className="share-btn share-btn--copy"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                  </button>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.canonicalUrl || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} — ${post.canonicalUrl || ''}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--whatsapp"
                    aria-label="Share on WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* ── AEO FAQ ACCORDION SECTION ── */}
              {aeo && aeo.faqs && aeo.faqs.length > 0 && (
                <section
                  className="article-faqs-section"
                  aria-labelledby="faq-section-heading"
                >
                  <div className="article-faqs-section__header">
                    <HelpCircle size={22} className="article-faqs-icon" />
                    <div>
                      <h2 id="faq-section-heading" className="article-faqs-title">
                        Frequently Asked Questions
                      </h2>
                      <p className="article-faqs-subtitle">
                        Clear, verified answers to common international procurement and sourcing inquiries.
                      </p>
                    </div>
                  </div>

                  <div className="article-faqs-list">
                    {aeo.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={`article-faq-item ${isOpen ? 'open' : ''}`}
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <button
                            className="article-faq-trigger"
                            onClick={() =>
                              setOpenFaqIndex(isOpen ? -1 : idx)
                            }
                            aria-expanded={isOpen}
                          >
                            <span itemProp="name" className="article-faq-q">
                              {faq.question}
                            </span>
                            <ChevronDown
                              size={18}
                              className={`article-faq-chevron ${isOpen ? 'rotated' : ''}`}
                              aria-hidden="true"
                            />
                          </button>

                          <div
                            className="article-faq-answer"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                            style={{ display: isOpen ? 'block' : 'none' }}
                          >
                            <p itemProp="text">{faq.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* ── Author / E-E-A-T Credibility Box ── */}
              <div className="article-author-card" aria-label="Author Credentials">
                <div className="article-author-card__avatar">
                  <Building2 size={26} />
                </div>
                <div className="article-author-card__info">
                  <div className="article-author-card__top">
                    <h4 className="article-author-card__name">
                      Btechkers Global Sourcing Editorial
                    </h4>
                    <span className="article-author-card__badge">
                      On-Ground Sourcing Desk
                    </span>
                  </div>
                  <p className="article-author-card__bio">
                    Authored by Btechkers procurement analysts and reviewed by on-ground inspection teams operating in Surat, Tirupur, and Mumbai. We provide direct factory connectivity, ISO/BIS quality compliance, and milestone-backed supplier verification for international buyers.
                  </p>
                </div>
              </div>

              {/* Internal Links Box */}
              {post.internalLinks && post.internalLinks.length > 0 && (
                <div className="article-internal-links">
                  <h4>Related Sourcing Resources:</h4>
                  <ul>
                    {post.internalLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.url}>
                          {link.text} <ArrowRight size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* In-Article Sourcing Action Banner */}
              <div className="article-cta-box">
                <div className="article-cta-box__inner">
                  <h3>Need Verified Sourcing Assistance For Your Business?</h3>
                  <p>
                    Btechkers connects international buyers with vetted manufacturers and arranges on-ground factory verification across India and Indonesia.
                  </p>
                  <Link to="/contact" className="btn btn--white btn--lg">
                    Submit Your Requirement
                  </Link>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="article-back-nav">
                <Link to="/blog" className="btn btn--secondary btn--sm">
                  <ArrowLeft size={16} /> Back to All Articles
                </Link>
              </div>
            </main>

            {/* ── Sidebar ── */}
            <aside className="article-sidebar" aria-label="Article Sidebar">
              {/* Sticky Table of Contents on Desktop */}
              {tableOfContents.length > 0 && (
                <div className="sidebar-card article-toc--desktop">
                  <div className="article-toc__title">
                    <ListCollapse size={16} />
                    <span>Table of Contents</span>
                  </div>
                  <ol className="article-toc__list">
                    {tableOfContents.map((item, idx) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>
                          <span className="toc-num">{idx + 1}.</span> {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="sidebar-card">
                <h3>About Btechkers</h3>
                <p>
                  We are an international B2B sourcing agency backed by 10,000+ manufacturer connections and on-ground teams in India and Indonesia.
                </p>
                <Link
                  to="/contact"
                  className="btn btn--primary btn--sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request Sourcing Quote
                </Link>
              </div>

              <div className="sidebar-card">
                <h3>Core Competencies</h3>
                <div className="sidebar-topics-list">
                  <span className="sidebar-topic-pill">Supplier Auditing</span>
                  <span className="sidebar-topic-pill">MOQ Negotiation</span>
                  <span className="sidebar-topic-pill">Factory Inspections</span>
                  <span className="sidebar-topic-pill">India Manufacturing</span>
                  <span className="sidebar-topic-pill">Custom OEM/ODM</span>
                  <span className="sidebar-topic-pill">Export Compliance</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Articles Section ─────────────────────────── */}
      <section className="section bg-light" aria-labelledby="related-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Continue Reading"
            title="Related Sourcing Guides"
            subtitle="Explore additional industry insights and technical procurement analysis."
          />

          <div className="related-articles-grid">
            {relatedPosts.map((rel) => (
              <div key={rel.id} className="blog-card">
                <Link to={`/blog/${rel.slug}`} className="blog-card__img-wrap">
                  <ImageWithFallback
                    src={rel.featuredImage}
                    alt={rel.title}
                    className="blog-card__img"
                  />
                  <span className="blog-card__cat-badge">{rel.category}</span>
                </Link>
                <div className="blog-card__body">
                  <h3 className="blog-card__title">
                    <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="blog-card__summary">{rel.summary}</p>
                  <div className="blog-card__footer">
                    <Link to={`/blog/${rel.slug}`} className="blog-card__read-more">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
