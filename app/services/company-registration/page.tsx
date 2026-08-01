"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./company-registration.css";
import {
  Building2,
  Landmark,
  Handshake,
  Briefcase,
  HeartHandshake,
  PiggyBank,
  Wheat,
  Users,
  ShieldCheck,
  UserCheck,
  Zap,
  FileCheck,
  ArrowRight,
  ChevronRight,
  ClipboardCheck,
  BadgeCheck,
  PenSquare,
  FileText,
  BookOpen,
  Notebook,
  Calculator,
  Scale,
  BarChart3,
  Calendar,
  Phone,
  CheckCircle2,
  X,
  Clock,
  Coins,
  TrendingUp,
  Repeat,
  Award,
  KeyRound,
  Send,
  CreditCard,
  Building,
  Receipt,
  Mail,
  PieChart,
  FileCode2,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function CompanyRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyType: "Private Limited Company",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Consultation Request: ${formData.companyType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a free consultation regarding company registration.\n\nDetails:\n- Full Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Company Type: ${formData.companyType}\n- City / State: ${formData.city}\n\nPlease reach out to me as soon as possible.\n\nThank you,\n${formData.name}`
    );

    // Jump directly to Gmail / Email Client with compliance@mazumaindia.com
    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        companyType: "Private Limited Company",
        city: ""
      });
    }, 4000);
  };

  // Hero Section 4 Trust Badges (Row 1: 3 items, Row 2: 1 item - exact match to Image 3)
  const heroTrustBadgesRow1 = [
    { title: "MCA Approved", icon: ShieldCheck },
    { title: "Expert CA Support", icon: UserCheck },
    { title: "Fast & Easy Process", icon: Zap }
  ];

  const heroTrustBadgesRow2 = [
    { title: "100% Legal Compliance", icon: FileCheck }
  ];

  // Floating Services Card 12 Items
  const floatingServices = [
    { title: "Private Limited Company", icon: Building2, href: "#pvt-ltd" },
    { title: "Public Limited Company", icon: Landmark, href: "#pub-ltd" },
    { title: "LLP Incorporation", icon: Handshake, href: "#llp" },
    { title: "ROC Annual Compliances", icon: ClipboardCheck, href: "#roc" },
    { title: "DIN Related Filings", icon: BadgeCheck, href: "#din" },
    { title: "Digital Signature", icon: PenSquare, href: "#dsc" },
    { title: "Company ITR Filing", icon: FileText, href: "#itr" },
    { title: "Statutory Register", icon: BookOpen, href: "#statutory" },
    { title: "Minutes Book", icon: Notebook, href: "#minutes" },
    { title: "Accounting & Bookkeeping", icon: Calculator, href: "#accounting" },
    { title: "Tax Compliance Management", icon: Scale, href: "#tax-compliance" },
    { title: "Financial Reporting & Analysis", icon: BarChart3, href: "#financial-reporting" }
  ];

  // Section 2: Choose Your Company Type (8 Cards with short descriptions)
  const companyRegistrationTypes = [
    {
      title: "Private Limited Company",
      desc: "Preferred corporate entity for tech startups & venture capital funding.",
      icon: Building2,
      linkText: "Register Now"
    },
    {
      title: "Public Limited Company",
      desc: "Designed for large enterprises planning public share issuance.",
      icon: Landmark,
      linkText: "Register Now"
    },
    {
      title: "LLP Incorporation",
      desc: "Partnership structure with limited liability & minimal statutory filings.",
      icon: Handshake,
      linkText: "Register Now"
    },
    {
      title: "OPC Registration",
      desc: "Single-founder structure offering 100% control & limited liability.",
      icon: Briefcase,
      linkText: "Register Now"
    },
    {
      title: "Section 8 Company",
      desc: "Non-profit setup for promoting social welfare, education & charity.",
      icon: HeartHandshake,
      linkText: "Register Now"
    },
    {
      title: "Nidhi Company",
      desc: "Non-banking financial entity to cultivate mutual savings & thrift.",
      icon: PiggyBank,
      linkText: "Register Now"
    },
    {
      title: "Producer Company",
      desc: "Special company entity for agricultural producers & farm businesses.",
      icon: Wheat,
      linkText: "Register Now"
    },
    {
      title: "Partnership Firm",
      desc: "Simple legal structure under Partnership Act for traditional business.",
      icon: Users,
      linkText: "Register Now"
    }
  ];

  // Overview Highlights
  const overviewHighlights = [
    {
      title: "Separate Legal Entity",
      desc: "Independent legal existence distinct from its owners",
      icon: Building2
    },
    {
      title: "Limited Liability",
      desc: "Personal assets protected from business debts",
      icon: ShieldCheck
    },
    {
      title: "Business Credibility",
      desc: "Build immediate trust with banks, vendors & investors",
      icon: Award
    }
  ];

  // Registration Process Timeline (7 steps matching Image 3)
  const timelineSteps = [
    { step: "01", title: "Consultation & Business Discussion", icon: Users },
    { step: "02", title: "Document Collection", icon: FileCheck },
    { step: "03", title: "DSC & DIN Allotment", icon: PenSquare },
    { step: "04", title: "Name Approval", icon: ShieldCheck },
    { step: "05", title: "MCA Application Filing", icon: Send },
    { step: "06", title: "Certificate of Incorporation", icon: Award },
    { step: "07", title: "Post Incorporation Compliance", icon: FileText }
  ];

  // Benefits Section (6 items matching Image 3)
  const benefitsList = [
    {
      title: "Limited Liability",
      desc: "Protect personal assets from business liabilities.",
      icon: ShieldCheck
    },
    {
      title: "Separate Legal Entity",
      desc: "Company has its own legal identity.",
      icon: Building2
    },
    {
      title: "Better Credibility",
      desc: "Build trust with customers, banks & investors.",
      icon: TrendingUp
    },
    {
      title: "Easy Access to Funding",
      desc: "Easier to raise capital and attract investors.",
      icon: Coins
    },
    {
      title: "Perpetual Succession",
      desc: "Business continues even if owners change.",
      icon: Repeat
    },
    {
      title: "Tax Benefits",
      desc: "Eligible for various tax benefits & incentives.",
      icon: Award
    }
  ];

  // Documents Required (7 items matching Image 3)
  const documentsRequired = [
    { title: "PAN Card", icon: CreditCard },
    { title: "Aadhaar Card", icon: Landmark },
    { title: "Passport Size Photo", icon: UserCheck },
    { title: "Electricity Bill / Address Proof", icon: Receipt },
    { title: "Rental Agreement (If Rented Office)", icon: FileCode2 },
    { title: "Email ID & Mobile Number", icon: Mail },
    { title: "Office Address Proof", icon: Building2 }
  ];

  // All Company Services 12 Items (Matching Image 4 layout)
  const allCompanyServices = [
    {
      title: "Private Limited Company",
      desc: "Register your private limited company with full legal compliance.",
      icon: Building2
    },
    {
      title: "Public Limited Company",
      desc: "Register your public limited company for larger business operations.",
      icon: Landmark
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Maintain accurate books of accounts for your business.",
      icon: Calculator
    },
    {
      title: "LLP Incorporation",
      desc: "Incorporate LLP with minimal compliance and maximum benefits.",
      icon: Handshake
    },
    {
      title: "ROC Annual Compliances",
      desc: "Timely ROC filings and compliance management.",
      icon: ClipboardCheck
    },
    {
      title: "Minutes Book",
      desc: "Maintain minutes of meetings and corporate decisions.",
      icon: Notebook
    },
    {
      title: "DIN Related Filings",
      desc: "Apply for DIN and manage all DIN related services.",
      icon: BadgeCheck
    },
    {
      title: "Digital Signature",
      desc: "Get DSC for directors and company officials.",
      icon: PenSquare
    },
    {
      title: "Tax Compliance Management",
      desc: "Ensure GST, TDS, and other tax compliance on time.",
      icon: Scale
    },
    {
      title: "Company ITR Filing",
      desc: "File your company income tax return accurately and on time.",
      icon: FileText
    },
    {
      title: "Statutory Register",
      desc: "Maintain statutory registers as per Companies Act.",
      icon: BookOpen
    },
    {
      title: "Financial Reporting & Analysis",
      desc: "Get detailed financial reports and business insights.",
      icon: BarChart3
    }
  ];

  // Why Choose Mazuma India
  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      desc: "A decade of stellar experience guiding startups, SMEs, and corporates through complex legal frameworks.",
      icon: Award
    },
    {
      title: "5000+ Companies Registered",
      desc: "Over 5,000 successful company incorporations completed seamlessly across all states of India.",
      icon: Building2
    },
    {
      title: "Expert CA Team",
      desc: "In-house senior Chartered Accountants, CS professionals, and tax attorneys handling your filings directly.",
      icon: UserCheck
    },
    {
      title: "Transparent Pricing",
      desc: "Clear itemized quote with all MCA government fees included. Zero hidden charges guarantee.",
      icon: Coins
    },
    {
      title: "Fast Processing",
      desc: "Streamlined workflow and rapid document verification ensuring incorporation in 5-7 days.",
      icon: Zap
    },
    {
      title: "Dedicated Support",
      desc: "Assigned corporate relationship manager providing step-by-step assistance and continuous updates.",
      icon: PhoneCall
    }
  ];

  // FAQ List
  const faqList = [
    {
      q: "What is the minimum number of directors required for a Private Limited Company?",
      a: "A minimum of 2 directors and 2 shareholders are required to register a Private Limited Company in India. A single individual can act as both a director and a shareholder. At least one director must be an Indian resident."
    },
    {
      q: "How long does it take to register a company in India?",
      a: "The entire process typically takes 5 to 7 working days, subject to MCA portal response times and prompt document submission by directors."
    },
    {
      q: "Is physical presence required during the company registration process?",
      a: "No, physical presence is not required. The complete registration process is 100% online and paperless. Documents can be digitally signed using a Class 3 Digital Signature Certificate (DSC)."
    },
    {
      q: "What is a Digital Signature Certificate (DSC) and why is it needed?",
      a: "A DSC is an encrypted electronic signature key used by directors to sign digital e-forms submitted to the Ministry of Corporate Affairs (MCA) securely."
    },
    {
      q: "What is Director Identification Number (DIN)?",
      a: "DIN is a unique 8-digit identification number granted by the MCA to individuals who wish to serve as directors of an Indian company. It is allocated through the SPICe+ registration form."
    },
    {
      q: "Can a foreign national or NRI be a director in an Indian company?",
      a: "Yes, NRIs and foreign nationals can be directors and shareholders in an Indian company. However, at least one director must be a resident of India (resided in India for at least 182 days in the preceding financial year)."
    },
    {
      q: "What are the key documents needed for company registration?",
      a: "Required documents include PAN card, Aadhaar card/Passport, recent bank statement or utility bill as address proof, recent passport photo, and utility bill/rent agreement for the registered office address."
    },
    {
      q: "What happens after obtaining the Certificate of Incorporation?",
      a: "Once incorporated, your company receives its Corporate Identification Number (CIN), PAN, and TAN. You can then open a corporate current bank account, apply for GST registration, and begin commercial operations."
    },
    {
      q: "What is the difference between an LLP and a Private Limited Company?",
      a: "An LLP offers lower compliance costs and no requirement for statutory audit until revenue crosses ₹40 Lakhs. A Private Limited Company is preferred by startups seeking VC funding because equity shares can be easily issued to investors."
    },
    {
      q: "What annual ROC compliances are mandatory for a newly registered company?",
      a: "Mandatory annual compliances include holding the First Board Meeting, appointing an Auditor (Form ADT-1), filing Financial Statements (Form AOC-4), Annual Return (Form MGT-7), and completing Director KYC (DIR-3 KYC)."
    }
  ];

  return (
    <div className="cr-page-wrapper">
      <Header />

      <main>
        {/* ============================================================
            SECTION 1: HERO SECTION
            Hero background ends EXACTLY at the bottom of CTA button (Image 3)
            ============================================================ */}
        <section className="cr-hero-section">
          {/* Full Width Background Image & Gradient Overlay */}
          <div className="cr-hero-bg-wrapper">
            <img
              src="/company-registration-hero.png"
              alt="Company Registration Consultation Background"
              className="cr-hero-bg-img"
            />
            <div className="cr-hero-bg-overlay"></div>
          </div>

          <div className="cr-container">
            {/* Breadcrumb Navigation - Small Gray Text */}
            <div className="cr-breadcrumb-bar">
              <ul className="cr-breadcrumb-list">
                <li>
                  <Link href="/" className="cr-breadcrumb-link">
                    Home
                  </Link>
                </li>
                <li>&gt;</li>
                <li>
                  <span className="cr-breadcrumb-link">Services</span>
                </li>
                <li>&gt;</li>
                <li>
                  <span className="cr-breadcrumb-current">Company Registration</span>
                </li>
              </ul>
            </div>

            <div className="cr-hero-grid-layout">
              {/* LEFT SIDE CONTENT OVERLAY */}
              <div className="cr-hero-left-content">
                <span className="cr-hero-label">COMPANY REGISTRATION</span>

                <h1 className="cr-hero-heading">
                  Complete Company<br />Registration Solutions
                </h1>

                <p className="cr-hero-paragraph">
                  Register your company in India with ease. We handle end-to-end registration, documentation, and compliance to help you start your business the right way.
                </p>

                {/* Trust Badges - Arranged in 2 rows as in Image 3 */}
                <div className="cr-trust-badges-container">
                  <div className="cr-trust-badges-row">
                    {heroTrustBadgesRow1.map((badge, idx) => {
                      const BadgeIcon = badge.icon;
                      return (
                        <div className="cr-trust-badge-item" key={idx}>
                          <div className="cr-trust-badge-icon-raw">
                            <BadgeIcon size={18} />
                          </div>
                          <span className="cr-trust-badge-title">{badge.title}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="cr-trust-badges-row">
                    {heroTrustBadgesRow2.map((badge, idx) => {
                      const BadgeIcon = badge.icon;
                      return (
                        <div className="cr-trust-badge-item" key={idx}>
                          <div className="cr-trust-badge-icon-raw">
                            <BadgeIcon size={18} />
                          </div>
                          <span className="cr-trust-badge-title">{badge.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="cr-hero-cta-btn"
                >
                  Talk to Our Expert
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* RIGHT SIDE: Floating Services Card */}
              <div className="cr-floating-services-card">
                <div className="cr-floating-card-title">
                  <span>For Companies</span>
                  <Building2 size={18} color="#FF6B00" />
                </div>

                <div className="cr-floating-services-list">
                  {floatingServices.map((service, idx) => {
                    const SvcIcon = service.icon;
                    return (
                      <a
                        key={idx}
                        href={service.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsModalOpen(true);
                        }}
                        className="cr-floating-service-item"
                      >
                        <div className="cr-floating-service-left">
                          <SvcIcon size={15} className="cr-floating-service-icon" />
                          <span>{service.title}</span>
                        </div>
                        <ChevronRight size={13} className="cr-floating-service-arrow" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: CHOOSE YOUR COMPANY TYPE
            Cards grid shifted left so right floating badge card doesn't overlap them!
            ============================================================ */}
        <section className="cr-company-types-section">
          <div className="cr-container">
            <div className="cr-types-left-container">
              <div className="cr-section-header-centered">
                <h2 className="cr-section-heading-main">Choose Your Company Type</h2>
                <div className="cr-orange-divider"></div>
              </div>

              {/* 4 Columns Grid shifted left to clear right 310px badge column */}
              <div className="cr-types-4col-grid">
                {companyRegistrationTypes.map((card, idx) => {
                  const CardIcon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="cr-type-card-redesign"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <div>
                        <div className="cr-card-top-icon">
                          <CardIcon size={34} />
                        </div>
                        <h3 className="cr-card-heading-title">{card.title}</h3>
                      </div>

                      <div className="cr-card-bottom-link">
                        <span>{card.linkText}</span>
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTIONS 3-10: UNCHANGED
            ============================================================ */}
        
        {/* 3. OVERVIEW SECTION (Compact style - Matched to Reference Image 2) */}
        <section className="cr-overview-compact-section">
          <div className="cr-container">
            <div className="cr-overview-grid">
              <div className="cr-overview-img-box">
                <img
                  src="/company-overview-laptop.png"
                  alt="Overview of Company Registration - Mazuma India"
                  className="cr-overview-img"
                />
              </div>

              <div className="cr-overview-content">
                <h2 className="cr-overview-title">Overview of Company Registration</h2>
                <p className="cr-overview-text">
                  Company registration is the legal process of forming a business entity under the Companies Act, 2013. It provides a separate legal identity, limited liability protection, and credibility in the market. Whether you are a startup, small business, or an established enterprise, registering your company is the first step towards long-term growth and success.
                </p>
                <p className="cr-overview-text" style={{ marginBottom: 0 }}>
                  We provide complete assistance in name approval, documentation, MCA filing, and post-registration compliance to ensure a smooth and hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. REGISTRATION PROCESS (TIMELINE - Matched to Image 3) */}
        <section className="cr-section">
          <div className="cr-container">
            <div className="cr-section-header-unified">
              <h2 className="cr-section-title-unified">Company Registration Process</h2>
              <div className="cr-section-divider-unified"></div>
            </div>

            <div className="cr-timeline-wrapper">
              <div className="cr-timeline-track-redesign">
                <div className="cr-timeline-line-dotted"></div>
                {timelineSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div className="cr-timeline-step-redesign" key={idx}>
                      <div className="cr-step-icon-circle">
                        <StepIcon size={24} />
                      </div>
                      <div className="cr-step-number-text">{step.step}</div>
                      <div className="cr-step-label-title">{step.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. BENEFITS SECTION (6 Columns - Matched to Image 3) */}
        <section className="cr-section-light">
          <div className="cr-container">
            <div className="cr-section-header-unified">
              <h2 className="cr-section-title-unified">Benefits of Registering Your Company</h2>
              <div className="cr-section-divider-unified"></div>
            </div>

            <div className="cr-benefits-6col-grid">
              {benefitsList.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div className="cr-benefit-card-redesign" key={idx}>
                    <div className="cr-benefit-icon-orange">
                      <BenefitIcon size={26} />
                    </div>
                    <h3 className="cr-benefit-title-bold">{benefit.title}</h3>
                    <p className="cr-benefit-desc-short">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. DOCUMENTS REQUIRED (Unified Card Box - Matched to Image 6) */}
        <section className="cr-section">
          <div className="cr-container">
            <div className="cr-docs-unified-card">
              <div className="cr-section-header-unified" style={{ marginBottom: "28px" }}>
                <h2 className="cr-section-title-unified">Documents Required</h2>
                <div className="cr-section-divider-unified"></div>
              </div>

              <div className="cr-docs-7col-grid">
                {documentsRequired.map((doc, idx) => {
                  const DocIcon = doc.icon;
                  return (
                    <div className="cr-doc-pill-card" key={idx}>
                      <DocIcon size={18} className="cr-doc-pill-icon" />
                      <span className="cr-doc-pill-text">{doc.title}</span>
                    </div>
                  );
                })}
              </div>

              <div className="cr-docs-bottom-note">
                <strong className="cr-note-orange">Note:</strong> Documents may vary depending on the type of company and business structure.
              </div>
            </div>
          </div>
        </section>

        {/* 7. ALL COMPANY SERVICES (Compact 3-Column Unified Box - Matched to Image 4) */}
        <section className="cr-section-light">
          <div className="cr-container">
            <div className="cr-section-header-unified">
              <h2 className="cr-section-title-unified">Our Company Registration Services</h2>
              <div className="cr-section-divider-unified"></div>
            </div>

            <div className="cr-services-unified-card">
              <div className="cr-services-3col-grid">
                {allCompanyServices.map((svc, idx) => {
                  const SvcIcon = svc.icon;
                  return (
                    <div
                      key={idx}
                      className="cr-service-compact-item"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <SvcIcon size={24} className="cr-service-compact-icon" />
                      <div>
                        <h3 className="cr-service-compact-title">{svc.title}</h3>
                        <p className="cr-service-compact-desc">{svc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Service Overview Highlights */}
            <div className="cr-service-deepdive-container" style={{ marginTop: "32px" }}>
              {/* 1. Private Limited Company Overview */}
              <div className="cr-deepdive-card">
                <div className="cr-deepdive-badge">Private Limited Company</div>
                <h3 className="cr-deepdive-title">Overview of Private Limited Company Registration in India</h3>
                <p className="cr-deepdive-text">
                  One of the most common company structures in India is the Private Limited Company, which is governed by the Companies Act of 2013. It is essential for entrepreneurs who want to start a business in India to register as a Private Limited Company. This gives directors the benefit of limited liability in addition to encouraging the growth of a solid corporate structure.
                </p>
                <p className="cr-deepdive-text">
                  A company must register with the ROC (Registrar of Companies) in accordance with the rules and regulations established by the MCA in order to be registered under the Companies Act, 2013. Mazuma India provides an affordable service to streamline the Private Limited Company Registration procedure. You obtain a Certificate of Incorporation upon successful registration.
                </p>
              </div>

              {/* 2. Digital Signature Certificate (DSC) Overview */}
              <div className="cr-deepdive-card">
                <div className="cr-deepdive-badge">Digital Signature (DSC)</div>
                <h3 className="cr-deepdive-title">Register Your Digital Signature Certificate (DSC)</h3>
                <p className="cr-deepdive-text">
                  DSC stands for an electronic signature corresponding to the analogue of the pen-and-ink signature as legalised by Act Information Technology-2000 for authentication in individuals and organisations pertaining to electronically secure identity sign or execute online business documents. Issued by a Certifying Authority (CA), under the supervision of the Controller of Authorities (CCA), DSC ensures security, legal validity, and data integrity in digital communications.
                </p>
                <p className="cr-deepdive-text">
                  DSCs include Class 3 security levels used for filing income tax returns, company registration with ROC, e-commerce, and MCA e-filings. Services such as Mazuma India provide full support in preparing documents, submitting applications, and issuing secure USB tokens for personal and business purposes.
                </p>
              </div>

              {/* 3. Limited Liability Partnership (LLP) Overview */}
              <div className="cr-deepdive-card">
                <div className="cr-deepdive-badge">LLP Incorporation</div>
                <h3 className="cr-deepdive-title">Limited Liability Partnership (LLP) Registration - Overview</h3>
                <p className="cr-deepdive-text">
                  LLP is one of the popular forms under which the registration often takes place for startups and small businesses. Blending the features of both partnership and private company, it is popular among start-ups due to its key features and no minimum capital requirement. First, a unique business name is determined via the RUN-LLP service on the Ministry of Corporate Affairs (MCA) portal.
                </p>
                <p className="cr-deepdive-text">
                  To get registered, applicants file Form FiLLiP with the MCA. Once formed, the LLP agreement outlines partner roles and profit-sharing ratios. LLPs are a very flexible way of management where the personal assets of partners are safeguarded with lesser compliance required compared to a private limited company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER SECTION (Matched 100% to Image 5) */}
        <section className="cr-cta-banner-section">
          <div className="cr-container">
            <div className="cr-cta-banner-card">
              {/* Left Column: Heading & Subtitle */}
              <div className="cr-cta-banner-left">
                <h2 className="cr-cta-banner-title">
                  Ready to Register<br />Your Company?
                </h2>
                <p className="cr-cta-banner-desc">
                  Let our experts handle the process while you focus on growing your business.
                </p>
              </div>

              {/* Center Column: White Card with 4 Badges */}
              <div className="cr-cta-banner-center">
                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <UserCheck size={22} />
                  </div>
                  <span className="cr-cta-badge-label">Expert Guidance</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="cr-cta-badge-label">100% Compliance</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <Clock size={22} />
                  </div>
                  <span className="cr-cta-badge-label">Quick Turnaround</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <Handshake size={22} />
                  </div>
                  <span className="cr-cta-badge-label">End-to-End Support</span>
                </div>
              </div>

              {/* Right Column: CTA Button & Phone */}
              <div className="cr-cta-banner-right">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="cr-cta-btn-orange"
                >
                  Book Free Consultation
                </button>
                <div className="cr-cta-phone-box">
                  <span className="cr-cta-phone-sub">or call us at</span>
                  <a href="tel:+919936351555" className="cr-cta-phone-link">
                    <PhoneCall size={16} color="#0F2D52" />
                    +91 99363 51555
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* INTERACTIVE CONSULTATION MODAL - Pure White Compact Design */}
      {isModalOpen && (
        <div className="expert-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="expert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="expert-modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="expert-modal-header">
              <div className="expert-circle-icon-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/contact-us-icon.png" alt="Contact Icon" className="expert-contact-circle-img" />
              </div>
              <p className="expert-modal-header-sub">
                Get instant advice on company incorporation &amp; MCA compliance.
              </p>
            </div>

            {/* Modal Body */}
            <div className="expert-modal-body">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "30px 16px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFF4EC", color: "#FF6B00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
                    Consultation Requested!
                  </h3>
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>
                    We have prepared your request for <strong>compliance@mazumaindia.com</strong>. A Senior CA will call you back within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Full Name *</label>
                      <input
                        type="text"
                        className="cr-form-input"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="cr-form-input"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & City / State */}
                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Email Address *</label>
                      <input
                        type="email"
                        className="cr-form-input"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-form-label">City / State *</label>
                      <input
                        type="text"
                        className="cr-form-input"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 3: Company Type */}
                  <div className="cr-form-group">
                    <label className="cr-form-label">Company Type *</label>
                    <select
                      className="cr-form-select"
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                    >
                      <option value="Private Limited Company">Private Limited Company</option>
                      <option value="Public Limited Company">Public Limited Company</option>
                      <option value="LLP Incorporation">LLP Incorporation</option>
                      <option value="OPC Registration">OPC Registration</option>
                      <option value="Section 8 Company">Section 8 Company</option>
                      <option value="Nidhi Company">Nidhi Company</option>
                      <option value="Producer Company">Producer Company</option>
                      <option value="Partnership Firm">Partnership Firm</option>
                    </select>
                  </div>

                  <button type="submit" className="expert-submit-btn">
                    <span>Request Callback</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
