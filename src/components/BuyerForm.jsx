import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { CONTACT_EMAIL, isPlaceholderEmail } from '../config/site';
import './BuyerForm.css';

const PRODUCT_CATEGORIES = [
  'Textiles & Apparel',
  'Agriculture & Agro Products',
  'Jewellery & Precious Materials',
  'Food & Beverages',
  'Health, Wellness & Supplements',
  'Cosmetics & Personal Care',
  'Wood & Furniture Products',
  'Metal & Fabricated Products',
  'Plastic & Packaging Products',
  'Industrial Goods & Components',
  'Consumer & Household Products',
  'Custom Manufacturing / Other',
];

const SOURCING_COUNTRIES = [
  'Open to Recommendations',
  'India (Physical Factory Visits Available)',
  'Indonesia (Physical Factory Visits Available)',
  'Africa (Regional Network)',
  'United Kingdom',
  'European Union (Poland, Germany, Croatia)',
  'China (Remote Sourcing Contacts)',
  'Other / Multiple Markets',
];

const SERVICE_INTEREST_OPTIONS = [
  'Global Sourcing & Procurement',
  'Import Products from India / Export Supply',
  'OEM / ODM / Private Label',
  'Other / Not Sure',
];

const TIMELINE_OPTIONS = [
  'Immediate (< 1 month)',
  '1 to 3 months',
  '3 to 6 months',
  'Exploratory / Planning phase',
];

