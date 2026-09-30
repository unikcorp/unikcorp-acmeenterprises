import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Globe, 
  Database, 
  ShieldCheck, 
  Flame, 
  CheckCircle2, 
  MapPin, 
  FileText, 
  ArrowRight,
  Users,
  UserCheck,
  Phone,
  Mail,
  Award,
  Factory,
  CheckCircle,
  FileCheck,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  BadgeCheck,
  Sun,
  Truck,
  Plane,
  Wrench,
  Utensils,
  Printer,
  HeartPulse,
  Zap,
  Settings,
  Layers,
  Briefcase
} from 'lucide-react';
import acmeLogo from '../assets/Acmelogo.png';
import './AboutPage.css';

const AboutPage = () => {
  const [showConditions, setShowConditions] = useState(true);

  const agencyParticulars = [
    { num: "1", label: "Registration Certificate Number", val: "B0313/MUM/8283/2008", highlight: true },
    { num: "2", label: "Name Of the Agency", val: "M/s ACME ENTERPRISES", highlight: true },
    { num: "3", label: "Office Address Of the Agency", val: "SHOP -28,GROUND FLOOR,DAMJI SHAMJI INDUSTRIAL ESTATE, L.B.S MARG, City:- VIKHROLI, District:- MUMBAI SUBURBAN, State:- MAHARASHTRA , Country:- INDIA, Postal Code:- 400083" },
    { num: "4", label: "Nature of Agency", val: "Individual" },
    { num: "5", label: "Name Of RC Holder", val: "Abdulrahman SM", highlight: true },
    { num: "6", label: "Date Of Birth Of the RC Holder", val: "-" },
    { num: "7", label: "Nationality Of the RC Holder", val: "INDIA" },
    { num: "8", label: "Position In the Agency", val: "-" },
    { num: "9", label: "Telephone Number Of the Agency", val: "91-9869485824", isPhone: true },
    { num: "10", label: "Email Address Of The Agency", val: "acmecbd@gmail.com", isMail: true },
    { num: "11", label: "Date Of Issue/Renewal of RC", val: "09 November 2023", highlight: true },
    { num: "12", label: "Date Of Expiry Of RC", val: "01 November 2028", highlight: true },
    { num: "13", label: "Limit of Workers", val: "1000+", highlight: true },
    { num: "14", label: "Branch Address (if any)", val: "Not Available" }
  ];

  const statutoryConditions = [
    {
      clause: "(i)",
      title: "Authorized Business Premises",
      text: "that the business shall be conducted at address:- SHOP -28,GROUND FLOOR,DAMJI SHAMJI, INDUSTRIAL ESTATE, L.B.S MARG, City:- VIKHROLI, District:- MUMBAI SUBURBAN, State:- MAHARASHTRA , Country:- INDIA, Postal Code:- 400083"
    },
    {
      clause: "(ii)",
      title: "Validity Period & Worker Quota",
      text: "that this certificate is valid for a period of 5 (Five) years or till the completion of the recruitment of 1000+ (One Thousand Plus)workers, whichever is earlier. In the event of the recruitment of the specified number getting completed before the specified period, the holder of the certificate can be permitted to continue recruitment up to the expiry of the certificate on production of evidence of actual demand and on furnishing additional security under sub-rule (2) of rule 8;"
    },
    {
      clause: "(iii)",
      title: "Authorized Signatures & Non-Transferability",
      text: "that the holder of the certificate shall conduct business under signatures and seal of the director / partners / proprietor and the certificate shall not be transferable;"
    },
    {
      clause: "(iv)",
      title: "Prominent Display of Certificate",
      text: "that a photocopy of this registration certificate shall be prominently displayed at a conspicuous place in the premises of the business. Also, a copy attested by the registering authority with an endorsement of having authorised the recruiting agent to carry on the business at additional premises, if any, shall be displayed at conspicuous place in the business premises of such Branch Office. Original Certificate shall be produced on demand by the emigration authorities / law-enforcing authorities and employers;"
    },
    {
      clause: "(v)",
      title: "Approved Place of Business",
      text: "that the holder of the certificate shall normally conduct the business from the place indicated in the application for registration. For opening a recruitment centre at a place other than the place indicated in the Application, the holder of the certificate has to obtain the prior approval of the registering authority;"
    },
    {
      clause: "(vi)",
      title: "Prohibition of Sub-Agents",
      text: "that the holder of the certificate shall not employ sub-agents for the purpose of conducting or carrying on his business;"
    },
    {
      clause: "(vii)",
      title: "Standard Wages & Prescribed Fee Compliance",
      text: "that the holder of the certificate shall not charge more than the prescribed fee from the emigrants and also adhere to prescribed standard wages;"
    },
    {
      clause: "(viii)",
      title: "Statutory Registers & Permanent Records",
      text: "that the holder of the certificate shall maintain the following permanent records at his place of business:-",
      subItems: [
        "(a) a Register of receipt of charges from emigrants recruited, in the form of an original acquittance Roll containing the signature of each emigrant from whom the charge has been received. Each such Register shall be with reference to a demand for recruitment,",
        "(b) a register and record of the amounts and Pre-paid Ticket Advices, along with their photocopies received from the employers, identified demand-wise,",
        "(c) a register containing details of expenses incurred on the recruitment of emigrants demand-wise supported by documents,",
        "(d) individual folders for each employer whose demands of labour, the holder of the certificate has processed, proposed to process or is processing,",
        "(e) bio-data (giving full particulars including name, address, age, skill, experience and name and address of next of kin) of each emigrant recruited by the holder of the certificate,",
        "(f) copies of employment contracts of each emigrant as authenticated by the Protector of Emigrants,",
        "(g) original demand, power of attorneys and correspondences with the employers,",
        "(h) all documents, relating to recruitment of emigrants, including office copies of all advertisements issued, letters of interviews and correspondence with the applicants, original award sheets leading to the selection, names and addresses of persons involved in the selection process, copies of letters of appointments, trade-testing particulars, etc.,",
        "(i) a register of visas received from the employers, giving separate account of block and individual visas,",
        "(j) a register of claims for compensation for injury or death made by the emigrants or their dependents, recruited by the holder of the certificate giving the name, address of the emigrant, emigration number, country of employment, nature of injury or death, as the case may be, date of accident, name, address of the recipients, name and address of the employer and the receipt in original in token of having made the payment of compensation be pasted,",
        "(k) such other records as may be required to be maintained by the registering authority."
      ],
      fullWidth: true
    },
    {
      clause: "(ix)",
      title: "Monthly Returns (Form IV)",
      text: "that the holder of the certificate shall furnish return of the preceding month in form IV by the 10th of the succeeding month;"
    },
    {
      clause: "(x)",
      title: "Recruitment Advertisements Filing",
      text: "that copies of advertisements for recruitment of the emigrants shall be filed with the Protector of emigrants; and"
    },
    {
      clause: "(xi)",
      title: "Prohibition of Repatriation Charges",
      text: "that recruiting agent shall not charge the repatriation expenses from the emigrants;"
    },
    {
      clause: "(xii)",
      title: "Emigrant Protection & Contractual Integrity",
      text: "the holder of the certificate shall:-",
      subItems: [
        "(a) provide details of employment, including contract conditions, to the intending emigrants before recruitment;",
        "(b) endeavour to ensure proper reception of the emigrant by the employer in the country of employment;",
        "(c) endeavour to ensure that subsequent to the employment, the employer shall not alter the terms of the employment contract;",
        "(d) endeavour to ensure that the employer takes timely action for renewal of documents authorising the stay of the emigrant in the country of employment;",
        "(e) facilitate amicable settlement of disputes between the employer and the emigrant;",
        "(f) issue receipt for the payments received from the emigrant;",
        "(g) issue only such advertisements that are genuine and factually correct and shall refrain from any inducement or misrepresentation in this regard;",
        "(h) ensure that the employer observes the terms and conditions of the employment contract."
      ],
      fullWidth: true
    },
    {
      clause: "(xiii)",
      title: "Mandatory Office & Testing Infrastructure",
      text: "The holder of the certificate shall maintain:-",
      subItems: [
        "(a) Office premises of not less than fifty square meters of built-up area, having a waiting hall for at least thirty persons, a room for the purpose of conducting interview and an office space equipped with furniture, photocopier, telephone with subscribers truck dialing and international dialing facility, fax, computers and other office amenities as maybe specified by the registering authority by order in writing;",
        "(b) Work stations for the office personnel;",
        "(c) Internet facility, email accounts and a web portal containing detailed information about the recruiting agent, the validity status of the registration certificate, the services offered, the cost of services, the mode of payment of service charges, the remedies available to emigrants for redressal of grievances, vacancies available along with the details of the jobs, the employers and the contract conditions as well as the recruitments made in the past with such particulars as the registering authority may specify by order in writing;",
        "(d) adequate and duly trained staff;",
        "(e) a signboard, to be displayed in front of the business premises or so fixed that it is conspicuously visible to the public from outside the office premises indicating the name and the registration number of the recruiting agent and the year of registration;",
        "(f) arrangements for skill testing for the trades for which he recruits the intending emigrants."
      ],
      fullWidth: true
    }
  ];

  const pillars = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Trade Test Centers",
      desc: "Fully equipped trade testing facilities across India (Delhi, Kochi, Vizag, Kolkata, Patna, Punjab) to evaluate candidates' practical trade expertise accurately before deployment."
    },
    {
      icon: <Globe size={28} />,
      title: "Wide & Global Network",
      desc: "Comprehensive pan-India sourcing network linked with international associate offices across Africa, Nepal, Sri Lanka, Bangladesh and Myanmar."
    },
    {
      icon: <Database size={28} />,
      title: "Computerized Job Bank",
      desc: "Extensive, computerized database of specialized mechanical, piping, welding, blasting, painting, scaffolding and insulation workforce ready for urgent mobilization."
    },
    {
      icon: <Flame size={28} />,
      title: "Shutdown & EPIC Expertise",
      desc: "Proven execution team qualified for major turnaround shutdowns (including Qatar Petroleum & Dubai Dock), EPIC contracts and refinery plant maintenance."
    }
  ];

  const nationwideBranches = [
    {
      city: "Kochi / Kerala",
      name: "Acme Enterprises (Branch Office)",
      address: "2/9 Classic Bazar, Athani Jn., Aluva, Ernakulam, Kerala",
      type: "Southern India Sourcing Hub"
    },
    {
      city: "New Delhi",
      name: "KMC Training & Testing",
      address: "27/222, Khizrabad, Friends Colony, Nr. White House, New Delhi",
      type: "Northern Trade Testing Center"
    },
    {
      city: "Visakhapatnam (Vizag)",
      name: "Sri Vijaya Durga Institute",
      address: "92/ B Block Nr. SRMT, ITI Jn. Autonagar, Vizag, Andhra Pradesh",
      type: "Eastern Coast Technical Institute"
    },
    {
      city: "Kolkata (West Bengal)",
      name: "KRB International",
      address: "Bandipur PO, Khardah, Kolkata, West Bengal",
      type: "East India Recruitment Center"
    },
    {
      city: "Patna (Bihar)",
      name: "GE Human Resource Services",
      address: "106/1, DS Bhawan, Chiraiyatand, Kankarbagh, Patna, Bihar",
      type: "Skilled Labor Testing Center"
    },
    {
      city: "Amritsar (Punjab)",
      name: "ACME Manpower Services",
      address: "38 / Udhoke, Amritsar, Punjab",
      type: "North-West Recruitment Center"
    }
  ];

  const executiveReferences = [
    {
      name: "Mr. Veeramani Jayaraman",
      role: "General Manager (GM)",
      company: "Energy Technical Services",
      location: "Doha, Qatar",
      phone: "+974 66603397"
    },
    {
      name: "Mr. Vayshakh Radhakrishnan",
      role: "General Manager (GM)",
      company: "SK Engineering / SBC General Trading & Contracting",
      location: "Kuwait",
      phone: "+965 97996948"
    },
    {
      name: "Mr. Saravanan",
      role: "General Manager (GM)",
      company: "ISSCO (Integrated Solutions Consulting Co.)",
      location: "Abu Dhabi, UAE",
      phone: "+971 504448652"
    }
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="page-banner-badge">
          <Building2 size={15} /> CORPORATE PROFILE & INTRODUCTION
        </div>
        <h1>
          Company Profile: <span>Acme Enterprises</span>
        </h1>
        <p>
          A highly experienced, government-recognized organization specializing in project management, overseas recruitment and workforce mobilization across Oil & Gas, Petrochemical, Fertilizer, Civil and Industrial sectors.
        </p>
      </section>

      <section className="page-container">
        
        {/* 2. Official Corporate Introduction Letterhead & Verified Credentials Card (2-Column Grid) */}
        <div className="about-content-grid">
          
          {/* Left Column: Official Corporate Introduction Letter Card */}
          <div className="about-story-card">
            
            {/* Top Letterhead Bar */}
            <div className="letterhead-top-bar">
              <div className="letterhead-brand">
                <img src={acmeLogo} alt="ACME Enterprises Logo" className="letterhead-logo-img" />
                <div>
                  <h3 className="letterhead-comp-name">ACME ENTERPRISES</h3>
                  <span className="letterhead-tagline">Manpower Consultants & Overseas Recruitment</span>
                </div>
              </div>
              <div className="letterhead-license-box">
                <FileCheck size={14} className="lic-icon-green" />
                <div>
                  <strong>LIC No. RA 8283 MEA Approved</strong>
                  <span>RC No: B0313/MUM/8283/2008</span>
                </div>
              </div>
            </div>

            {/* Formal Letter Subject & Addressee Block */}
            <div className="intro-formal-header">
              <div className="formal-meta-row">
                <span className="formal-badge">OFFICIAL INTRODUCTION</span>
                <span className="formal-date">Regd. Head Office: Mumbai - 400083</span>
              </div>
              
              <div className="formal-address-block">
                <div className="address-row">
                  <span className="lbl">Kind Attn:</span>
                  <strong className="val">HRM / Project & Procurement Directors</strong>
                </div>
                <div className="address-row">
                  <span className="lbl">Subject:</span>
                  <span className="val-subject">Introduction of Professional Human Capital & Technical Placement Services</span>
                </div>
              </div>

              <div className="formal-salutation">
                <p><strong>Dear Sir / Madam,</strong></p>
                <p className="greeting-subtext">Thank you for the opportunity you have given us to introduce ourselves.</p>
              </div>
            </div>

            {/* Letter Narrative Body with Verbatim PDF Text */}
            <div className="intro-letter-body">
              <p className="narrative-lead">
<strong>“M/s. Acme Enterprises”</strong> has been a front-runner in professional recruitment solutions for over <strong>15 years</strong>, based in <strong>28GF Damji Shamji Industrial Estate, LBS Marg, Vikhroli West, Mumbai - 400083, India</strong>. We are consultants providing <strong>integrated, comprehensive, and cost-effective placement solutions</strong> across the business, industrial, and service sectors. As manpower consultants, we offer the entire spectrum of personnel requirements, from <strong>unskilled and skilled workers to professionally qualified staff</strong> across various trades.
              </p>
              
              <p>
                Since establishment we have <strong>set ourselves apart from other agencies</strong> not just by the quality of our manpower but also by the effectiveness of our <strong>Global Network of Associate Offices</strong>, who all possess expert local skills and vast candidate networks.
              </p>
              
              <p>
                Our office premises are fully equipped and located in <strong>Mumbai, India</strong>, with qualified and committed technical staff enabling us to accurately identify your needs, formulate a strategic course of action and achieve the exact recruitment results that your organization requires.
              </p>
              
              <p>
                We are confident that we would be able to provide you with complete solutions for all your <strong>Human Requirements</strong> and would be grateful for an opportunity to prove ourselves and serve you in future.
              </p>
            </div>

            {/* Formal Letter Sign-off & Director Signature Box */}
            <div className="letter-signoff">
              <div className="signoff-text-wrap">
                <p className="signoff-closing">Thanking you & With Best Regards,</p>
                <p className="signoff-for">Yours Sincerely,<br /><strong>For ACME Enterprises</strong></p>
              </div>
              
              <div className="signoff-director-card">
                <div className="director-sign-box">
                  <div className="director-avatar-wrap">
                    <UserCheck size={24} className="sign-icon" />
                  </div>
                  <div className="director-info-text">
                    <h4>Sasikumar Kunjukrishnan</h4>
                    <span className="sign-role">DIRECTOR - BUSINESS</span>
                    <p className="sign-cell">
                      <Phone size={13} /> Direct Cell: <strong>+91 9137 73 9573</strong> <span>(Mumbai HQ)</span>
                    </p>
                  </div>
                </div>
                <div className="official-stamp-pill">
                  <ShieldCheck size={14} />
                  <span>Authorized Signatory</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Aligned Company Credentials Card */}
          <div className="about-credentials-box">
            
            <div className="cred-card-header">
              <div className="cred-head-badge">
                <Sparkles size={14} /> VERIFIED PARTICULARS
              </div>
              <h3>Corporate Credentials</h3>
              <p>Ministry of External Affairs Approved Recruitment Entity</p>
            </div>
            
            <div className="cred-items-list">
              <div className="cred-row">
                <div className="cred-icon-box"><FileText size={20} /></div>
                <div className="cred-info">
                  <strong>Govt. Registration Certificate:</strong>
                  <p className="license-highlight">LIC No. RA 8283 MEA Approved</p>
                  <span className="cred-tag">RC No: B0313/MUM/8283/2008</span>
                </div>
              </div>

              <div className="cred-row">
                <div className="cred-icon-box"><UserCheck size={20} /></div>
                <div className="cred-info">
                  <strong>Name Of RC Holder:</strong>
                  <p className="license-highlight">Abdulrahman SM</p>
                  <span className="branch-tag">Individual / Proprietor</span>
                </div>
              </div>

              <div className="cred-row">
                <div className="cred-icon-box"><MapPin size={20} /></div>
                <div className="cred-info">
                  <strong>Registered Office Address:</strong>
                  <p>Shop -28, Ground Floor, Damji Shamji Industrial Estate, L.B.S Marg, Vikhroli, Mumbai Suburban, Maharashtra - 400083</p>
                </div>
              </div>

              <div className="cred-row">
                <div className="cred-icon-box"><Phone size={20} /></div>
                <div className="cred-info">
                  <strong>Registered Agency Telephone:</strong>
                  <p>91-9869485824 / +91 22 25770147</p>
                </div>
              </div>

              <div className="cred-row">
                <div className="cred-icon-box"><Mail size={20} /></div>
                <div className="cred-info">
                  <strong>Registered Agency Email:</strong>
                  <p><a href="mailto:acmecbd@gmail.com">acmecbd@gmail.com</a> / <a href="mailto:info@acmeofc.com">info@acmeofc.com</a></p>
                </div>
              </div>

              <div className="cred-row">
                <div className="cred-icon-box"><BookmarkCheck size={20} /></div>
                <div className="cred-info">
                  <strong>Certificate Validity & Limit:</strong>
                  <p>09 Nov 2023 – 01 Nov 2028 (1000+ Workers)</p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout Box inside Credentials */}
            <div className="cred-bottom-consult">
              <div className="consult-text">
                <strong>Need Immediate Mobilization?</strong>
                <p>Speak directly with our Business Director.</p>
              </div>
              <a href="tel:+919137739573" className="btn-cred-call">
                <Phone size={14} />
                <span>+91 9137 73 9573</span>
              </a>
            </div>

          </div>

        </div>

        {/* 3. Official Government Registration Certificate Box (Verbatim from Trade License PDF) */}
        <div className="govt-cert-section-card">
          <div className="govt-cert-header">
            <div className="govt-emblem-badge">
              <FileCheck size={26} className="cert-top-icon" />
              <div>
                <span className="govt-sub-tag">GOVERNMENT OF INDIA • MINISTRY OF EXTERNAL AFFAIRS</span>
                <h3>Registration Certificate: M/s ACME ENTERPRISES</h3>
                <p className="govt-division-text">Overseas Employment Division (OE and PGE Division) | Protector General of Emigrants (PGoE), New Delhi | www.mea.gov.in • www.emigrate.gov.in</p>
              </div>
            </div>
            <div className="cert-validity-badge">
              <span className="valid-pill">VALID UP TO 01 NOV 2028</span>
              <span className="ref-app-num">Ref No: PT7150964</span>
            </div>
          </div>

          {/* Legal Act Preamble from Page 1 & Form-V from Page 2 */}
          <div className="cert-act-preamble">
            <div className="preamble-header-row">
              <span className="preamble-badge">FORM-V [Refer Rule 10(2)]</span>
              <span className="preamble-app-date">Application Dated: 16-06-2023 | Issue Date: 09/11/2023</span>
            </div>
            <p className="preamble-title"><strong>REGISTRATION CERTIFICATE ISSUED UNDER SECTION 11 OF THE EMIGRATION ACT, 1983</strong></p>
            <p className="preamble-body">
              THIS REGISTRATION CERTIFICATE IS ISSUED UNDER THE PROVISION OF SECTION 11 OF THE EMIGRATION ACT, 1983 TO THE AGENCY WHOSE PARTICULARS HAVE BEEN GIVEN IN THE CERTIFICATE TO COMMENCE OR CARRY ON THE BUSINESS OF RECRUITMENT FOR DEPLOYMENT OF INDIAN WORKERS WITH FOREIGN EMPLOYERS WITH EFFECT FROM THE DATE OF ISSUE OF THE CERTIFICATE AND SUBJECT TO THE TERMS AND CONDITIONS STIPULATED IN THE CERTIFICATE.
            </p>
            <p className="preamble-body form-v-subtext">
              <em>"With reference to the application dated 16-06-2023 (DD-MM-YYYY) for grant of a Certificate under Section 10 of the Emigration Act, 1983 to commence or carry on the business of recruitment for deployment of Indian workers with foreign employers, M/s ACME ENTERPRISES is hereby granted the said certificate effective from the date of issue of this certificate, subject to the following terms and conditions..."</em>
            </p>
          </div>

          {/* 14 Verbatim Agency Particulars Grid */}
          <div className="particulars-section">
            <h4 className="particulars-title">PARTICULARS OF THE AGENCY (FORM-V)</h4>
            <div className="particulars-grid">
              {agencyParticulars.map((item, index) => (
                <div className={`particular-item ${item.highlight ? 'highlight-item' : ''}`} key={index}>
                  <div className="part-num">{item.num}</div>
                  <div className="part-content">
                    <span className="part-label">{item.label}</span>
                    <strong className="part-val">
                      {item.isPhone ? (
                        <a href={`tel:${item.val}`}>{item.val}</a>
                      ) : item.isMail ? (
                        <a href={`mailto:${item.val}`}>{item.val}</a>
                      ) : (
                        item.val
                      )}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification & Authenticity Footer */}
          <div className="cert-footer-verification">
            <div className="verification-text">
              <BadgeCheck size={20} className="check-gold" />
              <div>
                <strong>Official Computer Generated Certificate (No Signature Required)</strong>
                <p>Authenticity of this certificate can be verified online: <strong>emigrate.gov.in → Recruiting Agent → Verify RA Status</strong></p>
              </div>
            </div>
            <a 
              href="https://emigrate.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-verify-emigrate"
            >
              <span>Verify on eMigrate Portal</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Toggle Button for Statutory Terms & Operating Conditions */}
          <div className="conditions-toggle-bar">
            <button 
              type="button" 
              className="btn-toggle-conditions"
              onClick={() => setShowConditions(!showConditions)}
              aria-expanded={showConditions}
            >
              <span>{showConditions ? "Hide Statutory Terms & Operating Conditions [Rule 10(2)]" : "View Official Statutory Terms & Operating Conditions [Rule 10(2)]"}</span>
              {showConditions ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Expandable Statutory Conditions List */}
          {showConditions && (
            <div className="statutory-conditions-list">
              <div className="conditions-list-header">
                <h5>FORM-V: TERMS AND CONDITIONS OF REGISTRATION CERTIFICATE [REFER RULE 10(2)]</h5>
                <p>Issued by Ministry of External Affairs, Overseas Employment Division, Government of India | Certificate No: <strong>B0313/MUM/8283/2008</strong></p>
              </div>
              <div className="conditions-subgrid">
                {statutoryConditions.map((cond, cIdx) => (
                  <div className={`condition-clause-card ${cond.fullWidth ? 'full-width-clause' : ''}`} key={cIdx}>
                    <div className="clause-head">
                      <span className="clause-tag">{cond.clause}</span>
                      <h6>{cond.title}</h6>
                    </div>
                    <p className="clause-main-text">{cond.text}</p>
                    {cond.subItems && cond.subItems.length > 0 && (
                      <ul className="condition-subitems-list">
                        {cond.subItems.map((sub, sIdx) => (
                          <li key={sIdx} className="condition-subitem">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <div className="conditions-footer-note">
                <p>
                  <strong>Protector General of Emigrants (PGoE)</strong> • OE and PGE Division, Ministry of External Affairs (MEA), Government of India, New Delhi.<br />
                  <em>This is a computer generated Registration/Renewal certificate with reference to the Application Reference Number PT7150964: no signature is required. Authenticity of this certificate can be verified from emigrate.gov.in--&gt;Recruiting Agent--&gt;Verify RA Status</em>
                </p>
              </div>
            </div>
          )}

        </div>

        {/* 4. Comprehensive Company Overview & Quality Assurance */}
        <div className="overview-full-box">
          <div className="overview-header-tag">
            <div>
              <h3>Company Overview: Acme Enterprises</h3>
              <p className="overview-sub">Delivering Excellence in Turnaround & Large-Scale Mobilization Projects</p>
            </div>
            <span className="tag-pill">Turnaround & Mobilization Specialists</span>
          </div>
          
          <div className="overview-text-content">
            <p>
              Acme Enterprises is a highly experienced and dynamic organization, specializing in project management and workforce mobilization across various industries, including <strong>Oil & Gas, Petrochemical, Fertilizer, Civil and Electrical</strong> sectors. The company’s core expertise lies in the execution of long-term projects, turnaround shutdowns, EPIC contracts and large-scale industrial facility management.
            </p>
            <p>
              Founded by a team of seasoned professionals, Acme Enterprises has a proven track record of successfully managing complex projects and delivering within stringent timelines. The company excels in mobilizing both skilled and unskilled manpower, ensuring the provision of a robust, specialized workforce tailored to the specific requirements of each project. Acme maintains an extensive database of professionals, engineers, supervisory staff and a wide range of workforce categories, including both white and blue-collar employees.
            </p>
            <p>
              Acme Enterprises is also renowned for supplying manpower to a diverse array of service sectors, including <strong>MEP facilities, cleaning, security and hospitality services</strong>. This flexibility and capacity make the company a trusted partner for large shutdowns, long-term projects and any operations that demand high-quality, reliable man force.
            </p>
            <p>
              At Acme Enterprises, maintaining the highest standards of service quality is a top priority. The company’s unwavering commitment to excellence ensures that every contract is executed with precision, professionalism and dedication to client satisfaction.
            </p>
          </div>

          {/* Quality & Premises Highlight Pills from Profile @ ACME.pdf */}
          <div className="pdf-block-grid" style={{ marginTop: '24px' }}>
            <div className="pdf-sub-block">
              <h4 className="pdf-heading">Our Quality:-</h4>
              <p>We also very specialize in shutdown teamwork like mechanical and blasting painting jobs and include all types of statics types of equipment for the Oil and Gas Industry & Construction.</p>
            </div>

            <div className="pdf-sub-block">
              <h4 className="pdf-heading">Our Office Premises:-</h4>
              <p>Our fully furnished and well-equipped office strategically located in India is satisfying the needs of our Client’s and ensure accuracy and quality in the process of recruitment. The selection of the candidates are based on systematic testing by professionals.</p>
            </div>
          </div>
        </div>

        {/* 5. Comprehensive Sector & Trade Specializations (Slide 4 of PPT / Page 1 & 2 of PDF) */}
        <div className="overview-full-box ppt-sectors-breakdown-card">
          <div className="overview-header-tag">
            <div>
              <h3>The Service We Provide: Sector Specializations</h3>
              <p className="overview-sub">We are committed to providing quality manpower to meet your requirements across specialized industries</p>
            </div>
            <span className="tag-pill tag-pill-blue"><Layers size={14} /> 8 Sector Coverage</span>
          </div>
          
          <div className="ppt-sectors-list">
            <div className="ppt-sec-item">
              <strong>Construction Sector:-</strong>
              <p>Candidates supplied to Civil, Oil & Gas Construction Companies, Steel & Aluminum Fabrications, Roads & Highways Construction and Airport & Seaport Construction Companies.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Mechanical Sector:-</strong>
              <p>Erection and Maintenance of Steel Plants, Oil Refineries, Petrochemical Plants, HVAC Systems and Water Treatment Plants.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Electrical Sector:-</strong>
              <p>Erection & maintenance of Power Generation & Distribution, Air Conditioning & Cooling Plants and Heating & Ventilation Systems.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Transport Sector:-</strong>
              <p>Operation & Maintenance of Earthmovers & Excavation Units, Light & Heavy Automobiles and Electric & Pneumatic System and Port services by Sea, Air and Road..</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Health Care Sector:-</strong>
              <p>We supplied Doctors, Senior & Junior Nurses, Lab Technicians, Health Care Assistants and ancillary staff.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Hotel & Hospitality Sector:-</strong>
              <p>Management Staffing for Pantry Units, Facility services, Food & Beverages Units, Catering Units, Housekeeping & Cleaning and Life Guards.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Printing, Publication & Advertising Sector:-</strong>
              <p>Professionals like Offset & Screen Printers, Binders & Helpers, Floor Supervisors & Production, Managers, Senior & Junior Visualizers, Senior & Junior Copy Writers and Events Media & Client Service staffs.</p>
            </div>
            <div className="ppt-sec-item">
              <strong>Other Sectors:-</strong>
              <p>We also supply manpower for Municipal Sewage & Cleaning units, Office Clerks & Accountants, Office Receptionists, Office Managers and Sales & other staff for the Mall.</p>
            </div>
          </div>
        </div>

        {/* 6. Multi-Disciplinary Group Divisions & Sister Concerns */}
        
        {/* 6A. AYMAZ Division (Slide 11 of PPT) */}
        <div className="overview-full-box aymaz-strategic-box">
          <div className="overview-header-tag">
            <div>
              <h3>Empowering Trade, Engineering Excellence & Facility Solutions</h3>
              <p className="overview-sub">Facility Solutions for a Sustainable Future • AYMAZ Division (Sister Concern)</p>
            </div>
            <span className="tag-pill tag-pill-emerald">Technical & Facility Services</span>
          </div>
          
          <div className="overview-text-content">
            <p className="narrative-lead">
              <strong>Aymaz</strong> has found the most innovative and strategic path to meet the needs of various industries. Focusing on local and multinational companies, we use the most modern and traditional strategies of recruitment to deliver any immediate requirement of manpower in a timely manner.
            </p>
            <p>
              We are a rapidly expanding organization offering a wide range of support services in terms of providing <strong>Technical & Non-Technical Manpower Services</strong> in the area of <strong>Building Construction & Maintenance</strong>, MEP Contracting, Facilities Management, Hospitality Management, Industrial Trading and Professional Manpower Supply.
            </p>
          </div>
        </div>

        {/* 6B. Solar & Clean Energy Division (Slide 10 of PPT) */}
        <div className="overview-full-box solar-div-box">
          <div className="overview-header-tag">
            <div>
              <h3>Going Beyond Solar to Boost Local Biodiversity</h3>
              <p className="overview-sub">Rooftop, Ground-Mounted & Façade Solar System Installation & Maintenance Services</p>
            </div>
            <span className="tag-pill tag-pill-amber"><Sun size={14} /> Solar & Clean Energy Division</span>
          </div>
          
          <div className="overview-text-content">
            <p>
              The rapid deployment of solar power on a large scale is essential to limit global warming to 1.5°C. Solar will play a huge contribution to de-carbonizing the economy. Solar power has the lowest cost of electricity of all time and is scalable in nature.
            </p>
            <p>
              Solar systems can be integrated into building electrical infrastructure to reduce energy demand and save money on electricity bills. <strong>Building Integrated Photovoltaic (BIPV)</strong> can also be substituted with conventional building glass facades. BIPV modules are secured onto prefabricated facades with a certified mounting system under the supervision of professionals.
            </p>
            <p>
              Our project execution team consists of highly skilled project supervisors and technicians supported by project-specific managers for timely execution:
            </p>
            <ul className="ppt-bullet-list">
              <li><strong>Ground-Mounted Piling Systems & Civil Drenching:</strong> Heavy foundation piling, excavation and cable trenching.</li>
              <li><strong>Cable Trays & Cable Installation:</strong> High-voltage cabling, tray laying, grid connection and module interconnections.</li>
              <li><strong>Installation, Commissioning & Testing:</strong> Module installation, inverter setup, string testing and grid synchronization.</li>
              <li><strong>Preventive & Corrective Maintenance:</strong> Module cleaning, faulty string & inverter diagnostics and round-the-clock maintenance.</li>
            </ul>
          </div>
        </div>

        {/* 6C. VSS Technical Services (Qatar) - 12 Specialized Divisions (Slide 8 of PPT) */}
        <div className="overview-full-box vss-div-box">
          <div className="overview-header-tag">
            <div>
              <h3>VSS Technical Services (Qatar) • Turnaround Shutdown & EPIC Division</h3>
              <p className="overview-sub">Execution of Turnaround Shutdowns, EPIC Contracts & Heavy Industrial Plant Management</p>
            </div>
            <span className="tag-pill tag-pill-orange"><Flame size={14} /> VSS Qatar Division</span>
          </div>
          
          <div className="overview-text-content">
            <p>
              Vector Specialized Service (VSS) is promoted by entrepreneurs with vast experience in execution of turnaround shutdowns, EPIC Contracts and project management in Oil & Gas, Petrochemical & Fertilizer Industrial facilities. VSS offers project management and mobilization of high skilled/skilled workforce including specialized services to execute contracts within timeframe and without any HSE incident.
            </p>
            <h4 className="ppt-subhead">VSS Capabilities (12 Major Service Divisions):</h4>
            <div className="vss-divisions-grid">
              <div className="vss-div-item"><CheckCircle size={16} /> <span>1. Turnaround Shutdown Maintenance Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>2. Rehabilitation of Storage Tanks</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>3. Critical Lifting Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>4. Bolt Torquing and Tensioning</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>5. Project Management Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>6. Insulation Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>7. Heat Exchanger Re-tubing Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>8. Installation of Ferrules on Heat Exchangers</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>9. Technical Manpower Support Services</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>10. EPIC Projects</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>11. Trading of Industrial Products</span></div>
              <div className="vss-div-item"><CheckCircle size={16} /> <span>12. IRATA Rope Access Services</span></div>
            </div>
          </div>
        </div>

        {/* 6D. KERBTECH International - Tourism & Hospitality (Slide 9 of PPT) */}
        <div className="overview-full-box kerbtech-div-box">
          <div className="overview-header-tag">
            <div>
              <h3>KERBTECH International-Manufacturer,Import Export hospitality & Tourism</h3>
              <p className="overview-sub">Moving the Paradigm in Hospitality, Inbound & Outbound Corporate Tourism</p>
            </div>
            <span className="tag-pill tag-pill-purple"><Plane size={14} /> KERBTECH Tourism</span>
          </div>
          
          <div className="overview-text-content">
            <p>
              Kerbtech International Tourism division has constantly been moving the paradigm in hospitality by proactive sales and marketing to create a platform for a wide spectrum of tourism across India. We provide our clients the best fitting hospitality options with deep understanding of tourism nuances.
            </p>
            <div className="kerbtech-highlights-grid">
              <div className="kerb-box">
                <h5>Specialized Tour Packages</h5>
                <p>Honeymoon Packages, Family Tours, Adventurism Tours, Religious Tours & Medical Tourism with rock-bottom rates.</p>
              </div>
              <div className="kerb-box">
                <h5>Outbound Tourism Network</h5>
                <p>UAE, Qatar, Saudi Arabia, Europe, Singapore, Malaysia, Sri Lanka and Nepal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Network Infrastructure & Computerized Job Data Bank (Verbatim Slide 7 of PPT - As in User Screenshot) */}
        <div className="overview-full-box ppt-slide7-green-card">
          <div className="overview-header-tag">
            <div>
              <h3>Network Infrastructure & Computerized Job Data Bank</h3>
              <p className="overview-sub">Wide Network, Global Network & Special Computerized Data Bank (Slide 7 of Presentation & Profile)</p>
            </div>
            <span className="tag-pill tag-pill-emerald"><Globe size={14} /> Network & Data Bank</span>
          </div>
          
          <div className="ppt-slide7-content">
            <div className="ppt-slide7-block">
              <h4 className="slide7-heading">Wide Network:-</h4>
              <p className="slide7-text">With the help of our Group's wide network in India with three branches enable us to select the right person with much more capable to do the specified works.</p>
            </div>

            <div className="ppt-slide7-block">
              <h4 className="slide7-heading">Global Network:-</h4>
              <p className="slide7-text">We have linked with global network office to recruit workers from Africa, Bangladesh, Nepal, Sri Lanka Burma and Myanmar</p>
            </div>

            <div className="ppt-slide7-block">
              <h4 className="slide7-heading">Data Bank:-</h4>
              <p className="slide7-text">To meet the urgent requirement of our Clients, we have a special computerized Job Bank kept in our office, Mumbai, especially all mechanical team including blasting, painting, scaffolding and insulation etc.</p>
            </div>

            <div className="ppt-slide7-closing">
              <p>We are confident that we would be able to provide you with complete solutions for all your Human Requirements and would be grateful for an opportunity to prove ourselves</p>
            </div>
          </div>
        </div>

        {/* 8. Flagship Current Projects Showcase (from Profile Page 3) */}
        <div className="flagship-projects-card">
          <div className="flagship-header">
            <Factory size={26} className="flagship-icon" />
            <div>
              <h3>Major Turnaround Projects & Current Deployments</h3>
              <p>Active and recent high-profile international mobilization assignments (Current Jobs)</p>
            </div>
          </div>
          <div className="flagship-grid">
            <div className="flagship-item">
              <span className="flagship-badge">Oil & Gas Mega Turnaround</span>
              <h4>Qatar Petroleum Turnaround Shutdown (2023-2024)</h4>
              <p>Mobilizing specialized shutdown teams with Mekdam Technology for major refinery plant overhauls.</p>
            </div>
            <div className="flagship-item">
              <span className="flagship-badge">Marine & Heavy Industry</span>
              <h4>Dubai Drydocks (UAE)</h4>
              <p>Supplying certified shipbuilders, marine mechanics, hull fabricators and 6G welders.</p>
            </div>
            <div className="flagship-item">
              <span className="flagship-badge">EPC & Infrastructure</span>
              <h4>SBC General Contracting (Kuwait)</h4>
              <p>Providing multi-discipline construction and mechanical workforce for large-scale engineering facilities.</p>
            </div>
          </div>
        </div>

        {/* 9. Nationwide Branches & Associated Trade Test Centers (from Profile Page 4) */}
        <div className="branches-section">
          <div className="branches-head">
            <div className="badge-teal">PAN-INDIA TESTING INFRASTRUCTURE</div>
            <h2>Branches and Associated Trade Test Centers</h2>
            <p>Our strategically distributed testing institutes across India ensure rigorous practical screening prior to overseas deployment.</p>
          </div>

          <div className="branches-grid">
            {nationwideBranches.map((branch, idx) => (
              <div className="branch-card" key={idx}>
                <div className="branch-top">
                  <MapPin size={18} className="b-pin" />
                  <h4>{branch.city}</h4>
                </div>
                <h5>{branch.name}</h5>
                <p className="b-addr">{branch.address}</p>
                <span className="b-type">{branch.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Executive Client References (from Profile Page 4) */}
        <div className="references-section">
          <div className="ref-head">
            <div className="badge-teal">CLIENT REFERENCES</div>
            <h2>Direct General Manager Endorsements</h2>
            <p>Direct references from executive project leaders who rely on ACME Enterprises.</p>
          </div>

          <div className="references-grid">
            {executiveReferences.map((ref, idx) => (
              <div className="ref-card" key={idx}>
                <div className="ref-user-icon"><UserCheck size={24} /></div>
                <h4>{ref.name}</h4>
                <span className="ref-role">{ref.role}</span>
                <p className="ref-comp">{ref.company}</p>
                <p className="ref-loc"><MapPin size={13} /> {ref.location}</p>
                <p className="ref-phone"><Phone size={13} /> {ref.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Complete Middle East & Global Client Directory Matrix (Profile @ ACME.pdf & Acme ppt.pdf) */}
        <div className="full-client-matrix-card">
          <div className="matrix-header">
            <Globe size={24} className="matrix-icon" />
            <div>
              <h3>Our Best Clients Directory Across Middle East, Asia & International Markets</h3>
              <p>Verbatim client roster from official ACME Corporate Profile across UAE, Oman, Qatar, Kuwait, KSA, India, Japan, Singapore & Malaysia</p>
            </div>
          </div>

          <div className="matrix-sectors-grid">
            <div className="matrix-sector-box">
              <h4>Civil / Construction Sector</h4>
              <p><strong>UAE & GCC:</strong> Al Marwan General Contracting (Sharjah), Al Muzaki General Contracting (Ras Al Khaimah), SK Engineering (Kuwait & UAE), Al Arabi Aluminium (Sharjah), Alec Engineering & Contracting, Structural Middle East</p>
              <p><strong>OMAN:</strong> Bhavan Engineering, Bahwan Metal & Glass Engineering LLC (Russayi), Petron Oman, Galfar Engineering & Contracting, Gulf Petro Chemicals</p>
              <p><strong>QATAR:</strong> Mekdam Technical Services (MTS Qatar), Gulf Asia, Energy Technical Services, Top Builders</p>
              <p><strong>KUWAIT & KSA:</strong> SK Engineering, Al Ahd Al Jadeed (Ajco), Al Hana United Gen. Trading, Multiple Builders Ltd, Reza Investment Company Ltd, Modeco</p>
              <p><strong>INDIA:</strong> Larson & Toubro Ltd (L&T Mumbai)</p>
            </div>

            <div className="matrix-sector-box">
              <h4>Mechanical / Insulation / Painting & Shipyards</h4>
              <p><strong>QATAR & UAE:</strong> Mekdam Technology WLL (Qatar), OTC Oriental Trading Co. (Qatar Offshore & Onshore), Cape East Ltd (Altrad Abu Dhabi & Qatar), Almana Ineco (Qatar), Dopet (Qatar), Kefar (Abu Dhabi), Energy Technical Services, GISCO (Abu Dhabi), ISSCO (Abu Dhabi), Target Engineering, Descon Engineering, Xervon Industrial Services</p>
              <p><strong>OMAN & KSA:</strong> Toco Oman, TOCCO Oman, STS Oman, Gulf Petro Chemicals (GPS), Bhavan Engineering, Special Technical Services; Samsung Engineering (Dammam KSA), Cape RB Hilton (Dammam KSA), Roofing & Insulation Co. / Tasqeef (Dammam KSA), Anabeeb (Jubail KSA), Consolidated Contractors Company (CCC)</p>
              <p><strong>KUWAIT:</strong> SK Engineering, SBC General Trading & Contracting WLL, Heavy Engineering Industries & Shipbuilding Co. (HEISCO)</p>
              <p><strong>INTERNATIONAL SHIPYARDS:</strong> Dubai Drydock (UAE), Cochin Shipyard Ltd (Kerala, India), Nozawa Shipbuilder (Tokyo, Japan), SMS Pte Ltd (Singapore), SS Engineering Sdn Bhd (Malaysia)</p>
            </div>

            <div className="matrix-sector-box">
              <h4>Medical, Hospitality & Catering</h4>
              <p><strong>HEALTHCARE & MINISTRIES:</strong> Ministry of Health (MOH Kuwait), Um-Al-Hammam Charitable Society (Dammam, KSA), MOH Oman</p>
              <p><strong>FACILITY MANAGEMENT & SECURITY:</strong> Lahej & Sultan (Dubai), Top 1 Security & Cleaning Services, Imdad Engineering, Damac Properties & Facility Services (Dubai & Abu Dhabi)</p>
              <p><strong>HOTELS, CATERING & RESTAURANTS:</strong> Hotel Crowne Plaza (Dubai), Hotel Ramada (Dubai), Farhat Catering Services (Dubai), Alberta Abela Catering Co. (Sharjah), Best Bank Catering Services (Ras Al Khaimah), Global Emirates Services, Meals on Me, Papaya Restaurant, JM Foods LLC, Rainbow Catering (Oman), 2in1 Chain Restaurant (Riyadh, KSA), Papaya Coffee & Restaurant</p>
            </div>

            <div className="matrix-sector-box">
              <h4>Printing, Shipping & Logistics</h4>
              <p><strong>PRINTING & PUBLICATION:</strong> Delta Printing Press ME FZCO (UAE), Emirates Printing Press (UAE)</p>
              <p><strong>SHIPPING & LOGISTICS SERVICES:</strong> GSL LLC (Dubai), Allianz Middle East (Dubai), Eamaco Shipping Co. Pte Ltd (Singapore), Emarat Maritime LLC (Dubai), Bafco International (Jeddah, KSA), PSL Arabia (Kuwait), KLC (Kuwait)</p>
            </div>
          </div>
        </div>

        {/* 12. 4 Strategic Quality Pillars */}
        <div className="pillars-section-head">
          <div className="badge-teal">THE ACME ASSURANCE</div>
          <h2>Our Quality & Verification Framework</h2>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar, index) => (
            <div className="about-pillar-card" key={index}>
              <div className="pillar-icon-wrap">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* 13. Bottom CTA */}
        <div className="about-bottom-cta">
          <div className="cta-left">
            <h3>Ready to partner with ACME Enterprises for your upcoming projects?</h3>
            <p>Our business directors and technical recruiters are available to evaluate your manpower requirements.</p>
          </div>
          <div className="cta-right">
            <Link to="/contact" className="btn-primary">
              <span>Connect with Management</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/quote" className="btn-outline">
              <span>Submit Manpower Demand</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;
