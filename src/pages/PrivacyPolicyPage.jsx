import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  FileCheck, 
  Globe, 
  Eye, 
  UserCheck, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page-container">
      {/* Hero Header */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-badge">
            <ShieldCheck size={14} />
            <span>Official Statutory Document</span>
          </div>
          <h1>Privacy Policy & Candidate Data Protection</h1>
          <p>
            M/s ACME Enterprises is strictly committed to protecting the privacy, security and integrity of candidate, worker and enterprise client personal data in full compliance with the Emigration Act 1983, India DPDP Act 2023, GCC Data Protection Laws and international privacy standards.
          </p>
          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <FileCheck size={15} />
              <span>MEA Reg. No: <strong>B0313/MUM/8283/2008</strong></span>
            </div>
            <div className="legal-meta-item">
              <Clock size={15} />
              <span>Effective Date: <strong>November 2023</strong></span>
            </div>
            <div className="legal-meta-item">
              <Globe size={15} />
              <span>Jurisdiction: <strong>Mumbai Suburban, Maharashtra, India</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="legal-tabs-bar">
        <div className="legal-tabs-inner">
          <Link to="/privacy-policy" className="legal-tab-btn active">
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </Link>
          <Link to="/terms-conditions" className="legal-tab-btn">
            <FileText size={16} />
            <span>Terms & Conditions</span>
          </Link>
          <Link to="/cookie-policy" className="legal-tab-btn">
            <Eye size={16} />
            <span>Cookie Policy</span>
          </Link>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="legal-body">
        {/* Left Table of Contents */}
        <aside className="legal-sidebar">
          <div className="legal-sidebar-title">Sections Outline</div>
          <ul className="legal-toc-list">
            <li><a href="#sec-overview">1. Preamble & Scope</a></li>
            <li><a href="#sec-data-collection">2. Personal Data We Collect</a></li>
            <li><a href="#sec-purpose">3. Purpose & Legal Basis</a></li>
            <li><a href="#sec-sharing">4. Data Sharing & GCC Transfer</a></li>
            <li><a href="#sec-security">5. Data Retention & Security</a></li>
            <li><a href="#sec-rights">6. Candidate & Client Rights</a></li>
            <li><a href="#sec-statutory">7. MEA eMigrate Compliance</a></li>
            <li><a href="#sec-dpo">8. Data Protection Officer</a></li>
          </ul>

          <div className="legal-sidebar-contact">
            <h5>Privacy Assistance</h5>
            <p>For data rectification, access requests, or regulatory queries:</p>
            <a href="mailto:info@acmeofc.com" className="sidebar-contact-link">
              <Mail size={14} />
              <span>info@acmeofc.com</span>
            </a>
          </div>
        </aside>

        {/* Right Content Card */}
        <main className="legal-content-card">
          
          {/* Section 1 */}
          <section id="sec-overview" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">01</div>
              <h2>Preamble & Scope</h2>
            </div>
            <p>
              This Privacy Policy applies to all services provided by <strong>M/s ACME ENTERPRISES</strong> (Registration Certificate No. <code>B0313/MUM/8283/2008</code>, renewed on 09 November 2023 with a 1000+ Worker Capacity), having its registered office at Shop No. 28, Ground Floor, Damji Shamji Industrial Estate, L.B.S. Marg, Vikhroli West, Mumbai - 400083, Maharashtra, India.
            </p>
            <p>
              This document governs how we collect, store, verify, process and transmit candidate recruitment dossiers, employer requirements and website visitor telemetry across India, the United Arab Emirates (UAE), the State of Qatar, the Kingdom of Saudi Arabia (KSA), the Sultanate of Oman, the State of Kuwait and the Kingdom of Bahrain.
            </p>
            <div className="legal-callout-box">
              <h4><CheckCircle size={16} color="#16a34a" /> Zero-Commercialization Guarantee</h4>
              <p>
                ACME Enterprises maintains a strict <strong>No-Sale Policy</strong>. We do not sell, lease, rent, or trade any candidate or client personal information to marketing brokers or unauthorized third-party commercial entities.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-data-collection" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">02</div>
              <h2>Information & Personal Data We Collect</h2>
            </div>
            <p>
              In our capacity as a licensed overseas recruitment specialist and turnkey shutdown contractor, we collect only strictly relevant information necessary for statutory emigration clearances, trade verification and international deployment:
            </p>
            <ul>
              <li><strong>Candidate Identification:</strong> Full legal name, date of birth, nationality, passport details (number, date/place of issue, expiry), photographs, Aadhaar/National ID and emergency contact information.</li>
              <li><strong>Professional & Trade Credentials:</strong> Resumes/CVs, educational degrees, technical diplomas, trade testing scores (Welders, Riggers, Electricians, Pipefitters), past overseas employment certificates and offshore certifications (BOSIET, OPITO, CSWIP, NDT Level-II).</li>
              <li><strong>Statutory Health & Medical Records:</strong> GCC Approved Medical Centres Association (GAMCA) fitness certificates, vaccination records, chest X-rays, blood profiles and fitness-to-work certifications required by foreign sovereign labour ministries.</li>
              <li><strong>Client & Enterprise Information:</strong> Corporate registration, authenticated Demand Letters (DL), Power of Attorney (POA), Specimen Employment Contracts, project specifications and authorized signatories.</li>
              <li><strong>Digital & Website Logs:</strong> IP address, browser type, device information, inquiry form submissions and cookie session identifiers.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="sec-purpose" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">03</div>
              <h2>Purpose & Legal Basis of Processing</h2>
            </div>
            <p>We process personal data solely on lawful grounds under the following statutory mandates:</p>
            <ul>
              <li><strong>Performance of Recruitment Contracts:</strong> Facilitating candidate shortlisting, client interviews, trade testing at authorized Mumbai and Kerala centers, visa stamping and flight mobilization.</li>
              <li><strong>Statutory Compliance with Govt. of India:</strong> Fulfilling mandatory filings under the <em>Emigration Act 1983</em>, eMigrate portal clearances and Protector of Emigrants (POE) reporting.</li>
              <li><strong>Sovereign Embassy & Consular Processing:</strong> Submitting worker documentation for GCC visa issuance, police clearance certificate (PCC) verification and labor department endorsements.</li>
              <li><strong>Occupational Health & Industrial Safety:</strong> Ensuring deployed personnel possess valid safety certifications for high-hazard refineries, petrochemical units, offshore platforms and shutdown sites.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-sharing" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">04</div>
              <h2>Data Sharing & GCC Cross-Border Transfers</h2>
            </div>
            <p>
              Overseas deployment requires authorized cross-border transmission of candidate profiles to verified entities in GCC jurisdictions:
            </p>
            <ul>
              <li><strong>Verified Overseas Employers:</strong> Transmission of trade-tested dossiers to contracting companies, EPC enterprises and petrochemical refineries in UAE, Qatar, KSA, Oman and Kuwait.</li>
              <li><strong>Diplomatic Missions & Consulates:</strong> Submission of original passports, medical records and contracts to foreign embassies for visa stamping.</li>
              <li><strong>Statutory Portals:</strong> Secure synchronization with the Ministry of External Affairs eMigrate platform.</li>
              <li><strong>Ticketing & Logistic Partners:</strong> Providing essential passenger data to IATA-licensed airlines and logistics coordinators for mobilization.</li>
            </ul>
            <div className="legal-callout-box warning">
              <h4><AlertCircle size={16} color="#d97706" /> Authorized Communication Only</h4>
              <p>
                Official candidate notices, interview calls and offer letters are issued exclusively via <code>@acmeofc.com</code> or verified corporate phone lines. We never solicit fees via unauthorized personal accounts.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-security" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">05</div>
              <h2>Data Retention & Security Protocols</h2>
            </div>
            <p>
              ACME Enterprises implements multi-tier administrative, physical and technological safeguards to protect personal data against unauthorized access, loss, or alteration:
            </p>
            <ul>
              <li><strong>Encryption & Firewalls:</strong> Industry-standard TLS 1.3 encryption in transit and AES-256 encryption for stored digital archives.</li>
              <li><strong>Restricted Physical Access:</strong> Physical candidate files and trade logbooks at our Mumbai HQ and Kerala centers are secured under biometric and supervisory access controls.</li>
              <li><strong>Statutory Retention Period:</strong> In accordance with MEA Form-V guidelines, recruitment registers and deployment records are retained for a statutory minimum of 5 years or until certificate renewal audits are concluded.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="sec-rights" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">06</div>
              <h2>Candidate & Client Rights</h2>
            </div>
            <p>Under the Digital Personal Data Protection Act and international frameworks, data subjects hold the following rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of personal information and trade test records held in our systems.</li>
              <li><strong>Right to Rectification:</strong> Request prompt correction of inaccurate passport entries, updated contact numbers, or new trade certifications.</li>
              <li><strong>Right to Erasure (where applicable):</strong> Request deletion of digital inquiry records where statutory MEA retention rules do not mandate preservation.</li>
              <li><strong>Right to Grievance Redressal:</strong> File a privacy concern directly with our designated Data Protection Officer.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="sec-statutory" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">07</div>
              <h2>Statutory Declaration under MEA Form-V</h2>
            </div>
            <p>
              As certified under Govt. of India License No. <code>B0313/MUM/8283/2008</code>, ACME Enterprises strictly observes Clause (viii) and Clause (xii) prohibiting the collection of illegal processing levies or deceptive data practices. All recruitment operations adhere to the highest ethical manpower recruitment standards.
            </p>
          </section>

          {/* Section 8 */}
          <section id="sec-dpo" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">08</div>
              <h2>Data Protection Officer & Contact Directory</h2>
            </div>
            <p>For any privacy inquiries, data subject access requests (DSAR), or regulatory correspondence, please contact:</p>
            
            <div className="legal-callout-box navy">
              <h4><ShieldCheck size={16} color="#16a34a" /> Data Protection Officer (DPO)</h4>
              <p>
                <strong>M/s ACME Enterprises</strong><br />
                Shop No. 28, Ground Floor, Damji Shamji Industrial Estate,<br />
                L.B.S. Marg, Vikhroli West, Mumbai - 400083, Maharashtra, India<br />
                <strong>Email:</strong> <a href="mailto:info@acmeofc.com">info@acmeofc.com</a> / <a href="mailto:info@acmeofc.com">info@acmeofc.com</a><br />
                <strong>Tel:</strong> +91 8291 05 3466
              </p>
            </div>
          </section>

          {/* Statutory Footer Pill */}
          <div className="legal-statutory-notice">
            <FileCheck size={24} className="stat-icon" />
            <div>
              <h4>Government of India Approved Agency</h4>
              <p>
                Registered with Ministry of External Affairs (MEA), Govt. of India. Registration No: <strong>B-0313/MUM/PER/1000+/5/8283/2008</strong>. Operating under the Emigration Act 1983.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
