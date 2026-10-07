import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, UserCheck, ShieldCheck, Printer, Send, RotateCw, AlertCircle, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [captchaCode, setCaptchaCode] = useState('9M4K2');
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
      newErrors.phone = "Must be 7 to 15 digits ()";
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      newErrors.captcha = "Incorrect CAPTCHA code";
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
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-badge">
          <ShieldCheck size={16} /> OFFICIAL CONTACT DIRECTORY
        </div>
        <h2>Connect with Our Global Recruitment Team</h2>
        <p className="contact-desc">
          Whether you need urgent workforce mobilization for turnaround shutdowns or ongoing multi-trade infrastructure staffing, our directors and execution managers are available to assist.
        </p>

        {/* Director Profile Box */}
        <div className="director-box">
          <div className="director-avatar">
            <UserCheck size={28} />
          </div>
          <div className="director-info">
            <span className="director-role">Director - Business</span>
            <h3>Mr. Sasikumar Kunjukrishnan</h3>
            <p className="director-phone">
              <Phone size={15} /> <strong>Cell:</strong> <a href="tel:+919137739573">+91 9137 73 9573</a>
            </p>
          </div>
        </div>

        <div className="contact-info-grid">
          <div className="info-item">
            <div className="info-icon"><MapPin size={20} /></div>
            <div>
              <h4>Mumbai Head Office:</h4>
              <p>GF28, Damji Shamji Ind. Estate, LBS Marg, Vikhroli West, Mumbai - 400083, India</p>
              <span className="lic-text">LIC No. RA 8283 MEA Approved (Lic. No.: B-0313/MUM/PER/1000+/5/8283/2008)</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><MapPin size={20} /></div>
            <div>
              <h4>Branch Office:</h4>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={20} /></div>
            <div>
              <h4>Office Telephones & Fax:</h4>
              <p>Tel:+91 22 25770147</p>
              <p>Mob: +91 8291 05 3466 </p>
              <p>Fax: +91 22 210 3000</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Mail size={20} /></div>
            <div>
              <h4>Official Email Addresses:</h4>
               <p>reqacme@gmail.com</p>
              <p>info@acmeofc.com | ofc@acmeofc.com</p>
              <p>acmemum@gmail.com</p>
             
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-form-card">
          <h3>Send Direct Mobilization Request</h3>
          <p className="form-subtext">Our business director will revert within 24 hours.</p>

          {submitted ? (
            <div className="form-success-box" style={{ textStyle: 'center', padding: '20px 0' }}>
              <CheckCircle size={40} className="success-icon" style={{ color: '#16a34a', marginBottom: '12px' }} />
              <h4 style={{ color: '#0a1e36', fontSize: '18px', fontWeight: '800' }}>Inquiry Sent Successfully!</h4>
              <p style={{ color: '#475569', fontSize: '13.5px', margin: '8px 0 16px 0' }}>Thank you. Our business team will evaluate your requirements and contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn-black">Send Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Full Name / Authorized Representative *</label>
             

              <label>Company / Contractor Name *</label>
              <input 
                type="text" 
             
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                required 
              />

              <div className="form-row">
                <div className="form-col">
                  <label>Official Email *</label>
                  <input 
                    type="email" 
                   
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-col">
                  <label>Contact Phone / WhatsApp *</label>
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
                  {errors.phone && <span className="field-error-msg" style={{ fontSize: '11px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}><AlertCircle size={12} /> {errors.phone}</span>}
                </div>
              </div>

              <label>Project Details / Manpower Requirements *</label>
              <textarea 
                rows="3" 
                placeholder="Detail your project location, trade categories, estimated headcount and expected deployment date..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>

              {/* Alphanumeric Anti-Spam CAPTCHA Challenge */}
              <div className="captcha-box-field" style={{ margin: '14px 0' }}>
                <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#0a1e36', display: 'block', marginBottom: '6px' }}>Security Verification (CAPTCHA) *</label>
                <div className="captcha-challenge-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                    style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: errors.captcha ? '1px solid #ef4444' : '1px solid #cbd5e1' }}
                    required 
                  />
                </div>
                {errors.captcha && <span className="field-error-msg" style={{ fontSize: '11px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}><AlertCircle size={12} /> {errors.captcha}</span>}
              </div>

              <button type="submit" className="btn-black">
                <Send size={16} /> Submit Project Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;