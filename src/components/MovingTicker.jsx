import React from 'react';
import { 
  Flame, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Award, 
  Globe, 
  Zap, 
  Anchor, 
  HardHat 
} from 'lucide-react';
import './MovingTicker.css';

const MovingTicker = () => {
  const tickerItems = [
    { icon: <Flame size={16} className="t-icon gold" />, text: "Qatar Petroleum Turnaround Shutdown (Mekdam Tech)" },
    { icon: <Anchor size={16} className="t-icon blue" />, text: "Dubai Drydocks Shipyard & Marine Engineering (UAE)" },
    { icon: <Building2 size={16} className="t-icon green" />, text: "SBC General Contracting Infrastructure (Kuwait)" },
    { icon: <ShieldCheck size={16} className="t-icon teal" />, text: "LIC No. RA 8283 MEA Approved (Lic: B-0313/MUM/PER/1000+/5/8283/2008)" },
    { icon: <Globe size={16} className="t-icon orange" />, text: "6 Pan-India Testing Centers (Delhi, Kochi, Vizag, Kolkata, Patna, Punjab)" },
    { icon: <HardHat size={16} className="t-icon green" />, text: "25,000+ Verified & Trade Tested Craftsmen Mobilized" },
    { icon: <Zap size={16} className="t-icon blue" />, text: "VSS Technical Services Qatar (Turnaround & EPIC Partner)" },
    // { icon: <Award size={16} className="t-icon gold" />, text: "MATCO Group of Companies (Serving GCC Since 1982)" },
    { icon: <CheckCircle2 size={16} className="t-icon teal" />, text: "Zero HSE Lost Time Incidents Track Record" }
  ];

  return (
    <div className="moving-ticker-container" aria-label="Company Highlights Marquee">
      <div className="ticker-label-badge">
        <span className="live-pulse-dot"></span>
        <span>LIVE UPDATES</span>
      </div>

      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {/* First loop */}
          {tickerItems.map((item, idx) => (
            <div className="ticker-item" key={`t1-${idx}`}>
              {item.icon}
              <span>{item.text}</span>
              <span className="ticker-bullet">•</span>
            </div>
          ))}

          {/* Duplicate loop for seamless infinite marquee scroll */}
          {tickerItems.map((item, idx) => (
            <div className="ticker-item" key={`t2-${idx}`}>
              {item.icon}
              <span>{item.text}</span>
              <span className="ticker-bullet">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingTicker;
