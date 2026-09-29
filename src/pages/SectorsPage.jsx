import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  Settings, 
  Zap, 
  Truck, 
  HeartPulse, 
  Utensils, 
  Printer, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck,
  Sun
} from 'lucide-react';

// Import 8 Sector HD Photos
import imgConstruction from '../assets/1_construction_manpower.jpg';
import imgMechanical from '../assets/2_mechanical_industrial_shutdown.jpg';
import imgElectrical from '../assets/3_electrical_systems.jpg';
import imgTransport from '../assets/4_transport_logistics.jpg';
import imgHealthcare from '../assets/5_healthcare_staffing.jpg';
import imgHospitality from '../assets/6_hotel_hospitality.jpg';
import imgPrinting from '../assets/7_printing_advertising.jpg';
import imgSolar from '../assets/8_solar_installation.jpg';

import './SectorsPage.css';

const SectorsPage = () => {
  const sectors = [
    {
      id: "construction",
      image: imgConstruction,
      icon: <HardHat size={28} />,
      title: "Construction & Civil Engineering",
      subtitle: "Civil Infrastructure, Commercial & Industrial Builds",
      desc: "Supplying fully credentialed engineers, foremen and skilled craftspeople to Civil, Oil & Gas Construction Companies, Steel & Aluminum Fabrications, Roads & Highways and Airport/Seaport projects.",
      roles: [
        "Civil & Structural Engineers", "Site Foremen & Supervisors", "Steel & Aluminum Fabricators",
        "Masons, Tile Layers & Plasterers", "Shuttering & Framing Carpenters", "Scaffolders (CISRS/TUV)",
        "Road & Highway Construction Crews", "Airport & Seaport Infrastructure Specialists"
      ],
      color: "#f29325"
    },
    {
      id: "mechanical",
      image: imgMechanical,
      icon: <Settings size={28} />,
      title: "Mechanical Sector & Plant Maintenance",
      subtitle: "Refineries, HVAC, Heavy Erection & Piping",
      desc: "Specialized in the erection and routine/turnaround maintenance of Steel Plants, Oil Refineries, Petrochemical Plants, HVAC Systems and industrial Water Treatment plants.",
      roles: [
         "Pipe Fitters & Pipe Fabricators", "Mechanical Erectors & Millwrights",
        "HVAC Ductmen & Chiller Techs", "Plumbing & Piping Technicians", "Hydraulic & Pneumatic Mechanics",
        "Water Treatment Plant Operators", "QA/QC Mechanical Inspectors"
      ],
      color: "#38bdf8"
    },
    {
      id: "electrical",
      image: imgElectrical,
      icon: <Zap size={28} />,
      title: "Electrical Sector & Power Systems",
      subtitle: "High Voltage, Substations & Building Electrification",
      desc: "Erection & maintenance of Power Generation & Distribution, High/Low Voltage Substations, Air Conditioning & Cooling Plants and Heating & Ventilation Systems.",
      roles: [
        "Industrial Electricians", "Power Generation & Distribution Techs", "Substation & Transformer Techs",
        "Control Panel Wiremen", "Cable Jointer (HV/LV Certified)", "Air Conditioning & Cooling Techs",
        "Heating & Ventilation Technicians", "Electrical Safety Officers"
      ],
      color: "#f59e0b"
    },
    {
      id: "transport",
      image: imgTransport,
      icon: <Truck size={28} />,
      title: "Transport & Heavy Earthmovers",
      subtitle: "Fleet Logistics, Excavation & Plant Heavy Machinery",
      desc: "Providing certified, licensed heavy/light vehicle drivers and heavy plant operators for Earth Moving Projects, Seaport handling and municipal logistics.",
      roles: [
        "Heavy Trailer & Lowbed Drivers", "Crane Operators (Mobile/Tower 50T-500T)", "Excavator, Bulldozer & JCB Operators",
        "Forklift & Reach Stacker Drivers", "Light Vehicle Drivers (GCC Licensed)", "Automotive Diesel & Hydraulic Mechanics",
        "Auto Electricians & A/C Mechanics", "Fleet Maintenance Coordinators"
      ],
      color: "#a855f7"
    },
    {
      id: "healthcare",
      image: imgHealthcare,
      icon: <HeartPulse size={28} />,
      title: "Healthcare & Paramedical Sector",
      subtitle: "Hospitals, Clinics, Laboratories & Industrial Medical",
      desc: "Mobilizing certified healthcare professionals with MOH/DHA/Prometric registrations for Hospitals, Private Clinics, Industrial Site First-Aid and Diagnostic Centers.",
      roles: [
        "Specialist Doctors & General Physicians", "Registered Staff Nurses (ICU/OT/ER)", "Lab & Diagnostic Technicians",
        "Radiology & X-Ray Technicians", "Health Care Assistants & Orderlies", "Pharmacy Assistants & Storekeepers",
        "Hospital Sanitation Specialists", "Paramedical Emergency Technicians"
      ],
      color: "#ef4444"
    },
    {
      id: "hospitality",
      image: imgHospitality,
      icon: <Utensils size={28} />,
      title: "Hotel & Hospitality Sector",
      subtitle: "Hotels, Catering Units & Commercial Facilities",
      desc: "Comprehensive management and operational staffing for Pantry Units, Facility Services, Food & Beverages (F&B) Units, Industrial Catering, Housekeeping and certified Lifeguards.",
      roles: [
        "Executive & Commis Chefs", "F&B Service Captains & Waiters", "Industrial Catering Supervisors",
        "Housekeeping & Room Attendants", "Pantry Staff & Kitchen Stewards", "Certified Swimming Pool Lifeguards",
        "Laundry & Dry Cleaning Staff", "Hospitality Facility Managers"
      ],
      color: "#14b8a6"
    },
    {
      id: "printing",
      image: imgPrinting,
      icon: <Printer size={28} />,
      title: "Printing & Publication Sector",
      subtitle: "Commercial Printing Presses & Pre-Press Operations",
      desc: "Specialized printing industry professionals including Offset & Screen Printers, Binders & Helpers, Floor Supervisors and Production Managers.",
      roles: [
        "Offset Machine Operators (Heidelberg/Komori)", "Screen Printing Specialists", "Bindery & Finishing Technicians",
        "Floor Supervisors & Production Heads", "Pre-Press & Graphic Visualizers", "Junior & Senior Copy Writers",
        "Events Media Technicians", "Quality Checkers & Helpers"
      ],
      color: "#6366f1"
    },
    {
      id: "solar",
      image: imgSolar,
      icon: <Sun size={28} />,
      title: "Solar Installation & Clean Energy",
      subtitle: "Utility-Scale PV Arrays, Commercial Rooftops & Substation Grids",
      desc: "Certified photovoltaic installation technicians, solar structural riggers, DC-AC inverter wiremen and substation grid connection engineers for clean energy power projects across the GCC.",
      roles: [
        "Solar PV Installation Technicians", "Substation Interconnection Engineers", "Solar Array Framing & Mounting Riggers",
        "DC/AC Inverter & Transformer Techs", "High-Elevation Harness Specialists", "Solar Park Maintenance Technicians",
        "QA/QC Renewable Energy Inspectors", "Solar Safety & HSE Officers"
      ],
      color: "#059669"
    }
  ];

  return (
    <div className="sectors-page">
      {/* 1. Banner with HD Background Layer */}
      <section className="page-banner page-banner-with-bg">
        <div 
          className="banner-bg-img-layer" 
          style={{ backgroundImage: `url(${imgConstruction})` }}
          aria-hidden="true"
        ></div>
        <div className="banner-bg-overlay-grad" aria-hidden="true"></div>
        <div className="banner-content-relative">
          <div className="page-banner-badge">
            <HardHat size={15} /> 8 CORE INDUSTRY SECTORS
          </div>
          <h1>
            Our Sectors & <span>Trade Coverage</span>
          </h1>
          <p>
            Supplying pre-screened, trade-tested and verified personnel across 8 major technical and commercial sectors worldwide.
          </p>
        </div>
      </section>

      {/* 2. Detailed Sectors Grid with Integrated HD Visuals */}
      <section className="page-container">
        <div className="sectors-detail-list">
          {sectors.map((sec, index) => (
            <div className="sector-detail-card" id={sec.id} key={index}>
              
              {/* Left Column: Visual Photo & Description */}
              <div className="sector-detail-left">
                <div className="sector-card-photo-box">
                  <img 
                    src={sec.image} 
                    alt={`${sec.title} - ACME Enterprises`} 
                    className="sector-card-photo" 
                    loading="lazy" 
                  />
                  <div className="sector-photo-badge" style={{ backgroundColor: sec.color }}>
                    {sec.icon}
                    <span>{sec.subtitle}</span>
                  </div>
                </div>

                <div className="sector-text-wrap">
                  <h3>{sec.title}</h3>
                  <p className="sector-desc">{sec.desc}</p>
                  <Link to="/quote" className="btn-primary sector-req-btn">
                    <span>Requisition {sec.title}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Roles Grid */}
              <div className="sector-detail-right">
                <h4>Key Personnel & Trade Roles Supplied:</h4>
                <div className="roles-grid">
                  {sec.roles.map((role, rIdx) => (
                    <div className="role-pill" key={rIdx}>
                      <CheckCircle size={14} className="role-check" style={{ color: sec.color }} />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="sectors-bottom-cta">
          <div className="sec-cta-left">
            <h3>Need Trades Not Listed Here?</h3>
            <p>We maintain an extensive, nationwide computerized database of over 25,000 certified candidates across diverse specialized industrial trades.</p>
          </div>
          <div className="sec-cta-right">
            <Link to="/quote" className="btn-primary">
              <span>Submit Custom Job Specification</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
