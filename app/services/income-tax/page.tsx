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
  PieChart
} from "lucide-react";

export default function IncomeTaxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "ITR Filing for Individuals",
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Income Tax Consultation Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a free consultation regarding Income Tax Return (ITR) Filing Services.\n\nDetails:\n- Full Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Service Requested: ${formData.service}\n- City / State: ${formData.city}\n\nPlease contact me as soon as possible.\n\nThank you,\n${formData.name}`
    );

    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "ITR Filing for Individuals",
        city: ""
      });
    }, 4000);
  };

  const handleExpertSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`EXPERT CALLBACK REQUEST (Senior CA): ${expertFormData.name}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Expert Team,\n\nI would like to request an immediate 1-on-1 callback from a Senior CA & Tax Expert.\n\nDetails:\n- Full Name: ${expertFormData.name}\n- Phone: ${expertFormData.phone}\n- Email: ${expertFormData.email}\n- City / State: ${expertFormData.city}\n- Topic / Query: ${expertFormData.topic}\n- Preferred Callback Time: ${expertFormData.callbackTime}\n\nPlease connect me with a Senior CA expert.\n\nThank you,\n${expertFormData.name}`
    );

    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;

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
    }, 4000);
  };

  // 11 Floating Card Service Items (Step 1 Right Content)
  const itrServicesList = [
    { title: "ITR Filing for Individuals", icon: FileText },
    { title: "Business Income Tax Return", icon: Briefcase },
    { title: "Salaried Employee ITR", icon: UserCheck },
    { title: "Freelancers & Professionals", icon: Laptop },
    { title: "Belated & Updated ITR", icon: Calendar },
    { title: "Tax Computation & Planning", icon: Calculator },
    { title: "Capital Gains Assistance", icon: TrendingUp },
    { title: "Revised Returns & Rectifications", icon: RotateCcw },
    { title: "Late Fee & Penalty Assistance", icon: AlertTriangle },
    { title: "AIS / TIS Compliance", icon: PieChart },
    { title: "Aadhaar-PAN Linking Support", icon: CheckCircle2 }
  ];

  // 10 Income Tax Return Services Grid (Section 2 - Matched 100% to Image 16)
  const itrGridServices = [
    {
      title: "ITR Filing for Individuals",
      desc: "File ITR for various income sources including salary, house property, FD, interest and more.",
      icon: FileText
    },
    {
      title: "Business Income Tax Return",
      desc: "ITR filing for proprietorships, partnership firms, LLPs and private limited companies.",
      icon: Briefcase
    },
    {
      title: "Salaried Employee ITR",
      desc: "Hassle-free ITR filing for salaried employees with accurate tax calculation and refund claims.",
      icon: UserCheck
    },
    {
      title: "Freelancers & Professionals",
      desc: "Specialized ITR filing for freelancers, consultants, doctors, architects and other professionals.",
      icon: Laptop
    },
    {
      title: "Belated & Updated ITR",
      desc: "File belated returns or updated ITR with ease and avoid heavy penalties and notices.",
      icon: Calendar
    },
    {
      title: "Tax Computation & Planning",
      desc: "Accurate tax computation and planning to help you save more and stay compliant.",
      icon: Calculator
    },
    {
      title: "Capital Gains Assistance",
      desc: "Guidance on capital gains tax, exemptions, indexation and investment planning.",
      icon: TrendingUp
    },
    {
      title: "Revised Returns & Rectifications",
      desc: "File revised returns and rectify errors to ensure accurate tax compliance.",
      icon: RotateCcw
    },
    {
      title: "Late Fee & Penalty Assistance",
      desc: "Get help with penalty waivers, late fee resolutions and notice management.",
      icon: AlertTriangle
    },
    {
      title: "AIS / TIS Compliance",
      desc: "Assistance with Annual Information Statement (AIS) and Taxpayer Information Summary (TIS).",
      icon: PieChart
    }
  ];

  // Who Should File ITR (Section 3 Right)
  const whoShouldFile = [
    { label: "Salaried Employees", icon: Users },
    { label: "Business Owners", icon: Building2 },
    { label: "Freelancers & Professionals", icon: Briefcase },
    { label: "Companies & Firms", icon: Landmark },
    { label: "NRIs", icon: Users },
    { label: "Senior Citizens", icon: UserCheck }
  ];

  // 7 Step Timeline (Section 4)
  const itrSteps = [
    { no: "Step 01", title: "Consultation", icon: Users },
    { no: "Step 02", title: "Document Collection", icon: FileText },
    { no: "Step 03", title: "Tax Calculation & Planning", icon: Calculator },
    { no: "Step 04", title: "Return Preparation", icon: CheckCircle2 },
    { no: "Step 05", title: "Verification", icon: ShieldCheck },
    { no: "Step 06", title: "ITR Filing", icon: TrendingUp },
    { no: "Step 07", title: "Acknowledgement & Support", icon: Award }
  ];

  // Why Choose Us (Section 5 Left)
  const whyChooseUs = [
    { title: "Expert Tax Advisors", desc: "10+ years experience guiding individuals & corporate tax clients.", icon: UserCheck },
    { title: "Maximum Tax Savings", desc: "Strategic deduction optimization claiming all eligible exemptions under Section 80C, 80D & more.", icon: Coins },
    { title: "100% Secure & Confidential", desc: "Bank-grade data privacy and secure cloud filing environment.", icon: ShieldCheck },
    { title: "Quick & Accurate Filing", desc: "Streamlined workflow ensuring error-free ITR filing in 24-48 hours.", icon: Zap },
    { title: "Affordable Pricing", desc: "Clear itemized quote with zero hidden charges guarantee.", icon: BadgePercent },
    { title: "Dedicated Support", desc: "Assigned CA manager providing step-by-step assistance and continuous updates.", icon: Headset }
  ];

  // FAQ Accordion (Section 5 Right - 4 Key Questions)
  const faqs = [
    {
      q: "Who should file an Income Tax Return (ITR)?",
      a: "Any individual whose gross total income exceeds the basic exemption limit (₹2.5 Lakhs under Old Tax Regime or ₹3 Lakhs under New Tax Regime) is required to file an Income Tax Return. It is also recommended for claiming tax refunds and applying for visas or loans."
    },
    {
      q: "What documents are required for ITR filing?",
      a: "Key documents include Form 16 (for salaried persons), PAN card, Aadhaar card, bank statements, investment proofs (80C, 80D, etc.), Form 26AS, AIS/TIS statement, and capital gains statements."
    },
    {
      q: "What is the last date to file ITR for individuals?",
      a: "The standard due date for non-audit individual taxpayers is July 31st of the relevant Assessment Year, unless extended by the Income Tax Department."
    },
    {
      q: "What happens if I miss the ITR deadline?",
      a: "If you miss the July 31st deadline, you can file a Belated Return up to December 31st with a late fee under Section 234F (up to ₹5,000) and interest on unpaid tax."
    }
  ];

  return (
    <div className="itr-page-wrapper">
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
            STEP 1 – HERO SECTION (Matched 100% to Image 14 Design)
           ============================================================ */}
        <section className="itr-hero-section">
          {/* Smooth White-to-Transparent Gradient Overlay over Full Background Image */}
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
                  Expert assistance for accurate ITR filing, maximum tax savings and complete compliance. We make tax filing simple, secure and stress-free.
                </p>

                {/* Four Trust Badges in One Row (Outline Icons, No Background) */}
                <div className="itr-trust-badges-row">
                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <UserCheck size={22} />
                    </div>
                    <span className="itr-trust-badge-label">Expert Tax Consultants</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <Coins size={22} />
                    </div>
                    <span className="itr-trust-badge-label">Maximum Tax Savings</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="itr-trust-badge-label">100% Secure &amp; Compliant</span>
                  </div>

                  <div className="itr-trust-badge-item">
                    <div className="itr-trust-badge-icon">
                      <Zap size={22} />
                    </div>
                    <span className="itr-trust-badge-label">Quick Processing</span>
                  </div>
                </div>

                {/* CTA Buttons (Exact match to Image 14) */}
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
                    <span>Talk to Expert</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Floating White Card "Our ITR Services" */}
              <div className="itr-hero-right">
                <div className="itr-floating-services-card">
                  <h3 className="itr-services-card-title">
                    Our ITR Services
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
                            <IconComp size={15} className="itr-service-item-icon" />
                            <span className="itr-service-item-text">{item.title}</span>
                          </div>
                          <ChevronRight size={15} className="itr-service-item-chevron" />
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
            SECTION 2 – OUR INCOME TAX RETURN SERVICES GRID (Step 2 Prompt)
           ============================================================ */}
        <section className="itr-services-section" id="itr-services-grid">
          <div className="itr-section-header">
            <h2 className="itr-section-title">Our Income Tax Return Services</h2>
            <div className="itr-title-divider-line"></div>
          </div>

          <div className="itr-services-grid">
            {itrGridServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <article key={idx} className="itr-service-card-redesign">
                  <div className="itr-service-card-direct-icon">
                    <IconComp size={34} />
                  </div>
                  <h3 className="itr-service-card-title">{service.title}</h3>
                  <p className="itr-service-card-desc">{service.desc}</p>
                  <button
                    className="itr-service-card-link"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                      setIsModalOpen(true);
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            SECTION 3 – ABOUT ITR & WHO SHOULD FILE ITR (Matched to Image 18)
           ============================================================ */}
        <section className="itr-about-section">
          <div className="itr-about-grid">
            
            {/* Left Column: About ITR */}
            <div className="itr-about-left">
              <h2>About Income Tax Return (ITR)</h2>
              <p>
                Income Tax Return (ITR) is a statement of your income, deductions, tax payable and refund (if any) filed with the Income Tax Department. Filing ITR is mandatory for individuals and entities whose income exceeds the basic exemption limit.
              </p>
              <p>
                Timely and accurate ITR filing helps you avoid penalties, claim refunds, build a strong financial record and stay compliant with the law.
              </p>

              <div className="itr-about-badges-grid">
                <div className="itr-about-badge-card">
                  <ShieldCheck size={22} color="#FF6B00" />
                  <span>Legal Compliance</span>
                </div>
                <div className="itr-about-badge-card">
                  <Coins size={22} color="#FF6B00" />
                  <span>Claim Refunds</span>
                </div>
                <div className="itr-about-badge-card">
                  <Landmark size={22} color="#FF6B00" />
                  <span>Loan &amp; Visa Approvals</span>
                </div>
                <div className="itr-about-badge-card">
                  <Award size={22} color="#FF6B00" />
                  <span>Financial Credibility</span>
                </div>
              </div>
            </div>

            {/* Right Column: Who Should File ITR (6 Tall Vertical Cards) */}
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
            SECTION 4 – OUR ITR FILING PROCESS (7-Step Horizontal Timeline)
           ============================================================ */}
        <section className="itr-process-section">
          <div className="itr-section-header">
            <h2 className="itr-section-title">Our ITR Filing Process</h2>
            <div className="itr-title-divider-line"></div>
          </div>

          <div className="itr-process-timeline-container">
            {itrSteps.map((step, idx) => {
              const IconC = step.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="itr-process-step-item">
                    <div className="itr-process-icon-circle">
                      <IconC size={22} />
                    </div>
                    <span className="itr-process-step-no">{step.no}</span>
                    <span className="itr-process-step-title">{step.title}</span>
                  </div>
                  {idx < itrSteps.length - 1 && (
                    <div className="itr-process-arrow-divider">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            SECTION 5 – WHY CHOOSE MAZUMA INDIA & FREQUENTLY ASKED QUESTIONS
           ============================================================ */}
        <section className="itr-why-faq-section">
          <div className="itr-why-faq-grid">
            
            {/* Left Side: Why Choose Mazuma India */}
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

            {/* Right Side: FAQ Accordion */}
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
            SECTION 6 – CTA BANNER (Soft Peach Card - Matched to Image 18)
           ============================================================ */}
        <section className="itr-cta-banner-section">
          <div className="itr-cta-banner-card">
            
            {/* Left Title & Desc */}
            <div className="itr-cta-banner-left">
              <h3 className="itr-cta-banner-title">Need Help Filing Your Income Tax Return?</h3>
              <p className="itr-cta-banner-desc">
                Save time, avoid penalties and maximize your tax savings with expert assistance from Mazuma India.
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
                <span className="itr-cta-badge-label">100% Accurate &amp; Secure</span>
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
                <span className="itr-cta-badge-label">End-to-End Support</span>
              </div>
            </div>

            {/* Right Button & Phone */}
            <div className="itr-cta-banner-right">
              <button
                className="itr-cta-btn-orange"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Book Free Consultation</span>
              </button>
              <div className="itr-cta-phone-box">
                <span>or call us at</span>
                <a href="tel:+919936351555" className="itr-cta-phone-link">
                  <PhoneCall size={14} color="#0F2D52" />
                  +91 99363 51555
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* INTERACTIVE CONSULTATION MODAL (Short Compact 2-Column Row-Wise Layout) */}
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

                {/* RIGHT SIDE: SHORT FORM */}
                <div className="cr-modal-right">
                  <h3 className="cr-modal-title">Book Free Consultation</h3>
                  <p className="cr-modal-desc">
                    Get instant advice from our senior CA team.
                  </p>

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

                    {/* Row 3: Service Required */}
                    <div className="cr-form-group">
                      <label className="cr-form-label">Service Required *</label>
                      <select
                        className="cr-form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="ITR Filing for Individuals">ITR Filing for Individuals</option>
                        <option value="Business Income Tax Return">Business Income Tax Return</option>
                        <option value="Salaried Employee ITR">Salaried Employee ITR</option>
                        <option value="Freelancers & Professionals">Freelancers &amp; Professionals</option>
                        <option value="Belated & Updated ITR">Belated &amp; Updated ITR</option>
                        <option value="Tax Computation & Planning">Tax Computation &amp; Planning</option>
                        <option value="Capital Gains Assistance">Capital Gains Assistance</option>
                        <option value="Revised Returns & Rectifications">Revised Returns &amp; Rectifications</option>
                        <option value="Late Fee & Penalty Assistance">Late Fee &amp; Penalty Assistance</option>
                        <option value="AIS / TIS Compliance">AIS / TIS Compliance</option>
                      </select>
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

      {/* DEDICATED "TALK TO EXPERT" REDESIGNED MODAL */}
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

            {/* Modal Header */}
            <div className="expert-modal-header">
              <div className="expert-circle-icon-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/contact-us-icon.png" alt="Contact Icon" className="expert-contact-circle-img" />
              </div>
              <p className="expert-modal-header-sub">
                Get direct 1-on-1 guidance on tax optimization, ITR filing &amp; notices.
              </p>
            </div>

            {/* Modal Body */}
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
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Full Name *</label>
                      <input
                        type="text"
                        className="cr-form-input"
                        required
                        value={expertFormData.name}
                        onChange={(e) => setExpertFormData({ ...expertFormData, name: e.target.value })}
                      />
                    </div>

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
                  </div>

                  {/* Row 2: Email Address & City / State */}
                  <div className="cr-form-grid-2col">
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

                    <div className="cr-form-group">
                      <label className="cr-form-label">City / State *</label>
                      <input
                        type="text"
                        className="cr-form-input"
                        required
                        value={expertFormData.city}
                        onChange={(e) => setExpertFormData({ ...expertFormData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 3: Topic / Query */}
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
                        <option value="Tax Notice Assistance">Tax Notice Assistance</option>
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
