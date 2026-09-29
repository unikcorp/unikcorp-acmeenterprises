import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp, UserCheck, ShieldCheck } from 'lucide-react';
import './FloatingHotline.css';

const FloatingHotline = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="floating-hotline-container">
      {/* Expanded Quick Contact Panel */}
      {isExpanded && (
        <div className="hotline-popup-card">
          <div className="popup-header">
            <div className="popup-header-info">
              <UserCheck size={18} className="popup-icon-green" />
              <div>
                <strong>Direct Director Hotline</strong>
                <span>Sasikumar Kunjukrishnan</span>
              </div>
            </div>
            <button 
              type="button" 
              className="popup-close-btn"
              onClick={() => setIsExpanded(false)}
              aria-label="Close hotline"
            >
              <X size={16} />
            </button>
          </div>

          <div className="popup-body">
            <p className="popup-desc">
              Immediate assistance for GCC project requirements, turnaround mobilizations and trade testing inquiries.
            </p>

            <a href="tel:+919867993292" className="hotline-action-btn primary-call">
              <Phone size={16} />
             <span>Call Director:+91 91377 39573</span>
            </a>

            <a 
              href="https://wa.me/8291053466?text=Hello%20ACME%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20manpower%20recruitment." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hotline-action-btn whatsapp-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Instant Chat</span>
            </a>

            <div className="popup-footer-note">
              <ShieldCheck size={13} />
              <span>Govt. Lic: B-0313/MUM/PER/1000+/5/8283/2008</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button with Continuous Gentle Floating Wave */}
      <button 
        type="button" 
        className={`floating-main-trigger ${isExpanded ? 'active' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Direct Recruitment Hotline"
      >
        <span className="floating-ripple-wave"></span>
        <span className="floating-ripple-wave-2"></span>
        
        <div className="floating-btn-content">
          {isExpanded ? (
            <X size={22} />
          ) : (
            <Phone size={20} className="phone-wiggle-icon" />
          )}
        </div>
        <span className="floating-btn-tooltip">24/7 Director Hotline</span>
      </button>
    </div>
  );
};

export default FloatingHotline;
