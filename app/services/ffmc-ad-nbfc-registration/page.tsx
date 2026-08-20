"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import "./ffmc-ad-nbfc.css";
import {
  ShieldCheck,
  Award,
  Zap,
  FileCheck,
  CheckCircle2,
  Phone,
  Calendar,
  Building2,
  TrendingUp,
  Coins,
  BadgeCheck,
  FileText,
  Users,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Check,
  ArrowRight,
  Handshake,
  Landmark,
  Scale,
  Percent,
  Receipt,
  Briefcase,
  Rocket,
  Lightbulb,
  Store,
  Laptop,
  Globe2,
  CreditCard,
  Building,
  Scale as ScaleIcon,
  ShieldAlert,
  BarChart3,
  FileSpreadsheet
} from "lucide-react";

export default function FfmcAdNbfcRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [showAllFfmcServices, setShowAllFfmcServices] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "FFMC / AD-II / NBFC Registration",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll to target hash section on page load or hash change
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const headerWrapper = document.querySelector(".sticky-header-wrapper");
          const headerHeight = headerWrapper ? headerWrapper.getBoundingClientRect().height : 90;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - headerHeight + 10);

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.serviceType,
          city: formData.city,
          source: "FFMC AD NBFC Page"
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
          serviceType: "FFMC / AD-II / NBFC Registration",
          city: ""
        });
      }, 3500);
    } catch (err) {
      console.error("FFMC Registration API error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data Schema.org
  const jsonLdFfmc = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "FFMC, AD Category-II & NBFC Registration Services",
    provider: {
      "@type": "Organization",
      name: "Mazuma India",
      url: "https://mazumaindia.com"
    },
    areaServed: "India",
    description: "Complete RBI Licensing, Full Fledged Money Changer (FFMC), AD Category-II Advisory, NBFC Registration, and Ongoing Regulatory Compliance Services by Mazuma India.",
    url: "https://mazumaindia.com/services/ffmc-ad-nbfc-registration"
  };

  return (
    <div className="ffmc-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFfmc) }}
      />

      <Header />

      <main>
        {/* ============================================================
            HERO SECTION (FULL BACKGROUND WITH ZERO CUT / CROP / ZOOM)
            ============================================================ */}
        <section className="ffmc-hero-section">
          <div className="ffmc-hero-bg-overlay" />
          <div className="ffmc-container">
            {/* LEFT SIDE CONTENT COLUMN */}
            <div className="ffmc-hero-left">
              {/* Breadcrumb Navigation */}
              <div className="ffmc-breadcrumb-bar">
                <ul className="ffmc-breadcrumb-list">
                  <li>
                    <Link href="/" className="ffmc-breadcrumb-link">
                      Home
                    </Link>
                  </li>
                  <li>&gt;</li>
                  <li>
                    <span className="ffmc-breadcrumb-link">Services</span>
                  </li>
                  <li>&gt;</li>
                  <li>
                    <span className="ffmc-breadcrumb-current">
                      FFMC / AD-II / NBFC Registration
                    </span>
                  </li>
                </ul>
              </div>

              <span className="ffmc-section-tag">
                FINANCIAL REGULATORY SERVICES
              </span>

              <h1 className="ffmc-hero-title">
                <span className="hero-title-line">Navigate RBI Regulations.</span>
                <span className="hero-title-line">Build Financial Businesses</span>
                <span className="hero-title-line">With Confidence.</span>
              </h1>

              <p className="ffmc-hero-desc">
                Expert assistance for FFMC licensing, AD Category-II regulatory requirements, NBFC registration, RBI documentation, compliance, and ongoing regulatory support for businesses operating in India&apos;s financial and foreign-exchange sectors.
              </p>

              {/* 4 Feature Badges */}
              <div className="ffmc-hero-badges-grid">
                <div className="ffmc-hero-badge-item">
                  <span className="ffmc-badge-check">✓</span>
                  <span>FFMC Registration Support</span>
                </div>
                <div className="ffmc-hero-badge-item">
                  <span className="ffmc-badge-check">✓</span>
                  <span>AD Category-II Advisory</span>
                </div>
                <div className="ffmc-hero-badge-item">
                  <span className="ffmc-badge-check">✓</span>
                  <span>NBFC Registration</span>
                </div>
                <div className="ffmc-hero-badge-item">
                  <span className="ffmc-badge-check">✓</span>
                  <span>RBI Compliance Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="ffmc-hero-btn-group">
                <a
                  href="https://wa.me/919936351555?text=Hello%20Mazuma%20India,%20I%20want%20to%20book%20a%20free%20consultation%20for%20FFMC%20/%20AD-II%20/%20NBFC%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ffmc-btn-primary"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} />
                </a>

                <button
                  className="ffmc-btn-call"
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                  <Phone size={16} />
                  <span>Talk to RBI Expert</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 3 — OUR SERVICES SECTION (6 CARDS WITH PNG ICONS)
            ============================================================ */}
        <section className="ffmc-services-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <span className="ffmc-section-tag">OUR SERVICES</span>
              <h2 className="ffmc-section-heading">
                Financial Regulatory &amp; RBI Compliance Solutions
              </h2>
              <p className="ffmc-section-desc">
                End-to-end regulatory assistance for businesses seeking financial-sector registrations, licensing support, RBI applications, and ongoing compliance.
              </p>
            </div>

            <div className="ffmc-services-grid">
              {/* Card 1 */}
              <div className="ffmc-service-card">
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/ffmc-registration.png"
                    alt="FFMC Registration Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">FFMC Registration</h3>
                <p className="ffmc-service-card-desc">
                  Assistance with RBI licensing and documentation for Full Fledged Money Changer operations.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2 */}
              <div className="ffmc-service-card">
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/ad-category-ii.png"
                    alt="AD Category-II Advisory Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">AD Category-II Advisory</h3>
                <p className="ffmc-service-card-desc">
                  Regulatory guidance for eligible entities undertaking permitted foreign-exchange activities.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 3 */}
              <div className="ffmc-service-card">
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/nbfc-registration.png"
                    alt="NBFC Registration Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">NBFC Registration</h3>
                <p className="ffmc-service-card-desc">
                  End-to-end assistance for companies seeking registration under the applicable NBFC framework.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 4 */}
              <div className={`ffmc-service-card ${!showAllFfmcServices ? "ffmc-service-hide-mobile" : ""}`}>
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/rbi-application.png"
                    alt="RBI Documentation & Application Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">RBI Documentation &amp; Application</h3>
                <p className="ffmc-service-card-desc">
                  Preparation, review, compilation, and filing support for regulatory applications.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 5 */}
              <div className={`ffmc-service-card ${!showAllFfmcServices ? "ffmc-service-hide-mobile" : ""}`}>
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/regulatory-compliance.png"
                    alt="Regulatory Compliance Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">Regulatory Compliance</h3>
                <p className="ffmc-service-card-desc">
                  Ongoing support for applicable regulatory reporting and compliance requirements.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 6 */}
              <div className={`ffmc-service-card ${!showAllFfmcServices ? "ffmc-service-hide-mobile" : ""}`}>
                <div className="ffmc-service-icon-wrapper">
                  <img
                    src="/images/icons/financial-advisory.png"
                    alt="Financial Regulatory Advisory Icon"
                    className="ffmc-png-icon"
                  />
                </div>
                <h3 className="ffmc-service-card-title">Financial Regulatory Advisory</h3>
                <p className="ffmc-service-card-desc">
                  Strategic guidance for regulatory eligibility, licensing pathways, and readiness.
                </p>
                <button
                  className="ffmc-service-enquire-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className="ffmc-services-toggle-wrapper">
              <button
                className="ffmc-services-toggle-btn"
                onClick={() => setShowAllFfmcServices(!showAllFfmcServices)}
              >
                <span>{showAllFfmcServices ? "Show Less Services" : "View All 6 Services"}</span>
                <ChevronDown
                  size={18}
                  className={`ffmc-toggle-chevron ${showAllFfmcServices ? "rotated" : ""}`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 4 — FIND THE RIGHT REGULATORY SOLUTION (WHITE BG)
            ============================================================ */}
        <section className="ffmc-solutions-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <span className="ffmc-section-tag">SOLUTIONS</span>
              <h2 className="ffmc-section-heading">
                Find the Right Regulatory Solution
              </h2>
            </div>

            <div className="ffmc-solutions-grid">
              {/* Solution 1: FFMC */}
              <div className="ffmc-solution-card">
                <div className="ffmc-solution-icon-wrapper">
                  <img
                    src="/images/icons/ffmc-solution.png"
                    alt="FFMC Solution Icon"
                    className="ffmc-solution-png"
                  />
                </div>
                <div className="ffmc-solution-tag">FFMC</div>
                <h3 className="ffmc-solution-subtitle">For Money Changing Businesses</h3>
                <p className="ffmc-solution-desc">
                  For entities seeking to undertake permitted money-changing activities subject to applicable RBI authorisation.
                </p>
                <button
                  className="ffmc-btn-solution"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Explore FFMC Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Solution 2: AD Category-II */}
              <div className="ffmc-solution-card">
                <div className="ffmc-solution-icon-wrapper">
                  <img
                    src="/images/icons/ad-category-solution.png"
                    alt="AD Category-II Solution Icon"
                    className="ffmc-solution-png"
                  />
                </div>
                <div className="ffmc-solution-tag">AD CATEGORY-II</div>
                <h3 className="ffmc-solution-subtitle">For Eligible Foreign Exchange Activities</h3>
                <p className="ffmc-solution-desc">
                  Regulatory advisory for permitted foreign-exchange activities under the applicable RBI framework.
                </p>
                <button
                  className="ffmc-btn-solution"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Explore AD-II Advisory</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Solution 3: NBFC */}
              <div className="ffmc-solution-card">
                <div className="ffmc-solution-icon-wrapper">
                  <img
                    src="/images/icons/nbfc-solution.png"
                    alt="NBFC Solution Icon"
                    className="ffmc-solution-png"
                  />
                </div>
                <div className="ffmc-solution-tag">NBFC</div>
                <h3 className="ffmc-solution-subtitle">For Financial Businesses</h3>
                <p className="ffmc-solution-desc">
                  For companies intending to carry on activities requiring applicable NBFC registration.
                </p>
                <button
                  className="ffmc-btn-solution"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Explore NBFC Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 5 — OUR REGULATORY PROCESS (#F8FAFC)
            ============================================================ */}
        <section className="ffmc-process-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <span className="ffmc-section-tag">OUR PROCESS</span>
              <h2 className="ffmc-section-heading">
                From Eligibility Assessment to Regulatory Compliance
              </h2>
            </div>

            {/* Horizontal Timeline */}
            <div className="ffmc-timeline-wrapper">
              <div className="ffmc-timeline-line" />
              <div className="ffmc-timeline-grid-6">
                {/* Step 01 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/consultation.png"
                        alt="Initial Consultation Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Initial Consultation</h3>
                </div>

                {/* Step 02 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/eligibility.png"
                        alt="Eligibility Assessment Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Eligibility Assessment</h3>
                </div>

                {/* Step 03 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/document-preparation.png"
                        alt="Document Preparation Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Document Preparation</h3>
                </div>

                {/* Step 04 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/application-filing.png"
                        alt="Application & Filing Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Application &amp; Filing</h3>
                </div>

                {/* Step 05 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/regulatory-review.png"
                        alt="Regulatory Review Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Regulatory Review</h3>
                </div>

                {/* Step 06 */}
                <div className="ffmc-timeline-step-item">
                  <div className="ffmc-step-badge">
                    <div className="ffmc-step-icon-circle">
                      <img
                        src="/images/icons/post-registration.png"
                        alt="Post-Registration Compliance Icon"
                        className="ffmc-step-png"
                      />
                    </div>
                  </div>
                  <h3 className="ffmc-step-item-title">Post-Registration Compliance</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 6 — WHY CHOOSE MAZUMA INDIA (WHITE BG)
            ============================================================ */}
        <section className="ffmc-why-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <h2 className="ffmc-section-heading">
                Why Businesses Choose Mazuma India
              </h2>
              <p className="ffmc-section-desc">
                Professional regulatory assistance combining financial, accounting, tax, documentation, and compliance expertise.
              </p>
            </div>

            <div className="ffmc-why-grid">
              {/* Card 1 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/regulatory-expertise.png"
                    alt="Regulatory Expertise Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">Regulatory Expertise</h3>
                <p className="ffmc-why-card-desc">
                  Professional assistance across RBI-regulated business requirements.
                </p>
              </div>

              {/* Card 2 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/documentation.png"
                    alt="End-to-End Documentation Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">End-to-End Documentation</h3>
                <p className="ffmc-why-card-desc">
                  Complete support for application preparation and documentation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/compliance.png"
                    alt="Compliance-Focused Approach Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">Compliance-Focused Approach</h3>
                <p className="ffmc-why-card-desc">
                  Structured processes designed around applicable regulatory requirements.
                </p>
              </div>

              {/* Card 4 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/advisory.png"
                    alt="Transparent Advisory Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">Transparent Advisory</h3>
                <p className="ffmc-why-card-desc">
                  Clear guidance on requirements, documentation, and process stages.
                </p>
              </div>

              {/* Card 5 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/consultant.png"
                    alt="Dedicated Consultant Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">Dedicated Consultant</h3>
                <p className="ffmc-why-card-desc">
                  Single point of contact throughout the engagement.
                </p>
              </div>

              {/* Card 6 */}
              <div className="ffmc-why-card">
                <div className="ffmc-why-icon-box">
                  <img
                    src="/images/icons/long-term-support.png"
                    alt="Long-Term Compliance Support Icon"
                    className="ffmc-why-png"
                  />
                </div>
                <h3 className="ffmc-why-card-title">Long-Term Compliance Support</h3>
                <p className="ffmc-why-card-desc">
                  Continued assistance after registration and approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 7 — BUSINESS BENEFITS (50/50 SPLIT)
            ============================================================ */}
        <section className="ffmc-benefits-section">
          <div className="ffmc-container">
            <div className="ffmc-benefits-grid">
              {/* Left Column Image */}
              <div className="ffmc-benefits-left-visual">
                <div className="ffmc-benefits-img-wrapper">
                  <picture>
                    <source
                      media="(max-width: 640px)"
                      srcSet="/images/services/ffmc-nbfc/regulatory-benefits-mobile.webp"
                    />
                    <img
                      src="/images/services/ffmc-nbfc/regulatory-benefits.webp"
                      alt="Mazuma India Financial Regulatory Benefits Office Desk"
                      className="ffmc-benefits-img"
                    />
                  </picture>
                </div>
              </div>

              {/* Right Column Content */}
              <div className="ffmc-benefits-right-content">
                <span className="ffmc-section-tag">BUSINESS BENEFITS</span>
                <h2 className="ffmc-section-heading">
                  Build Your Financial Business on a Strong Regulatory Foundation
                </h2>

                <div className="ffmc-benefits-checklist">
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Regulatory Readiness</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Proper Documentation</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Structured Application Process</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Reduced Compliance Risk</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Professional Financial Reporting</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Ongoing Regulatory Support</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Better Operational Transparency</span>
                  </div>
                  <div className="ffmc-benefit-item">
                    <span className="ffmc-check-badge">✓</span>
                    <span>Long-Term Business Compliance</span>
                  </div>
                </div>

                <div style={{ marginTop: "14px" }}>
                  <button
                    className="ffmc-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Get Started Today</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 8 — WHO WE SUPPORT (WHITE BG)
            ============================================================ */}
        <section className="ffmc-support-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <h2 className="ffmc-section-heading">
                Who We Support
              </h2>
            </div>

            <div className="ffmc-support-grid">
              {/* Card 1 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/money-changing.png"
                    alt="Money Changing Businesses Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Money Changing Businesses</h3>
              </div>

              {/* Card 2 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/financial-services.png"
                    alt="Financial Services Companies Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Financial Services Companies</h3>
              </div>

              {/* Card 3 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/fintech.png"
                    alt="Fintech Businesses Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Fintech Businesses</h3>
              </div>

              {/* Card 4 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/investment-lending.png"
                    alt="Investment & Lending Businesses Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Investment &amp; Lending Businesses</h3>
              </div>

              {/* Card 5 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/foreign-exchange.png"
                    alt="Foreign Exchange Businesses Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Foreign Exchange Businesses</h3>
              </div>

              {/* Card 6 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/financial-startups.png"
                    alt="Startups Entering Financial Services Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Startups Entering Financial Services</h3>
              </div>

              {/* Card 7 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/corporate-groups.png"
                    alt="Corporate Groups Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Corporate Groups</h3>
              </div>

              {/* Card 8 */}
              <div className="ffmc-support-card">
                <div className="ffmc-support-icon-box">
                  <img
                    src="/images/icons/regulated-business.png"
                    alt="Regulated & Compliance-Driven Businesses Icon"
                    className="ffmc-support-png"
                  />
                </div>
                <h3 className="ffmc-support-card-title">Regulated &amp; Compliance-Driven Businesses</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 9 — BEYOND REGISTRATION (#F8FAFC)
            ============================================================ */}
        <section className="ffmc-beyond-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <h2 className="ffmc-section-heading">
                Beyond Registration.<br />We Support Your Compliance Journey.
              </h2>
            </div>

            <div className="ffmc-beyond-grid">
              {/* Card 1 */}
              <div className="ffmc-beyond-card">
                <div className="ffmc-beyond-icon-wrapper">
                  <img
                    src="/images/icons/licensing-support.png"
                    alt="Licensing Support Icon"
                    className="ffmc-beyond-png"
                  />
                </div>
                <h3 className="ffmc-beyond-title">Licensing Support</h3>
                <p className="ffmc-beyond-desc">
                  Application preparation, documentation and regulatory process support.
                </p>
              </div>

              {/* Card 2 */}
              <div className="ffmc-beyond-card">
                <div className="ffmc-beyond-icon-wrapper">
                  <img
                    src="/images/icons/compliance-support.png"
                    alt="Compliance Support Icon"
                    className="ffmc-beyond-png"
                  />
                </div>
                <h3 className="ffmc-beyond-title">Compliance Support</h3>
                <p className="ffmc-beyond-desc">
                  Ongoing regulatory documentation, reporting and applicable compliance assistance.
                </p>
              </div>

              {/* Card 3 */}
              <div className="ffmc-beyond-card">
                <div className="ffmc-beyond-icon-wrapper">
                  <img
                    src="/images/icons/advisory-support.png"
                    alt="Advisory Support Icon"
                    className="ffmc-beyond-png"
                  />
                </div>
                <h3 className="ffmc-beyond-title">Advisory Support</h3>
                <p className="ffmc-beyond-desc">
                  Business structuring and regulatory-readiness guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 10 — FAQ (WHITE BG, STRICT SINGLE ACCORDION STATE)
            ============================================================ */}
        <section className="ffmc-faq-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <span className="ffmc-section-tag">FAQ</span>
              <h2 className="ffmc-section-heading">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="ffmc-faq-container">
              {[
                {
                  q: "What is an FFMC?",
                  a: "An FFMC (Full Fledged Money Changer) is an entity authorized by the Reserve Bank of India (RBI) under Section 10 of the Foreign Exchange Management Act (FEMA), 1999 to deal in foreign exchange for foreign travel and money changing operations."
                },
                {
                  q: "Who can apply for an FFMC licence?",
                  a: "Companies registered under the Companies Act (Private Limited or Public Limited) with a clear financial track record and meeting the minimum Net Owned Fund (NOF) requirement of ₹18 Lakhs (single branch) or ₹50 Lakhs (multiple branches) can apply."
                },
                {
                  q: "What is AD Category-II?",
                  a: "Authorised Dealer Category-II (AD Cat-II) is an upgraded regulatory license granted by the RBI to eligible entities allowing them to undertake specified non-trade outward foreign exchange remittances beyond basic currency changing."
                },
                {
                  q: "What activities can an AD Category-II entity undertake?",
                  a: "AD Category-II entities can handle permitted outward remittances for overseas education tuition, medical treatment, private visits, business travel, foreign employment, and overseas remittances under the LRS framework."
                },
                {
                  q: "What is NBFC Registration?",
                  a: "NBFC Registration is the official Certificate of Registration (CoR) granted by the RBI under Section 45-IA of the RBI Act, 1934, enabling non-banking financial companies to conduct credit, lending, asset financing, and investment operations."
                },
                {
                  q: "What documents are required for NBFC registration?",
                  a: "Key documentation includes Certificate of Incorporation, MOA & AOA with financial main objects, Statutory Auditor Certificate of Net Owned Fund (NOF ₹10 Crore), encumbrance-free capital bank proof, CIBIL reports, Director Fit & Proper profiles, and a 3-year Business Plan."
                },
                {
                  q: "How does the RBI registration process work?",
                  a: "The process involves preliminary capital & eligibility assessment, incorporation of the legal entity, compilation of the dossier, filing on the online RBI COSMOS portal, physical dossier submission at the RBI Regional Office, and responding to RBI queries until license grant."
                },
                {
                  q: "How long does regulatory registration take?",
                  a: "Registration timelines typically range between 45 to 90 working days for FFMC licenses and 90 to 180 working days for NBFC registration, depending on dossier completeness and RBI regional office review."
                },
                {
                  q: "What compliance is required after registration?",
                  a: "Post-registration compliances include filing monthly/quarterly/annual COSMOS returns with the RBI, conducting regular concurrent audits, complying with Fair Practices Code (FPC), CIBIL reporting, and FIU-IND AML/STR reporting."
                },
                {
                  q: "Does Mazuma India provide ongoing RBI compliance support?",
                  a: "Yes, Mazuma India provides continuous compliance retainer support including return filings, CIBIL data submissions, statutory audit assistance, and ongoing regulatory guidance."
                }
              ]
                .slice(0, showAllFaqs ? 10 : 3)
                .map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`ffmc-faq-item ${isOpen ? "active" : ""}`}
                    >
                      <button
                        className="ffmc-faq-header"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <h3 className="ffmc-faq-question">{item.q}</h3>
                        <div className="ffmc-faq-icon-box">
                          <ChevronDown size={16} />
                        </div>
                      </button>
                      <div
                        className="ffmc-faq-answer-wrapper"
                        style={{
                          maxHeight: isOpen ? "240px" : "0px"
                        }}
                      >
                        <div className="ffmc-faq-answer-content">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Read More Questions Button */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                className="ffmc-btn-secondary"
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                style={{ cursor: "pointer" }}
              >
                <span>{showAllFaqs ? "Show Less Questions" : "Read More Questions"}</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: showAllFaqs ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease"
                  }}
                />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 11 — FINAL CTA BANNER (DARK NAVY WITH CONSULTATION PHOTO)
            ============================================================ */}
        <section className="ffmc-cta-section">
          <div className="ffmc-container">
            <div className="ffmc-cta-grid-layout">
              {/* Left Column Image */}
              <div className="ffmc-cta-left-visual">
                <div className="ffmc-cta-img-card">
                  <img
                    src="/images/services/ffmc-nbfc/regulatory-consultation.webp"
                    alt="Mazuma India Corporate Financial Regulatory Consultants"
                    className="ffmc-cta-img"
                  />
                </div>
              </div>

              {/* Right Column Content */}
              <div className="ffmc-cta-right-content">
                <h2 className="ffmc-cta-heading">
                  Planning to Enter a Regulated Financial Business?
                </h2>
                <p className="ffmc-cta-desc">
                  Get professional assistance with regulatory eligibility, documentation, registration, and ongoing compliance for FFMC, AD Category-II and NBFC-related requirements.
                </p>

                {/* 4 Feature Badges */}
                <div className="ffmc-cta-badges-grid">
                  <div className="ffmc-cta-badge-item">
                    <span className="ffmc-cta-check">✓</span>
                    <span>Regulatory Guidance</span>
                  </div>
                  <div className="ffmc-cta-badge-item">
                    <span className="ffmc-cta-check">✓</span>
                    <span>Documentation Support</span>
                  </div>
                  <div className="ffmc-cta-badge-item">
                    <span className="ffmc-cta-check">✓</span>
                    <span>Application Assistance</span>
                  </div>
                  <div className="ffmc-cta-badge-item">
                    <span className="ffmc-cta-check">✓</span>
                    <span>Ongoing Compliance</span>
                  </div>
                </div>

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
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP 12 — RELATED SERVICES
            ============================================================ */}
        <section className="ffmc-related-section">
          <div className="ffmc-container">
            <div className="ffmc-centered-header">
              <h2 className="ffmc-section-heading">
                Explore Related Services
              </h2>
            </div>

            <div className="ffmc-related-grid">
              <Link href="/services/business-compliance" className="ffmc-related-card">
                <h3 className="ffmc-related-title">Business Compliance</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>

              <Link href="/services/company-registration" className="ffmc-related-card">
                <h3 className="ffmc-related-title">Company Registration</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>

              <Link href="/services/accounting-bookkeeping" className="ffmc-related-card">
                <h3 className="ffmc-related-title">Accounting &amp; Bookkeeping</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>

              <Link href="/services/gst-services" className="ffmc-related-card">
                <h3 className="ffmc-related-title">Tax &amp; GST Services</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>

              <Link href="/services/trademark-business-registration" className="ffmc-related-card">
                <h3 className="ffmc-related-title">Trademark &amp; Business Registrations</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>

              <Link href="/services/ngo-services" className="ffmc-related-card">
                <h3 className="ffmc-related-title">NGO Services</h3>
                <span className="ffmc-related-link">Explore Service →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* CONSULTATION POPUP MODAL */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
