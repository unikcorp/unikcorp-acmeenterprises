import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Users, 
  Building2, 
  User, 
  ShieldCheck, 
  Globe,
  Flame,
  Award,
  Sparkles,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import heroBgImg from '../assets/oil_gas_turnaround.jpg';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    sector: 'Construction (Civil & Technical)',
    quantity: ''
  });

  // Dynamic rotating animated phrases
  const rotatingWords = [
    "Turnaround Shutdowns",
    "Oil & Gas Projects",
    "Engineering & Marine",
    "Civil & Infrastructure",
    "MEP & Power Plants",
    "Industrial Facility Crews"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500); // fade out duration before switching
    }, 3200);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/quote', { state: formData });
  };

  return (
    <section className="hero-section">
      {/* Background HD Industrial Image Layer */}
      <div 
        className="hero-bg-photo-layer" 
        style={{ backgroundImage: `url(${heroBgImg})` }}
        aria-hidden="true"
      ></div>
      <div className="hero-bg-overlay-gradient" aria-hidden="true"></div>

      {/* Background Animated Graphic Swoop Lines */}
      <div className="hero-swoop-bg">
        <svg className="swoop-svg" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="animated-swoop-line1" d="M200 0C650 180 1100 100 1440 400" stroke="#16a34a" strokeWidth="2.5" opacity="0.45" fill="none" />
          <path className="animated-swoop-line2" d="M100 0C550 220 1050 120 1440 450" stroke="#0284c7" strokeWidth="2" opacity="0.4" fill="none" />
        </svg>
      </div>

      {/* Floating Animated Motion Badges */}
      <div className="floating-badge-wrap float-badge-1">
        <div className="floating-badge-inner">
          <div className="float-icon-circle green-pulse">
            <Sparkles size={16} />
          </div>
          <div>
            <strong>15+ Years</strong>
            <span>Verified Track Record</span>
          </div>
        </div>
      </div>

      <div className="floating-badge-wrap float-badge-2">
        <div className="floating-badge-inner">
          <div className="float-icon-circle navy-pulse">
            <ShieldCheck size={16} />
          </div>
          <div>
            <strong>LIC No. RA 8283</strong>
            <span>MEA Approved Agency</span>
          </div>
        </div>
      </div>

      <div className="floating-badge-wrap float-badge-3">
        <div className="floating-badge-inner">
          <div className="float-icon-circle orange-pulse">
            <Flame size={16} />
          </div>
          <div>
            <strong>Turnaround Ready</strong>
            <span>Qatar & GCC Overhauls</span>
          </div>
        </div>
      </div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-pill-badge animated-shimmer-badge">
            <Users size={16} className="badge-icon-green" />
            <span>QUALITY MANPOWER, EVERY SECTOR</span>
            <span className="live-dot-pulse"></span>
          </div>

          <h1 className="hero-title">
            <span className="hero-static-title">Recruitment Solutions for</span> <br />
            <span className="moving-heading-container">
              <span className={`moving-dynamic-text ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                {rotatingWords[currentWordIndex]}
              </span>
            </span>
          </h1>

          <p className="hero-description">
            Delivering innovative recruitment swiftly providing technical and non-technical 
            manpower for Construction, Mechanical, Electrical, Transport, Healthcare and 
            Industrial Facilities worldwide.
          </p>

          <div className="hero-buttons">
            <Link to="/sectors" className="btn-hero-primary-green pulse-glow">
              <span>Explore Sectors</span>
              <ArrowRight size={18} />
            </Link>

            <a href="tel:+91 8291 05 3466" className="btn-hero-outline-navy">
              <Phone size={17} />
              <span>+91 8291 05 3466</span>
            </a>
          </div>
        </div>

        {/* Right Side Trust Features */}
        <div className="hero-right-trust-wrapper">
          <div className="hero-trust-features">
            <div className="trust-feature-item hover-lift">
              <Users size={18} className="feat-icon-green" />
              <span>Skilled Workforce</span>
            </div>
            <div className="trust-feature-item hover-lift">
              <ShieldCheck size={18} className="feat-icon-green" />
              <span>Trusted Partner</span>
            </div>
            <div className="trust-feature-item hover-lift">
              <Globe size={18} className="feat-icon-navy" />
              <span>Pan India Presence</span>
            </div>
          </div>
        </div>

        {/* Right Form Card matching user image */}
        {/* <div className="hero-form-wrapper">
          <div className="hero-form-card">
            <div className="form-card-badge">
              <TrendingUp size={14} /> Quick Requisition
            </div>
            <h2>Enquire With Us</h2>
            <p className="form-subtitle">Tell us your manpower requirements and get an instant assessment.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>
                  <User size={14} /> Email Address
                </label>
                <div className="input-box">
                  <Mail size={18} className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="form-field">
                <label>
                  <Building2 size={14} /> Select Service / Sector
                </label>
                <div className="input-box">
                  <Building2 size={18} className="input-icon" />
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
              </div>

              <div className="form-field">
                <label>
                  <Users size={14} /> Estimated Workforce Quantity
                </label>
                <div className="input-box">
                  <Users size={18} className="input-icon" />
                  <input 
                    type="text" 
                    placeholder="e.g. 50 workers" 
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="btn-form-submit-green">
                <span>Get a Quote</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;