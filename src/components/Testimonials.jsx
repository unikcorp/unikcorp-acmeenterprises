import React, { useState } from 'react';
import { Star, Building2, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const clientCategories = [
    {
      country: "UAE",
      clients: [
        "Alec Engineering & Contracting",
        "Al Marwan General Contracting",
        "Muzaki General Contracting",
        "Cape East Ltd (Altrad)",
        "Emdad Services",
        "Target Engineering",
        "Descon Engineering",
        "Damac Properties",
        "Crowne Plaza & Ramada",
        "Delta & Emirates Printing Press"
      ]
    },
    {
      country: "QATAR",
      clients: [
        "Mekdam Technical Services",
        "Energy Technical Services",
        "Madina Group",
        "Iron Mount Engineering",
        "Arabian Pipeline (ANABEEB)",
        "Qatar Airways",
        "Gulf Asia Contracting"
      ]
    },
    {
      country: "OMAN",
      clients: [
        "Bhavan Engineering",
        "Petron Engineering",
        "Gulfar Engineering",
        "Gulf Petro Chemicals (GPS)",
        "Special Technical Services",
        "Toco Oman"
      ]
    },
    {
      country: "KUWAIT & KSA",
      clients: [
        "Consolidated Contractors Co. (CCC)",
        "Heavy Engineering Industries (HEISCO)",
        "SK Engineering",
        "Cape RB Hilton",
        "Multiple Builders Ltd",
        "Reza Investment Co.",
        "Modeco"
      ]
    }
  ];

  const reviews = [
    { 
      text: "Acme Enterprises provided us with over 200 trade-tested welders, fabricators and riggers for our refinery turnaround. Their mobilization speed and safety adherence was impeccable.", 
      name: "Eng. Tariq Al-Mansoor", 
      role: "Operations Director (Oil & Gas Shutdown, Qatar)" 
    },
    { 
      text: "Their trade testing facilities in India ensured that every single technician arrived at the job site fully qualified. We achieved zero lost time injury across the entire contract.", 
      name: "Suresh Pillai", 
      role: "Project Execution Manager (Alec / UAE)" 
    },
    { 
      text: "We have partnered with ACME Enterprises for over a decade for hotel and hospital staffing. Their responsiveness, ethical recruitment and paperwork handling is world class.", 
      name: "Fatima Al-Husseini", 
      role: "HR & Group Procurement (Hospitality & Facilities, Oman)" 
    }
  ];

  return (
    <section className="clients-testimonials" id="clients">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="client-badge">
            <Building2 size={16} /> OUR BEST CLIENTS & TRACK RECORD
          </div>
          <h2>Trusted by Leading Contractors Across the GCC</h2>
          <p>
            Acme Enterprises has proudly supplied thousands of high-skilled and certified personnel to prestigious mega-projects in the UAE, Qatar, Oman, Kuwait and Saudi Arabia.
          </p>
        </div>

        {/* Client Country Showcase Grid */}
        <div className="clients-country-grid">
          {clientCategories.map((cat, idx) => (
            <div className="country-card" key={idx}>
              <div className="country-header">
                <MapPin size={18} />
                <h3>{cat.country}</h3>
              </div>
              <ul className="client-list">
                {cat.clients.map((cName, cIdx) => (
                  <li key={cIdx}>
                    <CheckCircle size={14} />
                    <span>{cName}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Client Reviews */}
        <div className="reviews-section-header">
          <h4>CLIENT ENDORSEMENTS</h4>
          <h3>What Industry Leaders Say</h3>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;