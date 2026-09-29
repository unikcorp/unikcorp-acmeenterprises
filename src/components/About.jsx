import React from 'react';
import { 
  Building2, 
  Globe, 
  Database, 
  ShieldCheck, 
  Wrench, 
  Users, 
  CheckCircle2, 
  MapPin, 
  FileText,
  Flame,
  Briefcase,
  Sun,
  Zap
} from 'lucide-react';
import './About.css';

const About = () => {
  const pillars = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Trade Test Centers",
      desc: "Fully equipped trade testing facilities across India to evaluate and test candidates' practical expertise accurately before deployment."
    },
    {
      icon: <Globe size={28} />,
      title: "Wide & Global Network",
      desc: "Comprehensive pan-India sourcing network linked with international associate offices across Africa, Nepal, Sri Lanka, Bangladesh and Myanmar."
    },
    {
      icon: <Database size={28} />,
      title: "Computerized Job Bank",
      desc: "Extensive, computerized database of specialized engineers, supervisors, technicians and shutdown workforce ready for urgent mobilization."
    },
    {
      icon: <Flame size={28} />,
      title: "Shutdown & EPIC Expertise",
      desc: "Proven execution team qualified for major turnaround shutdowns, EPIC contracts and project management in Oil & Gas, Petrochemical and Fertilizer plants."
    }
  ];

  const solarHighlights = [
    "Rooftop Solar Installation",
    "Ground-Mounted Solar Systems",
    "Facade / BIPV Systems",
    "Ground-Mounted Piling & Civil Works",
    "Cable & Cable Tray Installation",
    "Module Installation & Commissioning",
    "Testing of Strings & Inverters",
    "Preventive & Corrective Maintenance"
  ];

  const sisterConcerns = [
    {
      name: "VSS Technical Services (Qatar)",
      tagline: "Execution of Turnaround Shutdowns, EPIC Contracts & Project Management",
      desc: "Vector Specialized Service offers project management and mobilization of specialized shutdown manpower for industrial facilities without HSE incidents."
    },
    // {
    //   name: "MATCO Group of Companies",
    //   tagline: "Local & Regional Manpower Supply (Since 1982)",
    //   desc: "Acts as a strategic sister consignee of ACME Enterprises for supplying manpower locally and facilitating client project support."
    // },
    {
      name: "AYMAZ",
      tagline: "Engineering, MEP Contracting & Facility Management",
      desc: "Delivering modern and traditional strategies for technical & non-technical manpower, MEP contracting, trading and building maintenance."
    },
    {
      name: "KERBTECH INTERNATIONAL",
      tagline: "Tourism & Corporate Hospitality Division",
      desc: "Specialized tourism and corporate hospitality solutions providing inbound and outbound tour packages and hospitality staffing."
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={16} /> ABOUT ACME ENTERPRISES
          </div>
          <h2>Professional Recruitment Solutions for Over 15 Years</h2>
          <p className="section-subtitle">
            A trusted leader in international human resource consultancy, technical recruitment and industrial workforce mobilization.
          </p>
        </div>

        {/* About Us Main Narrative (From PDF Page 2) */}
        <div className="about-main-grid">
          <div className="about-narrative-card">
            <h3 className="card-headline">About Us</h3>
            <p className="narrative-p">
              <strong>Acme Enterprises</strong> has been a front-runner in professional recruitment solutions for the last 15 years, based in India at <strong>28GF Damji Shamji Ind. Estate, LBS Marg, Vikhroli West, Mumbai - 400083</strong>. Acme is the consultant who provides cohesive, comprehensive and cost-effective placements in the business industry and service sector.
            </p>
            <p className="narrative-p">
              As a dedicated manpower consultant, we offer the entire spectrum of personnel requirements from unskilled to skilled workers and professionally qualified staff across all employment categories.
            </p>
            <p className="narrative-p">
              Since our establishment, we have <strong>set ourselves apart from other agencies</strong> not only by the quality of manpower but also by the effectiveness of our global network associate offices, all of which possess expert local skills and deep regional insights.
            </p>
            <p className="narrative-p">
              Our office premises are fully equipped and strategically located in <strong>Mumbai</strong>. We also have a branch office in <strong>Kerala, India</strong>. We maintain a widened network throughout India, including the facility services of <strong>Trade Test Centers</strong>, where we supply qualified, vetted and committed staff tailored accurately to our clients' precise needs.
            </p>
            <p className="narrative-p closing-quote">
              <em>"We are confident that we are able to provide you with complete solutions for all your human resource requirements and would be grateful for an opportunity to prove ourselves."</em>
            </p>
          </div>

          {/* Quick Facts / Credentials Sidebar */}
          <div className="about-credentials-card">
            <h3>Company Credentials</h3>
            <div className="credential-item">
              <span className="cred-icon"><FileText size={20} /></span>
              <div>
                <strong>Govt. License No.</strong>
                <p>LIC No. RA 8283 MEA Approved (B-0313/MUM/8283/2008)</p>
              </div>
            </div>
            <div className="credential-item">
              <span className="cred-icon"><MapPin size={20} /></span>
              <div>
                <strong>Head Office</strong>
                <p>28GF Damji Shamji Ind. Estate, LBS Marg, Vikhroli West, Mumbai - 400083, India</p>
              </div>
            </div>
            <div className="credential-item">
              <span className="cred-icon"><MapPin size={20} /></span>
              <div>
                <strong>Branch Office</strong>
                <p>Kerala, India</p>
              </div>
            </div>
            <div className="credential-item">
              <span className="cred-icon"><Globe size={20} /></span>
              <div>
                <strong>Global Sourcing Network</strong>
                <p>India, Africa, Nepal, Sri Lanka, Bangladesh, Myanmar</p>
              </div>
            </div>
            <div className="credential-badge-box">
              <CheckCircle2 size={18} />
              <span>Full Spectrum: Unskilled • Semi-Skilled • Skilled • Engineers • Executive</span>
            </div>
          </div>
        </div>

        {/* Company Overview (From PDF Page 3) */}
        <div className="about-overview-card">
          <div className="overview-header">
            <h3>Company Overview & Execution Capabilities</h3>
            <span className="overview-tag">Turnaround & Industrial Specialists</span>
          </div>
          <p>
            Acme Enterprises is promoted by highly experienced team members who possess extensive experience in the supply of manpower from India. We arrange all categories of personnel including <strong>Civil, Mechanical, Electrical and Hospitality</strong> services.
          </p>
          <p>
            We also have a specialized execution team qualified for <strong>turnaround shutdowns, EPIC Contracts and project management</strong> in Oil & Gas, Petrochemical and Fertilizer industrial facilities. Acme was established with the specific aim of delivering project management, mobilization of highly skilled and unskilled workforces and providing specialized technical services to execute contracts within strict timeframes without HSE incidents.
          </p>
          <p>
            Acme maintains a large database of specialized manpower including engineers, supervisory staff, service staff and workforce with a proven track record in the execution of major plant shutdowns and long-term infrastructure projects. We also specialize in supplying manpower to service sectors including <strong>MEP facilities, industrial cleaning, security services, hospitals, hotels and restaurants</strong>.
          </p>
        </div>

        {/* 4 Pillars Grid (Trade Testing, Network, Data Bank, Shutdowns) */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div className="pillar-card" key={index}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Solar & Renewable Energy Division (From PDF Page 10) */}
        <div className="about-overview-card solar-division-card">
          <div className="overview-header">
            <h3>Solar & Renewable Energy Division</h3>
            <span className="overview-tag solar-tag">Rooftop • Ground-Mounted • Facade Solar</span>
          </div>

          <h4 className="solar-tagline">Going beyond solar to boost local biodiversity</h4>

          <p className="solar-lead">
            <strong>We provide rooftop, ground-mounted and facade solar system installation and maintenance services.</strong>
          </p>

          <p>
            The rapid deployment of solar power on a large scale is essential to limit global warming to 1.5°C. Solar will play a huge contribution to decarbonizing the economy. Solar power has the lowest cost of electricity of all time and is scalable in nature.
          </p>

          <p>
            Solar systems can be integrated into building electrical infrastructure to reduce energy demand and save money on electricity bills. Building Integrated Photovoltaic (BIPV) can also be substituted with conventional building glass facades. BIPV modules are secured onto the prefabricated facades with a certified mounting system. All insulation materials used are compliant with relevant standards and installed under the supervision of professionals.
          </p>

          <p>
            We provide expertise in ground-mounted piling systems, civil drenching and installation of cables — including installation of cable trays, installation of modules, commissioning and testing. We also provide maintenance including cleaning of modules, testing of faulty strings and inverters and preventive and corrective maintenance services.
          </p>

          <div className="overview-services-block">
            <h4>Project Execution Team</h4>
            <p>
              Our project execution team consists of highly skilled project supervisors and technicians supported by project-specific managers for the timely execution of projects. The ground support team provides end-to-end support in terms of design, process and other related inputs to ensure the smooth execution of the projects.
            </p>
          </div>

          <div className="solar-highlights">
            {solarHighlights.map((point, idx) => (
              <div className="solar-point" key={idx}>
                <CheckCircle2 size={16} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sister Concerns / Group Companies (From PDF Page 8, 11, 12) */}
        <div className="sister-concerns-section" id="sister-concerns">
          <div className="sister-header">
            <h3>Our Sister Concerns & Global Associates</h3>
            <p>Collaborative multi-discipline group capabilities serving global clients</p>
          </div>
          <div className="sister-grid">
            {sisterConcerns.map((item, index) => (
              <div className="sister-card" key={index}>
                <div className="sister-card-top">
                  <h4>{item.name}</h4>
                  <span className="sister-tagline">{item.tagline}</span>
                </div>
                <p className="sister-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;