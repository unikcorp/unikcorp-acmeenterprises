import React from 'react';
import { 
  HardHat, 
  Settings, 
  Zap, 
  Truck, 
  HeartPulse, 
  Utensils, 
  Printer, 
  Building 
} from 'lucide-react';
import './Sectors.css';

const Sectors = () => {
  const sectors = [
    { 
      icon: <HardHat size={26} />, 
      title: "Construction Sector", 
      desc: "Supplying civil engineers, steel & aluminum fabricators, scaffolders and workforce for Roads, Highways, Bridges and Airport/Seaport construction projects.", 
      roles: ["Civil Engineers", "Steel Fabricators", "Roads & Highways", "Airports & Seaports"],
      bg: "#fef3c7", 
      color: "#d97706" 
    },
    { 
      icon: <Settings size={26} />, 
      title: "Mechanical Sector", 
      desc: "Erection and Maintenance of Steel Plants, OilRefineries, Petrochemical Plants, HVAC Systems and Water Treatment Plants.", 
      roles: ["Refinery Fitters", "HVAC Technicians", "Piping Fabricators", "Plant Maintenance"],
      bg: "#dbeafe", 
      color: "#2563eb" 
    },
    { 
      icon: <Zap size={26} />, 
      title: "Electrical Sector", 
      desc: "Erection & maintenance of Power Generation & Distribution, Air Conditioning & Cooling Plants and Heating & Ventilation Systems.", 
      roles: ["Power Distribution", "Industrial Electricians", "Cooling Plant Techs", "HVAC Specialists"],
      bg: "#fef9c3", 
      color: "#ca8a04" 
    },
    { 
      icon: <Truck size={26} />, 
      title: "Transport Sector", 
      desc: "Operation & Maintenance of Earthmovers & Excavation Units, Light & Heavy Automobiles and Electric & Pneumatic System and Port services by Sea, Air and Road..", 
      roles: ["Earthmover Operators", "Heavy Drivers", "Port Handlers", "Pneumatic Techs"],
      bg: "#f3e8ff", 
      color: "#9333ea" 
    },
    { 
      icon: <HeartPulse size={26} />, 
      title: "Health Care Sector", 
      desc: "Supplying vetted healthcare professionals including Doctors, Senior & Junior Nurses, Lab Technicians, Health Care Assistants and ancillary support staff.", 
      roles: ["Registered Doctors", "Specialized Nurses", "Lab Technicians", "Care Assistants"],
      bg: "#ffe4e6", 
      color: "#e11d48" 
    },
    { 
      icon: <Utensils size={26} />, 
      title: "Hotel & Hospitality Sector", 
      desc: "Complete staffing solutions for Pantry Units, Facility Services, Food & Beverage (F&B) Units, Industrial Catering, Housekeeping and certified Lifeguards.", 
      roles: ["F&B Staff", "Executive Chefs", "Housekeeping", "Lifeguards"],
      bg: "#ccfbf1", 
      color: "#0d9488" 
    },
    { 
      icon: <Printer size={26} />, 
      title: "Printing & Publication", 
      desc: "Specialized printing professionals including Offset & Screen Printers, Binders & Helpers, Floor Supervisors and Production Managers.", 
      roles: ["Offset Printers", "Screen Printers", "Binders & Helpers", "Production Supervisors"],
      bg: "#e0e7ff", 
      color: "#4f46e5" 
    },
    { 
      icon: <Building size={26} />, 
      title: "Commercial & Retail Sector", 
      desc: "Staffing for Shopping Malls, Municipal Sewage & Cleaning units, Office Clerks, Accountants, Receptionists and Corporate Office Managers.", 
      roles: ["Accountants & Clerks", "Receptionists", "Mall Sales Crew", "Cleaning Units"],
      bg: "#fce7f3", 
      color: "#db2777" 
    }
  ];

  return (
    <section className="sectors" id="sectors">
      <div className="section-header">
        <h4>OUR SECTORS & COVERAGE</h4>
        <h2>Sectors We Serve Worldwide</h2>
        <p>
          We are committed to providing you high-quality, verified manpower tailored to the demanding technical requirements of each industry.
        </p>
      </div>
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <div className="sector-card" key={index}>
            <div className="sector-icon" style={{ backgroundColor: sector.bg, color: sector.color }}>
              {sector.icon}
            </div>
            <h3>{sector.title}</h3>
            <p>{sector.desc}</p>
            <div className="sector-tags">
              {sector.roles.map((role, rIdx) => (
                <span className="role-tag" key={rIdx}>{role}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;