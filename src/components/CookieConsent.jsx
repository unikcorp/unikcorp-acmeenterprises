import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Settings, 
  X, 
  Check, 
  Sliders, 
  Eye, 
  Lock 
} from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem('acme_cookie_consent');
      if (!consent) {
        // Show banner after short delay for smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const storedPrefs = localStorage.getItem('acme_cookie_preferences');
        if (storedPrefs) {
          setPreferences(JSON.parse(storedPrefs));
        }
      }
    } catch (e) {
      console.error("Storage access error:", e);
    }
  }, []);

  const handleAcceptAll = () => {
    const allEnabled = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    try {
      localStorage.setItem('acme_cookie_preferences', JSON.stringify(allEnabled));
      localStorage.setItem('acme_cookie_consent', 'all');
    } catch (e) {
      console.error("Storage write error:", e);
    }
    setPreferences(allEnabled);
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleDeclineNonEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    try {
      localStorage.setItem('acme_cookie_preferences', JSON.stringify(essentialOnly));
      localStorage.setItem('acme_cookie_consent', 'essential_only');
    } catch (e) {
      console.error("Storage write error:", e);
    }
    setPreferences(essentialOnly);
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem('acme_cookie_preferences', JSON.stringify(preferences));
      localStorage.setItem('acme_cookie_consent', 'custom');
    } catch (e) {
      console.error("Storage write error:", e);
    }
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const toggleCategory = (key) => {
    if (key === 'essential') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* 1. Main Bottom Banner */}
      {isVisible && (
        <aside className="cookie-banner-wrapper" aria-label="Cookie consent notice">
          <div className="cookie-banner-inner">
            <div className="cookie-banner-text">
              <div className="cookie-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div className="cookie-text-content">
                <h4>Privacy & Cookie Preferences</h4>
                <p>
                  ACME Enterprises uses strictly necessary and performance cookies to optimize candidate dossiers, secure enterprise quotation requests and ensure statutory compliance with the Ministry of External Affairs. Read our <Link to="/cookie-policy">Cookie Policy</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button 
                type="button" 
                className="btn-cookie-accept" 
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
              <button 
                type="button" 
                className="btn-cookie-decline" 
                onClick={handleDeclineNonEssential}
              >
                Reject Non-Essential
              </button>
              <button 
                type="button" 
                className="btn-cookie-settings" 
                onClick={() => setIsModalOpen(true)}
              >
                <Sliders size={14} />
                <span>Customize</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Preferences Modal */}
      {isModalOpen && (
        <div className="cookie-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div 
            className="cookie-modal-card" 
            onClick={(e) => e.stopPropagation()} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="cookie-modal-title"
          >
            <div className="cookie-modal-header">
              <h3 id="cookie-modal-title">Cookie & Privacy Settings</h3>
              <button 
                type="button" 
                className="cookie-modal-close" 
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="cookie-modal-body">
              <p className="cookie-modal-intro">
                Tailor your preferences below. Essential cookies are required to maintain secure operations under Government of India MEA guidelines and cannot be deactivated.
              </p>

              {/* Essential */}
              <div className="modal-cookie-item">
                <div className="modal-cookie-info">
                  <h4>Essential & Security Cookies</h4>
                  <p>Required for basic routing, form validation and license authentication.</p>
                </div>
                <label className="switch-container">
                  <input type="checkbox" checked={preferences.essential} disabled />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* Analytics */}
              <div className="modal-cookie-item">
                <div className="modal-cookie-info">
                  <h4>Performance & Analytics</h4>
                  <p>Measures visitor engagement across 12 turnaround disciplines and trade sectors.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => toggleCategory('analytics')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* Functional */}
              <div className="modal-cookie-item">
                <div className="modal-cookie-info">
                  <h4>Functional Preferences</h4>
                  <p>Preserves Mumbai and Kerala trade center preferences and inquiry drafts.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.functional} 
                    onChange={() => toggleCategory('functional')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* Marketing */}
              <div className="modal-cookie-item">
                <div className="modal-cookie-info">
                  <h4>Outreach & Communications</h4>
                  <p>Tracks international client mobilization campaigns and employer notices.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => toggleCategory('marketing')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button 
                type="button" 
                className="btn-cookie-decline"
                onClick={handleDeclineNonEssential}
              >
                Reject All Non-Essential
              </button>
              <button 
                type="button" 
                className="btn-modal-save" 
                onClick={handleSaveCustom}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
