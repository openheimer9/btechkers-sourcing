import { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * ImageWithFallback
 *
 * Wraps <img> and shows a styled placeholder div when the image
 * fails to load (404, broken src, CORS block, etc.).
 *
 * Props:
 *   src             — image URL
 *   alt             — alt text (required for accessibility)
 *   className       — class applied to both img and placeholder div
 *   style           — inline styles applied to both img and placeholder div
 *   placeholderText — optional label shown inside the placeholder
 *   width           — native width attribute
 *   height          — native height attribute
 *   loading         — 'lazy' | 'eager' (default: 'lazy')
 *   decoding        — 'async' | 'sync' | 'auto' (default: 'async')
 */
export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  style = {},
  placeholderText = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}) {
  const [hasError, setHasError] = useState(!src);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`img-placeholder${className ? ` ${className}` : ''}`}
        style={style}
        role="img"
        aria-label={alt || placeholderText || 'Image unavailable'}
        title={alt || placeholderText}
      >
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-slate-blue)',
            opacity: 0.5,
            fontSize: '0.8rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          <ImageOff size={28} aria-hidden="true" />
          {placeholderText && (
            <span style={{ textAlign: 'center', lineHeight: 1.3 }}>
              {placeholderText}
            </span>
          )}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      {...rest}
    />
  );
}
