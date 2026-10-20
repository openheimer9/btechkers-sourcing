import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import ImageWithFallback from '../components/ImageWithFallback';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts';
import { formatDate } from '../utils/helpers';
import { ASSETS } from '../config/assets';
import './BlogPage.css';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // The first post is the featured article
  const featuredPost = BLOG_POSTS[0];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // When search/filter is active, show all matching posts including featured
  const isFiltering = selectedCategory !== 'All' || searchQuery.trim() !== '';
  // Posts shown in the grid — skip the featured post when not filtering
  const gridPosts = isFiltering ? filteredPosts : BLOG_POSTS.slice(1);

  return (
    <>
      <SEO
        title="Global Sourcing & Procurement Insights — Knowledge Base"
        description="Practical guides, supplier verification checklists, India manufacturing analysis and international trade insights from the Btechkers sourcing team."
        canonicalUrl="https://sourcing.btechkers.com/blog"
        breadcrumbs={[{ name: 'Blog', url: '/blog' }]}
      />

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section
        className="page-hero page-hero--has-bg"
        style={{ '--hero-bg': `url(${ASSETS.hero.blog})` }}
        aria-label="Blog Header"
      >
        <div className="container page-hero__content">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <span className="page-hero__eyebrow">Industry Insights &amp; Sourcing Intelligence</span>
          <h1 className="page-hero__title">
            International Sourcing &amp; Procurement Knowledge Base
          </h1>
          <p className="page-hero__subtitle">
            Actionable intelligence for international buyers. Learn how to verify overseas suppliers, structure commercial negotiations, evaluate factory capabilities, and navigate cross-border trade corridors.
          </p>
        </div>
      </section>

      {/* ── Featured Article ──────────────────────────────────── */}
      {!isFiltering && (
        <section className="section bg-white" aria-label="Featured Article">
          <div className="container">
            <div className="blog-featured-label">
              <BookOpen size={15} />
              <span>Featured Article</span>
            </div>
            <article className="blog-featured-card">
              <Link to={`/blog/${featuredPost.slug}`} className="blog-featured-card__media">
                <ImageWithFallback
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="blog-featured-card__img"
                  fallbackText="Featured Article"
                />
                <span className="blog-featured-card__badge">{featuredPost.category}</span>
              </Link>
              <div className="blog-featured-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__meta-item">
                    <Calendar size={13} /> {formatDate(featuredPost.publishedDate)}
                  </span>
                  <span>•</span>
                  <span className="blog-card__meta-item">
                    <Clock size={13} /> {featuredPost.readingTime}
                  </span>
                </div>
                <h2 className="blog-featured-card__title">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="blog-featured-card__summary">{featuredPost.summary}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="btn btn--primary">
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── Blog Controls (Search & Category Filters) ────────── */}
      <section className="section bg-light" aria-label="Articles Feed">
        <div className="container">
          <div className="blog-controls-wrap">
            {/* Search Input */}
            <div className="blog-search-box">
              <Search size={18} className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search articles by keyword, product or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>

            {/* Category Pills */}
            <div className="blog-category-pills">
              <button
                className={`category-pill ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              >
                All Articles ({BLOG_POSTS.length})
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {gridPosts.length > 0 ? (
            <>
              {isFiltering && (
                <p className="blog-filter-result-count">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              )}
              <div className="blog-posts-grid">
                {gridPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <Link to={`/blog/${post.slug}`} className="blog-card__img-wrap">
                      <ImageWithFallback
                        src={post.featuredImage}
                        alt={post.title}
                        className="blog-card__img"
                      />
                      <span className="blog-card__cat-badge">{post.category}</span>
                    </Link>

                    <div className="blog-card__body">
                      <div className="blog-card__meta">
                        <span className="blog-card__meta-item">
                          <Calendar size={13} /> {formatDate(post.publishedDate)}
                        </span>
                        <span>•</span>
                        <span className="blog-card__meta-item">
                          <Clock size={13} /> {post.readingTime}
                        </span>
                      </div>

                      <h2 className="blog-card__title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="blog-card__summary">{post.summary}</p>

                      <div className="blog-card__footer">
                        <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                          Read Full Article <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="no-posts-box">
              <h3>No articles matched your search</h3>
              <p>Try searching for a different keyword or select another category filter.</p>
              <button
                className="btn btn--secondary btn--sm"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Sourcing Inquiry CTA ──────────────────────────────── */}
      <section className="section bg-white text-center">
        <div className="container">
          <div className="blog-cta-box">
            <h2 className="section-title">Need Practical Guidance on Your Specific Project?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Our sourcing team assists international businesses with supplier evaluation, quotation benchmarking and ground-level factory verification across India and Indonesia.
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
