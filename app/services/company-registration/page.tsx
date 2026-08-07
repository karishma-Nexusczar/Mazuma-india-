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
  Send,
  CreditCard,
  Receipt,
  Mail,
  FileCode2,
  Sparkles,
  PhoneCall,
  ChevronDown,
  HelpCircle,
  Check
} from "lucide-react";

export default function CompanyRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"pvt-ltd" | "llp" | "opc" | "public-ltd" | "roc" | "dsc">("pvt-ltd");
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Consultation Request: ${formData.companyType} - ${formData.name || formData.email}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a free consultation regarding company registration.\n\nDetails:\n- Full Name: ${formData.name || "Client"}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Company Type: ${formData.companyType}\n- City / State: ${formData.city}\n\nPlease reach out to me as soon as possible.\n\nThank you,\n${formData.name || "Client"}`
    );

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.companyType || "Company Registration",
          city: formData.city,
          source: "Company Registration Page"
        })
      });
    } catch (err) {
      console.error("Company Registration API error:", err);
    }

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

  // Section 1: Hero Feature Icons (4 Badges)
  const heroTrustBadgesRow1 = [
    { title: "MCA Approved", icon: ShieldCheck },
    { title: "Expert CA Support", icon: UserCheck }
  ];

  const heroTrustBadgesRow2 = [
    { title: "Fast Processing", icon: Zap },
    { title: "100% Legal Compliance", icon: FileCheck }
  ];

  // Section 2: Sidebar Services (12 Comprehensive Core Items - No Cropping)
  const floatingServices = [
    { title: "Private Limited Company", icon: Building2 },
    { title: "Public Limited Company", icon: Landmark },
    { title: "OPC Registration", icon: Briefcase },
    { title: "LLP Registration", icon: Handshake },
    { title: "Partnership Firm Registration", icon: Users },
    { title: "Section 8 Company", icon: HeartHandshake },
    { title: "Nidhi & Producer Company", icon: PiggyBank },
    { title: "ROC Annual Compliance", icon: ClipboardCheck },
    { title: "DIN Related Filings", icon: BadgeCheck },
    { title: "Digital Signature (DSC)", icon: PenSquare },
    { title: "Company ITR & Tax Filing", icon: FileText },
    { title: "Accounting & Statutory Books", icon: Calculator }
  ];

  // Section 3: Company Type Cards (with extra line below each)
  const companyRegistrationTypes = [
    {
      title: "Private Limited Company",
      desc: "Ideal for startups & growing businesses",
      icon: Building2,
      linkText: "Register Now"
    },
    {
      title: "Public Limited Company",
      desc: "Suitable for large businesses",
      icon: Landmark,
      linkText: "Register Now"
    },
    {
      title: "LLP Registration",
      desc: "Flexible structure with limited liability",
      icon: Handshake,
      linkText: "Register Now"
    },
    {
      title: "OPC Registration",
      desc: "Perfect for solo entrepreneurs",
      icon: Briefcase,
      linkText: "Register Now"
    },
    {
      title: "Section 8 Company",
      desc: "For non-profit, social & charitable causes",
      icon: HeartHandshake,
      linkText: "Register Now"
    },
    {
      title: "Nidhi Company",
      desc: "For mutual benefit thrift & financial savings",
      icon: PiggyBank,
      linkText: "Register Now"
    },
    {
      title: "Producer Company",
      desc: "For agricultural producers & farm enterprises",
      icon: Wheat,
      linkText: "Register Now"
    },
    {
      title: "Partnership Firm",
      desc: "Traditional partnership setup under Partnership Act",
      icon: Users,
      linkText: "Register Now"
    }
  ];

  // Section 5: Registration Process (7 Steps)
  const timelineSteps = [
    { step: "1️⃣", title: "Free Consultation", icon: Users },
    { step: "2️⃣", title: "Document Verification", icon: FileCheck },
    { step: "3️⃣", title: "DSC & DIN Generation", icon: PenSquare },
    { step: "4️⃣", title: "Company Name Approval", icon: ShieldCheck },
    { step: "5️⃣", title: "MCA Filing", icon: Send },
    { step: "6️⃣", title: "Certificate of Incorporation", icon: Award },
    { step: "7️⃣", title: "Post Registration Compliance", icon: FileText }
  ];

  // Section 6: Benefits (6 Items with 2-line descriptions)
  const benefitsList = [
    {
      title: "Limited Liability",
      desc: "Protects the personal assets of shareholders against business liabilities.",
      icon: ShieldCheck
    },
    {
      title: "Separate Legal Identity",
      desc: "A registered company has its own legal existence independent of its owners.",
      icon: Building2
    },
    {
      title: "Easy Funding",
      desc: "Improves credibility with banks, investors, and financial institutions.",
      icon: Coins
    },
    {
      title: "Better Brand Image",
      desc: "Build trust among clients, vendors, and government authorities.",
      icon: TrendingUp
    },
    {
      title: "Tax Benefits",
      desc: "Avail deductions and government incentives wherever applicable.",
      icon: Award
    },
    {
      title: "Business Continuity",
      desc: "The company continues regardless of ownership changes.",
      icon: Repeat
    }
  ];

  // Section 7: Documents Required (Divided into 2 Columns)
  const directorDocuments = [
    { title: "PAN Card (Mandatory for Indian Directors)", icon: CreditCard },
    { title: "Aadhaar Card / Voter ID / Passport", icon: Landmark },
    { title: "Passport Size Photograph", icon: UserCheck },
    { title: "Email Address & Mobile Number", icon: Mail }
  ];

  const officeDocuments = [
    { title: "Electricity Bill / Utility Bill (Max 2 Months Old)", icon: Receipt },
    { title: "Rent Agreement / Property Ownership Proof", icon: FileCode2 },
    { title: "NOC from Property Owner", icon: Building2 },
    { title: "Registered Office Address Proof", icon: FileText }
  ];

  // Section 8: Services Grid (2-3 Detailed Lines Each)
  const allCompanyServices = [
    {
      title: "Private Limited Company",
      desc: "Register your business with limited liability protection, separate legal identity, and enhanced business credibility.",
      icon: Building2
    },
    {
      title: "LLP Registration",
      desc: "An ideal business structure combining operational flexibility with limited liability.",
      icon: Handshake
    },
    {
      title: "ROC Compliance",
      desc: "Annual filing, board resolutions, and MCA compliance managed by experts.",
      icon: ClipboardCheck
    },
    {
      title: "Digital Signature (DSC)",
      desc: "Secure Class-3 DSC for MCA filings, GST registration, Income Tax, and eTendering.",
      icon: PenSquare
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Maintain accurate financial records using professional accounting standards.",
      icon: Calculator
    },
    {
      title: "Company ITR Filing",
      desc: "Timely corporate income tax return filing with maximum compliance.",
      icon: FileText
    }
  ];

  // Section 10: Why Choose Mazuma India (6 Cards)
  const whyChooseUs = [
    {
      title: "10+ Years Industry Experience",
      desc: "A decade of stellar experience guiding startups, SMEs, and corporates through complex legal frameworks.",
      icon: Award
    },
    {
      title: "Qualified CA & Compliance Experts",
      desc: "In-house senior Chartered Accountants, CS professionals, and tax attorneys handling your filings directly.",
      icon: UserCheck
    },
    {
      title: "Transparent Pricing",
      desc: "Clear itemized quote with all MCA government fees included. Zero hidden charges guarantee.",
      icon: Coins
    },
    {
      title: "End-to-End Documentation",
      desc: "Complete assistance from name reservation and MOA/AOA drafting to final Certificate of Incorporation.",
      icon: FileText
    },
    {
      title: "Fast Turnaround Time",
      desc: "Streamlined workflow ensuring rapid document verification and company incorporation in 5-7 days.",
      icon: Zap
    },
    {
      title: "Dedicated Support Team",
      desc: "Assigned corporate relationship manager providing step-by-step assistance and continuous updates.",
      icon: PhoneCall
    }
  ];

  // Section 11: 8 Comprehensive FAQs
  const faqList = [
    {
      q: "What is a Private Limited Company?",
      a: "A Private Limited Company (Pvt Ltd) is a legal corporate structure registered under the Companies Act, 2013. It offers limited liability protection to its shareholders, holds a separate legal identity, and is the most preferred structure for startups seeking venture capital funding."
    },
    {
      q: "How many directors are required to register a company?",
      a: "A minimum of 2 directors and 2 shareholders are required for a Private Limited Company (up to a maximum of 200 shareholders). A One Person Company (OPC) requires only 1 director. At least one director must be a resident of India."
    },
    {
      q: "How much time does company registration take?",
      a: "The company registration process in India typically takes 5 to 7 working days, depending on MCA portal response times and prompt document submission by directors."
    },
    {
      q: "What documents are required for company registration?",
      a: "Required documents include PAN card, Aadhaar card/Passport, recent passport photograph, bank statement/utility bill for address proof, and electricity bill with NOC for the registered office address."
    },
    {
      q: "Is GST registration mandatory for a newly registered company?",
      a: "GST registration is mandatory if your annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for services), or if you engage in inter-state sales or e-commerce operations. However, companies can voluntarily register for GST at any time."
    },
    {
      q: "Can NRIs or Foreign Nationals register a company in India?",
      a: "Yes, NRIs, foreign nationals, and foreign entities can register a company in India and hold 100% FDI equity through the automatic route in most business sectors. At least one director must be an Indian resident."
    },
    {
      q: "What is the minimum capital requirement for company registration?",
      a: "There is no minimum paid-up capital requirement to register a company in India under the Companies Act, 2013. You can start a Private Limited Company with an authorized capital of ₹1 Lakh."
    },
    {
      q: "What is the government company registration fee?",
      a: "Government fees for SPICe+ MCA filing for companies with authorized capital up to ₹15 Lakhs have been waived by the Ministry of Corporate Affairs. Only nominal name approval (RUN) fees, PAN/TAN fees, and state stamp duty apply."
    }
  ];

  const jsonLdCompanyReg = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Company Registration Services",
    provider: {
      "@type": "Organization",
      name: "Mazuma India",
      url: "https://mazumaindia.com"
    },
    areaServed: "India",
    description: "Complete company registration solutions including Private Limited, LLP, OPC, Section 8, MCA filings and annual corporate ROC compliance.",
    url: "https://mazumaindia.com/services/company-registration"
  };

  return (
    <div className="cr-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCompanyReg) }}
      />

      <Header />

      <main>
        {/* ============================================================
            SECTION 1: HERO SECTION
            ============================================================ */}
        <section className="cr-hero-section">
          <div className="cr-hero-bg-wrapper">
            <img
              src="/company-registration-hero.png"
              alt="Company Registration Consultation Background"
              className="cr-hero-bg-img"
            />
            <div className="cr-hero-bg-overlay"></div>
          </div>

          <div className="cr-container">
            {/* Breadcrumb Navigation */}
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
              {/* LEFT SIDE CONTENT */}
              <div className="cr-hero-left-content">
                <span className="cr-hero-label">COMPANY REGISTRATION</span>

                <h1 className="cr-hero-heading">
                  Complete Company<br />Registration Solutions
                </h1>

                <p className="cr-hero-paragraph">
                  Register your business with confidence through Mazuma India. We provide end-to-end company registration, legal documentation, MCA filings, and compliance support to help startups, entrepreneurs, and growing businesses establish a strong legal foundation.
                </p>

                {/* Feature Icons (4 Badges) */}
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

                {/* Hero CTA Buttons */}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cr-hero-cta-btn"
                  >
                    Book Free Consultation
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 24px",
                      borderRadius: 12,
                      background: "#FFFFFF",
                      color: "#0F2D52",
                      fontSize: 14,
                      fontWeight: 800,
                      cursor: "pointer",
                      border: "1.5px solid #FF6B00"
                    }}
                  >
                    <PhoneCall size={16} style={{ color: "#FF6B00" }} />
                    <span>Talk to Our Expert</span>
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: COMPANY REGISTRATION SERVICES SIDEBAR */}
              <div className="cr-floating-services-card">
                <div className="cr-floating-card-title">
                  <span>Company Registration Services</span>
                  <Building2 size={18} color="#FF6B00" />
                </div>

                <div className="cr-floating-services-list">
                  {floatingServices.map((service, idx) => {
                    const SvcIcon = service.icon;
                    return (
                      <a
                        key={idx}
                        href="#company-types"
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
            SECTION 2: COMPANY TYPE CARDS
            ============================================================ */}
        <section className="cr-company-types-section" id="company-types">
          <div className="cr-container">
            <div className="cr-types-left-container">
              <div className="cr-section-header-centered">
                <h2 className="cr-section-heading-main">Choose Your Company Type</h2>
                <div className="cr-orange-divider"></div>
              </div>

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
                          <CardIcon size={32} />
                        </div>
                        <h3 className="cr-card-heading-title">{card.title}</h3>
                        <p className="cr-card-desc-short">{card.desc}</p>
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
            SECTION 4: WHY REGISTER YOUR COMPANY?
            ============================================================ */}
        <section className="cr-overview-compact-section">
          <div className="cr-container">
            <div className="cr-overview-grid">
              <div className="cr-overview-img-box">
                <img
                  src="/company-overview-laptop.png"
                  alt="Why Register Your Company - Mazuma India"
                  className="cr-overview-img"
                />
              </div>

              <div className="cr-overview-content">
                <h2 className="cr-overview-title">Why Register Your Company?</h2>
                <p className="cr-overview-text">
                  Starting a registered business provides legal recognition, builds trust among customers and investors, protects owners through limited liability, and ensures compliance with Indian corporate laws. Whether you're launching a startup or expanding an existing business, choosing the right business structure is the first step toward long-term success.
                </p>
                <p className="cr-overview-text" style={{ marginBottom: 0 }}>
                  Mazuma India assists entrepreneurs throughout the complete registration journey—from selecting the ideal entity type and preparing documentation to obtaining government approvals and maintaining post-registration compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: REGISTRATION PROCESS (7 STEPS)
            ============================================================ */}
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

        {/* ============================================================
            SECTION 6: BENEFITS SECTION (2 LINES EACH)
            ============================================================ */}
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

        {/* ============================================================
            SECTION 7: DOCUMENTS REQUIRED (2 CLEAR COLUMNS)
            ============================================================ */}
        <section className="cr-section">
          <div className="cr-container">
            <div className="cr-docs-unified-card">
              <div className="cr-section-header-unified" style={{ marginBottom: "28px" }}>
                <h2 className="cr-section-title-unified">Documents Required for Company Registration</h2>
                <div className="cr-section-divider-unified"></div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                {/* Column 1: Director Documents */}
                <div style={{ background: "#F8FAFC", padding: "24px 28px", borderRadius: 14, border: "1px solid #E2E8F0" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F2D52", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: 8 }}>
                    <UserCheck size={20} style={{ color: "#FF6B00" }} />
                    <span>Director &amp; Shareholder Documents</span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {directorDocuments.map((doc, idx) => {
                      const DocIcon = doc.icon;
                      return (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#1E293B", fontWeight: 600 }}>
                          <CheckCircle2 size={18} style={{ color: "#10B981", flexShrink: 0 }} />
                          <span>{doc.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Registered Office Documents */}
                <div style={{ background: "#F8FAFC", padding: "24px 28px", borderRadius: 14, border: "1px solid #E2E8F0" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F2D52", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: 8 }}>
                    <Building2 size={20} style={{ color: "#FF6B00" }} />
                    <span>Registered Office Documents</span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {officeDocuments.map((doc, idx) => {
                      const DocIcon = doc.icon;
                      return (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#1E293B", fontWeight: 600 }}>
                          <CheckCircle2 size={18} style={{ color: "#10B981", flexShrink: 0 }} />
                          <span>{doc.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="cr-docs-bottom-note">
                <strong className="cr-note-orange">Note:</strong> All director documents must be self-attested. For foreign directors or NRIs, passport and utility bills must be notarized or apostilled.
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: SERVICES GRID (2-3 DETAILED LINES EACH)
            ============================================================ */}
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
                      <SvcIcon size={26} className="cr-service-compact-icon" />
                      <div>
                        <h3 className="cr-service-compact-title">{svc.title}</h3>
                        <p className="cr-service-compact-desc">{svc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ============================================================
                SECTION 9: DETAILED SERVICES (MAJOR ACCORDION TABS SECTION)
                ============================================================ */}
            <div className="cr-service-deepdive-container" style={{ marginTop: "40px" }}>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#0F2D52", margin: "0 0 8px 0" }}>
                  Detailed Service Breakdown &amp; Legal Guidelines
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                  Select a service entity below to review eligibility, documents, benefits, and compliance workflows.
                </p>
              </div>

              {/* Service Tab Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 24 }}>
                {[
                  { id: "pvt-ltd", label: "Private Limited Company" },
                  { id: "llp", label: "LLP Registration" },
                  { id: "opc", label: "OPC Registration" },
                  { id: "public-ltd", label: "Public Limited Company" },
                  { id: "roc", label: "ROC Compliance" },
                  { id: "dsc", label: "Digital Signature (DSC)" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 800,
                      border: "none",
                      cursor: "pointer",
                      background: activeTab === tab.id ? "#FF6B00" : "#F8FAFC",
                      color: activeTab === tab.id ? "#FFFFFF" : "#0F2D52",
                      boxShadow: activeTab === tab.id ? "0 4px 14px rgba(255,107,0,0.3)" : "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Private Limited Company */}
              {activeTab === "pvt-ltd" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">Private Limited Company</div>
                  <h3 className="cr-deepdive-title">Private Limited Company Registration in India</h3>
                  <p className="cr-deepdive-text">
                    A Private Limited Company is the most popular legal entity for startups, technology firms, and venture-backed businesses in India. Registered under the Companies Act, 2013, it provides shareholders with limited liability, protecting personal assets against business losses.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Eligibility Requirements</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Minimum 2 Directors &amp; 2 Shareholders</li>
                        <li>At least 1 Director must be an Indian Resident</li>
                        <li>Registered Office Address in India</li>
                        <li>Digital Signature Certificate (DSC) for Directors</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Key Benefits</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Separate legal corporate entity</li>
                        <li>Easy equity fundraising from VCs &amp; Angel Investors</li>
                        <li>Perpetual succession &amp; brand credibility</li>
                        <li>100% limited financial liability</li>
                      </ul>
                    </div>
                  </div>

                  <p className="cr-deepdive-text" style={{ margin: 0 }}>
                    <strong>Process &amp; Timeline:</strong> SPICe+ MCA filing takes 5-7 working days. Upon approval, you receive your Certificate of Incorporation, CIN, PAN, and TAN.
                  </p>
                </div>
              )}

              {/* Tab 2: LLP Registration */}
              {activeTab === "llp" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">LLP Incorporation</div>
                  <h3 className="cr-deepdive-title">Limited Liability Partnership (LLP) Registration</h3>
                  <p className="cr-deepdive-text">
                    LLP is an ideal business structure for professional firms, consultants, and service partners combining operational flexibility with limited liability protection under the LLP Act, 2008.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Key Advantages</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>No minimum capital requirement</li>
                        <li>Lower statutory compliance costs</li>
                        <li>No audit required unless turnover exceeds ₹40 Lakhs</li>
                        <li>No dividend distribution tax</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Registration Workflow</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>RUN-LLP Name Reservation</li>
                        <li>FiLLiP Incorporation Form Submission</li>
                        <li>Drafting &amp; Filing Form 3 LLP Agreement</li>
                        <li>Issuance of Certificate of Incorporation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: OPC Registration */}
              {activeTab === "opc" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">OPC Registration</div>
                  <h3 className="cr-deepdive-title">One Person Company (OPC) Registration</h3>
                  <p className="cr-deepdive-text">
                    An OPC allows a single entrepreneur to operate a corporate entity with 100% sole ownership control, full limited liability protection, and separate corporate identity.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Eligibility Criteria</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Only 1 Director &amp; 1 Shareholder required</li>
                        <li>Mandatory Nominee appointment</li>
                        <li>Founder must be an Indian Resident</li>
                        <li>Class-3 DSC for the sole founder</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Key Features</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Complete 100% business control</li>
                        <li>Exemption from AGM requirements</li>
                        <li>Easier access to bank loans &amp; credit lines</li>
                        <li>Protection of personal assets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Public Limited Company */}
              {activeTab === "public-ltd" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">Public Limited Company</div>
                  <h3 className="cr-deepdive-title">Public Limited Company Registration</h3>
                  <p className="cr-deepdive-text">
                    Designed for large-scale enterprise operations planning public capital raising or stock exchange listing under MCA regulations.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Structure Requirements</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Minimum 3 Directors</li>
                        <li>Minimum 7 Shareholders (No upper limit)</li>
                        <li>Mandatory Secretarial Audit</li>
                        <li>Public financial disclosures</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Primary Benefits</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Ability to issue public shares &amp; debentures</li>
                        <li>Highest market reputation &amp; stature</li>
                        <li>Unrestricted transferability of shares</li>
                        <li>Substantial borrowing capacity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: ROC Compliance */}
              {activeTab === "roc" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">ROC Compliance</div>
                  <h3 className="cr-deepdive-title">Annual ROC Compliance &amp; MCA Filings</h3>
                  <p className="cr-deepdive-text">
                    Every company incorporated in India must complete annual statutory filings with the Registrar of Companies to avoid heavy late penalties and disqualification of directors.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Mandatory Annual Forms</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Form AOC-4 (Financial Statements Filing)</li>
                        <li>Form MGT-7 / MGT-7A (Annual Return Filing)</li>
                        <li>Form ADT-1 (Auditor Appointment)</li>
                        <li>DIR-3 KYC (Director Annual KYC)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Mazuma Managed Services</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Drafting Board Resolutions &amp; Minutes</li>
                        <li>Maintenance of Statutory Registers</li>
                        <li>CA Audit certification &amp; e-filing</li>
                        <li>Zero penalty assurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6: DSC Registration */}
              {activeTab === "dsc" && (
                <div className="cr-deepdive-card">
                  <div className="cr-deepdive-badge">Digital Signature (DSC)</div>
                  <h3 className="cr-deepdive-title">Class-3 Digital Signature Certificate (DSC)</h3>
                  <p className="cr-deepdive-text">
                    A Class-3 DSC is a secure cryptographic token issued by Controller of Certifying Authorities (CCA) approved vendors, required for electronic signing of MCA forms, GST returns, and corporate ITR.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, margin: "20px 0" }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Applications &amp; Uses</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>SPICe+ Company &amp; LLP e-filing</li>
                        <li>GST &amp; Income Tax Portal signing</li>
                        <li>e-Tendering &amp; Trademark filing</li>
                        <li>Import Export Code (IEC) authorization</li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "#0F2D52", margin: "0 0 8px 0" }}>Service Highlights</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                        <li>Paperless video verification in 15 mins</li>
                        <li>2-Year or 3-Year validity option</li>
                        <li>Secure USB Crypto Token delivery</li>
                        <li>Dedicated tech support for driver setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 10: WHY CHOOSE MAZUMA INDIA? (6 CARDS)
            ============================================================ */}
        <section className="cr-section">
          <div className="cr-container">
            <div className="cr-section-header-unified">
              <h2 className="cr-section-title-unified">Why Choose Mazuma India?</h2>
              <div className="cr-section-divider-unified"></div>
            </div>

            <div className="cr-why-3col-grid">
              {whyChooseUs.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div className="cr-why-card-compact" key={idx}>
                    <div className="cr-why-icon-orange">
                      <ItemIcon size={22} />
                    </div>
                    <div>
                      <h3 className="cr-why-title-bold">{item.title}</h3>
                      <p className="cr-why-desc-short">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 11: FREQUENTLY ASKED QUESTIONS (8 FAQS)
            ============================================================ */}
        <section className="cr-section-light">
          <div className="cr-container">
            <div className="cr-section-header-unified">
              <h2 className="cr-section-title-unified">Frequently Asked Questions</h2>
              <div className="cr-section-divider-unified"></div>
            </div>

            <div className="cr-faq-list">
              {faqList.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`cr-faq-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="cr-faq-question"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <div className="cr-faq-toggle-icon">
                        <ChevronDown size={16} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="cr-faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 12: CALL TO ACTION (CTA)
            ============================================================ */}
        <section className="cr-cta-banner-section">
          <div className="cr-container">
            <div className="cr-cta-banner-card">
              {/* Left Column: Heading & Subtitle */}
              <div className="cr-cta-banner-left">
                <h2 className="cr-cta-banner-title">
                  Start Your Business<br />with Confidence
                </h2>
                <p className="cr-cta-banner-desc">
                  Register your company quickly with expert guidance from Mazuma India. Our professionals handle the legal formalities while you focus on building your business.
                </p>
              </div>

              {/* Center Column: White Card with 4 Badges */}
              <div className="cr-cta-banner-center">
                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <UserCheck size={22} />
                  </div>
                  <span className="cr-cta-badge-label">✔ Expert Guidance</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="cr-cta-badge-label">✔ 100% Compliance</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <Clock size={22} />
                  </div>
                  <span className="cr-cta-badge-label">✔ Quick Processing</span>
                </div>

                <div className="cr-cta-badge-item">
                  <div className="cr-cta-badge-circle">
                    <Handshake size={22} />
                  </div>
                  <span className="cr-cta-badge-label">✔ Dedicated Support</span>
                </div>
              </div>

              {/* Right Column: CTA Buttons & Phone */}
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

      {/* INTERACTIVE CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="cr-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="cr-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cr-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="cr-modal-grid">
              {/* LEFT SIDE: EXPERT BANNER */}
              <div className="cr-modal-left">
                <div>
                  <img
                    src="/why-choose-office.jpg"
                    alt="Consultation Expert"
                    className="cr-modal-left-img"
                  />
                  <h4 className="cr-modal-left-title">Talk to Our Expert</h4>
                  <div className="cr-modal-left-bullets">
                    <div className="cr-modal-bullet-item">
                      <Check size={14} /> 100% Free Consultation
                    </div>
                    <div className="cr-modal-bullet-item">
                      <Check size={14} /> Instant Legal Guidance
                    </div>
                    <div className="cr-modal-bullet-item">
                      <Check size={14} /> 100% Data Confidentiality
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: CONSULTATION FORM */}
              <div className="cr-modal-right">
                <h3 className="cr-modal-title">Book Free Consultation</h3>
                <p className="cr-modal-desc">
                  Get instant advice from our senior CA team.
                </p>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "24px 12px" }}>
                    <CheckCircle2 size={36} style={{ color: "#16A34A", margin: "0 auto 10px auto" }} />
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0F2D52", marginBottom: 6 }}>
                      Consultation Requested!
                    </h4>
                    <p style={{ color: "#64748B", fontSize: 12.5, margin: 0, lineHeight: 1.5 }}>
                      We have prepared your request for <strong>compliance@mazumaindia.com</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="cr-form-grid-2col">
                      <div className="cr-form-group">
                        <label className="cr-form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className="cr-form-input"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="cr-form-group">
                        <label className="cr-form-label">Email Address *</label>
                        <input
                          type="email"
                          className="cr-form-input"
                          required
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="cr-form-grid-2col">
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
                    </div>

                    <button type="submit" className="cr-modal-submit-btn">
                      <span>Request Callback</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
