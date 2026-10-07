import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  UserCheck,
  Send,
  CheckCircle,
  Printer,
  Clock,
  Building2,
  RotateCw,
  AlertCircle,
  Upload,
  FileText,
  X,
} from "lucide-react";
import "./ContactPage.css";
const CONTACT_API_URL = "https://api.acmeofc.com/api/contact";
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "UAE",
  });

  // CV Upload State
  const [cvFile, setCvFile] = useState(null);
  const [cvError, setCvError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // CAPTCHA & Validation State
  const [captchaCode, setCaptchaCode] = useState("7B9XQ");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const MAX_CV_SIZE_MB = 5;
  const MAX_CV_SIZE_BYTES = MAX_CV_SIZE_MB * 1024 * 1024;
  const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"];
  const ALLOWED_CV_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/[^0-9]/g, "");
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  // ---- CV Upload Handlers ----
  const processCvFile = (file) => {
    setCvError("");

    if (!file) {
      setCvFile(null);
      return;
    }

    // 1. Validate extension (more reliable than MIME on some browsers/operating systems)
    const ext = file.name.split(".").pop().toLowerCase();
    const validExt = ALLOWED_CV_EXTENSIONS.includes(ext);

    // 2. Validate MIME type (belt and braces)
    const validMime = ALLOWED_CV_TYPES.includes(file.type);

    if (!validExt && !validMime) {
      setCvError("Only PDF, DOC or DOCX files are allowed.");
      setCvFile(null);
      const input = document.getElementById("cv-upload-input");
      if (input) input.value = "";
      return;
    }

    // 3. Enforce the 5 MB limit
    if (file.size > MAX_CV_SIZE_BYTES) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setCvError(
        `File is too large (${sizeMB} MB). Maximum allowed size is ${MAX_CV_SIZE_MB} MB.`,
      );
      setCvFile(null);
      const input = document.getElementById("cv-upload-input");
      if (input) input.value = "";
      return;
    }

    setCvFile(file);
  };

  const handleCvChange = (e) => {
    const input = e.target;
    const file = input.files && input.files[0];
    processCvFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processCvFile(e.dataTransfer.files[0]);
    }
  };

  const removeCvFile = () => {
    setCvFile(null);
    setCvError("");
    const input = document.getElementById("cv-upload-input");
    if (input) input.value = "";
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number. Must contain 7 to 15 digits.";
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      newErrors.captcha =
        "Incorrect CAPTCHA code. Please enter the exact characters shown.";
      generateCaptcha();
    }

    if (Object.keys(newErrors).length > 0 || cvError) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("country", formData.country);
      payload.append(
        "message",
        `Student Application - Preferred Country: ${formData.country}, Phone: ${formData.phone}`
      );
      if (cvFile) payload.append("cv", cvFile);

      // When running on localhost, use local backend directly to avoid Cloudflare CORS blocks
      const isLocal =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1");

      const apiUrl = isLocal ? "/api/contact" : CONTACT_API_URL;

      const response = await fetch(apiUrl, {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success || result.messageId)) {
        setSubmitted(true);
        return;
      }

      setSubmitError(
        result.error || "Failed to submit application. Please check backend connection."
      );
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Could not reach backend service. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="page-banner-badge">
          <Phone size={15} /> OFFICIAL DIRECTORY & INQUIRIES
        </div>
        <h1>
          Contact Our <span>Recruitment Leadership</span>
        </h1>
        <p>
          Connect directly with our Business Directors and Recruitment Teams at
          our Mumbai Headquarters and Kerala branch office.
        </p>
      </section>

      {/* 2. Contact Main Section */}
      <section className="page-container">
        <div className="contact-layout-grid">
          {/* Left Column: Office & Director Info */}
          <div className="contact-info-column">
            {/* Director Card */}
            <div className="director-mega-card">
              <div className="director-avatar-box">
                <UserCheck size={32} />
              </div>
              <div className="director-details">
                <span className="director-badge">Director - Business</span>
                <h2>Mr. Sasikumar Kunjukrishnan</h2>
                <div className="director-cell-item">
                  <Phone size={16} />
                  <span>Direct Cell / WhatsApp:</span>
                  <a href="tel:+918291053466">+91 8291 05 3466</a>
                </div>
              </div>
            </div>

            {/* Office Hubs */}
            <div className="offices-list">
              <div className="office-card">
                <div className="office-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3>Mumbai Head Office</h3>
                  <p className="office-address">
                    GF28, Damji Shamji Ind. Estate, LBS Marg, Vikhroli West,
                    Mumbai - 400083, Maharashtra, India.
                  </p>
                  <div className="office-extra">
                    <span className="office-lic">
                      <ShieldCheck size={13} /> Lic:
                      B-0313/MUM/PER/1000+/5/8283/2008
                    </span>
                    <p>
                      <Phone size={13} /> Mob: +91 8291 05 3466
                      <br />
                      <Phone size={13} /> Tel: +91 22 25770147
                    </p>
                    <p>
                      <Printer size={13} /> Fax: +91 22 210 3000
                    </p>
                  </div>
                </div>
              </div>

              <div className="office-card">
                <div className="office-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3>Kerala Branch Office</h3>
                  <p className="office-address">
                    2/9 Classic Bazar, Athani Jn., Aluva, Ernakulam, Kerala,
                    India.
                  </p>
                  <div className="office-extra">
                    <p>
                      <Phone size={13} /> Southern India Sourcing, Training &
                      Testing Hub
                    </p>
                  </div>
                </div>
              </div>

              <div className="office-card">
                <div className="office-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h3>Official Electronic Mail</h3>
                  <p className="office-address">
                    For corporate demand letters, visa attestations and
                    commercial inquiries:
                  </p>
                  <div className="email-links">
                    <a href="mailto:info@acmeofc.com">info@acmeofc.com</a>
                    <a href="mailto:reqacme@gmail.com">reqacme@gmail.com</a>
                    <a href="mailto:ofc@acmeofc.com">ofc@acmeofc.com</a>
                    <a href="mailto:acmemum@gmail.com">acmemum@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Requisition Form */}
          <div className="contact-form-column">
            <div className="contact-card-box">
              <h3>Submit Student Application</h3>
              <p className="form-lead">
                Fill in your details and upload your resume below. Our recruitment
                team will review your profile.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} className="success-icon" />
                  <h4>Application Received Successfully!</h4>
                  <p>
                    Thank you for submitting your details and resume. Our recruitment
                    team has received your application and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="input-group-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="input-row">
                    <div className="input-group-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="input-group-field">
                      <label>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone)
                            setErrors({ ...errors, phone: null });
                        }}
                        className={errors.phone ? "input-error" : ""}
                        required
                      />
                      {errors.phone && (
                        <span className="field-error-msg">
                          <AlertCircle size={13} /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="input-group-field">
                    <label>Preferred Destination / Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    >
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Sultanate of Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="KSA">Kingdom of Saudi Arabia (KSA)</option>
                      <option value="India">India</option>
                      <option value="Other">Other Global Location</option>
                    </select>
                  </div>

                  {/* ---- CV Upload Field (max 5 MB) ---- */}
                  <div className="input-group-field cv-upload-field">
                    <label>
                      Upload CV / Resume{" "}
                      <span className="cv-hint">
                        (PDF, DOC, DOCX — max {MAX_CV_SIZE_MB} MB)
                      </span>
                    </label>

                    {!cvFile ? (
                      <label
                        htmlFor="cv-upload-input"
                        className={`cv-dropzone ${isDragging ? "dragging" : ""}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <Upload size={20} className="cv-dropzone-icon" />
                        <span className="cv-dropzone-text">
                          Click to browse or drag & drop your CV here
                        </span>
                        <input
                          id="cv-upload-input"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleCvChange}
                          onClick={(e) => e.stopPropagation()}
                          className="cv-file-input"
                        />
                      </label>
                    ) : (
                      <div className="cv-file-preview">
                        <FileText size={20} className="cv-file-icon" />
                        <div className="cv-file-meta">
                          <span className="cv-file-name">{cvFile.name}</span>
                          <span className="cv-file-size">
                            {formatFileSize(cvFile.size)}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="cv-remove-btn"
                          onClick={removeCvFile}
                          aria-label="Remove uploaded CV"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}

                    {cvError && (
                      <span className="field-error-msg">
                        <AlertCircle size={13} /> {cvError}
                      </span>
                    )}
                  </div>

                  {/* Alphanumeric Anti-Spam CAPTCHA Challenge */}
                  <div className="input-group-field captcha-box-field">
                    <label>Security Verification (CAPTCHA) *</label>
                    <div className="captcha-challenge-row">
                      <div className="alphanumeric-captcha-badge">
                        <span className="captcha-code-text">{captchaCode}</span>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="btn-refresh-captcha"
                          title="Generate new CAPTCHA code"
                        >
                          <RotateCw size={15} />
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter CAPTCHA Code"
                        className={`captcha-answer-input ${errors.captcha ? "input-error" : ""}`}
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          if (errors.captcha)
                            setErrors({ ...errors, captcha: null });
                        }}
                        required
                      />
                    </div>
                    {errors.captcha && (
                      <span className="field-error-msg">
                        <AlertCircle size={13} /> {errors.captcha}
                      </span>
                    )}
                  </div>

                  {submitError && (
                    <div className="field-error-msg" style={{ fontSize: "14px", marginTop: "12px", padding: "10px 14px", background: "#fef2f2", borderRadius: "8px", border: "1px solid #fecaca", color: "#dc2626" }}>
                      <AlertCircle size={16} /> {submitError}
                    </div>
                  )}

                  <button type="submit" className="btn-form-send" disabled={isSubmitting}>
                    <Send size={18} />
                    <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
