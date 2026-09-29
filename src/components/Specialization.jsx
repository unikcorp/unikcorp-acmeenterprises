import React from 'react';
import { 
  CheckCircle, 
  Flame, 
  Factory, 
  ShieldCheck, 
  Wrench, 
  Cog, 
  Layers, 
  Award 
} from 'lucide-react';
import './Specialization.css';

const Specialization = () => {
  const capabilities = [
    { title: "Turnaround Shutdown Maintenance", desc: "Rapid mobilization of specialized crews for planned and emergency plant turnaround overhauls." },
    { title: "Rehabilitation of Storage Tanks", desc: "Complete repair, hydro-testing, shell plate replacement and certified tank maintenance." },
    { title: "Bolt Torquing & Tensioning", desc: "Precision controlled bolting and hydraulic tensioning for high-pressure petrochemical lines." },
    { title: "Heat Exchanger Re-Tubing & Ferrules", desc: "Expert extraction, re-tubing, ferrule installation and bundle testing under strict QA/QC." },
    { title: "Critical Lifting & Rigging Services", desc: "Certified riggers, crane operators and lifting supervisors for heavy industrial installation." },
    { title: "Rope Access & Industrial Insulation", desc: "IRATA certified technicians for high-elevation inspection, maintenance and thermal insulation." },
    { title: "EPIC Project Support", desc: "Engineering, Procurement, Installation & Commissioning support for Oil & Gas refineries." },
    { title: "Zero-Incident HSE Compliance", desc: "Strict adherence to Health Service Executive (HSE) standards, continuous safety audits and zero downtime." }
  ];

  return (
    <section className="specialization" id="specialization">
      <div className="spec-container">
        <div className="spec-header">
          <div className="spec-badge">
            <Flame size={16} /> INDUSTRIAL & SHUTDOWN SPECIALIZATION
          </div>
          <h2>Turnaround Shutdowns, EPIC Contracts & Plant Maintenance</h2>
          <p>
            In partnership with <strong>VSS Technical Services (Qatar)</strong>, Acme Enterprises maintains an elite execution team with extensive experience in Oil & Gas, Petrochemical and Fertilizer facilities.
          </p>
        </div>

        <div className="spec-content-grid">
          <div className="spec-left">
            <div className="spec-highlight-box">
              <Factory size={32} />
              <div>
                <h3>Proven Track Record in Major Turnarounds</h3>
                <p>
                  We maintain a dedicated, live database of pre-screened shutdown engineers, supervisors, certified welders (6G/TIG), fabricators and riggers capable of mobilizing at scale within guaranteed timeframes.
                </p>
              </div>
            </div>

            <div className="capabilities-grid">
              {capabilities.map((item, index) => (
                <div className="capability-card" key={index}>
                  <div className="cap-icon">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="spec-right">
            <div className="hse-card">
              <div className="hse-icon-box">
                <ShieldCheck size={36} />
              </div>
              <h3>Rigorous HSE & Safety Standards</h3>
              <p>
                Safety is the absolute priority across all deployments. Strict Health & Safety Executive (HSE) procedures are enforced with regular safety drills and third-party compliance verification.
              </p>
              <ul className="hse-list">
                <li><CheckCircle size={16} /> Zero Lost Time Injury (LTI) Objective</li>
                <li><CheckCircle size={16} /> Pre-Deployment Safety Inductions</li>
                <li><CheckCircle size={16} /> Verified Hot & Cold Work Certifications</li>
                <li><CheckCircle size={16} /> 24/7 Site Supervisor HSE Coordination</li>
              </ul>
              <div className="spec-cta-box">
                <p>Planning a planned maintenance turnaround or expansion?</p>
                <a href="#enquire" className="btn-primary full-width">
                  Consult Shutdown Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;