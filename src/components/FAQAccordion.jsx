import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/faqs.js';

/**
 * FAQAccordion
 *
 * Renders a single-expand accordion for a list of FAQs.
 *
 * Props:
 *   faqs      — array of { id, question, answer } objects.
 *               Defaults to the full FAQS dataset.
 *   limit     — maximum number of items to show (default: all).
 *   className — additional wrapper class.
 */
export default function FAQAccordion({
  faqs = FAQS,
  limit,
  className = '',
  includeSchema = true,
}) {
  const [openId, setOpenId] = useState(null);

  // Apply optional limit
  const visibleFaqs =
    limit && limit > 0 ? faqs.slice(0, limit) : faqs;

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!visibleFaqs.length) return null;

  const faqSchema = includeSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: visibleFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}
      <div
        className={`faq-accordion${className ? ` ${className}` : ''}`}
        role="list"
      >
      {visibleFaqs.map((faq) => {
        const isOpen = openId === faq.id;
        const contentId = `faq-content-${faq.id}`;
        const triggerId = `faq-trigger-${faq.id}`;

        return (
          <div
            key={faq.id}
            className={`accordion-item${isOpen ? ' open' : ''}`}
            role="listitem"
          >
            {/* ── Trigger ─────────────────────────────────── */}
            <button
              id={triggerId}
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggle(faq.id)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className="accordion-icon"
                size={18}
                aria-hidden="true"
              />
            </button>

            {/* ── Content ─────────────────────────────────── */}
            <div
              id={contentId}
              className="accordion-content"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
