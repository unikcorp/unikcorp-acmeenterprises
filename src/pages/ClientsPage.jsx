import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Globe, 
  ShieldCheck,
  Award
} from 'lucide-react';
import './ClientsPage.css';

const ClientsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const countrySections = [
    {
      country: "United Arab Emirates (UAE)",
      code: "UAE",
      sectors: [
        {
          category: "Civil, Aluminum & Construction Contractors",
          names: [
            "Al Arabi Aluminum (Sharjah)", "Al Marwan General Cont. Co. (Sharjah)", 
            "Al Muzaki General Cont. (Ras Al Khaimah)", "SK Engineering (UAE)", 
            "Alec Engineering & Contracting", "Structural Middle East"
          ]
        },
        {
          category: "Mechanical, Insulation, Painting & Drydock",
          names: [
            "Dubai Drydocks (Dry-dock, Dubai)", "Cape East Ltd (Abu Dhabi)", 
            "Kefar (Abu Dhabi)", "GISCO (Abu Dhabi)", "ISSCO (Abu Dhabi)", 
            "Emdad Services", "Target Engineering", "Descon Engineering", 
            "Xervon Industrial Services"
          ]
        },
        {
          category: "Hospitality, Facilities, Security & Printing",
          names: [
            "Damac Properties and Facility Services (Dubai & Abu Dhabi)", 
            "Hotel Crowne Plaza (Dubai)", "Hotel Ramada (Dubai)", 
            "Lahej & Sultan (Dubai)", "Farhat Catering Services (Dubai)", 
            "Alberta Abela Catering Co. (Sharjah)", "Best Bank Catering Services (Ras Al Khaimah)", 
            "Top 1 Security & Cleaning Services", "Delta Printing Press", "Emirates Printing Press"
          ]
        },
        {
          category: "Shipping & Seaport Logistics",
          names: [
            "GSL LLC (Dubai)", "Allianz Middle East (Dubai)", "Emarat Maritime LLC (Dubai)"
          ]
        }
      ]
    },
    {
      country: "State of Qatar",
      code: "QATAR",
      sectors: [
        {
          category: "Oil & Gas, Turnaround Shutdown & Mechanical Services",
          names: [
            "Mekdam Technical Services (MTS - Qatar Petroleum)", "Mekdam Technology WLL (Qatar)", 
            "OTC - Oriental Trading Co. (Offshore / Onshore projects)", "Energy Technical Services (Qatar)", 
            "Cape East (Qatar)", "Almana Ineco (Qatar)", "Dopet (Qatar)", 
            "Madina Group", "Iron Mount Engineering & Contracting", "Gulf Asia", "Top Builders"
          ]
        },
        {
          category: "Civil Infrastructure & Aviation",
          names: [
            "Gulfar (Qatar)", "Qatar Airways"
          ]
        }
      ]
    },
    {
      country: "Sultanate of Oman",
      code: "OMAN",
      sectors: [
        {
          category: "Engineering, Petrochemicals & Plant Maintenance",
          names: [
            "Bahwan Metal & Glass Engineering LLC (Russayi, Oman)", "Petron Oman", 
            "Gulfar Oman", "Special Technical Services (STS Oman)", 
            "TOCCO Oman", "Gulf Petro Chemicals (GPS)"
          ]
        },
        {
          category: "Hospitality & Healthcare Support",
          names: [
            "Rainbow Catering (Oman)", "MOH Oman (Ministry of Health)"
          ]
        }
      ]
    },
    {
      country: "State of Kuwait",
      code: "KUWAIT",
      sectors: [
        {
          category: "Heavy Engineering, Shipbuilding & General Contracting",
          names: [
            "SBC General Trading & Contracting WLL (Kuwait)", 
            "Heavy Engineering Industries & Shipbuilding Co. (HEISCO - Kuwait)", 
            "SK Engineering (Kuwait)", "Al Hana United Gen. Trading", 
            "Al Ahd Al Jadeed (Ajco)"
          ]
        },
        {
          category: "Healthcare & Logistics Services",
          names: [
            "MOH Kuwait (Ministry of Health)", "PSL Arabia (Kuwait)", "KLC (Kuwait)"
          ]
        }
      ]
    },
    {
      country: "Kingdom of Saudi Arabia (KSA)",
      code: "KSA",
      sectors: [
        {
          category: "EPC, Refinery Turnarounds & Industrial Insulation",
          names: [
            "Consolidated Contractors Company (CCC - KSA)", "Cape RB Hilton (Dammam, Saudi)", 
            "Roofing & Insulation Co. (Tasqeef - Dammam, Saudi)", "Samsung Engineering (Dammam, Saudi)", 
            "Arabian Pipeline & Services Co. (ANABEEB - Jubail, Saudi)", 
            "Multiple Builders Ltd (KSA)", "Reza Investment Company Ltd (KSA)", "Modeco"
          ]
        },
        {
          category: "Shipping, Hospitality & Charitable Institutions",
          names: [
            "Um-Al-Hammam Charitable Society (Dammam, Saudi)", 
            "Bafco International (Jeddah, KSA)", "2 in 1 Chain Restaurant (Riyadh, Saudi)", 
            "Papaya Coffee & Restaurant"
          ]
        }
      ]
    },
    {
      country: "International & Global Associates (India, Singapore, Japan, Malaysia)",
      code: "GLOBAL",
      sectors: [
        {
          category: "Shipbuilding, Offshore Marine & Heavy Engineering",
          names: [
            "Cochin Shipyard Ltd (Kerala, India)", "Larsen & Toubro Ltd (L&T - Mumbai, India)", 
            "Nozawa Shipbuilder (Tokyo, Japan)", "SMS Pte Ltd (Singapore)", 
            "Eamaco Shipping Co. Pte Ltd (Singapore)", "SS Engineering Sdn Bhd (Malaysia)"
          ]
        }
      ]
    }
  ];

  const testimonials = [
    {
      text: "Acme Enterprises supplied over 350 trade-tested pipe fitters, 6G welders and mechanical supervisors for our refinery overhaul. Every candidate arrived fully prepared and certified.",
      author: "Eng. Tariq Al-Mansoor",
      designation: "Operations Director",
      company: "Turnaround Contractor (Qatar)"
    },
    {
      text: "Working with Acme Enterprises for our high-rise construction projects in Dubai has been seamless. Their mobilization speed, documentation compliance and quality of craftspeople is second to none.",
      author: "Suresh Pillai",
      designation: "Senior Project Execution Manager",
      company: "Alec Engineering (UAE)"
    },
    {
      text: "Their trade testing standards in Mumbai ensure that technicians are evaluated under practical site conditions before receiving their visas. Zero lost time injury throughout the contract.",
      author: "Ahmed Al-Ghamdi",
      designation: "Head of Project Procurement",
      company: "Industrial Contracting Co. (KSA)"
    }
  ];

  const filteredCountries = selectedFilter === 'ALL' 
    ? countrySections 
    : countrySections.filter(c => c.code === selectedFilter);

  return (
    <div className="clients-page">
      {/* 1. Page Banner */}
      <section className="page-banner">
        <div className="page-banner-badge">
          <Building2 size={15} /> VERIFIED GCC & GLOBAL TRACK RECORD
        </div>
        <h1>
          Our Prestigious <span>Clients & Portfolio</span>
        </h1>
        <p>
          Trusted by multinational EPC contractors, plant operators, shipyards and corporate hospitality leaders across the GCC, India and Asia for over 15 years.
        </p>
      </section>

      {/* 2. Filter Tabs */}
      <section className="page-container">
        <div className="clients-filter-bar">
          <button 
            className={`filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ALL')}
          >
            All Territories ({countrySections.length})
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'UAE' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('UAE')}
          >
            UAE
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'QATAR' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('QATAR')}
          >
            Qatar
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'OMAN' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('OMAN')}
          >
            Oman
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'KUWAIT' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('KUWAIT')}
          >
            Kuwait
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'KSA' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('KSA')}
          >
            Saudi Arabia
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'GLOBAL' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('GLOBAL')}
          >
            Global Associates (India, Singapore, Japan, Malaysia)
          </button>
        </div>

        {/* 3. Country-by-Country Client Matrix */}
        <div className="country-sections-list">
          {filteredCountries.map((cGroup, index) => (
            <div className="country-mega-card" key={index}>
              <div className="country-mega-header">
                <div className="country-title-box">
                  <MapPin size={22} className="pin-icon" />
                  <h2>{cGroup.country}</h2>
                </div>
                <span className="country-badge">Verified Enterprise Clients</span>
              </div>

              <div className="categories-subgrid">
                {cGroup.sectors.map((sec, sIdx) => (
                  <div className="category-block" key={sIdx}>
                    <h4>{sec.category}</h4>
                    <div className="client-pill-cloud">
                      {sec.names.map((cName, nameIdx) => (
                        <div className="client-item-tag" key={nameIdx}>
                          <CheckCircle size={14} className="tag-check" />
                          <span>{cName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Client Testimonials Section */}
        <div className="testimonials-box">
          <div className="test-head">
            <div className="badge-teal">CLIENT ENDORSEMENTS</div>
            <h2>What Leading Project Directors Say</h2>
          </div>

          <div className="test-grid">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card-item" key={idx}>
                <div className="stars-row">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} fill="#f29325" color="#f29325" />
                  ))}
                </div>
                <p className="test-text">"{t.text}"</p>
                <div className="test-meta">
                  <h4>{t.author}</h4>
                  <p>{t.designation}</p>
                  <span>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Partner CTA */}
        <div className="partner-cta-card">
          <div className="partner-cta-left">
            <h3>Join Our Growing Portfolio of Global Enterprise Clients</h3>
            <p>Speak directly with our Business Director to establish corporate recruitment terms.</p>
          </div>
          <div className="partner-cta-right">
            <Link to="/contact" className="btn-primary">
              <span>Contact Business Director</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ClientsPage;
