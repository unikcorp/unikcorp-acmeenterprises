import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Flame,
  Layers,
  Wrench,
  Plane,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';
import acmeLogo from '../assets/Acmelogo.png';
import vsstLogo from '../assets/vsst_logo.svg';
import kerbtechLogo from '../assets/kerbtech_logo.svg';
// import matcoLogo from '../assets/matco_logo.svg';
import './SisterConcernsPage.css';

const SisterConcernsPage = () => {
  const concerns = [
    {
      name: "VSS Technical Services (Vector Specialized Service – Qatar)",
      badge: "Heavy Industry & Plant Overhaul",
      tagline: "Execution of Turnaround Shutdowns, EPIC Contracts & Project Management",
      desc: "Vector Specialized Service (VSS) is promoted by entrepreneurs with vast experience in the execution of turnaround shutdowns, EPIC contracts and project management in Oil & Gas, Petrochemical and Fertilizer industrial facilities. The company delivers specialized technical services to execute contracts within strict timeframes without HSE incidents.",
      highlights: [
        "Turnaround Shutdown Maintenance Services",
        "Rehabilitation of Storage Tanks",
        "Critical Lifting Services",
        "Bolt Torquing and Tensioning",
        "Project Management Services",
        "Insulation Services",
        "Heat Exchanger Re-tubing Services",
        "Installation of Ferrules on Heat Exchangers",
        "Technical Manpower Support Services",
        "EPIC Projects",
        "Trading of Industrial Products",
        "Rope Access Services"
      ],
      icon: <Flame size={30} />,
      color: "#f29325"
    },
    // {
    //   name: "MATCO Group of Companies",
    //   badge: "Regional GCC Partner • Since 1982",
    //   tagline: "Sister Consignee for Local Manpower Supply & In-Country Support",
    //   desc: "Operating since 1982, MATCO Group of Companies acts as a strategic sister consignee of ACME Enterprises for the supply of manpower locally within the GCC region. MATCO supports on-ground mobilization, documentation and site-level project support, enabling faster deployment of ACME-sourced candidates to client facilities.",
    //   highlights: [
    //     "Over 40 Years of Regional Operating Experience (Since 1982)",
    //     "Sister Consignee of ACME Enterprises for Local Manpower Supply",
    //     "In-Country GCC Workforce Mobilization & Deployment",
    //     "On-Site Client Project Support & Coordination",
    //     "Rapid Response for Urgent & Emergency Manpower Demands",
    //     "Local Documentation & Onboarding Assistance"
    //   ],
    //   icon: <Layers size={30} />,
    //   color: "#38bdf8"
    // },
    {
      name: "AYMAZ International-MEP Contracting & Facilities,GCC Local Manpower",
      badge: "MEP, Facilities, Trading & Hospitality",
      tagline: "Empowering Trade, Engineering Excellence & Facility Solutions for a Sustainable Future",
      desc: "Aymaz has found the most innovative and strategic path to meet the needs of various industries. Focusing on local and multinational companies, we use the most modern and traditional strategies of recruitment to deliver any immediate requirement of manpower in a timely manner. We are a rapidly expanding organization offering a wide range of support services in Technical & Non-Technical Manpower, Building Construction & Maintenance.",
      highlights: [
        "Trading of Industrial Products & Materials",
        "MEP Contracting (Mechanical, Electrical & Plumbing)",
        "Complete Facilities Management Services",
        "Hospitality Management",
        "Building Maintenance & Operations",
        "Professional Technical & Non-Technical Manpower Supply",
        "Support Services for Building Construction & Maintenance"
      ],
      icon: <Wrench size={30} />,
      color: "#10b981"
    },
    {
      name: "KERBTECH International -Manufacturer, Import Export hospitality & Tourism",
      badge: "Hospitality & Corporate Travel",
      tagline: "Moving the Paradigm in Hospitality — Inbound & Outbound Tourism",
      desc: "Kerbtech International's Tourism division has constantly been moving the paradigm in hospitality through proactive sales and marketing, creating a platform for a wide spectrum of tourism across India. We help our clients offer the best of their services to the best-fitting patrons, with categorised experiences based on experience and affordability. Our understanding of Indian tourism runs deeper than the mere advisory level.",
      highlights: [
        "Honeymoon Packages",
        "Family Tours",
        "Adventurism Tours",
        "Religious Tours",
        "Medical Tourism with Rock-Bottom Prices",
        "Outbound Tourism — UAE, Qatar, Saudi Arabia, Europe, Singapore, Malaysia, Sri Lanka, Nepal",
        "Inbound Indian Tourism & Hospitality Management"
      ],
      icon: <Plane size={30} />,
      color: "#a855f7"
    }
  ];

  return (
    <div className="concerns-page">
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="page-banner-badge">
          <Building2 size={15} /> MULTI-DISCIPLINARY GROUP SYNERGY
        </div>
        <h1>
          Our Sister Concerns & <span>Global Associates</span>
        </h1>
        <p>
          Leveraging collaborative multi-sector expertise across India, Qatar and the wider GCC to deliver comprehensive turnkey solutions.
        </p>
      </section>

      {/* 2. 4-Quadrant Group Synergy Visual Grid */}
      <section className="page-container">
        <div className="four-quadrant-wrapper">
          <div className="four-quadrant-header">
            <div className="badge-teal">STRATEGIC GROUP NETWORK</div>
            <h2>ACME Group Allied Concerns & Sister Consignees</h2>
            <p>Seamlessly delivering overseas recruitment, heavy engineering shutdowns, regional GCC supply and tourism services.</p>
          </div>

          <div className="four-quadrant-grid">
            {/* Quadrant 1: ACME Enterprises */}
            <div className="quadrant-card quad-acme">
              <div className="quad-logo-area">
                <img src={acmeLogo} alt="ACME Enterprises Logo" className="quad-brand-img" />
              </div>
              <p className="quad-role-tag">Recruitment Solutions</p>
              <p className="quad-desc">
                Govt. Recognized Overseas Manpower Consultants & Technical Deployment.
                Lic. No.: B-0313/MUM/8283/2008 (valid up to 01 Nov 2028, 1000+ worker limit).
              </p>
            </div>

            {/* Quadrant 2: VSS Technical Services */}
            <div className="quadrant-card quad-vss">
              <div className="quad-logo-area">
                <img src={vsstLogo} alt="VSS Technical Services Logo" className="quad-brand-img" />
              </div>
              <p className="quad-role-tag">Turnaround & Industrial</p>
              <p className="quad-desc">
                Execution of turnaround shutdowns, EPIC Contracts and project management across
                Oil & Gas, Petrochemical and Fertilizer industrial facilities in Qatar.
              </p>
            </div>

            {/* Quadrant 3: KERBTECH INTERNATIONAL */}
            <div className="quadrant-card quad-kerbtech">
              <div className="quad-logo-area">
                <img src={kerbtechLogo} alt="KERBTECH International Tourism Logo" className="quad-brand-img" />
              </div>
              <p className="quad-role-tag">Tourism & Corporate Travel</p>
              <p className="quad-desc">
                Inbound Indian tourism, honeymoon / family / religious / medical packages and outbound
                corporate tourism across UAE, Qatar, Saudi Arabia, Europe, Singapore, Malaysia, Sri Lanka and Nepal.
              </p>
            </div>

            {/* Quadrant 4: MATCO GROUP OF COMPANY */}
            {/* <div className="quadrant-card quad-matco">
              <div className="quad-logo-area">
                <img src={matcoLogo} alt="MATCO Group of Company Logo" className="quad-brand-img" />
              </div>
              <p className="quad-role-tag">Regional GCC Partner • Since 1982</p>
              <p className="quad-desc">
                MATCO acts as a sister consignee of ACME Enterprises for the supply of manpower
                locally within the GCC and supports client project execution on the ground.
              </p>
            </div> */}
          </div>
        </div>

        {/* 3. Detailed Group Concerns Cards */}
        <div className="concerns-list">
          {concerns.map((c, index) => (
            <div className="concern-mega-card" key={index}>
              <div className="concern-card-top">
                <div
                  className="concern-icon-badge"
                  style={{ color: c.color, backgroundColor: `${c.color}15` }}
                >
                  {c.icon}
                </div>
                <div className="concern-title-area">
                  <span
                    className="concern-pill-badge"
                    style={{
                      color: c.color,
                      borderColor: `${c.color}40`,
                      backgroundColor: `${c.color}10`
                    }}
                  >
                    {c.badge}
                  </span>
                  <h2>{c.name}</h2>
                  <p className="concern-tagline">{c.tagline}</p>
                </div>
              </div>

              <div className="concern-card-body">
                <p className="concern-full-desc">{c.desc}</p>

                <div className="concern-highlights-box">
                  <h4>Core Capabilities & Operational Scope:</h4>
                  <div className="concern-points-grid">
                    {c.highlights.map((h, hIdx) => (
                      <div className="h-point" key={hIdx}>
                        <CheckCircle size={15} style={{ color: c.color }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Global Synergy Callout */}
        <div className="synergy-box">
          <div className="synergy-left">
            <Globe size={40} className="synergy-icon" />
            <div>
              <h3>Integrated Multi-Sector Group Strength</h3>
              <p>
                Through ACME Enterprises and our allied group companies, our clients benefit from a
                single point of accountability for overseas recruitment, technical shutdown execution,
                MEP contracting, local GCC logistics and corporate hospitality.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary">
            <span>Enquire Group Capabilities</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SisterConcernsPage;