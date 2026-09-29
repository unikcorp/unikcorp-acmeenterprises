import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  ShieldCheck, 
  Factory, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Sun,
  Layers,
  AlertTriangle,
  Cog,
  Gauge,
  Users,
  Compass,
  PackageCheck,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import marineDrydockImg from '../assets/marine_drydock.jpg';
import './ShutdownEpicPage.css';

const ShutdownEpicPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const vssCapabilities = [
    { 
      num: "01", 
      icon: <Flame size={24} />, 
      title: "Turnaround Shutdown Maintenance Services", 
      category: "Turnaround & EPIC",
      desc: "Complete multidiscipline crew mobilization for planned overhaul and emergency refinery shutdowns.",
      color: "#ea580c"
    },
    { 
      num: "02", 
      icon: <Factory size={24} />, 
      title: "Rehabilitation of Storage Tanks", 
      category: "Mechanical & Piping",
      desc: "Tank jacking, bottom plate replacement, shell repair, hydro-testing and certified coating.",
      color: "#0284c7"
    },
    { 
      num: "03", 
      icon: <Layers size={24} />, 
      title: "Critical Lifting & Rigging Services", 
      category: "Specialized Trade",
      desc: "Appointed persons, lifting supervisors and certified riggers for heavy plant component installations.",
      color: "#16a34a"
    },
    { 
      num: "04", 
      icon: <Wrench size={24} />, 
      title: "Bolt Torquing & Hydraulic Tensioning", 
      category: "Mechanical & Piping",
      desc: "Controlled joint integrity and flange management on high-pressure hydrocarbon piping.",
      color: "#f59e0b"
    },
    { 
      num: "05", 
      icon: <Cog size={24} />, 
      title: "EPIC & Project Management Services", 
      category: "Turnaround & EPIC",
      desc: "Engineering, Procurement, Installation and Commissioning execution in Oil & Gas and Petrochemical plants.",
      color: "#8b5cf6"
    },
    { 
      num: "06", 
      icon: <Layers size={24} />, 
      title: "Industrial Insulation & Cladding", 
      category: "Specialized Trade",
      desc: "Hot, cold, acoustic and cryogenic insulation for process piping, vessels and columns.",
      color: "#06b6d4"
    },
    { 
      num: "07", 
      icon: <Gauge size={24} />, 
      title: "Heat Exchanger Re-Tubing Services", 
      category: "Mechanical & Piping",
      desc: "Tube extraction, high-pressure re-tubing, expander rolling and hydro-testing of bundle units.",
      color: "#10b981"
    },
    { 
      num: "08", 
      icon: <CheckCircle2 size={24} />, 
      title: "Installation of Ferrules on Exchangers", 
      category: "Mechanical & Piping",
      desc: "High-precision protective ferrule inserts to prevent inlet tube erosion in harsh chemical environments.",
      color: "#3b82f6"
    },
    { 
      num: "09", 
      icon: <Users size={24} />, 
      title: "Technical Manpower Support Services", 
      category: "Specialized Trade",
      desc: "Supplying certified 6G/TIG welders, pipe fabricators, millwrights and instrument technicians.",
      color: "#f97316"
    },
    { 
      num: "10", 
      icon: <Compass size={24} />, 
      title: "Rope Access Services (IRATA)", 
      category: "Inspection & Safety",
      desc: "High-elevation industrial inspection, non-destructive testing, blasters and painters.",
      color: "#ec4899"
    },
    { 
      num: "11", 
      icon: <PackageCheck size={24} />, 
      title: "Trading of Industrial Products", 
      category: "Specialized Trade",
      desc: "Supply of specialized industrial gaskets, fasteners, valves and refinery maintenance materials.",
      color: "#14b8a6"
    },
    { 
      num: "12", 
      icon: <ShieldCheck size={24} />, 
      title: "Safety & HSE Auditing Management", 
      category: "Inspection & Safety",
      desc: "Integrated Health & Safety Executive procedures ensuring zero lost-time incidents on every turnaround.",
      color: "#22c55e"
    }
  ];

  const filteredCapabilities = selectedCategory === 'ALL'
    ? vssCapabilities
    : vssCapabilities.filter(c => c.category === selectedCategory);

  return (
    <div className="shutdown-page">
      {/* 1. Page Header Banner with HD background layer */}
      <section className="page-banner page-banner-with-bg">
        <div 
          className="banner-bg-img-layer" 
          style={{ backgroundImage: `url(${marineDrydockImg})` }}
          aria-hidden="true"
        ></div>
        <div className="banner-bg-overlay-grad" aria-hidden="true"></div>
        <div className="banner-content-relative">
          <div className="page-banner-badge">
            <Flame size={15} /> SPECIALIZED HEAVY INDUSTRY DIVISION
          </div>
          <h1>
            Turnaround Shutdowns & <span>EPIC Contracts</span>
          </h1>
          <p>
            Mobilizing specialized technical task forces for Oil & Gas, Petrochemical and Fertilizer facilities in strategic partnership with <strong>VSS Technical Services (Qatar)</strong>.
          </p>
        </div>
      </section>

      {/* 2. Overview Banner */}
      <section className="page-container">
        <div className="vss-profile-card">
          <div className="vss-profile-header">
            <div className="vss-logo-badge">VSS</div>
            <div>
              <h2>Vector Specialized Service (VSS Technical Services - Qatar)</h2>
              <p className="vss-subhead">Promoted by entrepreneurs with vast experience in turnaround shutdowns, EPIC contracts and project management.</p>
            </div>
          </div>
          <div className="vss-profile-body">
            <p>
              Vector Specialized Service offers project management and mobilization of highly skilled, skilled and certified workforces including specialized engineering services to execute contracts within strict timeframes and without any HSE incidents.
            </p>
            <p>
              We maintain an extensive, live database of shutdown specialized manpower — including shutdown managers, planning engineers, execution superintendents, certified QA/QC inspectors and master craftsmen with proven track records in major turnaround shutdowns across the Middle East.
            </p>
          </div>
        </div>

        {/* 3. 12 Core Specialized Capabilities Grid - Modern Redesign */}
        <div className="capabilities-redesign-wrapper">
          <div className="section-head-center">
            <div className="badge-teal">TURNAROUND SCOPE OF WORK</div>
            <h2>Our 12 Turnaround & Industrial Capabilities</h2>
            <p>Comprehensive multidisciplinary capabilities executed under strict zero-incident HSE safety standards.</p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="capabilities-filter-bar">
            {['ALL', 'Turnaround & EPIC', 'Mechanical & Piping', 'Inspection & Safety', 'Specialized Trade'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cap-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'ALL' ? 'All 12 Capabilities' : cat}
              </button>
            ))}
          </div>

          {/* Redesigned 12 Capabilities Cards Grid */}
          <div className="capabilities-modern-grid">
            {filteredCapabilities.map((cap, idx) => (
              <div 
                className="cap-modern-card" 
                key={idx}
                style={{ '--cap-accent': cap.color }}
              >
                <div className="cap-card-top-bar">
                  <div className="cap-icon-box" style={{ color: cap.color, backgroundColor: `${cap.color}15`, borderColor: `${cap.color}35` }}>
                    {cap.icon}
                  </div>
                  <div className="cap-meta-badges">
                    <span className="cap-category-pill" style={{ color: cap.color, borderColor: `${cap.color}30`, backgroundColor: `${cap.color}10` }}>
                      {cap.category}
                    </span>
                    <span className="cap-number-badge">{cap.num}</span>
                  </div>
                </div>

                <div className="cap-card-content">
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>

                <div className="cap-card-footer">
                  <span className="cap-verified-tag">
                    <CheckCircle size={13} style={{ color: cap.color }} />
                    <span>Verified VSS Scope</span>
                  </span>
                  <Link to="/quote" className="cap-action-link" style={{ color: cap.color }}>
                    <span>Mobilize</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. HSE & Solar Specialized Highlight */}
        <div className="shutdown-extra-grid">
          <div className="extra-card hse-card">
            <div className="extra-card-icon"><ShieldCheck size={28} /></div>
            <h3>Zero-Incident HSE Culture</h3>
            <p>
              VSS Qatar and ACME Enterprises operate under strict global Health, Safety & Environment protocols. Every recruited technician undergoes specialized hazard identification, gas testing orientation and toolbox training prior to site deployment.
            </p>
          </div>

          <div className="extra-card solar-card">
            <div className="extra-card-icon"><Sun size={28} /></div>
            <h3>Solar PV, BIPV & Clean Energy Services</h3>
            <p>
              Providing turnkey <strong>Rooftop, Ground-Mounted & Façade (BIPV) Solar Systems</strong> installation and maintenance. Specializing in ground-mounted piling systems, civil trenching, cable tray & module installation, commissioning, faulty string/inverter diagnostics and preventive & corrective maintenance across the GCC.
            </p>
          </div>
        </div>

        {/* 5. Bottom Requisition CTA */}
        <div className="shutdown-cta-box">
          <div className="shutdown-cta-left">
            <h3>Plan Your Next Turnaround Shutdown Mobilization</h3>
            <p>Speak with our specialized shutdown coordinators in Mumbai and Qatar.</p>
          </div>
          <div className="shutdown-cta-right">
            <Link to="/contact" className="btn-primary">
              <span>Contact Shutdown Desk</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/quote" className="btn-outline">
              <span>Submit Requisition</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ShutdownEpicPage;
