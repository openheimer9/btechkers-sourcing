/**
 * SectionHeading
 *
 * Reusable section header block.
 *
 * Props:
 *   eyebrow  — small uppercase label above the title
 *   title    — main h2 heading
 *   subtitle — supporting paragraph text
 *   centered — (bool) centre-aligns all text
 *   dark     — (bool) switches to white-text variant (for dark backgrounds)
 *   className — extra classes on the wrapper
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) {
  const wrapperClasses = [
    'section-header',
    centered ? 'section-header--centered' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const titleClasses = [
    'section-title',
    dark ? 'section-title--white' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const subtitleClasses = [
    'section-subtitle',
    dark ? 'section-subtitle--white' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={wrapperClasses}>
      {eyebrow && (
        <span className="section-eyebrow" aria-hidden="false">
          {eyebrow}
        </span>
      )}

      {/* Divider line beneath the eyebrow */}
      {eyebrow && (
        <div
          className={`divider${centered ? ' divider--center' : ''}`}
          aria-hidden="true"
        />
      )}

      {title && <h2 className={titleClasses}>{title}</h2>}

      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </header>
  );
}
