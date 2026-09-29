import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ShieldCheck, 
  FileText, 
  CheckCircle, 
  Settings, 
  Lock, 
  Sliders, 
  HelpCircle, 
  Globe, 
  Clock, 
  FileCheck,
  Check
} from 'lucide-react';
import './LegalPages.css';

const CookiePolicyPage = () => {
  // State for interactive cookie preference toggles
  const [preferences, setPreferences] = useState({
    essential: true, // Always true and disabled
    analytics: true,
    functional: true,
    marketing: false
  });
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('acme_cookie_preferences');
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not load cookie preferences", e);
    }
  }, []);

  const handleToggle = (key) => {
    if (key === 'essential') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setSavedStatus(false);
  };

  const handleSave = () => {
    try {
      localStorage.setItem('acme_cookie_preferences', JSON.stringify(preferences));
      localStorage.setItem('acme_cookie_consent', 'custom');
      setSavedStatus(true);
      setTimeout(() => setSavedStatus(false), 4000);
    } catch (e) {
      console.error("Could not save preferences", e);
    }
  };

  return (
    <div className="legal-page-container">
      {/* Hero Header */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-badge">
            <Eye size={14} />
            <span>Privacy & Technology</span>
          </div>
          <h1>Cookie Policy & Consent Management</h1>
          <p>
            Learn how ACME Enterprises uses cookies and web technologies to provide secure navigation, optimize our candidate and client portals and respect your privacy choices across international jurisdictions.
          </p>
          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <FileCheck size={15} />
              <span>Agency: <strong>M/s ACME Enterprises</strong></span>
            </div>
            <div className="legal-meta-item">
              <Clock size={15} />
              <span>Last Updated: <strong>November 2023</strong></span>
            </div>
            <div className="legal-meta-item">
              <Globe size={15} />
              <span>Standard: <strong>GDPR & DPDP Act Compliant</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="legal-tabs-bar">
        <div className="legal-tabs-inner">
          <Link to="/privacy-policy" className="legal-tab-btn">
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </Link>
          <Link to="/terms-conditions" className="legal-tab-btn">
            <FileText size={16} />
            <span>Terms & Conditions</span>
          </Link>
          <Link to="/cookie-policy" className="legal-tab-btn active">
            <Eye size={16} />
            <span>Cookie Policy</span>
          </Link>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="legal-body">
        {/* Left Table of Contents */}
        <aside className="legal-sidebar">
          <div className="legal-sidebar-title">Cookie Outline</div>
          <ul className="legal-toc-list">
            <li><a href="#sec-what-are-cookies">1. What Are Cookies?</a></li>
            <li><a href="#sec-interactive-panel">2. Manage Your Preferences</a></li>
            <li><a href="#sec-cookie-types">3. Categories We Use</a></li>
            <li><a href="#sec-third-party">4. Third-Party Analytics</a></li>
            <li><a href="#sec-browser-guide">5. Browser-Level Controls</a></li>
            <li><a href="#sec-contact">6. Contact & Inquiries</a></li>
          </ul>

          <div className="legal-sidebar-contact">
            <h5>Privacy Desk</h5>
            <p>Questions regarding cookie policies or candidate data telemetry:</p>
            <a href="mailto:info@acmeofc.com" className="sidebar-contact-link">
              <ShieldCheck size={14} />
              <span>info@acmeofc.com</span>
            </a>
          </div>
        </aside>

        {/* Right Content Card */}
        <main className="legal-content-card">
          
          {/* Section 1 */}
          <section id="sec-what-are-cookies" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">01</div>
              <h2>What Are Cookies?</h2>
            </div>
            <p>
              Cookies are small text files placed on your computer, smartphone, or tablet when you visit websites. They are widely used by professional enterprises to ensure websites function properly, protect against malicious traffic, store session preferences and provide analytical telemetry to improve digital services.
            </p>
            <p>
              At <strong>ACME Enterprises</strong>, cookies are used strictly to maintain a secure, seamless user experience for GCC employers requesting quotations, candidates researching trade test standards and engineers exploring our 12 turnaround capabilities.
            </p>
          </section>

          {/* Section 2: Interactive Preference Panel */}
          <section id="sec-interactive-panel" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">02</div>
              <h2>Interactive Cookie Preference Center</h2>
            </div>
            <p>
              You can customize your cookie consent settings below at any time. Essential cookies cannot be disabled as they are required for basic security and core page navigation.
            </p>

            <div className="cookie-preference-panel">
              <div className="cookie-panel-header">
                <h3>Consent Configuration</h3>
                <button type="button" className="btn-save-cookie-prefs" onClick={handleSave}>
                  <Sliders size={15} />
                  <span>Save My Preferences</span>
                </button>
              </div>

              {/* 1. Essential */}
              <div className="cookie-category-item">
                <div className="cookie-cat-info">
                  <h4>Strictly Necessary & Essential Cookies (Required)</h4>
                  <p>Essential for basic site routing, CSRF protection, secure quotation forms and remembering cookie consent state. Cannot be switched off.</p>
                </div>
                <label className="switch-container">
                  <input type="checkbox" checked={preferences.essential} disabled />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* 2. Analytics */}
              <div className="cookie-category-item">
                <div className="cookie-cat-info">
                  <h4>Performance & Analytics Cookies</h4>
                  <p>Allows us to analyze site visits, popular trade disciplines and navigation bottlenecks to optimize our recruitment and engineering showcase.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => handleToggle('analytics')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* 3. Functional */}
              <div className="cookie-category-item">
                <div className="cookie-cat-info">
                  <h4>Functional & Preference Cookies</h4>
                  <p>Remembers your selected branch preferences (Mumbai HQ vs. Kerala Branch), preferred communication channels and filter choices.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.functional} 
                    onChange={() => handleToggle('functional')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* 4. Marketing */}
              <div className="cookie-category-item">
                <div className="cookie-cat-info">
                  <h4>Communication & Marketing Cookies</h4>
                  <p>Used to evaluate the efficiency of our overseas employer outreach and recruitment campaign announcements.</p>
                </div>
                <label className="switch-container">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => handleToggle('marketing')} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {savedStatus && (
                <div className="cookie-status-msg">
                  <Check size={16} />
                  <span>Your cookie preferences have been successfully updated and saved.</span>
                </div>
              )}
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-cookie-types" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">03</div>
              <h2>Detailed Categories of Cookies We Use</h2>
            </div>
            
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies stored in your browser's memory for the duration of your browsing session. They are deleted automatically when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> Stored on your device for a defined duration (typically 30 to 365 days) to remember your return visits and customized preferences.</li>
              <li><strong>First-Party Cookies:</strong> Set directly by the <code>acmeofc.com</code> domain for secure form submissions and state retention.</li>
              <li><strong>Third-Party Cookies:</strong> Set by trusted partners (such as mapping services or web font providers) for enhanced functionality.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-third-party" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">04</div>
              <h2>Third-Party Services & Telemetry</h2>
            </div>
            <p>
              We may utilize trusted privacy-first analytical tools to evaluate aggregate visitor statistics. These services do not collect unencrypted candidate passport numbers, Aadhaar numbers, or medical data. All IP addresses are anonymized before analytical aggregation.
            </p>
          </section>

          {/* Section 5 */}
          <section id="sec-browser-guide" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">05</div>
              <h2>How to Manage Cookies via Browser Settings</h2>
            </div>
            <p>
              In addition to our interactive preference center above, you can block or delete cookies through your web browser settings:
            </p>
            <ul>
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
              <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
            </ul>
            <p>
              <em>Note: Disabling essential cookies may impair certain features, such as interactive quotation requests or trade testing inquiry submissions.</em>
            </p>
          </section>

          {/* Section 6 */}
          <section id="sec-contact" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">06</div>
              <h2>Questions & Contact</h2>
            </div>
            <p>
              If you have any questions regarding our Cookie Policy or data handling practices, please contact our administrative desk:
            </p>
            <div className="legal-callout-box navy">
              <h4><ShieldCheck size={16} color="#16a34a" /> Privacy & Compliance Desk</h4>
              <p>
                <strong>M/s ACME Enterprises</strong><br />
                Shop No. 28, Ground Floor, Damji Shamji Industrial Estate,<br />
                L.B.S. Marg, Vikhroli West, Mumbai - 400083, Maharashtra, India<br />
                <strong>Email:</strong> <a href="mailto:info@acmeofc.com">info@acmeofc.com</a><br />
                <strong>Phone:</strong> +91 8291 05 3466
              </p>
            </div>
          </section>

          {/* Statutory Footer Pill */}
          <div className="legal-statutory-notice">
            <FileCheck size={24} className="stat-icon" />
            <div>
              <h4>MEA Registered Recruitment Specialist</h4>
              <p>
                Operating with integrity, transparency and global compliance. Registration No: <strong>B-0313/MUM/PER/1000+/5/8283/2008</strong>.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
