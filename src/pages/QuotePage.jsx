import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  FileText, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight,
  RotateCw,
  AlertCircle
} from 'lucide-react';
import './QuotePage.css';

const QuotePage = () => {
  const location = useLocation();
  const initialData = location.state || {};

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: initialData.email || '',
    phone: '',
    sector: initialData.sector || 'Construction (Civil & Technical)',
    quantity: initialData.quantity || '',
    destination: 'UAE',
    timeline: 'Immediate (Within 15-30 Days)',
    notes: ''
  });

  // CAPTCHA & Validation State
  const [captchaCode, setCaptchaCode] = useState('8K3P9');
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
    <div className="quote-page">
      {/* 1. Banner */}
      <section className="page-banner">
        <div className="page-banner-badge">
          <FileText size={15} /> INSTANT WORKFORCE REQUISITION
        </div>
        <h1>
          Request a <span>Manpower Quote</span>
        </h1>
        <p>
          Submit your project requirements and receive an immediate feasibility, trade testing and mobilization timeline assessment from our recruitment directors.
        </p>
      </section>

      {/* 2. Main Form Container */}
      <section className="page-container">
        <div className="quote-form-container">
          
          {submitted ? (
            <div className="quote-success-card">
              <CheckCircle size={54} className="success-check-icon" />
              <h2>Requisition Submitted Successfully!</h2>
              <p>
                Thank you for your inquiry with ACME Enterprises. Our Business Director and Technical Recruitment team have received your project requirements and will revert with a formal assessment within 24 hours.
              </p>
              <div className="quote-success-details">
                <p><strong>Sector:</strong> {formData.sector}</p>
                <p><strong>Quantity:</strong> {formData.quantity || 'As specified'}</p>
                <p><strong>Destination:</strong> {formData.destination}</p>
              </div>
              <div className="quote-success-actions">
                <Link to="/" className="btn-primary">Return to Homepage</Link>
                <Link to="/contact" className="btn-outline">Contact Mumbai Office</Link>
              </div>
            </div>
          ) : (
            <div className="quote-card">
              <div className="quote-card-header">
                <h2>Manpower Demand & Feasibility Form</h2>
                <p>Please provide your authorized company and project details.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="q-field">
                    <label>Full Name / Authorized Officer *</label>
                    <input 
                      type="text" 
                    
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="q-field">
                    <label>Company / EPC Contractor Name *</label>
                    <input 
                      type="text" 
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="q-field">
                    <label>Corporate Email *</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="q-field">
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

                <div className="form-grid-2">
                  <div className="q-field">
                    <label>Industry Sector *</label>
                    <select 
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option value="Construction (Civil & Technical)">Construction (Civil & Technical)</option>
                      <option value="Mechanical, HVAC & Piping">Mechanical, HVAC & Piping</option>
                      <option value="Electrical & Power Systems">Electrical & Power Systems</option>
                      <option value="Turnaround Shutdowns & EPIC (Oil & Gas)">Turnaround Shutdowns & EPIC (Oil & Gas)</option>
                      <option value="Transport & Heavy Earthmovers">Transport & Heavy Earthmovers</option>
                      <option value="Healthcare & Paramedical">Healthcare & Paramedical</option>
                      <option value="Hotel & Hospitality Services">Hotel & Hospitality Services</option>
                      <option value="Printing & Publication">Printing & Publication</option>
                      <option value="Commercial & Mall Operations">Commercial & Mall Operations</option>
                    </select>
                  </div>

                  <div className="q-field">
                    <label>Estimated Headcount / Quantity *</label>
                    <input 
                      type="text" 
                
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="q-field">
                    <label>Deployment Destination *</label>
                    <select 
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    >
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Qatar">State of Qatar</option>
                      <option value="Oman">Sultanate of Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="KSA">Kingdom of Saudi Arabia (KSA)</option>
                      <option value="India">India</option>
                      <option value="Other">Other Global Destination</option>
                    </select>
                  </div>

                  <div className="q-field">
                    <label>Required Deployment Timeline</label>
                    <select 
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    >
                      <option value="Immediate (Within 15-30 Days)">Immediate (Within 15-30 Days)</option>
                      <option value="Planned (Within 30-60 Days)">Planned (Within 30-60 Days)</option>
                      <option value="Future Turnaround (60+ Days)">Future Turnaround (60+ Days)</option>
                    </select>
                  </div>
                </div>

                <div className="q-field">
                  <label>Trade Specifics, Job Descriptions & Notes</label>
                  <textarea 
                    rows="3" 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>

                {/* Alphanumeric Anti-Spam CAPTCHA Challenge */}
                <div className="q-field captcha-box-field">
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

                <button type="submit" className="btn-form-submit">
                  <span>Submit Manpower Demand Assessment</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default QuotePage;
