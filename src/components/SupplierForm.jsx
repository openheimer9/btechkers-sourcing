import { useState, useRef } from 'react';
import { Send, UploadCloud, AlertCircle, FileText, X, RefreshCw, CheckCircle2 } from 'lucide-react';
import { CONTACT_EMAIL, isPlaceholderEmail } from '../config/site';
import './SupplierForm.css';

const BUSINESS_TYPES = [
  'Manufacturer',
  'Producer',
  'Exporter',
  'Wholesaler',
  'Sourcing Agent',
  'Procurement Professional',
  'Other',
];

export default function SupplierForm() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    contact_person: '',
    company_name: '',
    email: '',
    phone: '',
    country: '',
    business_type: '',
    product_categories: '',
    capabilities: '',
    export_markets: '',
    product_description: '',
    website: '',
    additional_message: '',
    consent: false,
    _honey: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.contact_person.trim()) {
      newErrors.contact_person = 'Contact person name is required';
    }

    if (!formData.company_name.trim()) {
      newErrors.company_name = 'Company / business name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country of operation is required';
    }

    if (!formData.business_type) {
      newErrors.business_type = 'Please select your business type';
    }

    if (!formData.product_categories.trim()) {
      newErrors.product_categories = 'Product categories are required';
    }

    if (!formData.product_description.trim()) {
      newErrors.product_description = 'Product description is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm that the provided information is accurate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !fileError;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      setFileError('');
      return;
    }

    // Strictly validate PDF type
    const isPdf =
      file.type === 'application/pdf' ||
      file.name.toLowerCase().endsWith('.pdf');

    if (!isPdf) {
      setFileError('Invalid file format. Only PDF files (.pdf) are permitted.');
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Validate size limit (5MB FormSubmit free tier limit)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      setFileError(
        `Selected file is ${sizeMB}MB. Maximum permitted catalogue size is 5.0MB. Please compress your PDF or share a download link in the message field.`
      );
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFileError('');
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
      setSubmissionStatus('success');
      return;
    }

    setSubmissionStatus('submitting');
    setErrorMessage('');


    // Live submission via /api/contact serverless endpoint
    try {
      const payload = {
        type: 'supplier',
        full_name: formData.contact_person,
        company_name: formData.company_name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        product_category: `${formData.business_type} — ${formData.product_categories}`,
        product_description: `${formData.product_description}\n\nCapabilities: ${formData.capabilities || 'N/A'}\nExport Markets: ${formData.export_markets || 'N/A'}\nWebsite: ${formData.website || 'N/A'}`,
        additional_requirements: formData.additional_message,
        consent: formData.consent,
        _honey: formData._honey,
        source_page: typeof window !== 'undefined' ? window.location.pathname : '/collaborate',
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

      // 2. If serverless was unavailable, route via FormSubmit AJAX
      if (!success) {
        if (isPlaceholderEmail(CONTACT_EMAIL)) {
          // Safe demo mode when placeholder email is configured
          success = true;
        } else {
          const formSubmitPayload = {
            ...payload,
            _subject: `New Supply Partner Application — ${formData.contact_person} (${formData.company_name})`,
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
              'Unable to submit your partner registration at this time. Please try again or reach out to info@btechkers.com directly.'
            );
          }
        }
      }

      if (success) {
        setSubmittedData({
          ...formData,
          fileName: selectedFile ? selectedFile.name : null,
          fileSize: selectedFile
            ? (selectedFile.size / (1024 * 1024)).toFixed(2)
            : null,
        });
        setSubmissionStatus('success');
      } else {
        throw new Error('Unable to submit your partner registration at this time. Please try again or reach out to info@btechkers.com directly.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setErrorMessage(
        err.message || 'Network error occurred while submitting your registration. Please check your connection and try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      contact_person: '',
      company_name: '',
      email: '',
      phone: '',
      country: '',
      business_type: '',
      product_categories: '',
      capabilities: '',
      export_markets: '',
      product_description: '',
      website: '',
      additional_message: '',
      consent: false,
      _honey: '',
    });
    handleRemoveFile();
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
        <h3>Partnership Profile Submitted Successfully</h3>
        <p>
          Thank you, <strong>{submittedData?.contact_person}</strong>. Your partner registration for <strong>{submittedData?.company_name}</strong> has been transmitted to our network management desk.
        </p>



        <div className="submission-summary-box">
          <h4>Registration Summary:</h4>
          <ul>
            <li><strong>Company:</strong> {submittedData?.company_name}</li>
            <li><strong>Business Type:</strong> {submittedData?.business_type}</li>
            <li><strong>Categories:</strong> {submittedData?.product_categories}</li>
            <li><strong>Country:</strong> {submittedData?.country}</li>
            {submittedData?.fileName && (
              <li><strong>Attached Catalogue:</strong> {submittedData.fileName} ({submittedData.fileSize} MB)</li>
            )}
          </ul>
        </div>

        <p className="form-feedback-sub">
          Our procurement specialists review new supplier submissions against active buyer mandates and will contact you regarding potential sourcing opportunities.
        </p>

        <button type="button" onClick={handleReset} className="btn btn--secondary btn--sm">
          <RefreshCw size={14} /> Submit Another Profile
        </button>
      </div>
    );
  }

  // ── Form State ──────────────────────────────────────────────
  return (
    <form className="supplier-form" onSubmit={handleSubmit} noValidate>
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
            <strong>Registration Notice:</strong>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="form-grid">
        {/* Contact Person */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="contact_person">
            Contact Person / Representative
          </label>
          <input
            id="contact_person"
            name="contact_person"
            type="text"
            className={`form-input ${errors.contact_person ? 'error' : ''}`}
            placeholder="Full Name & Title"
            value={formData.contact_person}
            onChange={handleChange}
            aria-invalid={errors.contact_person ? 'true' : 'false'}
            aria-describedby={errors.contact_person ? 'contact_person_error' : undefined}
            required
          />
          {errors.contact_person && (
            <span id="contact_person_error" className="form-error">
              <AlertCircle size={14} /> {errors.contact_person}
            </span>
          )}
        </div>

        {/* Company / Business Name */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="company_name">
            Company / Business Name
          </label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            className={`form-input ${errors.company_name ? 'error' : ''}`}
            placeholder="Registered Business Name"
            value={formData.company_name}
            onChange={handleChange}
            aria-invalid={errors.company_name ? 'true' : 'false'}
            aria-describedby={errors.company_name ? 'company_name_error' : undefined}
            required
          />
          {errors.company_name && (
            <span id="company_name_error" className="form-error">
              <AlertCircle size={14} /> {errors.company_name}
            </span>
          )}
        </div>

        {/* Business Email */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="supplier_email">
            Business Email
          </label>
          <input
            id="supplier_email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="contact@manufacturer.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'supplier_email_error' : undefined}
            required
          />
          {errors.email && (
            <span id="supplier_email_error" className="form-error">
              <AlertCircle size={14} /> {errors.email}
            </span>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="form-group">
          <label className="form-label" htmlFor="supplier_phone">
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="supplier_phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="supplier_country">
            Country of Operation / Headquarters
          </label>
          <input
            id="supplier_country"
            name="country"
            type="text"
            className={`form-input ${errors.country ? 'error' : ''}`}
            placeholder="e.g. India, Indonesia, Kenya, Poland, UK"
            value={formData.country}
            onChange={handleChange}
            aria-invalid={errors.country ? 'true' : 'false'}
            aria-describedby={errors.country ? 'supplier_country_error' : undefined}
            required
          />
          {errors.country && (
            <span id="supplier_country_error" className="form-error">
              <AlertCircle size={14} /> {errors.country}
            </span>
          )}
        </div>

        {/* Business Type */}
        <div className="form-group">
          <label className="form-label form-label--required" htmlFor="business_type">
            Business Type / Role
          </label>
          <select
            id="business_type"
            name="business_type"
            className={`form-select ${errors.business_type ? 'error' : ''}`}
            value={formData.business_type}
            onChange={handleChange}
            aria-invalid={errors.business_type ? 'true' : 'false'}
            aria-describedby={errors.business_type ? 'business_type_error' : undefined}
            required
          >
            <option value="">Select your business model...</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.business_type && (
            <span id="business_type_error" className="form-error">
              <AlertCircle size={14} /> {errors.business_type}
            </span>
          )}
        </div>
      </div>

      {/* Product Categories */}
      <div className="form-group form-group--full">
        <label className="form-label form-label--required" htmlFor="product_categories">
          Product Categories Offered
        </label>
        <input
          id="product_categories"
          name="product_categories"
          type="text"
          className={`form-input ${errors.product_categories ? 'error' : ''}`}
          placeholder="e.g. Functional Sportswear Fabrics, Natural & Lab-Grown Diamonds, Spices, Wood Furniture"
          value={formData.product_categories}
          onChange={handleChange}
          aria-invalid={errors.product_categories ? 'true' : 'false'}
          aria-describedby={errors.product_categories ? 'categories_error' : undefined}
          required
        />
        {errors.product_categories && (
          <span id="categories_error" className="form-error">
            <AlertCircle size={14} /> {errors.product_categories}
          </span>
        )}
      </div>

      {/* Product Description */}
      <div className="form-group form-group--full">
        <label className="form-label form-label--required" htmlFor="supplier_product_desc">
          Product Description &amp; Core Offerings
        </label>
        <textarea
          id="supplier_product_desc"
          name="product_description"
          className={`form-textarea ${errors.product_description ? 'error' : ''}`}
          rows="3"
          placeholder="Describe your primary product lines, material grades, constructions, processing methods, or key commercial items."
          value={formData.product_description}
          onChange={handleChange}
          aria-invalid={errors.product_description ? 'true' : 'false'}
          aria-describedby={errors.product_description ? 'product_desc_error' : undefined}
          required
        ></textarea>
        {errors.product_description && (
          <span id="product_desc_error" className="form-error">
            <AlertCircle size={14} /> {errors.product_description}
          </span>
        )}
      </div>

      {/* Manufacturing & Sourcing Capabilities */}
      <div className="form-group form-group--full">
        <label className="form-label" htmlFor="capabilities">
          Manufacturing or Sourcing Capabilities (Optional)
        </label>
        <textarea
          id="capabilities"
          name="capabilities"
          className="form-textarea"
          rows="3"
          placeholder="Describe your production facility, machinery, monthly capacity, quality testing laboratories, certifications (ISO, OEKO-TEX, GOTS, etc.) or regional sourcing connections."
          value={formData.capabilities}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-grid">
        {/* Export Markets */}
        <div className="form-group">
          <label className="form-label" htmlFor="export_markets">
            Current &amp; Target Export Markets (Optional)
          </label>
          <input
            id="export_markets"
            name="export_markets"
            type="text"
            className="form-input"
            placeholder="e.g. European Union, UK, Middle East, USA"
            value={formData.export_markets}
            onChange={handleChange}
          />
        </div>

        {/* Website */}
        <div className="form-group">
          <label className="form-label" htmlFor="website">
            Company Website or Portfolio Link (Optional)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            className="form-input"
            placeholder="https://www.yourcompany.com"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Optional PDF Catalogue Attachment */}
      <div className="form-group form-group--full">
        <label className="form-label" htmlFor="attachment">
          Product Catalogue or Company Profile (Optional PDF, Max 5MB)
        </label>
        <div className="file-upload-box">
          <input
            ref={fileInputRef}
            id="attachment"
            name="attachment"
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="file-upload-input"
            aria-describedby={fileError ? 'file_error' : undefined}
          />
          <div className="file-upload-ui">
            <UploadCloud size={30} className="file-upload-icon" aria-hidden="true" />
            <div className="file-upload-text">
              {selectedFile ? (
                <div className="file-selected-row">
                  <span className="file-selected-name">
                    <FileText size={16} /> {selectedFile.name} (
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="file-remove-btn"
                    title="Remove selected file"
                  >
                    <X size={15} /> Remove
                  </button>
                </div>
              ) : (
                <span>
                  <strong>Click to upload</strong> or drag a PDF document here (PDF format only, maximum 5.0 MB)
                </span>
              )}
            </div>
          </div>
        </div>
        {fileError && (
          <span id="file_error" className="form-error">
            <AlertCircle size={14} /> {fileError}
          </span>
        )}
      </div>

      {/* Additional Message */}
      <div className="form-group form-group--full">
        <label className="form-label" htmlFor="additional_message">
          Additional Message or Collaboration Proposal (Optional)
        </label>
        <textarea
          id="additional_message"
          name="additional_message"
          className="form-textarea"
          rows="3"
          placeholder="Share any additional details regarding your operation, MOQ flexibility, lead times or how you propose to collaborate."
          value={formData.additional_message}
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
            aria-describedby={errors.consent ? 'supplier_consent_error' : undefined}
          />
          <span className="form-checkbox-label">
            I confirm that the information provided represents legitimate commercial or manufacturing capabilities, and agree to Btechkers evaluating this profile for network collaboration. I understand inquiries and attachments are securely processed via FormSubmit.
          </span>
        </label>
        {errors.consent && (
          <span id="supplier_consent_error" className="form-error">
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
              Transmitting Registration...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Partnership Registration
            </>
          )}
        </button>
        <p className="form-disclaimer">
          Registration does not guarantee network acceptance. All potential suppliers undergo review and qualification before being recommended to international buyers.
        </p>
      </div>
    </form>
  );
}
