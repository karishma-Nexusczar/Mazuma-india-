"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./gst-services.css";

import {
  FileCheck2,
  FileText,
  Receipt,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  Plus,
  Minus,
  Users,
  Clock,
  Coins,
  Headphones,
  Briefcase,
  Calculator,
  Scale,
  RefreshCw,
  TrendingUp,
  FileSpreadsheet,
  Truck,
  Building2,
  Lock,
  Phone,
  Landmark,
  Building,
  Laptop,
  Award,
  BadgePercent,
  Headset,
  Zap,
  UserCheck,
  X,
  ChevronDown,
  ChevronUp,
  FileSearch,
  RotateCcw,
  AlertTriangle
} from "lucide-react";

export default function GSTServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "GST Registration",
    city: ""
  });
  const [expertFormData, setExpertFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    topic: "GST Registration & Filing",
    callbackTime: "Immediate (Within 15 mins)"
  });
  const [submitted, setSubmitted] = useState(false);
  const [expertSubmitted, setExpertSubmitted] = useState(false);
  const [showAllCoreSolutions, setShowAllCoreSolutions] = useState(false);
  const [showAllGstServices, setShowAllGstServices] = useState(false);
  const [showAllProcessSteps, setShowAllProcessSteps] = useState(false);
  const [showAllWhoNeedsGst, setShowAllWhoNeedsGst] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "GST Services",
          city: formData.city,
          source: "GST Services Page"
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "GST Registration",
          city: ""
        });
      }, 3500);
    } catch (err) {
      console.error("GST Services API error:", err);
    }
  };

  const handleExpertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: expertFormData.name || expertFormData.email || "Website Client",
          phone: expertFormData.phone,
          email: expertFormData.email,
          service: expertFormData.topic || "GST Expert Callback",
          city: expertFormData.city,
          preferredTime: expertFormData.callbackTime,
          source: "GST Senior Advisor Modal"
        })
      });
      setExpertSubmitted(true);
      setTimeout(() => {
        setExpertSubmitted(false);
        setIsExpertModalOpen(false);
        setExpertFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          topic: "GST Registration & Filing",
          callbackTime: "Immediate (Within 15 mins)"
        });
      }, 3500);
    } catch (err) {
      console.error("GST Expert Callback API error:", err);
    }
  };

  // Sidebar Floating Card Services List (14 Items)
  const sidebarGstServices = [
    { name: "GST Registration", icon: FileCheck2 },
    { name: "GST Amendment", icon: RefreshCw },
    { name: "GST Cancellation", icon: X },
    { name: "GST Return Filing", icon: FileText },
    { name: "GSTR-1 Filing", icon: FileSpreadsheet },
    { name: "GSTR-3B Filing", icon: Receipt },
    { name: "Annual GST Return (GSTR-9)", icon: Calculator },
    { name: "GST Audit", icon: ShieldCheck },
    { name: "GST Refund", icon: Coins },
    { name: "Input Tax Credit (ITC)", icon: TrendingUp },
    { name: "GST Notices", icon: Scale },
    { name: "E-Way Bill", icon: Truck },
    { name: "GST Accounting", icon: Building2 },
    { name: "GST Compliance Health Check", icon: FileSearch }
  ];

  const coreSolutionsData = [
    {
      num: "01",
      title: "GST Registration",
      desc: "Register your business under GST with complete documentation, application filing, verification, and GSTIN issuance.",
      img: "/gst-card-01-registration.png",
      checklist: [
        "New GST Registration",
        "GST Amendment",
        "GST Cancellation",
        "Voluntary Registration",
        "Composition Scheme"
      ],
      serviceName: "GST Registration"
    },
    {
      num: "02",
      title: "GST Return Filing",
      desc: "Timely filing of GST returns to ensure complete compliance and avoid penalties. Monthly, quarterly, and annual returns.",
      img: "/gst-card-02-return-filing.png",
      checklist: [
        "GSTR-1 Outward Supplies",
        "GSTR-3B Summary Return",
        "GSTR-9 Annual Return",
        "Nil Return Filing",
        "Late Return Support"
      ],
      serviceName: "GST Return Filing"
    },
    {
      num: "03",
      title: "Input Tax Credit (ITC)",
      desc: "Maximize your eligible Input Tax Credit through proper reconciliation and invoice verification while ensuring compliance.",
      img: "/gst-card-03-itc.png",
      checklist: [
        "ITC Reconciliation",
        "ITC Claim Assistance",
        "Purchase Verification",
        "ITC Optimization",
        "Vendor Reconciliation"
      ],
      serviceName: "Input Tax Credit (ITC)"
    },
    {
      num: "04",
      title: "GST Notices & Legal",
      desc: "Professional representation for GST notices, departmental inquiries, audits, and assessments to protect your business.",
      img: "/gst-card-04-notices-legal.png",
      checklist: [
        "GST Notice Reply",
        "GST Audit Support",
        "Dept Representation",
        "Health Check Review",
        "Litigation Assistance"
      ],
      serviceName: "GST Notices"
    }
  ];

  // 14 GST Services Cards Grid
  const gstGridServices = [
    {
      title: "GST Registration",
      desc: "Business registration under GST with expert documentation support.",
      icon: FileCheck2
    },
    {
      title: "GST Amendment",
      desc: "Update business name, address, partners, bank account, or business details.",
      icon: RefreshCw
    },
    {
      title: "GST Cancellation",
      desc: "Complete support for GST surrender and cancellation procedures.",
      icon: X
    },
    {
      title: "GST Return Filing",
      desc: "Monthly, quarterly, annual, and NIL return filing services.",
      icon: FileText
    },
    {
      title: "GSTR-1 Filing",
      desc: "Accurate filing of outward supplies with complete invoice reporting.",
      icon: FileSpreadsheet
    },
    {
      title: "GSTR-3B Filing",
      desc: "Monthly summary return filing with tax payment assistance.",
      icon: Receipt
    },
    {
      title: "Annual GST Return (GSTR-9)",
      desc: "Preparation and filing of annual GST returns with reconciliation support.",
      icon: Calculator
    },
    {
      title: "GST Audit",
      desc: "Professional GST audit support, reconciliation, and compliance verification.",
      icon: ShieldCheck
    },
    {
      title: "GST Refund",
      desc: "Fast processing of export refunds, excess tax refunds, and ITC refunds.",
      icon: Coins
    },
    {
      title: "Input Tax Credit (ITC)",
      desc: "Claim eligible ITC while maintaining complete GST compliance.",
      icon: TrendingUp
    },
    {
      title: "GST Notices",
      desc: "Professional assistance for notices, assessments, and departmental communication.",
      icon: Scale
    },
    {
      title: "E-Way Bill",
      desc: "Generate and manage E-Way Bills for smooth movement of goods.",
      icon: Truck
    },
    {
      title: "GST Accounting",
      desc: "Maintain GST-compliant accounting records and reconciliation.",
      icon: Building2
    },
    {
      title: "GST Compliance Health Check",
      desc: "Comprehensive review of GST filings, reconciliations, and compliance status.",
      icon: FileSearch
    }
  ];

  // Who Needs GST Registration? (10 Items)
  const whoNeedsGst = [
    { label: "Proprietorship Businesses", icon: Users },
    { label: "Partnership Firms", icon: Briefcase },
    { label: "LLPs", icon: Landmark },
    { label: "Private Limited Companies", icon: Building },
    { label: "E-Commerce Sellers", icon: Laptop },
    { label: "Service Providers", icon: UserCheck },
    { label: "Manufacturers", icon: Building2 },
    { label: "Wholesalers & Retailers", icon: Truck },
    { label: "Exporters & Importers", icon: TrendingUp },
    { label: "Startups", icon: Zap }
  ];

  // 7 Step Process
  const gstSteps = [
    { no: "01", title: "Free GST Consultation", desc: "Expert assessment of your business structure, threshold applicability & GST obligations.", icon: Users },
    { no: "02", title: "Document Collection", desc: "Digital collection & verification of PAN, Aadhaar, address proof & bank details.", icon: FileText },
    { no: "03", title: "Application Drafting", desc: "Accurate drafting & classification under correct HSN/SAC codes for zero errors.", icon: Calculator },
    { no: "04", title: "GST Portal Filing", desc: "ARN generation and real-time application tracking on official GST portal.", icon: CheckCircle2 },
    { no: "05", title: "Verification & Queries", desc: "Direct handling of officer queries, clarification requests & site verifications.", icon: ShieldCheck },
    { no: "06", title: "GSTIN Certificate Issuance", desc: "Official 15-digit GSTIN allotment & downloadable GST Certificate delivery.", icon: TrendingUp },
    { no: "07", title: "Ongoing Filing Support", desc: "Dedicated CA support for monthly return filings, GSTR-1/3B & ITC reconciliation.", icon: Award }
  ];

  // Why Choose Mazuma India (6 Cards)
  const whyChooseItems = [
    {
      title: "Expert GST Consultants",
      desc: "Qualified Chartered Accountants and GST professionals handling registration, filing, audits, and compliance.",
      icon: Users
    },
    {
      title: "100% Accurate & Secure",
      desc: "Error-free GST filings with complete confidentiality and secure document handling.",
      icon: Lock
    },
    {
      title: "Timely Compliance",
      desc: "Never miss GST deadlines with our proactive reminders and dedicated compliance support.",
      icon: Clock
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable professional services with clear pricing and no hidden costs.",
      icon: Coins
    },
    {
      title: "Dedicated Support",
      desc: "A dedicated GST consultant to assist you from registration to annual compliance.",
      icon: Headphones
    },
    {
      title: "End-to-End GST Solutions",
      desc: "From GST registration to audits, notices, ITC reconciliation, refunds, and compliance—we manage everything under one roof.",
      icon: Briefcase
    }
  ];

  // Frequently Asked Questions (8 Questions)
  const faqItems = [
    {
      question: "Who needs GST registration?",
      answer: "Businesses crossing the prescribed turnover limits, e-commerce sellers, interstate suppliers, and certain notified businesses are required to obtain GST registration."
    },
    {
      question: "What documents are required for GST registration?",
      answer: "PAN Card, Aadhaar Card, business address proof, bank account details, business registration documents, and authorized signatory details."
    },
    {
      question: "How long does GST registration take?",
      answer: "Normally, GST registration is completed within 5–10 working days, subject to document verification and government processing."
    },
    {
      question: "When should GST returns be filed?",
      answer: "GST returns are filed monthly, quarterly, or annually depending on the taxpayer's registration type and turnover."
    },
    {
      question: "What is GSTR-1?",
      answer: "GSTR-1 is a statement of outward supplies filed by registered taxpayers to report sales and turnover details."
    },
    {
      question: "What is GSTR-3B?",
      answer: "GSTR-3B is a monthly summary return used to report GST liability, Input Tax Credit claims, and tax payments."
    },
    {
      question: "How can I claim Input Tax Credit (ITC)?",
      answer: "ITC can be claimed on eligible business purchases after proper invoice matching and compliance with GST provisions."
    },
    {
      question: "What happens if GST returns are filed late?",
      answer: "Late filing may attract late fees, interest, notices, and restrictions on Input Tax Credit claims."
    }
  ];

  const jsonLdGstService = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "GST Registration & Compliance Services",
    provider: {
      "@type": "Organization",
      name: "Mazuma India",
      url: "https://mazumaindia.com"
    },
    areaServed: "India",
    description: "Complete GST services including GST registration, GSTR-1, GSTR-3B return filing, ITC reconciliation, GST refunds and tax notice management.",
    url: "https://mazumaindia.com/services/gst-services"
  };

  return (
    <div className="gst-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGstService) }}
      />

      <Header />

      {/* =========================================================
          HERO SECTION
         ========================================================= */}
      <section className="gst-hero-section">
        <div className="gst-section-shell">
          <div className="gst-hero-grid">
            
            {/* LEFT COLUMN */}
            <div className="gst-hero-left">
              {/* Breadcrumbs */}
              <div className="gst-hero-breadcrumbs">
                <Link href="/">Home</Link>
                <span>&gt;</span>
                <span style={{ color: "#94A3B8" }}>Services</span>
                <span>&gt;</span>
                <span className="current">GST Services</span>
              </div>

              {/* Eyebrow */}
              <div className="gst-eyebrow-text">
                GST SERVICES
              </div>

              {/* Title */}
              <h1 className="gst-hero-title">
                GST Registration &amp; <br />
                Compliance Services
              </h1>

              {/* Description */}
              <p className="gst-hero-desc">
                Simplify your GST compliance with Mazuma India. Our experienced GST consultants provide end-to-end assistance for GST registration, return filing, Input Tax Credit (ITC), refunds, audits, notices, and ongoing compliance to keep your business fully compliant with GST regulations.
              </p>

              {/* 4 Feature Badges */}
              <div className="gst-hero-badges-row">
                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <FileCheck2 size={22} />
                  </div>
                  <span className="gst-trust-badge-text">✔ GST Registration</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <FileText size={22} />
                  </div>
                  <span className="gst-trust-badge-text">✔ GST Return Filing</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <Coins size={22} />
                  </div>
                  <span className="gst-trust-badge-text">✔ GST Refund Assistance</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="gst-trust-badge-text">✔ 100% GST Compliance</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="gst-hero-cta-row">
                <button
                  className="gst-btn-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book Free Consultation</span>
                  <div className="gst-arrow-circle">➔</div>
                </button>

                <button
                  className="gst-btn-secondary"
                  onClick={() => setIsExpertModalOpen(true)}
                >
                  <PhoneCall size={16} style={{ color: "#0F2D52" }} />
                  <span>Talk to Our Expert</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: FLOATING MENU CARD */}
            <div className="gst-hero-right">
              <div className="gst-floating-menu-card">
                <h3 className="gst-floating-card-title">Our GST Services</h3>
                <div className="gst-floating-service-list">
                  {sidebarGstServices.map((srv, idx) => {
                    const IconComp = srv.icon;
                    return (
                      <div
                        key={idx}
                        className="gst-floating-service-item"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, service: srv.name }));
                          setIsModalOpen(true);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="gst-floating-service-item-left">
                          <IconComp size={14} className="gst-floating-item-icon" />
                          <span>{srv.name}</span>
                        </div>
                        <span className="gst-floating-item-arrow">&gt;</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          REDESIGNED FEATURED SERVICES (4 SHORT CARDS GRID)
         ========================================================= */}
      <section className="gst-featured-section">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <span className="gst-section-eyebrow">CORE SOLUTIONS</span>
            <h2 className="gst-section-title">Core GST Solutions &amp; Compliance</h2>
            <p className="gst-section-subtitle">
              Complete end-to-end GST registration, return filing, ITC reconciliation, and notice resolution services.
            </p>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-featured-grid">
            {coreSolutionsData.map((card, idx) => (
              <div
                key={idx}
                className={`gst-feat-card ${idx >= 2 && !showAllCoreSolutions ? "gst-card-hide-mobile" : ""}`}
              >
                <div className="gst-feat-card-img-box">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="gst-feat-card-img"
                  />
                </div>
                <div className="gst-feat-card-content">
                  <div className="gst-feat-card-top-info">
                    <span className="gst-feat-number">{card.num}</span>
                    <h3 className="gst-feat-title">{card.title}</h3>
                    <p className="gst-feat-desc">{card.desc}</p>
                    <div className="gst-feat-checklist">
                      {card.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="gst-feat-check-item">
                          <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="gst-feat-btn"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: card.serviceName }));
                      setIsModalOpen(true);
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Core Solutions Toggle Button (Mobile Only) */}
          <div className="gst-view-all-btn-wrapper gst-view-all-mobile-only" style={{ marginTop: "28px" }}>
            <button
              type="button"
              className="gst-view-all-btn"
              onClick={() => setShowAllCoreSolutions(!showAllCoreSolutions)}
            >
              <span>{showAllCoreSolutions ? "Show Less Core Solutions" : "View All Core Solutions"}</span>
              <ArrowRight
                size={16}
                style={{
                  transform: showAllCoreSolutions ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR GST SERVICES GRID (3x2 Desktop Grid - 6 Cards Only)
         ========================================================= */}
      <section className="gst-services-grid-section" id="our-gst-services">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <h2 className="gst-section-title">Our GST Services</h2>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-services-grid">
            {gstGridServices.slice(0, 6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`gst-service-card ${index >= 3 && !showAllGstServices ? "gst-card-hide-mobile" : ""}`}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, service: service.title }));
                    setIsModalOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="gst-service-card-icon">
                    <IconComponent size={26} />
                  </div>
                  <h3 className="gst-service-card-title">{service.title}</h3>
                  <p className="gst-service-card-desc">{service.desc}</p>
                  <span className="gst-service-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* View All GST Services Button (Mobile Only) */}
          <div className="gst-view-all-btn-wrapper gst-view-all-mobile-only">
            <button
              type="button"
              className="gst-view-all-btn"
              onClick={() => setShowAllGstServices(!showAllGstServices)}
            >
              <span>{showAllGstServices ? "Show Less GST Services" : "View All GST Services"}</span>
              <ArrowRight
                size={16}
                style={{
                  transform: showAllGstServices ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT GST & WHO NEEDS GST REGISTRATION
         ========================================================= */}
      <section className="gst-about-section">
        <div className="gst-section-shell">
          <div className="gst-about-grid">
            
            {/* Left: About Goods & Services Tax */}
            <div className="gst-about-left">
              <h2>About Goods &amp; Services Tax (GST)</h2>
              <p>
                Goods and Services Tax (GST) is India's unified indirect tax system applicable to the supply of goods and services. Businesses registered under GST are required to comply with various return filing, invoicing, tax payment, and record maintenance obligations.
              </p>
              <p>
                Mazuma India helps businesses manage every aspect of GST—from registration and return filing to audits, notices, refunds, and ongoing compliance—ensuring a hassle-free experience.
              </p>

              <div className="gst-about-badges-grid">
                <div className="gst-about-badge-card">
                  <ShieldCheck size={20} color="#FF6B00" />
                  <span>Legal GST Compliance</span>
                </div>
                <div className="gst-about-badge-card">
                  <Coins size={20} color="#FF6B00" />
                  <span>Avoid Penalties &amp; Interest</span>
                </div>
                <div className="gst-about-badge-card">
                  <TrendingUp size={20} color="#FF6B00" />
                  <span>Claim Max ITC</span>
                </div>
                <div className="gst-about-badge-card">
                  <FileText size={20} color="#FF6B00" />
                  <span>Timely Return Filing</span>
                </div>
                <div className="gst-about-badge-card">
                  <Zap size={20} color="#FF6B00" />
                  <span>Faster GST Refunds</span>
                </div>
                <div className="gst-about-badge-card">
                  <Award size={20} color="#FF6B00" />
                  <span>Better Business Credibility</span>
                </div>
              </div>
            </div>

            {/* Right: Who Needs GST Registration? */}
            <div className="gst-about-right">
              <h3 className="gst-who-title">Who Needs GST Registration?</h3>
              <div className="gst-who-grid">
                {(showAllWhoNeedsGst ? whoNeedsGst : whoNeedsGst.slice(0, 4)).map((item, idx) => {
                  const IconC = item.icon;
                  return (
                    <div key={idx} className="gst-who-pill-card">
                      <div className="gst-who-icon-circle">
                        <IconC size={20} />
                      </div>
                      <span className="gst-who-label">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* View All 10 Entities Toggle Button */}
              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <button
                  type="button"
                  className="gst-who-toggle-btn"
                  onClick={() => setShowAllWhoNeedsGst(!showAllWhoNeedsGst)}
                >
                  <span>{showAllWhoNeedsGst ? "Show Less Entities" : "View All 10 Entities"}</span>
                  <ArrowRight
                    size={14}
                    style={{
                      transform: showAllWhoNeedsGst ? "rotate(-90deg)" : "rotate(90deg)",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OUR GST PROCESS (7 STEPS)
         ========================================================= */}
      <section className="gst-process-section">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <span className="gst-section-eyebrow">STEP-BY-STEP WORKFLOW</span>
            <h2 className="gst-section-title">Our 7-Step GST Execution Process</h2>
            <p className="gst-section-subtitle">
              A transparent, hassle-free procedure designed to get your GSTIN issued fast and keep your tax filings 100% compliant.
            </p>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-process-timeline-wrapper">
            <div className="gst-process-grid">
              {gstSteps.map((step, idx) => {
                const IconC = step.icon;
                const hideMobileClass = idx >= 2 && !showAllProcessSteps ? "gst-process-hide-mobile" : "";
                const hideDesktopClass = idx >= 4 && !showAllProcessSteps ? "gst-process-hide-desktop" : "";
                return (
                  <div key={idx} className={`gst-process-step-card ${hideMobileClass} ${hideDesktopClass}`}>
                    <div className="gst-process-card-top-row">
                      <span className="gst-process-card-badge">STEP {step.no}</span>
                      <span className="gst-process-phase-tag">Phase {idx + 1}</span>
                    </div>
                    <div className="gst-process-icon-circle">
                      <IconC size={22} />
                    </div>
                    <h3 className="gst-process-step-title">{step.title}</h3>
                    <p className="gst-process-step-desc">{step.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* View All 7 Process Steps Toggle Button */}
            <div className="gst-view-all-btn-wrapper" style={{ marginTop: "32px" }}>
              <button
                type="button"
                className="gst-view-all-btn"
                onClick={() => setShowAllProcessSteps(!showAllProcessSteps)}
              >
                <span>{showAllProcessSteps ? "Show Less Process Steps" : "View All 7 Process Steps"}</span>
                <ArrowRight
                  size={16}
                  style={{
                    transform: showAllProcessSteps ? "rotate(-90deg)" : "rotate(90deg)",
                    transition: "transform 0.3s ease"
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE MAZUMA INDIA (6 CARDS)
         ========================================================= */}
      <section className="gst-why-section">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <h2 className="gst-section-title">Why Choose Mazuma India?</h2>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-why-grid">
            {whyChooseItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="gst-why-card">
                  <div className="gst-why-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="gst-why-title">{item.title}</h3>
                  <p className="gst-why-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FREQUENTLY ASKED QUESTIONS (FAQ)
         ========================================================= */}
      <section className="gst-faq-section">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <h2 className="gst-section-title">Frequently Asked Questions</h2>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-faq-grid">
            {faqItems.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`gst-faq-item ${isOpen ? "is-active" : ""}`}>
                  <button
                    type="button"
                    className="gst-faq-question-btn"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <div className="gst-faq-plus-icon">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="gst-faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA SECTION
         ========================================================= */}
      <section className="gst-cta-section" id="gst-contact-cta">
        <div className="gst-section-shell">
          <div className="gst-cta-card">
            {/* LEFT */}
            <div className="gst-cta-left-content">
              <div className="gst-cta-icon-badge">
                <FileCheck2 size={22} />
              </div>
              <h2 className="gst-cta-title">
                Need Help with GST Registration or GST Compliance?
              </h2>
              <p className="gst-cta-desc">
                Whether you are registering a new business, filing GST returns, claiming refunds, or responding to GST notices, Mazuma India's experts provide complete support to keep your business compliant and stress-free.
              </p>
            </div>

            {/* CENTER (4 MINI FEATURE CARDS) */}
            <div className="gst-cta-features-grid">
              <div className="gst-cta-mini-feature">
                <Users size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">✔ Expert GST Consultation</span>
              </div>
              <div className="gst-cta-mini-feature">
                <FileText size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">✔ GST Reg &amp; Return Filing</span>
              </div>
              <div className="gst-cta-mini-feature">
                <Coins size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">✔ ITC &amp; Refund Assistance</span>
              </div>
              <div className="gst-cta-mini-feature">
                <ShieldCheck size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">✔ End-to-End Compliance</span>
              </div>
            </div>

            {/* RIGHT (BUTTON & PHONE) */}
            <div className="gst-cta-right-content">
              <button
                className="gst-btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book Free Consultation</span>
                <div className="gst-arrow-circle">➔</div>
              </button>

              <div className="gst-cta-phone-row">
                <Phone size={15} style={{ color: "#FF6B00" }} />
                <span>or call us at</span>
                <a href="tel:+919936351555" className="gst-cta-phone-link">
                  +91 99363 51555 <br /> +91 99998 65586
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 24px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFF4EC", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="cr-modal-title" style={{ fontSize: 22, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
                  Thank You! Consultation Requested
                </h3>
                <p className="cr-modal-desc" style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  We have prepared your request for <strong>compliance@mazumaindia.com</strong>. Our senior CA and GST expert team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <div className="cr-modal-grid">
                <div className="cr-modal-left">
                  <div>
                    <img
                      src="/why-choose-office.jpg"
                      alt="GST Consultation Expert"
                      className="cr-modal-left-img"
                    />
                    <h4 className="cr-modal-left-title">Talk to Our GST Expert</h4>
                    <div className="cr-modal-left-bullets">
                      <div className="cr-modal-bullet-item">
                        ✓ 100% Free Consultation
                      </div>
                      <div className="cr-modal-bullet-item">
                        ✓ Instant GST Guidance
                      </div>
                      <div className="cr-modal-bullet-item">
                        ✓ 100% Data Confidentiality
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cr-modal-right">
                  <h3 className="cr-modal-title">Book Free Consultation</h3>
                  <p className="cr-modal-desc">
                    Get instant advice from our senior CA team.
                  </p>

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
                        <label className="cr-form-label">Service Required *</label>
                        <select
                          className="cr-form-select"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="GST Registration">GST Registration</option>
                          <option value="GST Amendment">GST Amendment</option>
                          <option value="GST Cancellation">GST Cancellation</option>
                          <option value="GST Return Filing">GST Return Filing</option>
                          <option value="GSTR-1 Filing">GSTR-1 Filing</option>
                          <option value="GSTR-3B Filing">GSTR-3B Filing</option>
                          <option value="Annual GST Return (GSTR-9)">Annual GST Return (GSTR-9)</option>
                          <option value="GST Audit">GST Audit</option>
                          <option value="GST Refund">GST Refund</option>
                          <option value="Input Tax Credit (ITC)">Input Tax Credit (ITC)</option>
                          <option value="GST Notices">GST Notices</option>
                          <option value="E-Way Bill">E-Way Bill</option>
                          <option value="GST Accounting">GST Accounting</option>
                          <option value="GST Compliance Health Check">GST Compliance Health Check</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="cr-modal-submit-btn">
                      Request Consultation <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DEDICATED "TALK TO EXPERT" MODAL */}
      {isExpertModalOpen && (
        <div className="expert-modal-backdrop" onClick={() => setIsExpertModalOpen(false)}>
          <div className="expert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="expert-modal-close-btn"
              onClick={() => setIsExpertModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="expert-modal-header">
              <div className="expert-circle-icon-wrapper">
                <img src="/contact-us-icon.png" alt="Contact Icon" className="expert-contact-circle-img" />
              </div>
              <p className="expert-modal-header-sub">
                Get direct 1-on-1 guidance on GST registration, returns, ITC claims &amp; notices.
              </p>
            </div>

            <div className="expert-modal-body">
              {expertSubmitted ? (
                <div style={{ textAlign: "center", padding: "30px 16px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFF4EC", color: "#FF6B00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
                    Callback Request Received!
                  </h3>
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>
                    We have prepared your request for <strong>compliance@mazumaindia.com</strong>. A Senior GST Advisor will call you back within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleExpertSubmit}>
                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="cr-form-input"
                        required
                        value={expertFormData.phone}
                        onChange={(e) => setExpertFormData({ ...expertFormData, phone: e.target.value })}
                      />
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-form-label">Email Address *</label>
                      <input
                        type="email"
                        className="cr-form-input"
                        required
                        value={expertFormData.email}
                        onChange={(e) => setExpertFormData({ ...expertFormData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="cr-form-group" style={{ marginBottom: 16 }}>
                    <label className="cr-form-label">City / State *</label>
                    <input
                      type="text"
                      className="cr-form-input"
                      required
                      value={expertFormData.city}
                      onChange={(e) => setExpertFormData({ ...expertFormData, city: e.target.value })}
                    />
                  </div>

                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Consultation Topic *</label>
                      <select
                        className="cr-form-select"
                        value={expertFormData.topic}
                        onChange={(e) => setExpertFormData({ ...expertFormData, topic: e.target.value })}
                      >
                        <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                        <option value="ITC Reconciliation">ITC Reconciliation</option>
                        <option value="GST Refund Claim">GST Refund Claim</option>
                        <option value="GST Notice Defense">GST Notice Defense</option>
                        <option value="Annual Return GSTR-9">Annual Return GSTR-9</option>
                        <option value="General GST Advisory">General GST Advisory</option>
                      </select>
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-form-label">Preferred Callback Time *</label>
                      <select
                        className="cr-form-select"
                        value={expertFormData.callbackTime}
                        onChange={(e) => setExpertFormData({ ...expertFormData, callbackTime: e.target.value })}
                      >
                        <option value="Immediate (Within 15 mins)">Immediate (Within 15 mins)</option>
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="expert-submit-btn">
                    <span>Request Instant Expert Callback</span>
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
