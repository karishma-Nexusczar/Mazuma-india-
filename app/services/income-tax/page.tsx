"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./income-tax.css";
import {
  UserCheck,
  Coins,
  ShieldCheck,
  Zap,
  PhoneCall,
  Phone,
  ChevronRight,
  FileText,
  Building2,
  Users,
  Briefcase,
  Clock,
  Calculator,
  TrendingUp,
  RotateCcw,
  AlertTriangle,
  FileSearch,
  CheckCircle2,
  Landmark,
  BadgePercent,
  Award,
  Lock,
  Headset,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  CreditCard,
  Building,
  Laptop,
  Calendar,
  PieChart,
  Link2,
  FileCheck
} from "lucide-react";

export default function IncomeTaxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Individual ITR Filing",
    city: ""
  });
  const [expertFormData, setExpertFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    topic: "ITR Filing & Deductions",
    callbackTime: "Immediate (Within 15 mins)"
  });
  const [submitted, setSubmitted] = useState(false);
  const [expertSubmitted, setExpertSubmitted] = useState(false);
  const [showAllWhoShouldFile, setShowAllWhoShouldFile] = useState(false);
  const [showAllItrProcessSteps, setShowAllItrProcessSteps] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
          service: formData.service || "Income Tax Services",
          city: formData.city,
          source: "Income Tax Services Page"
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
          service: "Individual ITR Filing",
          city: ""
        });
      }, 3500);
    } catch (err) {
      console.error("Income Tax API error:", err);
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
          service: expertFormData.topic || "Income Tax Senior CA Callback",
          city: expertFormData.city,
          preferredTime: expertFormData.callbackTime,
          source: "Income Tax Senior Advisor Modal"
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
          topic: "ITR Filing & Deductions",
          callbackTime: "Immediate (Within 15 mins)"
        });
      }, 3500);
    } catch (err) {
      console.error("Income Tax Expert API error:", err);
    }
  };

  // Sidebar Floating Card Services List (13 Items)
  const itrServicesList = [
    { title: "Individual ITR Filing", icon: FileText },
    { title: "Business ITR Filing", icon: Briefcase },
    { title: "Salaried Employee ITR", icon: UserCheck },
    { title: "Professional & Freelancer ITR", icon: Laptop },
    { title: "TDS Return Filing", icon: FileCheck },
    { title: "Belated Return Filing", icon: Calendar },
    { title: "Updated Return Filing", icon: RotateCcw },
    { title: "Revised Return Filing", icon: RotateCcw },
    { title: "Tax Planning & Computation", icon: Calculator },
    { title: "Capital Gains Tax Assistance", icon: TrendingUp },
    { title: "AIS / TIS Compliance", icon: PieChart },
    { title: "Aadhaar–PAN Linking", icon: Link2 },
    { title: "Late Fee & Penalty Assistance", icon: AlertTriangle }
  ];

  // 12 Income Tax Return Services Grid (Symmetric 4x3 Grid)
  const itrGridServices = [
    {
      title: "Individual ITR Filing",
      desc: "Accurate income tax return filing for salaried employees, pensioners, house property owners, interest income, capital gains and other individual taxpayers.",
      icon: FileText
    },
    {
      title: "Business ITR Filing",
      desc: "Complete income tax return filing for proprietorships, partnership firms, LLPs, private limited companies and other business entities.",
      icon: Briefcase
    },
    {
      title: "Salaried Employee ITR",
      desc: "Professional tax filing with salary computation, deductions, exemptions and refund assistance.",
      icon: UserCheck
    },
    {
      title: "Professional & Freelancer ITR",
      desc: "Specialized tax filing for consultants, doctors, architects, designers, software professionals and freelancers.",
      icon: Laptop
    },
    {
      title: "TDS Return Filing",
      desc: "Preparation and filing of quarterly TDS returns, correction statements, Form 24Q, 26Q, 27Q and complete TDS compliance.",
      icon: FileCheck
    },
    {
      title: "Belated & Updated ITR Filing",
      desc: "File delayed income tax returns or update previously filed returns to disclose omitted income and minimize penalties.",
      icon: Calendar
    },
    {
      title: "Revised Return & Rectifications",
      desc: "Correct mistakes, update information, and revise previously filed returns before the prescribed legal deadline.",
      icon: RotateCcw
    },
    {
      title: "Tax Planning & Computation",
      desc: "Comprehensive tax planning to legally reduce tax liability while maximizing deductions and exemptions under the Income Tax Act.",
      icon: Calculator
    },
    {
      title: "Capital Gains Tax Assistance",
      desc: "Expert guidance on property sales, equity investments, mutual funds, indexation benefits and exemption planning.",
      icon: TrendingUp
    },
    {
      title: "AIS / TIS Compliance",
      desc: "Review Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) to ensure accurate income reporting.",
      icon: PieChart
    },
    {
      title: "Aadhaar–PAN Linking",
      desc: "Quick Aadhaar-PAN linking support along with PAN correction and compliance assistance.",
      icon: Link2
    },
    {
      title: "Late Fee & Penalty Assistance",
      desc: "Professional assistance for notices, penalties, interest calculations and delayed filing compliance.",
      icon: AlertTriangle
    }
  ];

  // Who Should File ITR (10 Items)
  const whoShouldFile = [
    { label: "Salaried Employees", icon: Users },
    { label: "Self-Employed Professionals", icon: UserCheck },
    { label: "Freelancers & Consultants", icon: Laptop },
    { label: "Business Owners", icon: Building2 },
    { label: "Partnership Firms", icon: Briefcase },
    { label: "LLPs", icon: Landmark },
    { label: "Private Limited Companies", icon: Building },
    { label: "NRIs", icon: Users },
    { label: "Senior Citizens", icon: UserCheck },
    { label: "Investors with Capital Gains", icon: TrendingUp }
  ];

  // 7 Step Process Timeline
  const itrSteps = [
    { no: "Step 1", title: "Free Tax Consultation", icon: Users },
    { no: "Step 2", title: "Document Collection & Review", icon: FileText },
    { no: "Step 3", title: "Income & Tax Computation", icon: Calculator },
    { no: "Step 4", title: "Return Preparation", icon: CheckCircle2 },
    { no: "Step 5", title: "Verification & Review", icon: ShieldCheck },
    { no: "Step 6", title: "Income Tax Return Filing", icon: TrendingUp },
    { no: "Step 7", title: "Acknowledgement & Post Filing Support", icon: Award }
  ];

  // Why Choose Mazuma India (6 Cards)
  const whyChooseUs = [
    {
      title: "Expert Tax Advisors",
      desc: "Experienced professionals handling individual and corporate tax matters with complete accuracy.",
      icon: UserCheck
    },
    {
      title: "Maximum Tax Savings",
      desc: "Claim all eligible deductions, exemptions and rebates available under the Income Tax Act.",
      icon: Coins
    },
    {
      title: "100% Secure & Confidential",
      desc: "Your financial information is protected using secure document management practices.",
      icon: ShieldCheck
    },
    {
      title: "Fast & Accurate Filing",
      desc: "Efficient tax filing process with minimal turnaround time and complete compliance.",
      icon: Zap
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable professional services with no hidden charges.",
      icon: BadgePercent
    },
    {
      title: "Dedicated Client Support",
      desc: "Personalized assistance from consultation until successful ITR filing and future compliance.",
      icon: Headset
    }
  ];

  // FAQ Accordion (8 Questions)
  const faqs = [
    {
      q: "Who should file an Income Tax Return?",
      a: "Individuals, professionals, businesses and companies whose income exceeds the prescribed exemption limit or who wish to claim refunds should file an Income Tax Return."
    },
    {
      q: "What documents are required for ITR filing?",
      a: "PAN Card, Aadhaar Card, Form 16, Form 26AS, AIS, bank statements, investment proofs, interest certificates and other applicable financial documents."
    },
    {
      q: "What is the last date for filing ITR?",
      a: "The due date varies each financial year depending on taxpayer category and government notifications (typically July 31st for non-audit individuals)."
    },
    {
      q: "What happens if I miss the due date?",
      a: "Late filing may attract penalties under Section 234F, interest under Section 234A/B/C, and restrictions on carrying forward certain losses."
    },
    {
      q: "Can I revise my Income Tax Return?",
      a: "Yes. A filed return can generally be revised within the time limit prescribed by the Income Tax Act to rectify any mistakes or omissions."
    },
    {
      q: "What is a Belated Return?",
      a: "A Belated Return allows taxpayers to file an Income Tax Return after the original due date, subject to applicable late fee provisions."
    },
    {
      q: "What is an Updated Return?",
      a: "An Updated Return enables taxpayers to voluntarily update previously filed returns within the prescribed legal time frame to disclose additional income."
    },
    {
      q: "Why choose Mazuma India for ITR filing?",
      a: "Mazuma India offers expert tax consultation, accurate filing, maximum tax optimization, secure documentation and complete post-filing support."
    }
  ];

  const jsonLdITR = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Income Tax Return (ITR) Filing Services",
    provider: {
      "@type": "Organization",
      name: "Mazuma India",
      url: "https://mazumaindia.com"
    },
    areaServed: "India",
    description: "Complete Income Tax Return filing services for individuals, salaried employees, freelancers, businesses, TDS filing, belated & revised ITR.",
    url: "https://mazumaindia.com/services/income-tax"
  };

  return (
    <div className="itr-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdITR) }}
      />

      <Header />

      {/* Breadcrumb Bar */}
      <div className="itr-breadcrumb-bar">
        <div className="itr-breadcrumb-inner">
          <Link href="/" className="itr-breadcrumb-link">Home</Link>
          <ChevronRight size={13} />
          <span className="itr-breadcrumb-link">Services</span>
          <ChevronRight size={13} />
          <span className="itr-breadcrumb-current">Income Tax Return (ITR)</span>
        </div>
      </div>

      <main>
        {/* ============================================================
            STEP 1 – HERO SECTION
           ============================================================ */}
        <section className="itr-hero-section">
          <div className="itr-hero-gradient-overlay"></div>

          <div className="itr-hero-container">
            <div className="itr-hero-grid">
              
              {/* LEFT COLUMN: Text Content & Trust Badges */}
              <div className="itr-hero-left">
                <span className="itr-hero-eyebrow">INCOME TAX RETURN (ITR)</span>
                <h1 className="itr-hero-title">
                  Income Tax Return (ITR)<br />
                  Filing Services
                </h1>

                <p className="itr-hero-desc">
                  File your Income Tax Return with confidence through Mazuma India. Our experienced tax professionals help individuals, salaried employees, freelancers, businesses, and companies file accurate ITRs, maximize eligible tax savings, and ensure complete compliance with the Income Tax Act.
                </p>

                {/* Four Feature Icons */}
                <div className="itr-trust-badges-row">
                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <UserCheck size={22} />
                    </div>
                    <span className="itr-trust-badge-label">✔ Expert Tax Consultants</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <Coins size={22} />
                    </div>
                    <span className="itr-trust-badge-label">✔ Maximum Tax Savings</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="itr-trust-badge-label">✔ Secure &amp; Confidential Filing</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <Zap size={22} />
                    </div>
                    <span className="itr-trust-badge-label">✔ Fast Processing</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="itr-hero-cta-group">
                  <button
                    className="itr-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Book Free Consultation</span>
                    <div className="itr-btn-primary-circle-icon">
                      <ArrowRight size={13} />
                    </div>
                  </button>

                  <button
                    className="itr-btn-secondary"
                    onClick={() => setIsExpertModalOpen(true)}
                  >
                    <PhoneCall size={16} color="#0F2D52" />
                    <span>Talk to Our Expert</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Floating White Card "Our Income Tax Services" */}
              <div className="itr-hero-right">
                <div className="itr-floating-services-card">
                  <h3 className="itr-services-card-title">
                    Our Income Tax Services
                  </h3>

                  <div className="itr-services-list">
                    {itrServicesList.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={idx}
                          className="itr-service-list-item"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, service: item.title }));
                            setIsModalOpen(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="itr-service-list-item-left">
                            <IconComp size={14} className="itr-service-item-icon" />
                            <span className="itr-service-item-text">{item.title}</span>
                          </div>
                          <ChevronRight size={14} className="itr-service-item-chevron" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2 – OUR INCOME TAX RETURN SERVICES GRID (3x2 Desktop Grid - 6 Cards Only)
           ============================================================ */}
        <section className="itr-services-section" id="itr-services-grid">
          <div className="itr-section-header">
            <h2 className="itr-section-title">Our Income Tax Return Services</h2>
            <div className="itr-title-divider-line"></div>
          </div>

          <div className="itr-services-grid">
            {itrGridServices.slice(0, 6).map((service, idx) => {
              const IconComp = service.icon;
              return (
                <article key={idx} className="itr-service-card-redesign">
                  <div>
                    <div className="itr-service-card-direct-icon">
                      <IconComp size={36} />
                    </div>
                    <h3 className="itr-service-card-title">{service.title}</h3>
                    <p className="itr-service-card-desc">{service.desc}</p>
                  </div>
                  <button
                    className="itr-service-card-link"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                      setIsModalOpen(true);
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </button>
                </article>
              );
            })}
          </div>

          {/* View All Services Button -> Navigates to Separate Full Details Page */}
          <div className="itr-view-all-btn-wrapper">
            <Link href="/services/income-tax/all-services" className="itr-view-all-btn">
              <span>View All Income Tax Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ============================================================
            SECTION 3 – ABOUT INCOME TAX RETURN & WHO SHOULD FILE
           ============================================================ */}
        <section className="itr-about-section">
          <div className="itr-about-grid">
            
            {/* Left Column: About Income Tax Return (ITR) */}
            <div className="itr-about-left">
              <h2>About Income Tax Return (ITR)</h2>
              <p>
                Income Tax Return (ITR) is an official declaration of your annual income, deductions, taxes paid and refund claims submitted to the Income Tax Department of India. Filing your ITR accurately helps maintain legal compliance, strengthens your financial profile and avoids unnecessary penalties.
              </p>
              <p>
                Whether you are an individual taxpayer, salaried employee, freelancer, business owner or company, timely ITR filing is essential for smooth financial and legal operations.
              </p>

              <div className="itr-about-badges-grid">
                <div className="itr-about-badge-card">
                  <ShieldCheck size={20} color="#FF6B00" />
                  <span>Legal Tax Compliance</span>
                </div>
                <div className="itr-about-badge-card">
                  <Coins size={20} color="#FF6B00" />
                  <span>Faster Tax Refunds</span>
                </div>
                <div className="itr-about-badge-card">
                  <Landmark size={20} color="#FF6B00" />
                  <span>Loan &amp; Visa Support</span>
                </div>
                <div className="itr-about-badge-card">
                  <Award size={20} color="#FF6B00" />
                  <span>Strong Financial Record</span>
                </div>
              </div>
            </div>

            {/* Right Column: Who Should File ITR? */}
            <div className="itr-about-right">
              <h3 className="itr-who-title">Who Should File ITR?</h3>
              <div className="itr-who-grid">
                {whoShouldFile.map((item, idx) => {
                  const IconC = item.icon;
                  return (
                    <div key={idx} className="itr-who-pill-card">
                      <div className="itr-who-icon-circle">
                        <IconC size={20} />
                      </div>
                      <span className="itr-who-label">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================
            SECTION 4 – OUR ITR FILING PROCESS (7-Step Timeline)
           ============================================================ */}
        <section className="itr-process-section">
          <div className="itr-section-header">
            <h2 className="itr-section-title">Our ITR Filing Process</h2>
            <div className="itr-title-divider-line"></div>
          </div>

          <div className="itr-process-timeline-container">
            {itrSteps.map((step, idx) => {
              const IconC = step.icon;
              const hideMobileClass = idx >= 2 && !showAllItrProcessSteps ? "itr-process-hide-mobile" : "";
              return (
                <React.Fragment key={idx}>
                  <div className={`itr-process-step-item ${hideMobileClass}`}>
                    <div className="itr-process-icon-circle">
                      <IconC size={22} />
                    </div>
                    <div className="itr-process-step-info">
                      <span className="itr-process-step-no">{step.no}</span>
                      <span className="itr-process-step-title">{step.title}</span>
                    </div>
                  </div>
                  {idx < itrSteps.length - 1 && (
                    <div className={`itr-process-arrow-divider ${hideMobileClass}`}>
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Toggle Button for Mobile */}
          <div className="itr-process-view-all-wrapper" style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              type="button"
              className="itr-who-toggle-btn"
              onClick={() => setShowAllItrProcessSteps(!showAllItrProcessSteps)}
            >
              <span>{showAllItrProcessSteps ? "Show Less Process Steps" : "View All 7 Process Steps"}</span>
              <ArrowRight
                size={14}
                style={{
                  transform: showAllItrProcessSteps ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </section>

        {/* ============================================================
            SECTION 5 – WHY CHOOSE MAZUMA INDIA & FREQUENTLY ASKED QUESTIONS
           ============================================================ */}
        <section className="itr-why-faq-section">
          <div className="itr-why-faq-grid">
            
            {/* Left Side: Why Choose Mazuma India? */}
            <div className="itr-why-left">
              <h2 className="itr-section-title" style={{ textAlign: "left", marginBottom: 0 }}>
                Why Choose Mazuma India?
              </h2>
              <div className="itr-title-divider-line" style={{ margin: "8px 0 0 0" }}></div>

              <div className="itr-why-features-grid">
                {whyChooseUs.map((feat, idx) => {
                  const IconC = feat.icon;
                  return (
                    <div key={idx} className="itr-why-card">
                      <div className="itr-why-card-icon">
                        <IconC size={20} />
                      </div>
                      <div className="itr-why-card-content">
                        <h4 className="itr-why-card-title">{feat.title}</h4>
                        <p className="itr-why-card-desc">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Frequently Asked Questions */}
            <div className="itr-faq-right">
              <h2 className="itr-section-title" style={{ textAlign: "left", marginBottom: 12 }}>
                Frequently Asked Questions
              </h2>

              <div className="itr-faq-list">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className={`itr-faq-item ${isOpen ? "is-open" : ""}`}>
                      <button
                        className="itr-faq-button"
                        onClick={() => toggleFaq(idx)}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp size={18} color="#FF6B00" /> : <ChevronDown size={18} />}
                      </button>
                      {isOpen && (
                        <div className="itr-faq-answer">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================
            SECTION 6 – FINAL CALL TO ACTION (CTA)
           ============================================================ */}
        <section className="itr-cta-banner-section">
          <div className="itr-cta-banner-card">
            
            {/* Left Title & Desc */}
            <div className="itr-cta-banner-left">
              <h3 className="itr-cta-banner-title">Need Expert Help with Your Income Tax Return?</h3>
              <p className="itr-cta-banner-desc">
                Let Mazuma India's experienced tax professionals handle your Income Tax Return while you focus on your career or business. We ensure accurate filing, timely compliance and maximum eligible tax savings.
              </p>
            </div>

            {/* Center 4 Badges Box */}
            <div className="itr-cta-banner-center">
              <div className="itr-cta-badge-item">
                <div className="itr-cta-badge-circle">
                  <UserCheck size={20} />
                </div>
                <span className="itr-cta-badge-label">Expert CA Consultation</span>
              </div>

              <div className="itr-cta-badge-item">
                <div className="itr-cta-badge-circle">
                  <ShieldCheck size={20} />
                </div>
                <span className="itr-cta-badge-label">Accurate &amp; Secure Filing</span>
              </div>

              <div className="itr-cta-badge-item">
                <div className="itr-cta-badge-circle">
                  <Coins size={20} />
                </div>
                <span className="itr-cta-badge-label">Maximum Tax Savings</span>
              </div>

              <div className="itr-cta-badge-item">
                <div className="itr-cta-badge-circle">
                  <Headset size={20} />
                </div>
                <span className="itr-cta-badge-label">End-to-End Tax Support</span>
              </div>
            </div>

            {/* Right Button & Phone */}
            <div className="global-cta-contact-section">
              <button
                className="global-consultation-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book Free Consultation</span>
                <span className="arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
              <div className="global-contact-box">
                <div className="phone-icon-circle">
                  <Phone size={18} fill="#FF6B00" stroke="#FF6B00" />
                </div>
                <div className="phone-numbers-column">
                  <a href="tel:+919936351555" className="phone-number-link">
                    Call Now: +91 99363 51555
                  </a>
                  <a href="tel:+919999865586" className="phone-number-link">
                    Call Now: +91 99998 65586
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

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 24px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFF4EC", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="cr-modal-title" style={{ fontSize: 22, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
                  Thank You! Consultation Requested
                </h3>
                <p className="cr-modal-desc" style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  We have prepared your request for <strong>compliance@mazumaindia.com</strong>. Our senior CA and tax expert team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <div className="cr-modal-grid">
                {/* LEFT SIDE: EXPERT BANNER */}
                <div className="cr-modal-left">
                  <div>
                    <img
                      src="/why-choose-office.jpg"
                      alt="Consultation Expert"
                      className="cr-modal-left-img"
                    />
                    <h4 className="cr-modal-left-title">Talk to Our Tax Expert</h4>
                    <div className="cr-modal-left-bullets">
                      <div className="cr-modal-bullet-item">
                        ✓ 100% Free Consultation
                      </div>
                      <div className="cr-modal-bullet-item">
                        ✓ Instant ITR Guidance
                      </div>
                      <div className="cr-modal-bullet-item">
                        ✓ 100% Data Confidentiality
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: FORM */}
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
                          <option value="Individual ITR Filing">Individual ITR Filing</option>
                          <option value="Business ITR Filing">Business ITR Filing</option>
                          <option value="Salaried Employee ITR">Salaried Employee ITR</option>
                          <option value="Professional & Freelancer ITR">Professional &amp; Freelancer ITR</option>
                          <option value="TDS Return Filing">TDS Return Filing</option>
                          <option value="Belated Return Filing">Belated Return Filing</option>
                          <option value="Updated Return Filing">Updated Return Filing</option>
                          <option value="Revised Return Filing">Revised Return Filing</option>
                          <option value="Tax Planning & Computation">Tax Planning &amp; Computation</option>
                          <option value="Capital Gains Tax Assistance">Capital Gains Tax Assistance</option>
                          <option value="AIS / TIS Compliance">AIS / TIS Compliance</option>
                          <option value="Aadhaar–PAN Linking">Aadhaar–PAN Linking</option>
                          <option value="Late Fee & Penalty Assistance">Late Fee &amp; Penalty Assistance</option>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/contact-us-icon.png" alt="Contact Icon" className="expert-contact-circle-img" />
              </div>
              <p className="expert-modal-header-sub">
                Get direct 1-on-1 guidance on tax optimization, ITR filing &amp; notices.
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
                    We have prepared your request for <strong>compliance@mazumaindia.com</strong>. A Senior CA will call you back within 15 minutes.
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
                        <option value="ITR Filing & Deductions">ITR Filing &amp; Deductions</option>
                        <option value="Business & Startup Tax">Business &amp; Startup Tax</option>
                        <option value="Capital Gains Tax">Capital Gains Tax</option>
                        <option value="Belated & Revised Return">Belated &amp; Revised Return</option>
                        <option value="TDS Filing & Notice">TDS Filing &amp; Notice</option>
                        <option value="General Tax Advice">General Tax Advice</option>
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