export default function BuyerForm() {
  const getInitialService = () => {
    if (typeof window === 'undefined') return 'Global Sourcing & Procurement';
    const params = new URLSearchParams(window.location.search);
    const s = params.get('service');
    if (!s) return 'Global Sourcing & Procurement';
    const lower = s.toLowerCase();
    if (lower.includes('export') || lower.includes('import')) return 'Import Products from India / Export Supply';
    if (lower.includes('oem') || lower.includes('odm') || lower.includes('private')) return 'OEM / ODM / Private Label';
    if (SERVICE_INTEREST_OPTIONS.includes(s)) return s;
    return 'Global Sourcing & Procurement';
  };

  const getInitialCategory = () => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && PRODUCT_CATEGORIES.includes(cat)) return cat;
    return '';
  };

  const [formData, setFormData] = useState({
    service_interest: getInitialService(),
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    country: '',
    product_category: getInitialCategory(),
    product_description: '',
    specifications: '',
    estimated_quantity: '',
    target_price: '',
    preferred_sourcing_country: '',
    destination_country: '',
    required_timeline: '',
    additional_requirements: '',
    consent: false,
    _honey: '', // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Your country / location is required';
    }

    if (!formData.service_interest) {
      newErrors.service_interest = 'Please select your service interest';
    }

    if (!formData.product_category) {
      newErrors.product_category = 'Please select a product category';
    }

    if (!formData.product_description.trim()) {
      newErrors.product_description = 'Product description is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to allow us to process your sourcing requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submissionStatus === 'error') {
      setSubmissionStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      const firstError = document.querySelector('.form-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Bot honeypot check
    if (formData._honey) {
      // Silently disregard bot submissions
      setSubmissionStatus('success');
      return;
    }

    setSubmissionStatus('submitting');
    setErrorMessage('');


    // Submission pipeline: Try local/serverless /api/contact, with seamless FormSubmit AJAX fallback
    try {
      const payload = {
        type: 'buyer',
        service_interest: formData.service_interest,
        full_name: formData.full_name,
        company_name: formData.company_name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        product_category: formData.product_category,
        product_description: formData.product_description,
        specifications: formData.specifications,
        estimated_quantity: formData.estimated_quantity,
        target_price: formData.target_price,
        preferred_sourcing_country: formData.preferred_sourcing_country,
        destination_country: formData.destination_country,
        required_timeline: formData.required_timeline,
        additional_requirements: formData.additional_requirements,
        consent: formData.consent,
        _honey: formData._honey,
        source_page: typeof window !== 'undefined' ? window.location.pathname : '/contact',
      };

      let success = false;

      // 1. Attempt serverless endpoint dispatch
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const result = await response.json().catch(() => null);
          if (result?.success) {
            success = true;
          }
        }
      } catch (apiErr) {
        // Continue to FormSubmit fallback
      }

      // 2. If serverless was unavailable (e.g. static host or preview), route via FormSubmit AJAX
      if (!success) {
        if (isPlaceholderEmail(CONTACT_EMAIL)) {
          // Safe demo mode when placeholder email is configured
          success = true;
        } else {
          const formSubmitPayload = {
            ...payload,
            _subject: `New Sourcing Inquiry — ${formData.full_name} (${formData.service_interest})`,
            _template: 'table',
            _captcha: 'false',
          };

          const fsResponse = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(formSubmitPayload),
          });

          if (fsResponse.ok) {
            success = true;
          } else {
            const fsData = await fsResponse.json().catch(() => null);
            throw new Error(
              fsData?.message ||
              'Unable to transmit your sourcing requirement at this time. Please try again or email info@btechkers.com directly.'
            );
          }
        }
      }

      if (success) {
        setSubmittedData({ ...formData });
        setSubmissionStatus('success');
      } else {
        throw new Error('Unable to transmit your sourcing requirement at this time. Please try again or email info@btechkers.com directly.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setErrorMessage(
        err.message || 'Network error occurred while submitting your requirement. Please check your connection and try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      service_interest: 'Global Sourcing & Procurement',
      full_name: '',
      company_name: '',
      email: '',
      phone: '',
      country: '',
      product_category: '',
      product_description: '',
      specifications: '',
      estimated_quantity: '',
      target_price: '',
      preferred_sourcing_country: '',
      destination_country: '',
      required_timeline: '',
      additional_requirements: '',
      consent: false,
      _honey: '',
    });
    setErrors({});
    setSubmissionStatus('idle');
    setSubmittedData(null);
  };

  // ── Success State Display ───────────────────────────────────
  if (submissionStatus === 'success') {
    return (
      <div className="form-feedback-card form-feedback-card--success" role="status" aria-live="polite">
        <div className="form-feedback-icon">
          <CheckCircle2 size={48} />
        </div>
        <h3>Sourcing Requirement Transmitted Successfully</h3>
        <p>
          Thank you, <strong>{submittedData?.full_name || 'Valued Buyer'}</strong>. Your sourcing inquiry regarding <strong>{submittedData?.product_category}</strong> has been received by the Btechkers procurement desk.
        </p>

        <div className="submission-summary-box">
          <h4>Requirement Summary:</h4>
          <ul>
            <li><strong>Service Interest:</strong> {submittedData?.service_interest}</li>
            <li><strong>Category:</strong> {submittedData?.product_category}</li>
            <li><strong>Contact Email:</strong> {submittedData?.email}</li>
            {submittedData?.destination_country && (
              <li><strong>Destination:</strong> {submittedData?.destination_country}</li>
            )}
            {submittedData?.required_timeline && (
              <li><strong>Expected Timeline:</strong> {submittedData?.required_timeline}</li>
            )}
          </ul>
        </div>

        <p className="form-feedback-sub">
          A sourcing specialist will evaluate your specifications and reach out to <strong>{submittedData?.email}</strong> with feasibility insights within 24 business hours.
        </p>

        <button type="button" onClick={handleReset} className="btn btn--secondary btn--sm">
          <RefreshCw size={14} /> Submit Another Requirement
        </button>
      </div>
    );
  }

  // ── Form State ──────────────────────────────────────────────
  return (
    <form className="buyer-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="_honey"
        value={formData._honey}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Submission Error Alert */}
      {submissionStatus === 'error' && (
        <div className="form-alert form-alert--error" role="alert">
          <AlertCircle size={20} className="form-alert-icon" />
          <div>
            <strong>Submission Notice:</strong>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="form-grid">
        {/* Service Interest / Engagement Model */}
        <div className="form-group form-group--full">
          <label className="form-label form-label--required" htmlFor="service_interest">
            Service Interest / Business Model
          </label>
          <select
            id="service_interest"
            name="service_interest"
            className={`form-select ${errors.service_interest ? 'error' : ''}`}
            value={formData.service_interest}
            onChange={handleChange}
            aria-invalid={errors.service_interest ? 'true' : 'false'}
            aria-describedby={errors.service_interest ? 'service_interest_error' : undefined}
            required
          >
            {SERVICE_INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service_interest && (
            <span id="service_interest_error" className="form-error">
              <AlertCircle size={14} /> {errors.service_interest}
            </span>
          )}
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="full_name">
            Full Name
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            className={`form-input ${errors.full_name ? 'error' : ''}`}
            placeholder="e.g. John Doe"
            value={formData.full_name}
            onChange={handleChange}
            aria-invalid={errors.full_name ? 'true' : 'false'}
            aria-describedby={errors.full_name ? 'full_name_error' : undefined}
            required
          />
          {errors.full_name && (
            <span id="full_name_error" className="form-error">
              <AlertCircle size={14} /> {errors.full_name}
            </span>
          )}
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="company_name">
            Company Name (Optional)
          </label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            className="form-input"
            placeholder="e.g. Acme Imports Ltd"
            value={formData.company_name}
            onChange={handleChange}
          />
        </div>

        {/* Business Email */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="email">
            Business Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email_error' : undefined}
            required
          />
          {errors.email && (
            <span id="email_error" className="form-error">
              <AlertCircle size={14} /> {errors.email}
            </span>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone / WhatsApp Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="e.g. +44 7123 456789"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Buyer Country */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="country">
            Your Location / Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className={`form-input ${errors.country ? 'error' : ''}`}
            placeholder="e.g. United Kingdom, Germany, USA"
            value={formData.country}
            onChange={handleChange}
            aria-invalid={errors.country ? 'true' : 'false'}
            aria-describedby={errors.country ? 'country_error' : undefined}
            required
          />
          {errors.country && (
            <span id="country_error" className="form-error">
              <AlertCircle size={14} /> {errors.country}
            </span>
          )}
        </div>

        {/* Product Category */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="product_category">
            Product Category
          </label>
          <select
            id="product_category"
            name="product_category"
            className={`form-select ${errors.product_category ? 'error' : ''}`}
            value={formData.product_category}
            onChange={handleChange}
            aria-invalid={errors.product_category ? 'true' : 'false'}
            aria-describedby={errors.product_category ? 'product_category_error' : undefined}
            required
          >
            <option value="">Select product category...</option>
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.product_category && (
            <span id="product_category_error" className="form-error">
              <AlertCircle size={14} /> {errors.product_category}
            </span>
          )}
        </div>
      </div>

      {/* Product Description */}
      <div className="form-group form-group--full">
        <label className="form-label form-label--required" htmlFor="product_description">
          Product Description &amp; Requirements
        </label>
        <textarea
          id="product_description"
          name="product_description"
          className={`form-textarea ${errors.product_description ? 'error' : ''}`}
          rows="4"
          placeholder="Please describe the product you are seeking to source, including material requirements, finish, use cases or specific requirements."
          value={formData.product_description}
          onChange={handleChange}
          aria-invalid={errors.product_description ? 'true' : 'false'}
          aria-describedby={errors.product_description ? 'desc_error' : undefined}
          required
        ></textarea>
        {errors.product_description && (
          <span id="desc_error" className="form-error">
            <AlertCircle size={14} /> {errors.product_description}
          </span>
        )}
      </div>

      {/* Product Specifications */}
      <div className="form-group form-group--full">
        <label className="form-label" htmlFor="specifications">
          Technical Specifications / Quality Standards (Optional)
        </label>
        <textarea
          id="specifications"
          name="specifications"
          className="form-textarea"
          rows="3"
          placeholder="e.g. GSM / yarn count for fabrics, diamond cut/clarity parameters, specific testing certifications (ISO, OEKO-TEX, GOTS, etc.)"
          value={formData.specifications}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-grid">
        {/* Estimated Quantity */}
        <div className="form-group">
          <label className="form-label" htmlFor="estimated_quantity">
            Estimated Quantity / Order Size (Optional)
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            className="form-input"
            placeholder="e.g. 5,000 metres / 1,000 units"
            value={formData.estimated_quantity}
            onChange={handleChange}
          />
        </div>

        {/* Target Price */}
        <div className="form-group">
          <label className="form-label" htmlFor="target_price">
            Target Price / Budget (Optional)
          </label>
          <input
            id="target_price"
            name="target_price"
            type="text"
            className="form-input"
            placeholder="e.g. $4.50 / metre or total budget"
            value={formData.target_price}
            onChange={handleChange}
          />
        </div>

        {/* Preferred Sourcing Country */}
        <div className="form-group">
          <label className="form-label" htmlFor="preferred_sourcing_country">
            Preferred Sourcing Country / Market (Optional)
          </label>
          <select
            id="preferred_sourcing_country"
            name="preferred_sourcing_country"
            className="form-select"
            value={formData.preferred_sourcing_country}
            onChange={handleChange}
          >
            <option value="">Select market preference...</option>
            {SOURCING_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Country */}
        <div className="form-group">
          <label className="form-label" htmlFor="destination_country">
            Destination Country / Port (Optional)
          </label>
          <input
            id="destination_country"
            name="destination_country"
            type="text"
            className="form-input"
            placeholder="e.g. Hamburg, Germany or Felixstowe, UK"
            value={formData.destination_country}
            onChange={handleChange}
          />
        </div>

        {/* Required Timeline */}
        <div className="form-group form-group--full">
          <label className="form-label" htmlFor="required_timeline">
            Required Timeline (Optional)
          </label>
          <select
            id="required_timeline"
            name="required_timeline"
            className="form-select"
            value={formData.required_timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline...</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional Requirements */}
      <div className="form-group form-group--full">
        <label className="form-label" htmlFor="additional_requirements">
          Additional Requirements (Optional)
        </label>
        <textarea
          id="additional_requirements"
          name="additional_requirements"
          className="form-textarea"
          rows="3"
          placeholder="Do you require physical factory visits, custom OEM/ODM tooling, sample pre-shipment inspection, or private labelling?"
          value={formData.additional_requirements}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Consent Checkbox */}
      <div className="form-group form-group--full">
        <label className="form-checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            aria-invalid={errors.consent ? 'true' : 'false'}
            aria-describedby={errors.consent ? 'consent_error' : undefined}
          />
          <span className="form-checkbox-label">
            I agree to Btechkers processing this sourcing requirement to evaluate manufacturing options and contact me regarding this inquiry. I understand inquiries are securely delivered via FormSubmit.
          </span>
        </label>
        {errors.consent && (
          <span id="consent_error" className="form-error">
            <AlertCircle size={14} /> {errors.consent}
          </span>
        )}
      </div>

      {/* Submit Button & UX */}
      <div className="form-submit-wrap">
        <button
          type="submit"
          className="btn btn--primary btn--lg form-submit-btn"
          disabled={submissionStatus === 'submitting'}
        >
          {submissionStatus === 'submitting' ? (
            <>
              <span className="form-spinner" aria-hidden="true"></span>
              Transmitting Requirement...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Sourcing Requirement
            </>
          )}
        </button>
        <p className="form-disclaimer">
          No obligation. Your commercial specifications are treated confidentially and strictly utilized to match qualified suppliers.
        </p>
      </div>
    </form>
  );
}
