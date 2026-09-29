import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  FileCheck
} from 'lucide-react';
import acmeLogoBlue from '../assets/acme_logo_official_blue.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* 1. Pre-Footer Callout Bar */}
      <div className="pre-footer-bar">
        <div className="pre-footer-container">
          <div className="pre-footer-left">
            <div className="pre-footer-tag-wrap">
              <span className="pre-footer-tag">RAPID MOBILIZATION</span>
            </div>
            <h3>Need Emergency Manpower or Turnaround Maintenance Crews?</h3>
            <p className="pre-footer-subtext">
              Direct line to Business Director:{" "}
              <a href="tel:+919867993292" className="pre-footer-phone-link">
                <Phone size={14} /> <strong>+91 9137 73 9573</strong>
              </a>{" "}
              <span className="availability-badge">(24/7 Available)</span>
            </p>
          </div>
          <div className="pre-footer-right">
            <Link to="/quote" className="btn-footer-cta">
              <span>Request Instant Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Grid */}
      <div className="footer-main">
        
        {/* Column 1: Brand & Credibility with official Logo */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={acmeLogoBlue} alt="ACME Enterprises Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-bio">
            Government-recognized overseas recruitment specialist for over 15 years, mobilizing verified technical talent across India and the GCC.
          </p>
          <div className="footer-license-pill">
            <FileCheck size={18} className="lic-icon" />
            <div>
              <span className="lic-title">LIC No. RA 8283 MEA Approved</span>
              <span className="lic-num">Lic. B-0313/MUM/PER/1000+/5/8283/2008</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/sectors">Sectors & Trades</Link></li>
            <li><Link to="/shutdown-epic">Industrial Turnarounds</Link></li>
            <li><Link to="/clients">Our GCC Clients</Link></li>
            <li><Link to="/sister-concerns">Our Services</Link></li>
            <li><Link to="/contact">Contact Directory</Link></li>
          </ul>
        </div>

        {/* Column 3: Sister Concerns */}
        <div className="footer-col">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-concerns-clean">
            <li>
              <Link to="/sister-concerns">
                <strong>VSS Technical Services</strong>
                <span>Qatar (Turnaround Shutdowns & EPIC)</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/sister-concerns">
                <strong>MATCO Group of Companies</strong>
                <span>GCC Local Manpower (Since 1982)</span>
              </Link>
            </li> */}
            <li>
              <Link to="/sister-concerns">
                <strong>AYMAZ International</strong>
                <span>MEP Contracting & Facilities,GCC Local Manpower</span>
              </Link>
            </li>
            <li>
              <Link to="/sister-concerns">
                <strong>KERBTECH International</strong>
                <span>Manufacturer, Import Export hospitality & Tourism</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Hubs */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Headquarters & Contact</h4>
          
          <div className="contact-entry">
            <MapPin size={18} className="c-icon" />
            <div>
              <strong>Mumbai Head Office:</strong>
              <p>GF28, Damji Shamji Ind. Estate, LBS Marg, Vikhroli West, Mumbai - 400083</p>
            </div>
          </div>

          <div className="contact-entry">
            <Phone size={18} className="c-icon" />
            <div>
              <strong>Phone & WhatsApp:</strong>
              <p>+91 8291 05 3466</p>
              <p>Cell: +91 9137 73 9573</p>
            </div>
          </div>

          <div className="contact-entry">
            <Mail size={18} className="c-icon" />
            <div>
              <strong>Official Email:</strong>
              <p><a href="mailto:info@acmeofc.com">info@acmeofc.com</a></p>
                 <p><a href="mailto:reqacme@gmail.com">reqacme@gmail.com</a></p>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom Bar with Statutory & Legal Links */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              © {new Date().getFullYear()} <strong>ACME Enterprises</strong>. All rights reserved. Registered with Ministry of External Affairs.
            </p>
            <div className="footer-legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="dot-sep">•</span>
              <Link to="/terms-conditions">Terms of Condition</Link>
              <span className="dot-sep">•</span>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>

          <div className="footer-credits">
            <span>Trade Test Centers Mumbai & Kerala</span>
            <span className="dot-sep">•</span>
            <a 
              href="https://unikcorp.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="unik-credit-link"
            >
              Powered by <span className="green-text">UNIK CORP</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;