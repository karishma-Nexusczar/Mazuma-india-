"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./ngo-services.css";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  HeartHandshake,
  FileText,
  BadgePercent,
  Coins,
  Globe2,
  BookOpenCheck,
  CalendarCheck,
  Award,
  PhoneCall,
  X,
  FileCheck2,
  Users,
  Check,
  Landmark,
  GraduationCap,
  Church,
  Stethoscope,
  Leaf,
  Briefcase,
  PieChart,
  TrendingUp
} from "lucide-react";

export default function NGOServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: ""
  });

  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Our NGO specialist will contact you shortly regarding ${selectedService || "NGO Services"}.`);
    setIsModalOpen(false);
    setIsExpertModalOpen(false);
    setFormData({ name: "", phone: "", email: "", city: "" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 2 Services Grid
  const ngoServices = [
    {
      title: "Trust Registration",
      desc: "Register a Public or Private Trust with complete legal documentation and deed drafting.",
      img: "/services/ngo/trust-registration.png"
    },
    {
      title: "Society Registration",
      desc: "Registration under the Societies Registration Act with end-to-end support.",
      img: "/services/ngo/society-registration.png"
    },
    {
      title: "Section 8 Company",
      desc: "Register a not-for-profit company under the Companies Act, 2013 with central government approval.",
      img: "/services/ngo/section-8-company.png"
    },
    {
      title: "12A Registration",
      desc: "Obtain income tax exemption for charitable organizations under Section 12A / 12AB.",
      img: "/services/ngo/12a-registration.png"
    },
    {
      title: "80G Registration",
      desc: "Enable donors to claim 50% or 100% tax deductions on contributions under Section 80G.",
      img: "/services/ngo/80g-registration.png"
    },
    {
      title: "CSR Registration",
      desc: "Form CSR-1 registration to receive Corporate Social Responsibility funds from companies.",
      img: "/services/ngo/csr-registration.png"
    }
  ];

  // Section 3 Registration Process (6 Steps)
  const processSteps = [
    { step: 1, title: "Consultation", icon: FileText },
    { step: 2, title: "Document Collection", icon: FileCheck2 },
    { step: 3, title: "Application Preparation", icon: BookOpenCheck },
    { step: 4, title: "Government Filing", icon: Landmark },
    { step: 5, title: "Registration Approval", icon: ShieldCheck },
    { step: 6, title: "Ongoing Compliance", icon: Award }
  ];

  // Section 4 Why Choose Mazuma India (6 Features)
  const whyChooseFeatures = [
    {
      title: "NGO Registration Experts",
      desc: "Experienced professionals handling Trust, Society, and Section 8 registrations across India.",
      icon: ShieldCheck
    },
    {
      title: "End-to-End Documentation",
      desc: "Preparation, MOA/AOA drafting, deed verification, and government portal filing support.",
      icon: FileCheck2
    },
    {
      title: "Tax Exemption Specialists",
      desc: "Expert assistance for 12A, 80G, and CSR-1 registration approvals.",
      icon: BadgePercent
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable pricing without hidden charges or unexpected surprise fees.",
      icon: Coins
    },
    {
      title: "Dedicated Support",
      desc: "Single point of contact from initial consultation to certificate issuance.",
      icon: Users
    },
    {
      title: "Long-Term Compliance Partner",
      desc: "Continuous support for annual filing, accounting, audit, and legal regulatory compliance.",
      icon: CalendarCheck
    }
  ];

  // Section 5 Benefits Checklist (8 Items)
  const benefitsList = [
    "Legal Recognition & Corporate Identity",
    "Income Tax Exemption Under 12A",
    "Donor Tax Benefits Under 80G",
    "Government Grant & Scheme Eligibility",
    "CSR Funding Opportunities from Corporates",
    "Enhanced Public Trust & Credibility",
    "Transparent Financial Management",
    "Long-Term Sustainability & Growth"
  ];

  // Section 6 Organizations We Support (8 Cards)
  const organizationsServed = [
    { title: "Charitable Trusts", icon: Landmark },
    { title: "Societies", icon: Users },
    { title: "Section 8 Companies", icon: Building2 },
    { title: "Educational Institutions", icon: GraduationCap },
    { title: "Religious Organizations", icon: Church },
    { title: "Healthcare NGOs", icon: Stethoscope },
    { title: "Environmental Organizations", icon: Leaf },
    { title: "CSR Foundations", icon: Briefcase }
  ];

  // Section 7 FAQ (8 Questions)
  const faqs = [
    {
      q: "Who can register a Trust?",
      a: "A Trust can be registered by two or more individuals (settlor and trustees) of sound mind. It requires a Trust Deed executed on stamp paper and registered with the Sub-Registrar of the jurisdiction where the trust office is situated."
    },
    {
      q: "What is the difference between Trust, Society, and Section 8 Company?",
      a: "A Trust is governed by the Indian Trusts Act and managed by trustees. A Society requires at least 7 members governed by the Societies Registration Act. A Section 8 Company is governed by the Companies Act, 2013, providing limited liability, high credibility, and easier corporate funding."
    },
    {
      q: "Who is eligible for 12A Registration?",
      a: "All non-profit entities (Trusts, Societies, and Section 8 Companies) engaged in charitable, educational, medical, relief of poor, or environmental activities are eligible to apply for 12A registration to claim 100% tax exemption on income."
    },
    {
      q: "What are the benefits of 80G Registration?",
      a: "80G registration allows donors to claim a 50% (or 100% in specified cases) deduction from their taxable income when donating to your NGO. This significantly incentivizes corporate and individual donors to contribute to your cause."
    },
    {
      q: "Who requires FCRA Registration?",
      a: "Any NGO, Trust, or Section 8 company that wishes to accept foreign donations, grants, or contributions from overseas individuals or organizations must obtain FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs."
    },
    {
      q: "How long does NGO registration take?",
      a: "Trust registration takes 7-10 days, Society registration takes 15-25 days depending on the state registrar, and Section 8 Company registration takes 10-15 working days. Tax exemption registrations (12A/80G) take an additional 15-30 days."
    },
    {
      q: "Is annual filing mandatory for NGOs?",
      a: "Yes. All NGOs must file annual income tax returns (Form ITR-7), audit reports (Form 10B/10BB), donation statements (Form 10BD), and Section 8 companies must file annual ROC returns (AOC-4 and MGT-7) every financial year."
    },
    {
      q: "Do you provide NGO accounting services?",
      a: "Yes! Mazuma India provides end-to-end NGO accounting, fund management, audit assistance, utilization certificate drafting, and compliance maintenance tailored for non-profit organizations."
    }
  ];

  return (
    <div className="ngo-page-wrapper">
      <Header />

      {/* =========================================================
          SECTION 1: HERO SECTION
         ========================================================= */}
      <section className="ngo-hero-section">
        {/* Hero Background Image & Gradient Overlay */}
        <div className="ngo-hero-bg-wrapper">
          <img
            src="/services-ngo.png"
            alt="NGO Services Consultation & Registration Background"
            className="ngo-hero-bg-img"
          />
          <div className="ngo-hero-bg-overlay"></div>
        </div>

        <div className="ngo-container">
          <div className="ngo-hero-content">
            {/* Breadcrumb */}
            <div className="ngo-breadcrumb">
              <Link href="/" className="ngo-crumb-link">
                Home
              </Link>
              <span className="ngo-crumb-sep">&gt;</span>
              <span className="ngo-crumb-link">Services</span>
              <span className="ngo-crumb-sep">&gt;</span>
              <span className="ngo-crumb-current">NGO Services</span>
            </div>

            {/* Subtitle / Category Tag */}
            <span className="ngo-hero-tag">NGO SERVICES</span>

            {/* Heading */}
            <h1 className="ngo-hero-title">
              Empowering NGOs Through<br />
              Compliance &amp; Registration
            </h1>

            {/* Subtext */}
            <p className="ngo-hero-desc">
              Helping Trusts, Societies, Section 8 Companies, Educational Institutions, and Non-Profit Organizations with registration, tax exemptions, accounting, regulatory compliance, and long-term compliance support.
            </p>

            {/* Feature Badges */}
            <div className="ngo-hero-badges">
              <div className="ngo-badge-pill">
                <span className="ngo-badge-sq" /> Trust • Society • Section 8
              </div>
              <div className="ngo-badge-pill">
                <span className="ngo-badge-sq" /> 12A &amp; 80G Certification
              </div>
              <div className="ngo-badge-pill">
                <span className="ngo-badge-sq" /> FCRA Registration
              </div>
              <div className="ngo-badge-pill">
                <span className="ngo-badge-sq" /> Accounting &amp; Annual Compliance
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ngo-hero-actions">
              <button
                className="ngo-btn-primary"
                onClick={() => openServiceModal("NGO Services")}
              >
                Book Free Consultation
              </button>

              <button
                className="ngo-btn-outline"
                onClick={() => setIsExpertModalOpen(true)}
              >
                <span>Talk to Expert</span>
                <ArrowRight size={18} className="ngo-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: NGO SERVICES GRID (CENTERED PREMIUM CARDS)
         ========================================================= */}
      <section className="ngo-services-section">
        {/* Background Decorative Glow & Corner Pattern */}
        <div className="ngo-services-bg-glow"></div>
        <div className="ngo-services-corner-dots"></div>

        <div className="ngo-container ngo-services-container">
          <div className="ngo-section-header ngo-services-header">
            <div className="ngo-eyebrow-wrap">
              <span className="ngo-section-label">OUR SERVICES</span>
              <span className="ngo-label-line"></span>
            </div>
            <h2 className="ngo-section-title">
              Complete NGO Registration &amp;<br />
              Compliance Solutions
            </h2>
            <p className="ngo-section-subtitle">
              From NGO formation to tax exemptions, accounting, FCRA compliance, and annual filings, we provide complete legal and financial support under one roof.
            </p>
          </div>

          <div className="ngo-grid-3col">
            {ngoServices.map((service, idx) => (
              <div key={idx} className="ngo-service-card">
                {/* Top Subtle Orange Accent Line */}
                <div className="ngo-card-top-accent"></div>

                {/* Centered High Pixel Image Container */}
                <div className="ngo-card-icon-container">
                  <div className="ngo-icon-circle">
                    <img
                      src={service.img}
                      alt={`${service.title} Icon`}
                      className="ngo-card-service-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="ngo-card-title">{service.title}</h3>

                {/* Short Description */}
                <p className="ngo-card-desc">{service.desc}</p>

                {/* Centered Enquiry CTA Button */}
                <div className="ngo-card-btn-wrapper">
                  <button
                    className="ngo-service-cta-btn"
                    onClick={() => openServiceModal(service.title)}
                  >
                    <span>Enquiry Now</span>
                    <ArrowRight size={14} className="ngo-cta-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: NGO REGISTRATION PROCESS (TIMELINE)
         ========================================================= */}
      <section className="ngo-process-section">
        <div className="ngo-container">
          <div className="ngo-section-header">
            <span className="ngo-section-label">OUR PROCESS</span>
            <h2 className="ngo-section-title">Our Registration Process</h2>
            <p className="ngo-section-subtitle">
              A transparent, 6-step streamlined workflow from initial consultation to final registration approval and annual compliance.
            </p>
          </div>

          <div className="ngo-process-timeline">
            {processSteps.map((pStep, index) => {
              const IconComp = pStep.icon;
              return (
                <div key={pStep.step} className="ngo-process-step">
                  <div className="ngo-step-icon-box">
                    <IconComp size={26} />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="ngo-step-connector">
                      <div className="ngo-connector-line"></div>
                      <ChevronRight size={14} className="ngo-connector-arrow" />
                    </div>
                  )}
                  <div className="ngo-step-info">
                    <span className="ngo-step-num">Step {pStep.step}</span>
                    <h3 className="ngo-step-name">{pStep.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: WHY CHOOSE MAZUMA INDIA
         ========================================================= */}
      <section className="ngo-why-section">
        <div className="ngo-container">
          <div className="ngo-section-header">
            <span className="ngo-section-label">WHY CHOOSE US</span>
            <h2 className="ngo-section-title">Why NGOs Trust Mazuma India</h2>
            <p className="ngo-section-subtitle">
              Trusted by 5,000+ business and non-profit organizations across India for reliable, fast, and compliant services.
            </p>
          </div>

          <div className="ngo-why-grid">
            {whyChooseFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="ngo-why-card">
                  <div className="ngo-why-icon-circle">
                    <IconComp size={20} />
                  </div>
                  <h3 className="ngo-why-title">{feat.title}</h3>
                  <p className="ngo-why-desc">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: BENEFITS OF NGO REGISTRATION (SAME TO SAME MOCKUP)
         ========================================================= */}
      <section className="ngo-benefits-section">
        <div className="ngo-container ngo-benefits-container">
          <div className="ngo-benefits-grid">
            
            {/* LEFT COLUMN: Visual Composition */}
            <div className="ngo-benefits-visual-col">
              <div className="ngo-benefits-panel">
                {/* Corner Decorative Dots */}
                <div className="ngo-panel-dots ngo-dots-top-left"></div>
                <div className="ngo-panel-dots ngo-dots-bottom-left"></div>
                
                {/* Subtle Glow */}
                <div className="ngo-panel-glow"></div>

                {/* Orbit Arc Line */}
                <svg className="ngo-orbit-arc-svg" viewBox="0 0 340 340" fill="none">
                  <path
                    d="M 40 220 A 130 130 0 1 1 300 220"
                    stroke="#FF6B1A"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                </svg>

                {/* Main Visual Image */}
                <div className="ngo-panel-img-wrapper">
                  <img
                    src="/ngo-benefits-visual.png"
                    alt="NGO Registration Document and Professional Support"
                    className="ngo-panel-main-img"
                    loading="lazy"
                  />
                </div>

                {/* 5 Orbit Floating Icons (Matching Reference Mockup) */}
                <div className="ngo-float-icon ngo-float-top" title="NGO Community Support">
                  <HeartHandshake size={22} />
                </div>
                <div className="ngo-float-icon ngo-float-left-top" title="Legal Recognition">
                  <Landmark size={22} />
                </div>
                <div className="ngo-float-icon ngo-float-right-top" title="Credibility & Trust">
                  <ShieldCheck size={22} />
                </div>
                <div className="ngo-float-icon ngo-float-left-bottom" title="Tax Exemption 12A & 80G">
                  <FileCheck2 size={22} />
                </div>
                <div className="ngo-float-icon ngo-float-right-bottom" title="Sustainability & Growth">
                  <TrendingUp size={22} />
                </div>

                {/* Bottom Overlapping Statistics Card */}
                <div className="ngo-benefits-stats-card">
                  <div className="ngo-stat-box">
                    <span className="ngo-stat-number">5,000+</span>
                    <span className="ngo-stat-label">Registered NGOs</span>
                  </div>
                  <div className="ngo-stat-divider"></div>
                  <div className="ngo-stat-box">
                    <span className="ngo-stat-number">100%</span>
                    <span className="ngo-stat-label">Tax Exemption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="ngo-benefits-content-col">
              {/* Eyebrow */}
              <div className="ngo-benefits-eyebrow-wrap">
                <span className="ngo-benefits-eyebrow">BENEFITS</span>
                <span className="ngo-eyebrow-line"></span>
              </div>

              {/* Main Heading */}
              <h2 className="ngo-benefits-heading">
                Benefits of <br />
                <span className="ngo-heading-highlight">NGO</span> Registration
              </h2>

              {/* Description */}
              <p className="ngo-benefits-description">
                Securing government registrations and tax exemptions opens doors to grants, corporate funding, and public trust.
              </p>

              {/* 2-Column Grid of 8 Benefit Cards (Exact Reference Icons & Titles) */}
              <div className="ngo-benefits-cards-grid">
                {[
                  { title: "Legal Recognition & Corporate Identity", icon: ShieldCheck },
                  { title: "Income Tax Exemption Under 12A", icon: FileText },
                  { title: "Donor Tax Benefits Under 80G", icon: Coins },
                  { title: "Government Grant & Scheme Eligibility", icon: Landmark },
                  { title: "CSR Funding Opportunities from Corporates", icon: Briefcase },
                  { title: "Enhanced Public Trust & Credibility", icon: Users },
                  { title: "Transparent Financial Management", icon: PieChart },
                  { title: "Long-Term Sustainability & Growth", icon: TrendingUp }
                ].map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <div key={idx} className="ngo-benefit-card-item">
                      <div className="ngo-benefit-card-icon">
                        <IconComp size={20} />
                      </div>
                      <h3 className="ngo-benefit-card-title">{benefit.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: ORGANIZATIONS WE SUPPORT (WHO WE SERVE)
         ========================================================= */}
      <section className="ngo-serve-section">
        <div className="ngo-container">
          <div className="ngo-section-header">
            <span className="ngo-section-label">WHO WE SERVE</span>
            <h2 className="ngo-section-title">Organizations We Support</h2>
            <p className="ngo-section-subtitle">
              Empowering diverse non-profit and social welfare organizations across India.
            </p>
          </div>

          <div className="ngo-serve-grid">
            {organizationsServed.map((org, idx) => {
              const IconComp = org.icon;
              return (
                <div key={idx} className="ngo-serve-card">
                  <div className="ngo-serve-icon">
                    <IconComp size={22} />
                  </div>
                  <h3 className="ngo-serve-name">{org.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: FAQ ACCORDION (8 QUESTIONS)
         ========================================================= */}
      <section className="ngo-faq-section">
        <div className="ngo-container">
          <div className="ngo-section-header">
            <span className="ngo-section-label">FAQ</span>
            <h2 className="ngo-section-title">Frequently Asked Questions</h2>
            <p className="ngo-section-subtitle">
              Got questions about NGO registrations, 12A/80G tax exemptions, or FCRA compliance? We have answers.
            </p>
          </div>

          <div className="ngo-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="ngo-faq-item">
                <button
                  className="ngo-faq-question"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: openFaq === idx ? "#F36B21" : "#12284C"
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="ngo-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: FINAL CTA BANNER
         ========================================================= */}
      <section className="ngo-cta-section">
        <div className="ngo-container">
          <div className="ngo-cta-banner">
            <div className="ngo-cta-left">
              <h2 className="ngo-cta-title">Start Your NGO Journey Today</h2>
              <p className="ngo-cta-desc">
                Whether you're establishing a charitable trust, society, or Section 8 company, our experts ensure a smooth registration process and ongoing compliance support.
              </p>
              <div className="ngo-cta-feats">
                <span className="ngo-cta-feat-tag">✓ Expert NGO Consultants</span>
                <span className="ngo-cta-feat-tag">✓ Government Registration Support</span>
                <span className="ngo-cta-feat-tag">✓ Tax Exemption Assistance</span>
                <span className="ngo-cta-feat-tag">✓ End-to-End Compliance</span>
              </div>
            </div>

            <div className="ngo-cta-right">
              <button
                className="ngo-btn-primary"
                onClick={() => openServiceModal("NGO Services")}
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="tel:+919936351555"
                className="ngo-btn-outline"
                style={{ textDecoration: "none" }}
              >
                <PhoneCall size={16} style={{ color: "#F36B21" }} />
                <span>Call Now: +91 99363 51555</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHORT ENQUIRY MODAL (CLEAR BACKGROUND)
         ========================================================= */}
      {isModalOpen && (
        <div className="tbr-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="tbr-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="tbr-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={18} />
            </button>
            <div className="tbr-modal-header">
              <h3 className="tbr-modal-title">Enquire for {selectedService}</h3>
              <p className="tbr-modal-desc">Fill out your details to speak with a Mazuma CA expert.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="tbr-modal-body">
              <div className="tbr-form-grid-2col">
                <div className="tbr-form-group">
                  <label className="tbr-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="tbr-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="tbr-form-group">
                  <label className="tbr-form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="tbr-form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="tbr-form-group" style={{ marginTop: "12px" }}>
                <label className="tbr-form-label">City / Location</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="tbr-form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <button type="submit" className="tbr-modal-submit-btn" style={{ marginTop: "18px" }}>
                <span>Submit Enquiry</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          EXPERT CALL MODAL
         ========================================================= */}
      {isExpertModalOpen && (
        <div className="tbr-modal-backdrop" onClick={() => setIsExpertModalOpen(false)}>
          <div className="tbr-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="tbr-modal-close" onClick={() => setIsExpertModalOpen(false)}>
              <X size={18} />
            </button>
            <div className="tbr-modal-header" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#FFF7ED",
                  color: "#F36B21",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px auto"
                }}
              >
                <PhoneCall size={22} />
              </div>
              <h3 className="tbr-modal-title">Talk to Our NGO Expert</h3>
              <p className="tbr-modal-desc">Direct phone helpline for Trust, 12A/80G &amp; FCRA queries.</p>
            </div>
            <div className="tbr-modal-body">
              <a
                href="tel:+919936351555"
                className="ngo-btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "16px",
                  textDecoration: "none"
                }}
              >
                <PhoneCall size={18} />
                <span>+91 99363 51555</span>
              </a>
              <form onSubmit={handleFormSubmit}>
                <div className="tbr-form-group">
                  <label className="tbr-form-label">Your Phone Number for Instant Callback</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    className="tbr-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <button type="submit" className="tbr-modal-submit-btn" style={{ marginTop: "14px", width: "100%" }}>
                  <span>Request Instant Callback</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
