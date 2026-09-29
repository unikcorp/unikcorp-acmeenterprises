import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovingTicker from '../components/MovingTicker';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Database, 
  Flame, 
  HardHat, 
  Settings, 
  Zap, 
  Truck, 
  HeartPulse, 
  Utensils, 
  Printer, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Star, 
  MapPin, 
  Users,
  Sparkles,
  Award,
  Sun
} from 'lucide-react';

// Import HD Sector Photos
import imgConstruction from '../assets/1_construction_manpower.jpg';
import imgMechanical from '../assets/2_mechanical_industrial_shutdown.jpg';
import imgElectrical from '../assets/3_electrical_systems.jpg';
import imgTransport from '../assets/4_transport_logistics.jpg';
import imgHealthcare from '../assets/5_healthcare_staffing.jpg';
import imgHospitality from '../assets/6_hotel_hospitality.jpg';
import imgPrinting from '../assets/7_printing_advertising.jpg';
import imgSolar from '../assets/8_solar_installation.jpg';

import './HomePage.css';

const HomePage = () => {
  const previewSectors = [
    { image: imgConstruction, icon: <HardHat size={22} />, title: "Construction", desc: "Civil, steel fabricators, roads & ports", color: "#f29325" },
    { image: imgMechanical, icon: <Settings size={22} />, title: "Mechanical", desc: "Refineries, HVAC, piping & plant fitters", color: "#38bdf8" },
    { image: imgElectrical, icon: <Zap size={22} />, title: "Electrical", desc: "Power generation & distribution, cooling", color: "#f59e0b" },
    { image: imgTransport, icon: <Truck size={22} />, title: "Transport", desc: "Earthmovers, heavy drivers & port crew", color: "#a855f7" },
    { image: imgHealthcare, icon: <HeartPulse size={22} />, title: "Healthcare", desc: "Doctors, registered nurses & lab techs", color: "#ef4444" },
    { image: imgHospitality, icon: <Utensils size={22} />, title: "Hospitality", desc: "Chefs, catering, F&B & housekeeping", color: "#14b8a6" },
    { image: imgPrinting, icon: <Printer size={22} />, title: "Printing", desc: "Offset/screen printers & supervisors", color: "#6366f1" },
    { image: imgSolar, icon: <Sun size={22} />, title: "Solar & Clean Energy", desc: "Utility-scale PV arrays & grid connections", color: "#059669" }
  ];

  const clientHighlights = [
    "Alec Engineering (UAE)", "Petron (Oman)", "Mekdam Tech (Qatar)", 
    "CCC (KSA)", "Al Marwan (UAE)", "Qatar Airways", "Crowne Plaza", "Descon Eng.",
    "Cape East Ltd (Altrad)", "HEISCO (Kuwait)", "STS (Oman)", "Dubai Drydocks"
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section with dynamic rotating headings & floating motion badges */}
      <Hero />

      {/* 2. Continuous Moving Marquee Ticker */}
      <MovingTicker />

      {/* 3. Trust Credentials Strip */}
      <section className="trust-strip">
        <div className="trust-container">
          <div className="trust-item trust-card-interactive">
            <span className="trust-number counter-glow">15+</span>
            <div>
              <strong>Years of Excellence</strong>
              <p>Trusted Overseas Recruitment</p>
            </div>
          </div>
          <div className="trust-item trust-card-interactive">
            <ShieldCheck size={28} className="trust-icon pulse-soft" />
            <div>
              <strong>Govt. Registered</strong>
              <p>Lic: B-0313/MUM/PER/1000+/5/8283/2008</p>
            </div>
          </div>
          <div className="trust-item trust-card-interactive">
            <MapPin size={28} className="trust-icon pulse-soft" />
            <div>
              <strong>Dual Strategic Hubs</strong>
              <p>Mumbai HQ & Kerala Branch</p>
            </div>
          </div>
          <div className="trust-item trust-card-interactive">
            <Globe size={28} className="trust-icon pulse-soft" />
            <div>
              <strong>Global Network</strong>
              <p>Pan-India, GCC, Africa & Asia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us Summary Section */}
      <section className="home-about-section">
        <div className="page-container">
          <div className="home-about-grid">
            <div className="home-about-content">
              <div className="badge-teal animated-shimmer-badge">
                <Building2 size={15} /> ABOUT ACME ENTERPRISES
              </div>
              <h2 className="animated-heading-sweep">
                A Front-Runner in Professional Recruitment for Over 15 Years
              </h2>
              <p className="lead-text">
                Headquartered in Mumbai at <strong>28GF Damji Shamji Ind. Estate, LBS Marg, Vikhroli West</strong> with a branch office in <strong>Kerala</strong>, Acme Enterprises delivers comprehensive, reliable and cost-effective placements across all industries.
              </p>
              <p>
                From turnkey turnaround shutdowns and EPIC contracts to commercial facility staffing, we provide end-to-end human capital solutions backed by dedicated <strong>Trade Test Centers</strong> and a specialized <strong>Computerized Job Bank</strong>.
              </p>
              <div className="about-points">
                <div className="point-item hover-slide-right">
                  <CheckCircle size={18} />
                  <span>Full spectrum from unskilled laborers to licensed engineers</span>
                </div>
                <div className="point-item hover-slide-right">
                  <CheckCircle size={18} />
                  <span>Physical trade testing & credential verification across India</span>
                </div>
                <div className="point-item hover-slide-right">
                  <CheckCircle size={18} />
                  <span>Rapid mobilization for urgent turnaround maintenance projects</span>
                </div>
              </div>
              <div className="btn-group">
                <Link to="/about" className="btn-primary pulse-hover">
                  <span>Read Full Company Profile</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span>Contact Directors</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="home-about-card-box">
              <div className="stats-box">
                <div className="stat-pill stat-interactive">
                  <h3>1000+</h3>
                  <p>Workforce Mobilization Capacity</p>
                </div>
                <div className="stat-pill stat-interactive">
                  <h3>100%</h3>
                  <p>Trade Tested & Verified</p>
                </div>
                <div className="stat-pill stat-interactive">
                  <h3>5+</h3>
                  <p>GCC Countries Served</p>
                </div>
                <div className="stat-pill stat-interactive">
                  <h3>0</h3>
                  <p>HSE Incident Track Record</p>
                </div>
              </div>
              <div className="group-affiliate-note">
                <Flame size={20} className="flame-flicker" />
                <div>
                  <strong>Turnaround & Shutdown Partner</strong>
                  <p>Affiliated with VSS Technical Services (Qatar) for Oil & Gas maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sectors Preview Grid with HD Photo Thumbnails */}
      <section className="home-sectors-section">
        <div className="page-container">
          <div className="section-head-center">
            <div className="badge-teal animated-shimmer-badge">
              <HardHat size={15} /> OUR CORE COVERAGE
            </div>
            <h2 className="animated-heading-sweep">Sectors We Serve Worldwide</h2>
            <p>Providing high-precision technical and non-technical talent tailored to industrial specifications.</p>
          </div>

          <div className="preview-sectors-grid">
            {previewSectors.map((sector, index) => (
              <div className="preview-sector-card sector-hover-motion" key={index}>
                <div className="preview-sector-media">
                  <img 
                    src={sector.image} 
                    alt={`${sector.title} - ACME Enterprises`} 
                    className="preview-sector-img" 
                    loading="lazy" 
                  />
                  <div className="preview-sector-icon-overlay" style={{ color: sector.color, backgroundColor: `${sector.color}25` }}>
                    {sector.icon}
                  </div>
                </div>
                <div className="preview-sector-content">
                  <h3>{sector.title}</h3>
                  <p>{sector.desc}</p>
                  <Link to="/sectors" className="sector-link">
                    <span>View Trades</span>
                    <ArrowRight size={14} className="arrow-shift" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="center-btn-box">
            <Link to="/sectors" className="btn-primary pulse-hover">
              <span>Explore All 8 Sectors & Role Specifications</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Industrial Shutdown Feature Callout with HD Background Layer */}
      <section className="home-shutdown-feature">
        <div className="shutdown-bg-photo-layer" style={{ backgroundImage: `url(${imgMechanical})` }}></div>
        <div className="shutdown-bg-overlay"></div>
        <div className="page-container relative-z">
          <div className="shutdown-banner-box">
            <div className="shutdown-banner-left">
              <div className="badge-gold">
                <Flame size={15} className="flame-flicker" /> SPECIALIZED DIVISION
              </div>
              <h2>Turnaround Shutdowns, EPIC Contracts & Plant Maintenance</h2>
              <p>
                In partnership with <strong>VSS Technical Services (Qatar)</strong>, we mobilize elite crews for storage tank rehabilitation, bolt torquing, heat exchanger re-tubing and heavy industrial shutdowns under strict zero-incident HSE safety compliance.
              </p>
              <div className="shutdown-actions">
                <Link to="/shutdown-epic" className="btn-primary pulse-hover">
                  <span>Explore Shutdown Division</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/quote" className="btn-outline">
                  <span>Request Emergency Mobilization</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clients & Sister Concerns Infinite Moving Strip */}
      <section className="home-clients-strip">
        <div className="page-container">
          <div className="clients-strip-header">
            <h4>TRUSTED BY BLUE-CHIP CONTRACTORS ACROSS UAE, QATAR, OMAN, KUWAIT & KSA</h4>
          </div>
          <div className="client-tags-wrapper">
            {clientHighlights.map((client, idx) => (
              <span className="client-tag-pill client-pill-hover" key={idx}>
                {client}
              </span>
            ))}
          </div>
          <div className="client-strip-footer">
            <Link to="/clients" className="client-link-btn">
              <span>View Full Middle East Client Directory & Testimonials</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
