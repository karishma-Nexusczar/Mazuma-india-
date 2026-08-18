"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import "./msme-startup-india.css";
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
  Laptop
} from "lucide-react";

export default function MsmeStartupIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [activeTab, setActiveTab] = useState<"msme" | "startup">("msme");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "MSME & Startup India Combo",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll to target hash section on page load or hash change
  React.useEffect(() => {
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          source: "MSME & Startup India Page"
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
          serviceType: "MSME & Startup India Combo",
          city: ""
        });
      }, 3500);
    } catch (err) {
      console.error("MSME Registration API error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data Schema.org
  const jsonLdMsme = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MSME Udyam & Startup India Registration Services",
    provider: {
      "@type": "Organization",
      name: "Mazuma India",
      url: "https://mazumaindia.com"
    },
    areaServed: "India",
    description: "Complete MSME (Udyam) Registration and Startup India DPIIT recognition assistance for Indian enterprises and new age startups.",
    url: "https://mazumaindia.com/services/msme-startup-india-registration"
  };

  return (
    <div className="msme-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMsme) }}
      />

      <Header />

      <main>
        {/* ============================================================
            SECTION 2: HERO SECTION (FULL-WIDTH BACKGROUND IMAGE)
            ============================================================ */}
        <section className="msme-hero-section">
          <div className="msme-hero-bg-overlay" />
          <div className="msme-container">
            {/* Breadcrumb Navigation */}
            <div className="msme-breadcrumb-bar">
              <ul className="msme-breadcrumb-list">
                <li>
                  <Link href="/" className="msme-breadcrumb-link">
                    Home
                  </Link>
                </li>
                <li>&gt;</li>
                <li>
                  <span className="msme-breadcrumb-link">Services</span>
                </li>
                <li>&gt;</li>
                <li>
                  <span className="msme-breadcrumb-current">
                    MSME &amp; Startup India Registration
                  </span>
                </li>
              </ul>
            </div>

            {/* Left Content Column over Background */}
            <div className="msme-hero-left">
              <span className="msme-section-tag">
                MSME &amp; STARTUP INDIA REGISTRATION
              </span>

              <h1 className="msme-hero-title">
                Build, Register &amp; Grow
                <br />
                Your Business With Confidence
              </h1>

              <p className="msme-hero-desc">
                Get expert assistance for <strong>MSME (Udyam) Registration</strong> and <strong>Startup India</strong> recognition, helping your business gain official recognition and access government schemes, benefits and startup support.
              </p>

              {/* 4 Feature Badges */}
              <div className="msme-hero-badges-grid">
                <div className="msme-hero-badge-item">
                  <span className="msme-badge-check">✓</span>
                  <span>Udyam Registration Assistance</span>
                </div>
                <div className="msme-hero-badge-item">
                  <span className="msme-badge-check">✓</span>
                  <span>Startup India Recognition</span>
                </div>
                <div className="msme-hero-badge-item">
                  <span className="msme-badge-check">✓</span>
                  <span>Government Scheme Guidance</span>
                </div>
                <div className="msme-hero-badge-item">
                  <span className="msme-badge-check">✓</span>
                  <span>End-to-End Documentation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="msme-hero-btn-group">
                <a
                  href="https://wa.me/919936351555?text=Hello%20Mazuma%20India,%20I%20want%20to%20book%20a%20free%20consultation%20for%20MSME%20%26%20Startup%20India%20Registration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="msme-btn-primary"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="tel:+919936351555"
                  className="msme-btn-secondary"
                >
                  <Phone size={16} />
                  <span>Talk to Expert</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: QUICK BENEFITS STRIP (4 OFFICIAL LOGO CARDS)
            ============================================================ */}
        <section className="msme-quick-benefits-section">
          <div className="msme-container">
            <div className="msme-benefits-strip-grid">
              {/* Card 1: MSME (Udyam) Registration */}
              <div className="msme-benefit-card">
                <div className="msme-benefit-icon-box">
                  <img
                    src="/msme-icon-logo.png"
                    alt="Official MSME Ministry Emblem"
                    className="msme-benefit-logo-img"
                  />
                </div>
                <h3 className="msme-benefit-title">
                  MSME (Udyam) Registration
                </h3>
                <p className="msme-benefit-desc">
                  Official recognition for Micro, Small &amp; Medium Enterprises.
                </p>
              </div>

              {/* Card 2: Startup India Recognition */}
              <div className="msme-benefit-card">
                <div className="msme-benefit-icon-box">
                  <img
                    src="/startup-india-logo.png"
                    alt="Startup India Logo"
                    className="msme-benefit-logo-img"
                  />
                </div>
                <h3 className="msme-benefit-title">
                  Startup India Recognition
                </h3>
                <p className="msme-benefit-desc">
                  Get recognized by DPIIT under Startup India.
                </p>
              </div>

              {/* Card 3: Government Scheme Access */}
              <div className="msme-benefit-card">
                <div className="msme-benefit-icon-box">
                  <img
                    src="/govt-schemes-logo.png"
                    alt="Government Emblem"
                    className="msme-benefit-logo-img"
                  />
                </div>
                <h3 className="msme-benefit-title">
                  Government Scheme Access
                </h3>
                <p className="msme-benefit-desc">
                  Explore applicable government schemes and benefits.
                </p>
              </div>

              {/* Card 4: Business Credibility */}
              <div className="msme-benefit-card">
                <div className="msme-benefit-icon-box">
                  <img
                    src="/credibility-logo.png"
                    alt="Verified Trust Badge"
                    className="msme-benefit-logo-img"
                  />
                </div>
                <h3 className="msme-benefit-title">
                  Business Credibility
                </h3>
                <p className="msme-benefit-desc">
                  Build trust and credibility for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: MSME (UDYAM) REGISTRATION DEEP DIVE
            ============================================================ */}
        <section id="msme-udyam" className="msme-udyam-section">
          <div className="msme-container">
            <div className="msme-udyam-split-grid">
              {/* Left Side: Unique MSME Udyam Visual */}
              <div className="msme-udyam-visual-wrapper">
                <img
                  src="/msme-udyam-section.jpg"
                  alt="MSME Udyam Registration Certificate & Financial Consultation"
                  className="msme-udyam-img"
                />
              </div>

              {/* Right Side: MSME Content & 8-Item Checklist */}
              <div className="msme-udyam-content">
                <span className="msme-section-tag">
                  MSME (UDYAM) REGISTRATION
                </span>

                <h2 className="msme-section-heading">
                  Formalize Your Business With Udyam Registration
                </h2>

                <p className="msme-section-desc">
                  Udyam Registration provides official recognition for eligible Micro, Small and Medium Enterprises and helps businesses access applicable government schemes, benefits, and opportunities.
                </p>

                {/* 8-Item Checklist (2 Columns) */}
                <div className="msme-checklist-grid">
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Formal MSME Recognition</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Access to Applicable Government Schemes</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Business Credibility</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Easier Participation in Government Initiatives</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Better Business Formalization</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Support for MSME Ecosystem Benefits</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Online Registration Certificate</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Permanent Udyam Registration Number</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    className="msme-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Get Udyam Assistance</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: WHAT WE HELP YOU WITH (MSME 6 CARDS)
            ============================================================ */}
        <section className="msme-help-section">
          <div className="msme-container">
            {/* Centered Section Header */}
            <div className="msme-centered-header">
              <span className="msme-section-tag">OUR MSME SERVICES</span>
              <h2 className="msme-section-heading">
                What We Help You With (MSME)
              </h2>
              <p className="msme-section-desc">
                Complete assistance from eligibility assessment to Udyam registration and follow-up support.
              </p>
            </div>

            {/* 6 Premium Service Cards Grid */}
            <div className="msme-help-grid">
              {/* Card 1 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/udyam-assistance-icon.png"
                    alt="Udyam Registration Assistance"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  Udyam Registration Assistance
                </h3>
                <p className="msme-help-card-desc">
                  Guidance and assistance with the online Udyam registration process.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card 2 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/udyam-certificate-icon.png"
                    alt="Udyam Certificate"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  Udyam Certificate
                </h3>
                <p className="msme-help-card-desc">
                  Support in obtaining and reviewing your Udyam Registration Certificate.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card 3 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/udyam-update-icon.png"
                    alt="Udyam Update"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  Udyam Update
                </h3>
                <p className="msme-help-card-desc">
                  Assistance with updating eligible business information.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card 4 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/business-activity-icon.png"
                    alt="Business Activity Guidance"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  Business Activity Guidance
                </h3>
                <p className="msme-help-card-desc">
                  Help with appropriate business activity and registration information.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card 5 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/msme-docs-icon.png"
                    alt="MSME Documentation"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  MSME Documentation
                </h3>
                <p className="msme-help-card-desc">
                  Guidance regarding required business and identity information.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card 6 */}
              <div className="msme-help-card" onClick={() => setIsModalOpen(true)}>
                <div className="msme-help-icon-wrapper">
                  <img
                    src="/msme-scheme-icon.png"
                    alt="MSME Scheme Guidance"
                    className="msme-help-logo-img"
                  />
                </div>
                <h3 className="msme-help-card-title">
                  MSME Scheme Guidance
                </h3>
                <p className="msme-help-card-desc">
                  Information and guidance regarding applicable MSME schemes and benefits.
                </p>
                <div className="msme-help-card-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 6: MSME REGISTRATION PROCESS TIMELINE
            ============================================================ */}
        <section className="msme-process-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">STEP-BY-STEP WORKFLOW</span>
              <h2 className="msme-section-heading">
                MSME Registration Process
              </h2>
              <p className="msme-section-desc">
                A simple and transparent process from consultation to successful Udyam registration.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="msme-timeline-container">
              <div className="msme-timeline-line" />

              <div className="msme-timeline-grid">
                {/* Step 01 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">01</div>
                  <h3 className="msme-step-title">Business Consultation</h3>
                </div>

                {/* Step 02 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">02</div>
                  <h3 className="msme-step-title">Information Collection</h3>
                </div>

                {/* Step 03 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">03</div>
                  <h3 className="msme-step-title">Eligibility Review</h3>
                </div>

                {/* Step 04 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">04</div>
                  <h3 className="msme-step-title">Application Assistance</h3>
                </div>

                {/* Step 05 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">05</div>
                  <h3 className="msme-step-title">Udyam Registration</h3>
                </div>

                {/* Step 06 */}
                <div className="msme-timeline-step">
                  <div className="msme-step-circle">06</div>
                  <h3 className="msme-step-title">Certificate &amp; Follow-up</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 7: STARTUP INDIA REGISTRATION DEEP DIVE
            ============================================================ */}
        <section id="startup-india" className="msme-startup-section">
          <div className="msme-container">
            <div className="msme-startup-split-grid">
              {/* Left Side: Startup India Content & Checklist */}
              <div className="msme-startup-content">
                <span className="msme-section-tag">
                  STARTUP INDIA REGISTRATION
                </span>

                <h2 className="msme-section-heading">
                  Turn Your Startup Idea Into a Recognized Business
                </h2>

                <p className="msme-section-desc">
                  Get professional assistance with Startup India recognition and the documentation required for eligible startups seeking DPIIT recognition and applicable government schemes.
                </p>

                {/* 6-Item Checklist (2 Columns) */}
                <div className="msme-checklist-grid">
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>DPIIT Recognition Assistance</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Government Schemes &amp; Support</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Recognition in Startup Ecosystem</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Business Credibility</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Guidance for Funding Opportunities</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Compliance &amp; Documentation Support</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    className="msme-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Get Startup Assistance</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Side: Unique Startup India Visual */}
              <div className="msme-startup-visual-wrapper">
                <img
                  src="/startup-india-section.jpg"
                  alt="Startup India DPIIT Recognition & Founder Workspace"
                  className="msme-startup-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: STARTUP INDIA PROCESS TIMELINE
            ============================================================ */}
        <section className="msme-startup-process-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">STARTUP ROADMAP</span>
              <h2 className="msme-section-heading">
                Startup India Registration Process
              </h2>
              <p className="msme-section-desc">
                A structured 6-step journey from initial consultation to DPIIT recognition and compliance support.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="msme-timeline-container">
              <div className="msme-timeline-line" />

              <div className="msme-timeline-grid">
                {/* Step 01 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">01</div>
                  <h3 className="msme-step-title">Startup Consultation</h3>
                </div>

                {/* Step 02 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">02</div>
                  <h3 className="msme-step-title">Eligibility Assessment</h3>
                </div>

                {/* Step 03 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">03</div>
                  <h3 className="msme-step-title">Document Preparation</h3>
                </div>

                {/* Step 04 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">04</div>
                  <h3 className="msme-step-title">Application Preparation</h3>
                </div>

                {/* Step 05 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">05</div>
                  <h3 className="msme-step-title">DPIIT Recognition</h3>
                </div>

                {/* Step 06 */}
                <div className="msme-timeline-step">
                  <div className="msme-startup-circle">06</div>
                  <h3 className="msme-step-title">Post-Recognition Support</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 9: MSME VS STARTUP INDIA COMPARISON
            ============================================================ */}
        <section className="msme-comparison-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">SCHEME COMPARISON</span>
              <h2 className="msme-section-heading">
                MSME vs Startup India
              </h2>
              <p className="msme-section-desc">
                Understand which registration is suitable for your business.
              </p>
            </div>

            {/* Desktop Comparison Table */}
            <div className="msme-table-wrapper">
              <div className="msme-comparison-table-scroll">
                <table className="msme-comparison-table">
                  <thead>
                    <tr>
                      <th style={{ width: "22%" }}>Feature / Parameter</th>
                      <th className="col-msme">MSME (Udyam Registration)</th>
                      <th className="col-startup msme-col-highlight">Startup India Registration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="param-name">Purpose</td>
                      <td className="col-msme">Formal recognition of Micro, Small &amp; Medium Enterprises for credit &amp; scheme benefits.</td>
                      <td className="col-startup">Fostering innovation, fast-tracking IP, seed funding, and tax holidays.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Registration Authority</td>
                      <td className="col-msme">Ministry of Micro, Small &amp; Medium Enterprises (MSME).</td>
                      <td className="col-startup">Department for Promotion of Industry and Internal Trade (DPIIT).</td>
                    </tr>
                    <tr>
                      <td className="param-name">Primary Benefit</td>
                      <td className="col-msme">Collateral-free CGTMSE loans, 1% interest subvention, protection against delayed payments.</td>
                      <td className="col-startup">3-Year Income Tax Exemption (80-IAC), Angel Tax Exemption, Fund of Funds access.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Eligibility</td>
                      <td className="col-msme">All Micro, Small, Medium manufacturing &amp; service enterprises based on turnover/investment.</td>
                      <td className="col-startup">Pvt Ltd / LLP / Partnership incorporated &lt; 10 yrs with turnover &lt; ₹100 Cr &amp; innovative model.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Recognition</td>
                      <td className="col-msme">Permanent Udyam Registration Certificate &amp; URN.</td>
                      <td className="col-startup">Official DPIIT Recognition Certificate.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Government Benefits</td>
                      <td className="col-msme">50% subsidy on patent/trademark filing, priority in public procurement tenders.</td>
                      <td className="col-startup">80% rebate on patent filing, fast-track IP examination, self-certification for 9 labor &amp; 3 env laws.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Suitable For</td>
                      <td className="col-msme">Micro, small businesses, traders, manufacturers, service providers, traditional enterprises.</td>
                      <td className="col-startup">Tech startups, scalable ventures, innovative products/services seeking funding &amp; tax holidays.</td>
                    </tr>
                    <tr>
                      <td className="param-name">Business Focus</td>
                      <td className="col-msme">Revenue generation, business stability, enterprise expansion, and credit support.</td>
                      <td className="col-startup">Innovation, technology development, rapid scaling, and venture capital investment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Stacked Comparison Cards (< 768px) */}
            <div className="msme-comparison-mobile-cards">
              {/* MSME Mobile Card */}
              <div className="msme-comp-card">
                <div className="msme-comp-card-header">
                  <span>MSME (Udyam Registration)</span>
                  <Building2 size={20} />
                </div>
                <div className="msme-comp-card-body">
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Purpose</div>
                    <div className="msme-comp-value">Formal recognition for Micro, Small &amp; Medium Enterprises for credit &amp; scheme benefits.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Registration Authority</div>
                    <div className="msme-comp-value">Ministry of MSME</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Primary Benefit</div>
                    <div className="msme-comp-value">Collateral-free loans (CGTMSE), interest subvention, delayed payment protection.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Eligibility</div>
                    <div className="msme-comp-value">All Micro, Small &amp; Medium enterprises based on investment &amp; turnover thresholds.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Recognition</div>
                    <div className="msme-comp-value">Permanent Udyam Registration Certificate &amp; URN</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Government Benefits</div>
                    <div className="msme-comp-value">50% discount on patent/trademark filing, tender preferences</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Suitable For</div>
                    <div className="msme-comp-value">Traders, manufacturers, service providers, traditional businesses</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Business Focus</div>
                    <div className="msme-comp-value">Business stability, credit access, and operational scaling</div>
                  </div>
                </div>
              </div>

              {/* Startup India Mobile Card */}
              <div className="msme-comp-card">
                <div className="msme-comp-card-header header-orange">
                  <span>Startup India Registration</span>
                  <Award size={20} style={{ color: "#FF6B1A" }} />
                </div>
                <div className="msme-comp-card-body">
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Purpose</div>
                    <div className="msme-comp-value">Fostering innovation, fast-tracking IP, seed funding, and 3-year tax holidays.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Registration Authority</div>
                    <div className="msme-comp-value">DPIIT, Ministry of Commerce &amp; Industry</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Primary Benefit</div>
                    <div className="msme-comp-value">3-Year Income Tax Exemption (80-IAC), Angel Tax Exemption, Fund of Funds access.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Eligibility</div>
                    <div className="msme-comp-value">Pvt Ltd / LLP / Partnership &lt; 10 yrs old, turnover &lt; ₹100 Cr, innovative model.</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Recognition</div>
                    <div className="msme-comp-value">Official DPIIT Recognition Certificate</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Government Benefits</div>
                    <div className="msme-comp-value">80% rebate on patent filing, fast-track IP examination, self-certification</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Suitable For</div>
                    <div className="msme-comp-value">Tech startups, innovative ventures, funding-focused companies</div>
                  </div>
                  <div className="msme-comp-row">
                    <div className="msme-comp-label">Business Focus</div>
                    <div className="msme-comp-value">Innovation, technology development, rapid scaling, and VC investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 10: WHY CHOOSE MAZUMA INDIA (WITH CONSULTING VISUAL)
            ============================================================ */}
        <section className="msme-why-section">
          <div className="msme-container">
            <div className="msme-centered-header" style={{ marginBottom: "0" }}>
              <span className="msme-section-tag">WHY CHOOSE US</span>
              <h2 className="msme-section-heading">
                Why Choose Mazuma India?
              </h2>
              <p className="msme-section-desc">
                Professional assistance for registration, documentation, eligibility guidance, and ongoing business compliance.
              </p>
            </div>

            {/* Split Grid: 6 Cards Left + Unique Consulting Visual Right */}
            <div className="msme-why-grid-with-visual">
              {/* Left 6 Cards Grid */}
              <div className="msme-why-cards-grid">
                {/* Card 1 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <Award size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Registration Expertise</h3>
                  <p className="msme-why-card-desc">
                    Professional assistance throughout the registration process.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <FileCheck size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Complete Documentation</h3>
                  <p className="msme-why-card-desc">
                    End-to-end documentation and verification support.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <Scale size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Eligibility Guidance</h3>
                  <p className="msme-why-card-desc">
                    Understand what is best for your business.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <Users size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Dedicated Support</h3>
                  <p className="msme-why-card-desc">
                    Single point of contact for assistance.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Transparent Process</h3>
                  <p className="msme-why-card-desc">
                    Clear communication and transparent service.
                  </p>
                </div>

                {/* Card 6 */}
                <div className="msme-why-card">
                  <div className="msme-why-icon-box">
                    <Handshake size={24} />
                  </div>
                  <h3 className="msme-why-card-title">Long-Term Compliance Partner</h3>
                  <p className="msme-why-card-desc">
                    Ongoing support for business growth and compliance.
                  </p>
                </div>
              </div>

              {/* Right Side: Unique Professional Consulting Image */}
              <div className="msme-why-visual-wrapper">
                <img
                  src="/why-choose-msme.jpg"
                  alt="Mazuma India CA and Legal Advisory Consulting Team"
                  className="msme-why-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 11: BENEFITS OF MSME & STARTUP REGISTRATION
            ============================================================ */}
        <section className="msme-benefits-section">
          <div className="msme-container">
            <div className="msme-benefits-split-grid">
              {/* Left Side: Unique Benefits Visual */}
              <div className="msme-benefits-visual-wrapper">
                <img
                  src="/msme-startup-benefits.jpg"
                  alt="Business Growth Dashboard, Udyam Certificate & DPIIT Tax Exemptions"
                  className="msme-benefits-img"
                />
              </div>

              {/* Right Side: Benefits Content & Checklist */}
              <div className="msme-benefits-content">
                <span className="msme-section-tag">BENEFITS</span>
                <h2 className="msme-section-heading">
                  Benefits of MSME &amp; Startup Registration
                </h2>

                {/* 8-Item Checklist Grid */}
                <div className="msme-checklist-grid">
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Formal Business Recognition</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Improved Business Credibility</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Access to Applicable Government Schemes</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Startup Ecosystem Recognition</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Better Business Formalization</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Funding &amp; Growth Opportunities</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Government Initiative Support</span>
                  </div>
                  <div className="msme-checklist-item">
                    <span className="msme-check-icon">✓</span>
                    <span>Long-Term Business Growth</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ marginTop: "28px" }}>
                  <button
                    className="msme-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Explore Registration Benefits</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 12: WHO WE SERVE (8 ICON CARDS)
            ============================================================ */}
        <section className="msme-serve-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">TARGET AUDIENCE</span>
              <h2 className="msme-section-heading">
                Who We Serve
              </h2>
              <p className="msme-section-desc">
                Supporting entrepreneurs and businesses at different stages of growth.
              </p>
            </div>

            {/* 8 Cards Grid */}
            <div className="msme-serve-grid">
              {/* Card 1 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Rocket size={24} />
                </div>
                <h3 className="msme-serve-card-title">Startups</h3>
                <p className="msme-serve-card-desc">
                  Early-stage innovative ventures seeking DPIIT recognition and tax exemptions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Lightbulb size={24} />
                </div>
                <h3 className="msme-serve-card-title">Entrepreneurs</h3>
                <p className="msme-serve-card-desc">
                  Visionary founders launching commercial projects and new business ideas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Store size={24} />
                </div>
                <h3 className="msme-serve-card-title">Small Businesses</h3>
                <p className="msme-serve-card-desc">
                  Local firms looking for government schemes, credit, and tender benefits.
                </p>
              </div>

              {/* Card 4 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Building2 size={24} />
                </div>
                <h3 className="msme-serve-card-title">Micro Enterprises</h3>
                <p className="msme-serve-card-desc">
                  Sole proprietors and micro units formalizing under official Udyam.
                </p>
              </div>

              {/* Card 5 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <TrendingUp size={24} />
                </div>
                <h3 className="msme-serve-card-title">Growing Companies</h3>
                <p className="msme-serve-card-desc">
                  Expanding enterprises scaling operations and exploring subsidies.
                </p>
              </div>

              {/* Card 6 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Laptop size={24} />
                </div>
                <h3 className="msme-serve-card-title">Freelancers</h3>
                <p className="msme-serve-card-desc">
                  Independent professionals obtaining formal corporate identity.
                </p>
              </div>

              {/* Card 7 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Sparkles size={24} />
                </div>
                <h3 className="msme-serve-card-title">New Businesses</h3>
                <p className="msme-serve-card-desc">
                  Newly incorporated entities setting up legal and compliance foundations.
                </p>
              </div>

              {/* Card 8 */}
              <div className="msme-serve-card">
                <div className="msme-serve-icon-wrapper">
                  <Landmark size={24} />
                </div>
                <h3 className="msme-serve-card-title">MSMEs</h3>
                <p className="msme-serve-card-desc">
                  Established manufacturing &amp; service units accessing collateral-free loans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 13: BUSINESS INSIGHTS (3 BLOG CARDS)
            ============================================================ */}
        <section className="msme-blog-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">BUSINESS INSIGHTS</span>
              <h2 className="msme-section-heading">
                Latest MSME &amp; Startup Insights
              </h2>
              <p className="msme-section-desc">
                Expert articles, regulatory updates, and step-by-step guides to empower your business.
              </p>
            </div>

            {/* 3 Blog Cards Grid */}
            <div className="msme-blog-grid">
              {/* Blog Card 1 */}
              <Link href="/blog" className="msme-blog-card-link">
                <article className="msme-blog-card">
                  <div className="msme-blog-img-wrapper">
                    <img
                      src="/blog-udyam-guide.jpg"
                      alt="Udyam Registration Guide for Small Businesses"
                      className="msme-blog-img"
                    />
                    <span className="msme-blog-badge">MSME GUIDE</span>
                  </div>
                  <div className="msme-blog-content">
                    <span className="msme-blog-date">August 12, 2026</span>
                    <h3 className="msme-blog-title">
                      Udyam Registration Guide for Small Businesses
                    </h3>
                    <p className="msme-blog-excerpt">
                      Step-by-step tutorial on how small business owners and micro enterprises can obtain Udyam registration online.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Blog Card 2 */}
              <Link href="/blog" className="msme-blog-card-link">
                <article className="msme-blog-card">
                  <div className="msme-blog-img-wrapper">
                    <img
                      src="/blog-msme-benefits.jpg"
                      alt="MSME Benefits Every Business Owner Should Know"
                      className="msme-blog-img"
                    />
                    <span className="msme-blog-badge">BUSINESS SCHEMES</span>
                  </div>
                  <div className="msme-blog-content">
                    <span className="msme-blog-date">August 08, 2026</span>
                    <h3 className="msme-blog-title">
                      MSME Benefits Every Business Owner Should Know
                    </h3>
                    <p className="msme-blog-excerpt">
                      Discover key financial incentives, collateral-free CGTMSE loans, and delayed payment protections available for MSMEs.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Blog Card 3 */}
              <Link href="/blog" className="msme-blog-card-link">
                <article className="msme-blog-card">
                  <div className="msme-blog-img-wrapper">
                    <img
                      src="/blog-startup-dpiit.jpg"
                      alt="Startup India & DPIIT Recognition Explained"
                      className="msme-blog-img"
                    />
                    <span className="msme-blog-badge">STARTUP ADVISORY</span>
                  </div>
                  <div className="msme-blog-content">
                    <span className="msme-blog-date">August 04, 2026</span>
                    <h3 className="msme-blog-title">
                      Startup India &amp; DPIIT Recognition Explained
                    </h3>
                    <p className="msme-blog-excerpt">
                      Comprehensive breakdown of DPIIT registration eligibility, 80-IAC tax exemptions, and Angel Tax relief for Indian startups.
                    </p>
                  </div>
                </article>
              </Link>
            </div>

            {/* Footer Action Button */}
            <div className="msme-blog-footer-action">
              <Link href="/blog" className="msme-btn-secondary">
                <span>View All Insights</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 14: FREQUENTLY ASKED QUESTIONS (ACCORDION)
            ============================================================ */}
        <section className="msme-faq-section">
          <div className="msme-container">
            <div className="msme-centered-header">
              <span className="msme-section-tag">FAQ</span>
              <h2 className="msme-section-heading">
                Frequently Asked Questions
              </h2>
              <p className="msme-section-desc">
                Got questions about MSME or Startup India registration? We have answers.
              </p>
            </div>

            {/* Accordion Container */}
            <div className="msme-faq-container">
              {[
                {
                  q: "What is Udyam Registration?",
                  a: "Udyam Registration is an official online recognition provided by the Ministry of MSME, Government of India, for micro, small, and medium enterprises. It issues a permanent Udyam Registration Number (URN) and e-certificate that unlocks government subsidies, CGTMSE credit guarantees, and tender preferences."
                },
                {
                  q: "Who can apply for MSME Registration?",
                  a: "Any manufacturing or service business entity—including Proprietorships, Partnership Firms, LLPs, Private Limited Companies, One Person Companies, and Public Limited Companies—meeting the investment and turnover limits specified under MSME criteria can apply."
                },
                {
                  q: "What documents are required for Udyam Registration?",
                  a: "The primary requirement is the Aadhaar card of the proprietor, partner, or director (linked with mobile for OTP verification), along with PAN card, GSTIN (if applicable), bank account details, and basic business address proof."
                },
                {
                  q: "What is Startup India Recognition?",
                  a: "Startup India Recognition is a flagship initiative by the Government of India, intended to build a strong ecosystem for nurturing innovation, empowering eligible businesses with 3-year tax holidays, IP rebates, seed funding, and fast-track compliance under DPIIT."
                },
                {
                  q: "Who can apply for Startup India?",
                  a: "Entities registered as Private Limited Companies, Registered Partnership Firms, or LLPs incorporated not more than 10 years ago, with an annual turnover not exceeding ₹100 Crore in any financial year, and working towards innovation or commercialization of scalable products/services."
                },
                {
                  q: "What is DPIIT Recognition?",
                  a: "DPIIT (Department for Promotion of Industry and Internal Trade) Recognition is the official certification granted to eligible startups under the Startup India scheme. It acts as the master key to apply for Section 80-IAC 3-year income tax exemption, Angel Tax relief, and Fund of Funds access."
                },
                {
                  q: "What are the benefits of MSME Registration?",
                  a: "Benefits include collateral-free bank loans (CGTMSE), 1% interest rate subvention, protection against delayed payments under MSMED Act, 50% discount on patent/trademark registration fees, exemption from EMD in government tenders, and electricity bill concessions."
                },
                {
                  q: "What are the benefits of Startup India Registration?",
                  a: "Startup India offers 100% income tax exemption for 3 consecutive financial years (Section 80-IAC), Angel Tax exemption (Section 56(2)(viib)), 80% rebate on patent filings, fast-track IP examination, access to ₹10,000 Cr Fund of Funds, and 3-year self-certification under labor and environmental laws."
                },
                {
                  q: "Can a startup have both MSME and Startup India registration?",
                  a: "Yes, absolutely! An eligible business entity can simultaneously hold both MSME (Udyam) Registration and Startup India (DPIIT) Recognition. Doing so allows you to leverage MSME banking benefits (like credit guarantees) alongside Startup India tax holidays and IP rebates."
                },
                {
                  q: "How long does the registration process take?",
                  a: "Udyam Registration is usually issued within 1 to 3 working days upon complete verification of Aadhaar and business details. DPIIT Startup India recognition generally takes 3 to 7 working days, subject to DPIIT document review and approval."
                }
              ]
                .slice(0, showAllFaqs ? 10 : 3)
                .map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`msme-faq-item ${isOpen ? "active" : ""}`}
                    >
                      <button
                        className="msme-faq-header"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <h3 className="msme-faq-question">{item.q}</h3>
                        <div className="msme-faq-icon-box">
                          <ChevronDown size={16} />
                        </div>
                      </button>
                      <div
                        className="msme-faq-answer-wrapper"
                        style={{
                          maxHeight: isOpen ? "240px" : "0px"
                        }}
                      >
                        <div className="msme-faq-answer-content">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* View More / Show Less FAQs Button */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                className="msme-btn-secondary"
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                style={{ cursor: "pointer" }}
              >
                <span>{showAllFaqs ? "Show Less Questions" : "View All 10 Questions"}</span>
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
            SECTION 15: FINAL CTA BANNER (DARK NAVY WITH VISUAL)
            ============================================================ */}
        <section className="msme-cta-section">
          <div className="msme-cta-bg-overlay" />
          <div className="msme-container">
            <div className="msme-cta-split-grid">
              {/* Left Column: Heading, Features & Buttons */}
              <div className="msme-cta-left">
                <h2 className="msme-cta-heading">
                  Ready to Formalize &amp; Grow Your Business?
                </h2>
                <p className="msme-cta-desc">
                  Whether you are registering an MSME or seeking Startup India recognition, Mazuma India helps simplify documentation, registration, and compliance.
                </p>

                {/* 4 Feature Points */}
                <div className="msme-cta-features-grid">
                  <div className="msme-cta-feature-item">
                    <span className="msme-cta-feature-check">✓</span>
                    <span>Expert Guidance</span>
                  </div>
                  <div className="msme-cta-feature-item">
                    <span className="msme-cta-feature-check">✓</span>
                    <span>Registration Assistance</span>
                  </div>
                  <div className="msme-cta-feature-item">
                    <span className="msme-cta-feature-check">✓</span>
                    <span>Documentation Support</span>
                  </div>
                  <div className="msme-cta-feature-item">
                    <span className="msme-cta-feature-check">✓</span>
                    <span>Long-Term Compliance</span>
                  </div>
                </div>

                {/* Buttons Group */}
                <div className="msme-cta-btn-group">
                  <button
                    className="msme-btn-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight size={18} />
                  </button>

                  <a href="tel:+919936351555" className="msme-btn-call">
                    <Phone size={18} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span>Call Now: +91 99363 51555</span><span>Call Now: +91 99998 65586</span></span>
                  </a>
                </div>
              </div>

              {/* Right Column: Unique CTA Visual */}
              <div className="msme-cta-right">
                <div className="msme-cta-visual-wrapper">
                  <img
                    src="/msme-cta-bg.jpg"
                    alt="Mazuma India Entrepreneur Registration & Advisory Consultation"
                    className="msme-cta-img"
                  />
                </div>
              </div>
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
