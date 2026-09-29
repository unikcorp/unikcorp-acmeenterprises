import React, { useState, useEffect } from 'react';
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
  AlertCircle
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'UAE',
    message: ''
  });

  // CAPTCHA & Validation State
  const [captchaCode, setCaptchaCode] = useState('7B9XQ');
  const [captchaInput, setCaptchaInput] = useState('');
  const [errors, setErrors] = useState({});

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number. Must contain 7 to 15 digits.";
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      newErrors.captcha = "Incorrect CAPTCHA code. Please enter the exact characters shown.";
      generateCaptcha();
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
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
          Connect directly with our Business Directors and Recruitment Teams at our Mumbai Headquarters and Kerala branch office.
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
                <div className="office-icon"><MapPin size={22} /></div>
                <div>
                  <h3>Mumbai Head Office</h3>
                  <p className="office-address">
                    GF28, Damji Shamji Ind. Estate, LBS Marg, Vikhroli West, Mumbai - 400083, Maharashtra, India.
                  </p>
                  <div className="office-extra">
                    <span className="office-lic"><ShieldCheck size={13} /> Lic: B-0313/MUM/PER/1000+/5/8283/2008</span>
                    <p><Phone size={13} /> Tel: +91 8291 05 3466</p>
                    <p><Printer size={13} /> Fax: +91 22 210 3000</p>
                  </div>
                </div>
              </div>

              <div className="office-card">
                <div className="office-icon"><MapPin size={22} /></div>
                <div>
                  <h3>Kerala Branch Office</h3>
                  <p className="office-address">
                    2/9 Classic Bazar, Athani Jn., Aluva, Ernakulam, Kerala, India.
                  </p>
                  <div className="office-extra">
                    <p><Phone size={13} /> Southern India Sourcing, Training & Testing Hub</p>
                  </div>
                </div>
              </div>

              <div className="office-card">
                <div className="office-icon"><Mail size={22} /></div>
                <div>
                  <h3>Official Electronic Mail</h3>
                  <p className="office-address">
                    For corporate demand letters, visa attestations and commercial inquiries:
                  </p>
                  <div className="email-links">
                    <a href="mailto:info@acmeofc.com">info@acmeofc.com</a>
                    <a href="mailto:acmecbd@gmail.com">acmecbd@gmail.com</a>
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
              <h3>Submit Manpower Requisition</h3>
              <p className="form-lead">
                Fill in your project specifics below. Our Business Director will review and respond within 24 hours.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} className="success-icon" />
                  <h4>Inquiry Received Successfully!</h4>
                  <p>Thank you for connecting with ACME Enterprises. Our business team has received your project details and will be in touch shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Send Another Requisition
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="input-row">
                    <div className="input-group-field">
                      <label>Full Name / Authorized Rep *</label>
                      <input 
                        type="text" 
                       
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="input-group-field">
                      <label>Company / Contractor Name *</label>
                      <input 
                        type="text" 
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="input-row">
                    <div className="input-group-field">
                      <label>Corporate Email *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="input-group-field">
                      <label>Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({...formData, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: null});
                        }}
                        className={errors.phone ? 'input-error' : ''}
                        required 
                      />
                      {errors.phone && <span className="field-error-msg"><AlertCircle size={13} /> {errors.phone}</span>}
                    </div>
                  </div>

                  <div className="input-group-field">
                    <label>Deployment Destination / Country *</label>
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
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

                  <div className="input-group-field">
                    <label>Project Scope & Manpower Requirements *</label>
                    <textarea 
                      rows="4" 
                      placeholder="Please specify trade categories, required headcount, site location and expected mobilization date..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
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
                        className={`captcha-answer-input ${errors.captcha ? 'input-error' : ''}`}
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          if (errors.captcha) setErrors({...errors, captcha: null});
                        }}
                        required 
                      />
                    </div>
                    {errors.captcha && <span className="field-error-msg"><AlertCircle size={13} /> {errors.captcha}</span>}
                  </div>

                  <button type="submit" className="btn-form-send">
                    <Send size={18} />
                    <span>Submit</span>
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
