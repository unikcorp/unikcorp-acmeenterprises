import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle, 
  Scale, 
  Award, 
  AlertTriangle, 
  Globe, 
  Clock, 
  FileCheck, 
  Eye, 
  Users, 
  Briefcase 
} from 'lucide-react';
import './LegalPages.css';

const TermsConditionsPage = () => {
  return (
    <div className="legal-page-container">
      {/* Hero Header */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-badge">
            <Scale size={14} />
            <span>Statutory Service Terms</span>
          </div>
          <h1>Terms and Conditions of Service</h1>
          <p>
            Please read these statutory terms and conditions carefully. They govern overseas recruitment agreements, turnaround shutdown contracting, trade testing protocols, candidate mobilizations and the use of the ACME Enterprises corporate platform.
          </p>
          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <FileCheck size={15} />
              <span>MEA License: <strong>B-0313/MUM/PER/1000+/5/8283/2008</strong></span>
            </div>
            <div className="legal-meta-item">
              <Clock size={15} />
              <span>Last Revised: <strong>November 2023</strong></span>
            </div>
            <div className="legal-meta-item">
              <Globe size={15} />
              <span>Governing Law: <strong>Emigration Act 1983 / Republic of India</strong></span>
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
          <Link to="/terms-conditions" className="legal-tab-btn active">
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
          <div className="legal-sidebar-title">Terms Outline</div>
          <ul className="legal-toc-list">
            <li><a href="#sec-preamble">1. Acceptance of Terms</a></li>
            <li><a href="#sec-agency-profile">2. Statutory License & Authority</a></li>
            <li><a href="#sec-client-terms">3. Terms for Overseas Employers</a></li>
            <li><a href="#sec-candidate-terms">4. Code of Conduct for Candidates</a></li>
            <li><a href="#sec-turnaround-terms">5. Shutdown & EPIC Contracting</a></li>
            <li><a href="#sec-warranty">6. 90-Day Probation Guarantee</a></li>
            <li><a href="#sec-intellectual">7. Intellectual Property & Brands</a></li>
            <li><a href="#sec-liability">8. Limitation of Liability</a></li>
            <li><a href="#sec-jurisdiction">9. Jurisdiction & Dispute Resolution</a></li>
          </ul>

          <div className="legal-sidebar-contact">
            <h5>Legal & Contract Desk</h5>
            <p>For official Demand Letters, POA, or agency agreements:</p>
            <a href="mailto:info@acmeofc.com" className="sidebar-contact-link">
              <Briefcase size={14} />
              <span>info@acmeofc.com</span>
            </a>
          </div>
        </aside>

        {/* Right Content Card */}
        <main className="legal-content-card">
          
          {/* Section 1 */}
          <section id="sec-preamble" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">01</div>
              <h2>Acceptance of Terms & Preamble</h2>
            </div>
            <p>
              These Terms and Conditions constitute a legally binding agreement between you (the "User", "Client", or "Candidate") and <strong>M/s ACME ENTERPRISES</strong> (Govt. of India Registration No. <code>B0313/MUM/8283/2008</code>), having its principal office at Shop No. 28, Ground Floor, Damji Shamji Industrial Estate, L.B.S. Marg, Vikhroli West, Mumbai - 400083, Maharashtra, India.
            </p>
            <p>
              By accessing our website, commissioning our technical manpower recruitment services, submitting applications for GCC trade positions, or executing recruitment mandates, you agree to be bound unconditionally by these terms.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec-agency-profile" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">02</div>
              <h2>Statutory License & Regulatory Standing</h2>
            </div>
            <p>
              ACME Enterprises operates strictly under the legal authority granted by the Ministry of External Affairs (MEA), Government of India, under Form-V (Rule 10) with Registration Certificate No. <strong>B-0313/MUM/PER/1000+/5/8283/2008</strong>, authorized to recruit and mobilize 1000+ technical and industrial workers across international markets.
            </p>
            <div className="legal-callout-box">
              <h4><CheckCircle size={16} color="#16a34a" /> Ethical Recruitment Code</h4>
              <p>
                In strict compliance with MEA Form-V Clause (xii), ACME Enterprises adheres to the highest ethical recruiting practices, ensuring zero worker exploitation, transparent employment contracts and direct compliance with host country labor laws.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-client-terms" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">03</div>
              <h2>Terms for Overseas Employers & GCC Clients</h2>
            </div>
            <p>Overseas clients engaging ACME Enterprises for manpower recruitment or technical staffing agree to provide:</p>
            <ul>
              <li><strong>Authenticated Demand Letters (DL):</strong> Specifying exact trade categories, quantities, job descriptions, basic salaries, working hours, overtime terms, food/accommodation allowances and medical insurance in accordance with MEA eMigrate standards.</li>
              <li><strong>Power of Attorney (POA):</strong> Authorizing ACME Enterprises to screen, trade test, recruit and process consular visas on the employer's behalf.</li>
              <li><strong>Specimen Employment Contract:</strong> Legally endorsed by the relevant Chamber of Commerce and Indian Embassy in the destination country (UAE, Qatar, KSA, Oman, Kuwait, Bahrain).</li>
              <li><strong>Timely Visa & PTA Mobilization:</strong> Prompt issuance of sovereign work/mission visas and prepaid air tickets (PTA) following candidate selection.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-candidate-terms" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">04</div>
              <h2>Code of Conduct & Rules for Job Seekers</h2>
            </div>
            <p>All candidates participating in ACME interview drives and overseas mobilization agree that:</p>
            <ul>
              <li><strong>Authenticity of Documents:</strong> All submitted educational credentials, technical diplomas, trade test certificates, experience letters and passports must be authentic and valid. Submission of counterfeit documents will result in immediate disqualification and regulatory reporting.</li>
              <li><strong>Medical Fitness:</strong> Candidates must undergo mandatory GAMCA / GCC approved medical screening. Concealment of pre-existing medical conditions disqualifying employment in GCC territories will lead to immediate cancellation of candidature.</li>
              <li><strong>No Sub-Agents:</strong> Candidates must interact solely through ACME Enterprises official offices (Mumbai HQ & Kerala Branch) or verified corporate email <code>@acmeofc.com</code>. ACME Enterprises accepts no liability for transactions made through unauthorized freelance brokers.</li>
              <li><strong>Service Charges:</strong> Any recruitment processing fee collected strictly conforms to the caps stipulated by the Ministry of External Affairs, Government of India.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="sec-turnaround-terms" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">05</div>
              <h2>Turnaround Shutdown & EPIC Technical Contracting</h2>
            </div>
            <p>
              For industrial plant turnarounds, EPIC maintenance and refinery shutdowns executed under ACME Enterprises and group synergy partner <strong>VSSTechnical Services</strong>:
            </p>
            <ul>
              <li><strong>Rapid Deployment SLAs:</strong> Mobilization of specialized turnaround crews (Mechanical, Piping, Welding, Scaffolding, NDT) adheres to agreed plant outage schedules and critical paths.</li>
              <li><strong>HSE Compliance:</strong> All deployed technical personnel must strictly abide by the client refinery's Health, Safety & Environment (HSE) protocols, Permit-to-Work (PTW) systems and hazard prevention guidelines.</li>
              <li><strong>Certified Trade Testing:</strong> Welders (6G, TIG, MIG, Inconel, Duplex) and Riggers are pre-tested at our certified trade facilities in Mumbai and Kerala prior to site deployment.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="sec-warranty" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">06</div>
              <h2>90-Day Candidate Probation & Replacement Warranty</h2>
            </div>
            <p>
              ACME Enterprises provides a standard <strong>90-day probationary replacement guarantee</strong> for deployed personnel. If a candidate is found technically incompetent or medically unfit within 90 days of arrival in the GCC:
            </p>
            <ul>
              <li>ACME will provide a certified replacement candidate at zero additional recruitment agency fee.</li>
              <li>Subject to prompt written notification by the employer accompanied by formal trade evaluation and repatriation documentation.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="sec-intellectual" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">07</div>
              <h2>Intellectual Property & Synergy Brands</h2>
            </div>
            <p>
              All trademarks, logos, trade test curricula, technical graphics  and corporate literature on this website are the intellectual property of <strong>M/s ACME Enterprises</strong> and its affiliated group synergy entities:
            </p>
            <ul>
              <li><strong>ACME Enterprises:</strong> Overseas Recruitment & Manpower Solutions</li>
              <li><strong>VSSTechnical Services:</strong> Turnaround Shutdowns & EPIC Contracting (Qatar)</li>
              {/* <li><strong>MATCO Group of Companies:</strong> GCC Local Manpower (Since 1982)</li> */}
              <li><strong>AYMAZ International:</strong> MEP Contracting & Facilities,GCC Local Manpower</li>
              <li><strong>KERBTECH International:</strong> Manufacturer,Import Export hospitality & Tourism</li>
            </ul>
            <p>Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited under international copyright laws.</p>
          </section>

          {/* Section 8 */}
          <section id="sec-liability" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">08</div>
              <h2>Limitation of Liability & Force Majeure</h2>
            </div>
            <p>
              ACME Enterprises shall not be held liable for mobilization delays caused by events beyond reasonable control, including but not limited to:
            </p>
            <ul>
              <li>Sovereign embassy visa delays, consular strikes, or sudden changes in foreign visa quota policies.</li>
              <li>Civil unrest, war, epidemiological quarantine restrictions, or airspace shutdowns.</li>
              <li>Airline schedule cancellations, mechanical flight groundings, or severe weather conditions.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="sec-jurisdiction" className="legal-section-block">
            <div className="legal-section-header">
              <div className="legal-sec-num">09</div>
              <h2>Governing Law, Jurisdiction & Dispute Resolution</h2>
            </div>
            <p>
              These Terms and Conditions shall be governed by, construed and enforced in accordance with the laws of the Republic of India and the Emigration Act 1983.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or relating to recruitment services shall be subject to the exclusive jurisdiction of the competent <strong>Courts in Mumbai Suburban, Maharashtra, India</strong>. Where mutually agreed, disputes may be referred to sole arbitration in Mumbai under the <em>Arbitration and Conciliation Act, 1996</em>.
            </p>
          </section>

          {/* Statutory Footer Pill */}
          <div className="legal-statutory-notice">
            <FileCheck size={24} className="stat-icon" />
            <div>
              <h4>Ministry of External Affairs Endorsement</h4>
              <p>
                Govt. Registered Agency (LIC No. RA 8283 MEA Approved | RC No: <strong>B0313/MUM/8283/2008</strong>). Operating under statutory Form-V terms. Official inquiries: <a href="mailto:info@acmeofc.com" style={{color: '#4ade80'}}>info@acmeofc.com</a>.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
