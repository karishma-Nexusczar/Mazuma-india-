"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  FileCheck2,
  FileText,
  Receipt,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Users,
  Award,
  Clock,
  Coins,
  Headphones,
  Briefcase,
  Calculator,
  Scale,
  RefreshCw,
  TrendingUp,
  FileSpreadsheet,
  AlertTriangle,
  Truck,
  Building2,
  Lock,
  Phone
} from "lucide-react";
import "./gst-services.css";

export default function GSTServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const gstServicesList = [
    { name: "GST Registration", icon: FileCheck2, desc: "New registration for businesses & startups" },
    { name: "GST Amendments", icon: RefreshCw, desc: "Update business address, partners & details" },
    { name: "GST Return Filing", icon: FileText, desc: "Monthly & quarterly statutory filing" },
    { name: "GSTR-1", icon: FileSpreadsheet, desc: "Outward supply return filing" },
    { name: "GSTR-3B", icon: Receipt, desc: "Monthly summary tax return" },
    { name: "Annual Return", icon: Calculator, desc: "GSTR-9 & 9C annual reconciliation" },
    { name: "GST Audit", icon: ShieldCheck, desc: "Comprehensive departmental GST audit support" },
    { name: "GST Refund", icon: Coins, desc: "Fast refund processing for exports & inverted tax" },
    { name: "Input Tax Credit (ITC)", icon: TrendingUp, desc: "Reconciliation & maximum eligible ITC claims" },
    { name: "GST Notices", icon: Scale, desc: "Expert replies to ASMT-10, SCN & tax notices" },
    { name: "E-Way Bill", icon: Truck, desc: "Generation & transport compliance" },
    { name: "GST Accounting", icon: Building2, desc: "Books of accounts as per GST laws" },
  ];

  const whyChooseItems = [
    {
      title: "Expert GST Consultants",
      desc: "Experienced Chartered Accountants and tax attorneys handling your GST compliance.",
      icon: Users
    },
    {
      title: "100% Accurate & Secure",
      desc: "Zero-error return filings backed by multi-level CA verification and bank-grade data security.",
      icon: Lock
    },
    {
      title: "Timely Filing Guaranteed",
      desc: "Never miss a due date with our automated compliance reminders and prompt processing.",
      icon: Clock
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "Flat transparent pricing with no hidden fees or surprising extra charges.",
      icon: Coins
    },
    {
      title: "Dedicated Support Specialist",
      desc: "Get a direct CA account manager for instant query resolution whenever you need assistance.",
      icon: Headphones
    },
    {
      title: "End-to-End Service Package",
      desc: "From initial registration to monthly returns, ITC claims, and notice defense — we handle it all.",
      icon: Briefcase
    }
  ];

  const faqItems = [
    {
      question: "Who needs GST Registration?",
      answer: "GST registration is mandatory for businesses with an aggregate turnover exceeding ₹40 Lakhs for goods (₹20 Lakhs for service providers and special category states). E-commerce sellers, inter-state suppliers, and casual taxable persons require mandatory GST registration regardless of turnover."
    },
    {
      question: "Which documents are required for GST Registration?",
      answer: "The essential documents include PAN Card, Aadhaar Card, Passport-size Photograph of the owner/partners/directors, Proof of Business Address (Electricity Bill, Rent Agreement, or NOC), and Bank Account details (Cancelled Cheque or Bank Statement)."
    },
    {
      question: "How long does GST registration take?",
      answer: "With complete and accurate documentation, GST registration typically takes 3 to 7 working days for the Tax Department to issue the GSTIN Certificate (Form REG-06)."
    },
    {
      question: "When should GST Returns be filed?",
      answer: "Regular taxpayers file GSTR-1 (outward supplies) by the 11th of every month (or quarterly for QRMP) and GSTR-3B (summary return with tax payment) by the 20th of every month. Annual Return GSTR-9 is due by December 31st following the end of the financial year."
    },
    {
      question: "How can I claim Input Tax Credit (ITC)?",
      answer: "You can claim ITC on tax paid for business purchases if the supplier has filed their GSTR-1 and the credit appears in your GSTR-2B. Our CA team performs automated 2B reconciliation to maximize your eligible tax credit and eliminate tax leakages."
    },
    {
      question: "How can Mazuma India help with GST compliance?",
      answer: "Mazuma India provides an end-to-end managed service: we handle registration, calculate net tax payable, reconcile GSTR-2B, file GSTR-1 & 3B, assist with GST refunds, and draft professional replies for departmental notices."
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

      {/* Breadcrumb Bar */}
      <div className="gst-breadcrumb-bar">
        <div className="gst-breadcrumb-shell">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="gst-breadcrumb-arrow" />
          <Link href="/#services">Services</Link>
          <ChevronRight size={14} className="gst-breadcrumb-arrow" />
          <span className="gst-breadcrumb-current">GST Services</span>
        </div>
      </div>

      {/* =========================================================
          STEP 1: HERO SECTION
         ========================================================= */}
      <section className="gst-hero-section">
        <div className="gst-section-shell">
          <div className="gst-hero-grid">
            {/* LEFT COLUMN */}
            <div className="gst-hero-left">
              <div className="gst-eyebrow-pill">
                <Sparkles size={14} />
                <span>GST SERVICES</span>
              </div>

              <h1 className="gst-hero-title">
                GST Registration &amp; <br />
                Compliance Services
              </h1>

              <p className="gst-hero-desc">
                Simplify your GST registration, return filing, audit, refund, and compliance requirements with expert guidance from Mazuma India. We provide complete GST solutions for startups, SMEs, LLPs, private limited companies, and enterprises.
              </p>

              {/* Trust Badges */}
              <div className="gst-hero-badges-row">
                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <FileCheck2 size={18} />
                  </div>
                  <span className="gst-trust-badge-text">GST Registration</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <FileText size={18} />
                  </div>
                  <span className="gst-trust-badge-text">GST Return Filing</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <Coins size={18} />
                  </div>
                  <span className="gst-trust-badge-text">GST Refund Assistance</span>
                </div>

                <div className="gst-trust-badge-card">
                  <div className="gst-trust-icon-box">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="gst-trust-badge-text">100% GST Compliance</span>
                </div>
              </div>

              {/* Two CTA Buttons */}
              <div className="gst-hero-cta-row">
                <a href="#gst-contact-cta" className="gst-btn-primary">
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </a>

                <a href="tel:+919936351555" className="gst-btn-secondary">
                  <PhoneCall size={16} style={{ color: "#FF6B00" }} />
                  <span>Talk to Expert</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Image + Floating Menu Overlay */}
            <div className="gst-hero-right">
              <div className="gst-hero-img-container">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="CA working on GST returns with laptop, calculator and reports"
                  className="gst-hero-img"
                />
              </div>

              {/* Floating Menu Overlay Card */}
              <div className="gst-floating-menu-card">
                <h3 className="gst-floating-card-title">Our GST Services</h3>
                <div className="gst-floating-service-list">
                  {gstServicesList.map((srv, idx) => {
                    const IconComp = srv.icon;
                    return (
                      <a href="#our-gst-services" key={idx} className="gst-floating-service-item">
                        <div className="gst-floating-service-item-left">
                          <IconComp size={15} className="gst-floating-item-icon" />
                          <span>{srv.name}</span>
                        </div>
                        <span className="gst-floating-item-arrow">›</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 2: GST REGISTRATION SECTION (01)
         ========================================================= */}
      <section className="gst-split-section">
        <div className="gst-section-shell">
          <div className="gst-split-grid">
            {/* LEFT */}
            <div className="gst-split-left">
              <div className="gst-split-number">01</div>
              <h2 className="gst-split-title">GST Registration</h2>
              <p className="gst-split-desc">
                Register your business under GST quickly with complete documentation support, legal advisory, and expert CA consultation.
              </p>

              <div className="gst-checklist-container">
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>New GST Registration (Proprietorship, LLP, Pvt Ltd)</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GST Amendment (Core &amp; Non-Core Changes)</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GST Cancellation &amp; Surrender</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Voluntary GST Registration</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Composition Scheme Opt-in / Opt-out</span>
                </div>
              </div>

              <a href="#gst-contact-cta" className="gst-link-btn">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* RIGHT */}
            <div className="gst-split-right">
              <div className="gst-split-img-box">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
                  alt="GST registration form on clipboard with business documents"
                  className="gst-split-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 3: GST RETURN FILING SECTION (02)
         ========================================================= */}
      <section className="gst-split-section gst-split-section-alt">
        <div className="gst-section-shell">
          <div className="gst-split-grid gst-split-grid-reverse">
            {/* LEFT (IMAGE) */}
            <div className="gst-split-left">
              <div className="gst-split-img-box">
                <img
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80"
                  alt="Laptop displaying GST return filing dashboard"
                  className="gst-split-img"
                />
              </div>
            </div>

            {/* RIGHT (CONTENT) */}
            <div className="gst-split-right">
              <div className="gst-split-number">02</div>
              <h2 className="gst-split-title">GST Return Filing</h2>
              <p className="gst-split-desc">
                Timely and accurate filing of monthly, quarterly, and annual GST returns with complete tax computation and zero penalty guarantee.
              </p>

              <div className="gst-checklist-container">
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GSTR-1 Outward Sales Return Filing</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GSTR-3B Monthly Tax Computation &amp; Filing</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GSTR-9 &amp; 9C Annual Returns</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Nil Return Instant Filing</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Late Return Filing &amp; Penalty Mitigation</span>
                </div>
              </div>

              <a href="#gst-contact-cta" className="gst-link-btn">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 4: INPUT TAX CREDIT (ITC) SECTION (03)
         ========================================================= */}
      <section className="gst-split-section">
        <div className="gst-section-shell">
          <div className="gst-split-grid">
            {/* LEFT */}
            <div className="gst-split-left">
              <div className="gst-split-number">03</div>
              <h2 className="gst-split-title">Input Tax Credit (ITC)</h2>
              <p className="gst-split-desc">
                Optimize your eligible input tax credit while maintaining 100% compliance with GSTR-2B purchase matching and vendor reconciliations.
              </p>

              <div className="gst-checklist-container">
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Automated GSTR-2B &amp; Purchase Register Reconciliation</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Maximum Eligible ITC Claim Support</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Purchase Verification &amp; Vendor Follow-ups</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>ITC Optimization &amp; Tax Leakage Reduction</span>
                </div>
              </div>

              <a href="#gst-contact-cta" className="gst-link-btn">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* RIGHT */}
            <div className="gst-split-right">
              <div className="gst-split-img-box">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Financial analytics dashboard showing calculator and reports"
                  className="gst-split-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 5: GST NOTICES & COMPLIANCE SECTION (04)
         ========================================================= */}
      <section className="gst-split-section gst-split-section-alt">
        <div className="gst-section-shell">
          <div className="gst-split-grid gst-split-grid-reverse">
            {/* LEFT (IMAGE) */}
            <div className="gst-split-left">
              <div className="gst-split-img-box">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                  alt="Legal consultation and GST notice assessment documents"
                  className="gst-split-img"
                />
              </div>
            </div>

            {/* RIGHT (CONTENT) */}
            <div className="gst-split-right">
              <div className="gst-split-number">04</div>
              <h2 className="gst-split-title">GST Notices &amp; Compliance</h2>
              <p className="gst-split-desc">
                Expert legal representation and advisory for GST notices, audits, departmental assessments, and ASMT-10 scrutinies.
              </p>

              <div className="gst-checklist-container">
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Show Cause Notice (SCN) &amp; ASMT-10 Reply Drafting</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>GST Audit &amp; Scrutiny Support</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Department Representation by Senior CAs</span>
                </div>
                <div className="gst-checklist-item">
                  <CheckCircle2 size={18} className="gst-check-icon" />
                  <span>Compliance Health Check &amp; Risk Assessment</span>
                </div>
              </div>

              <a href="#gst-contact-cta" className="gst-link-btn">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 6: OUR GST SERVICES GRID (12 Cards)
         ========================================================= */}
      <section className="gst-services-grid-section" id="our-gst-services">
        <div className="gst-section-shell">
          <div className="gst-section-header">
            <h2 className="gst-section-title">Our GST Services</h2>
            <div className="gst-title-divider"></div>
          </div>

          <div className="gst-services-grid">
            {gstServicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <a href="#gst-contact-cta" key={index} className="gst-service-card">
                  <div className="gst-service-card-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="gst-service-card-title">{service.name}</h3>
                  <span className="gst-service-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 7: WHY CHOOSE MAZUMA INDIA (6 Cards)
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
          STEP 8: FREQUENTLY ASKED QUESTIONS (FAQ)
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
          STEP 9: FINAL CTA SECTION
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
                Need Help with GST Registration or Return Filing?
              </h2>
              <p className="gst-cta-desc">
                Our GST experts are ready to help you with registration, return filing, refunds, audits, and ongoing statutory compliance.
              </p>
            </div>

            {/* CENTER (4 MINI FEATURE CARDS) */}
            <div className="gst-cta-features-grid">
              <div className="gst-cta-mini-feature">
                <Users size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">Expert Consultation</span>
              </div>
              <div className="gst-cta-mini-feature">
                <FileText size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">GST Filing</span>
              </div>
              <div className="gst-cta-mini-feature">
                <Coins size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">GST Refunds</span>
              </div>
              <div className="gst-cta-mini-feature">
                <ShieldCheck size={18} className="gst-cta-mini-icon" />
                <span className="gst-cta-mini-label">End-to-End Support</span>
              </div>
            </div>

            {/* RIGHT (BUTTON & PHONE) */}
            <div className="gst-cta-right-content">
              <a href="mailto:compliance@mazumaindia.com" className="gst-btn-primary">
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </a>

              <div className="gst-cta-phone-row">
                <Phone size={15} style={{ color: "#FF6B00" }} />
                <span>or call us at</span>
                <a href="tel:+919936351555" className="gst-cta-phone-link">
                  +91 99363 51555
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
