"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./business-compliance.css";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileText,
  CalendarCheck,
  Award,
  PhoneCall,
  X,
  FileCheck2,
  Users,
  Check,
  Landmark,
  Briefcase,
  TrendingUp,
  Plus,
  Minus,
  CheckCircle2,
  ClipboardCheck,
  Scale,
  FileCode,
  UserCheck,
  SearchCheck,
  Building,
  Factory,
  Laptop
} from "lucide-react";

export default function BusinessCompliancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: ""
  });

  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setSubmittedMessage("");
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || "Compliance Client",
          email: formData.email,
          phone: formData.phone,
          service: selectedService || "Business Compliance",
          message: `City: ${formData.city || "Not specified"}`,
          source: "Business Compliance Page"
        })
      });
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmittedMessage(`Thank you! Our compliance expert will contact you shortly regarding ${selectedService || "Business Compliance"}.`);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsExpertModalOpen(false);
        setSubmittedMessage("");
        setFormData({ name: "", phone: "", email: "", city: "" });
      }, 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 2: 9 Premium Compliance Service Cards
  const complianceServices = [
    {
      title: "ROC Compliance",
      desc: "Annual ROC filing, DIR-3 KYC, DPT-3, MGT-7, AOC-4, and MCA compliance.",
      icon: ShieldCheck
    },
    {
      title: "Annual Filing",
      desc: "Timely annual return filing to ensure statutory compliance and avoid penalties.",
      icon: CalendarCheck
    },
    {
      title: "Company Compliance",
      desc: "Ongoing compliance management for Private Limited Companies, LLPs, and OPCs.",
      icon: Building2
    },
    {
      title: "TDS Return Filing",
      desc: "Quarterly TDS return filing, correction statements, and compliance support.",
      icon: FileText
    },
    {
      title: "PAN & TAN Services",
      desc: "PAN, TAN application, correction, and business registration support.",
      icon: FileCode
    },
    {
      title: "Secretarial Compliance",
      desc: "Board resolutions, meeting documentation, registers, and Companies Act compliance.",
      icon: ClipboardCheck
    },
    {
      title: "Compliance Health Check",
      desc: "Comprehensive review of your business compliance status with expert recommendations.",
      icon: SearchCheck
    },
    {
      title: "Corporate Advisory",
      desc: "Strategic guidance on corporate governance, restructuring, and compliance planning.",
      icon: Scale
    },
    {
      title: "Business Documentation",
      desc: "Preparation of agreements, resolutions, legal documents, and statutory records.",
      icon: FileCheck2
    }
  ];

  // Section 3: Compliance Process (6-Step Timeline)
  const processSteps = [
    { num: 1, title: "Compliance Review" },
    { num: 2, title: "Document Collection" },
    { num: 3, title: "Compliance Planning" },
    { num: 4, title: "Filing & Documentation" },
    { num: 5, title: "Government Submission" },
    { num: 6, title: "Ongoing Monitoring" }
  ];

  // Section 4: Why Choose Features (6 Feature Cards)
  const whyFeatures = [
    {
      title: "Compliance Specialists",
      desc: "Experienced professionals managing ROC, MCA, TDS, and corporate compliance."
    },
    {
      title: "Complete Documentation",
      desc: "Preparation, verification, filing, and record maintenance."
    },
    {
      title: "Timely Compliance",
      desc: "Never miss statutory due dates with proactive compliance tracking."
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable compliance packages with no hidden charges."
    },
    {
      title: "Dedicated Relationship Manager",
      desc: "Single point of contact for all compliance matters."
    },
    {
      title: "Long-Term Business Support",
      desc: "Continuous advisory and compliance assistance as your business grows."
    }
  ];

  // Section 5: Benefits Checklist (8 Points)
  const benefitsList = [
    "Avoid Legal Penalties",
    "Improved Business Credibility",
    "Better Investor Confidence",
    "Timely Government Compliance",
    "Strong Corporate Governance",
    "Easier Business Expansion",
    "Better Financial Transparency",
    "Long-Term Business Stability"
  ];

  // Section 6: Businesses We Support (8 Icon Cards)
  const businessesSupported = [
    { title: "Private Limited Companies", icon: Building2 },
    { title: "LLPs", icon: Building },
    { title: "One Person Companies", icon: UserCheck },
    { title: "Startups", icon: TrendingUp },
    { title: "MSMEs", icon: Briefcase },
    { title: "Manufacturing Companies", icon: Factory },
    { title: "IT Companies", icon: Laptop },
    { title: "Professional Firms", icon: Landmark }
  ];

  // Section 7: Knowledge Centre Articles (3 Blog Cards)
  const blogCards = [
    {
      title: "Annual ROC Filing Due Dates",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
      link: "/blog"
    },
    {
      title: "How to Stay MCA Compliant",
      img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
      link: "/blog"
    },
    {
      title: "Common Business Compliance Mistakes",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "/blog"
    }
  ];

  // Section 8: FAQ Accordion (8 Questions)
  const faqItems = [
    {
      q: "What is ROC Compliance?",
      a: "ROC (Registrar of Companies) compliance includes filing annual financial statements (AOC-4), annual returns (MGT-7), director disclosures (DIR-3 KYC), and other mandatory returns with the Ministry of Corporate Affairs (MCA)."
    },
    {
      q: "Who needs annual filing?",
      a: "Every registered Private Limited Company, One Person Company (OPC), and Limited Liability Partnership (LLP) in India must file annual returns and financial statements with the ROC, regardless of business turnover or transactions."
    },
    {
      q: "What are the penalties for non-compliance?",
      a: "Late filing attracts additional fees of ₹100 per day per form with no maximum cap. Extended non-compliance can lead to disqualification of directors, strike-off of company name, and legal prosecution."
    },
    {
      q: "How often should TDS returns be filed?",
      a: "TDS returns must be filed on a quarterly basis (Form 24Q for Salary, Form 26Q for Non-Salary, Form 27Q for Non-Residents). The due dates are July 31st, October 31st, January 31st, and May 31st."
    },
    {
      q: "What documents are required for ROC filing?",
      a: "Essential documents include audited financial statements (Balance Sheet, Profit & Loss), Auditor's Report, Director's Report, Notice of AGM, and DSC (Digital Signature Certificate) of directors."
    },
    {
      q: "What is Secretarial Compliance?",
      a: "Secretarial compliance involves maintaining statutory registers, drafting board & general meeting minutes, issuing share certificates, and ensuring adherence to the Companies Act, 2013."
    },
    {
      q: "Why is a Compliance Health Check important?",
      a: "A compliance health check audits your past ROC filings, tax returns, and statutory registers to identify hidden compliance lapses, avoiding heavy penalties and ensuring smooth due diligence during fundraising."
    },
    {
      q: "Do you provide ongoing compliance support?",
      a: "Yes! Mazuma India offers annual retainer packages that cover all mandatory ROC filings, TDS returns, secretarial support, and continuous advisory throughout the year."
    }
  ];

  return (
    <div className="compliance-page-wrapper">
      <Header />

      {/* SECTION 1 — HERO SECTION */}
      <section className="compliance-hero-section">
        <div className="compliance-container">
          <div className="compliance-hero-grid">
            <div className="compliance-hero-content">
              <nav className="compliance-breadcrumb" aria-label="Breadcrumb">
                <Link href="/" className="compliance-crumb-link">Home</Link>
                <ChevronRight size={12} className="compliance-crumb-sep" />
                <span className="compliance-crumb-link">Services</span>
                <ChevronRight size={12} className="compliance-crumb-sep" />
                <span className="compliance-crumb-current">Business Compliance</span>
              </nav>

              <div className="compliance-hero-badge">
                <span className="compliance-badge-dot"></span>
                <span>BUSINESS COMPLIANCE</span>
              </div>

              <h1 className="compliance-hero-heading">
                Stay Compliant. <br />
                <span className="compliance-hero-heading-highlight">Grow Your Business With Confidence.</span>
              </h1>

              <p className="compliance-hero-desc">
                Ensure your business remains fully compliant with statutory, regulatory, and corporate requirements through expert ROC filings, annual compliance, secretarial support, TDS filings, documentation, and ongoing advisory services.
              </p>

              <div className="compliance-hero-features">
                <span className="compliance-hero-feature-item">
                  <CheckCircle2 size={16} /> ROC Compliance
                </span>
                <span className="compliance-hero-feature-item">
                  <CheckCircle2 size={16} /> Annual Filing
                </span>
                <span className="compliance-hero-feature-item">
                  <CheckCircle2 size={16} /> Secretarial Compliance
                </span>
                <span className="compliance-hero-feature-item">
                  <CheckCircle2 size={16} /> Dedicated Compliance Experts
                </span>
              </div>

              <div className="compliance-hero-cta-group">
                <button
                  className="compliance-btn-primary"
                  onClick={() => openServiceModal("Business Compliance Package")}
                >
                  Book Free Consultation <ArrowRight size={16} />
                </button>
                <button
                  className="compliance-btn-outline"
                  onClick={() => setIsExpertModalOpen(true)}
                >
                  Talk to Expert
                </button>
              </div>
            </div>

            <div className="compliance-hero-image-wrapper">
              <img
                src="/services-companies.png"
                alt="Corporate compliance workspace with dashboard and documents"
                className="compliance-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPLIANCE SERVICES (3x3 GRID) */}
      <section className="compliance-services-section" id="services-grid">
        <div className="compliance-container">
          <div className="compliance-section-header">
            <h2 className="compliance-section-title">
              Complete Business Compliance Solutions
            </h2>
            <p className="compliance-section-desc">
              From ROC filings and annual returns to secretarial compliance, business documentation, and corporate advisory, Mazuma India provides end-to-end compliance management under one roof.
            </p>
          </div>

          <div className="compliance-services-grid">
            {complianceServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={index}
                  className="compliance-service-card"
                  onClick={() => openServiceModal(service.title)}
                >
                  <div className="compliance-card-top-bar"></div>
                  <div className="compliance-card-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 className="compliance-card-title">{service.title}</h3>
                  <p className="compliance-card-desc">{service.desc}</p>
                  <span className="compliance-card-btn">
                    <span>Enquire Now</span> <ArrowRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPLIANCE PROCESS (HORIZONTAL TIMELINE) */}
      <section className="compliance-process-section">
        <div className="compliance-container">
          <div className="compliance-section-header">
            <h2 className="compliance-section-title">Our Compliance Process</h2>
            <p className="compliance-section-desc">
              A streamlined process designed to keep your business compliant throughout the year.
            </p>
          </div>

          <div className="compliance-timeline-wrapper">
            {processSteps.map((step) => (
              <div key={step.num} className="compliance-process-card">
                <div className="compliance-process-number">{step.num}</div>
                <h4 className="compliance-process-title">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY BUSINESSES TRUST MAZUMA INDIA */}
      <section className="compliance-why-section">
        <div className="compliance-container">
          <div className="compliance-why-grid">
            <div className="compliance-why-left">
              <div className="compliance-why-img-container">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate legal workspace and consultant reviewing compliance documents"
                  className="compliance-why-img"
                />
                <div className="compliance-stats-overlay">
                  <div className="compliance-stat-card">
                    <div className="compliance-stat-value">5000+</div>
                    <div className="compliance-stat-label">Businesses Served</div>
                  </div>
                  <div className="compliance-stat-card">
                    <div className="compliance-stat-value">100%</div>
                    <div className="compliance-stat-label">Timely Compliance Support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="compliance-why-right">
              <h2 className="compliance-section-title" style={{ textAlign: "left" }}>
                Why Businesses Choose Mazuma India
              </h2>
              <p className="compliance-section-desc" style={{ textAlign: "left", marginBottom: "20px" }}>
                We combine deep domain expertise with automated compliance tracking so you never miss a filing date or face statutory penalties.
              </p>

              <div className="compliance-why-features-grid">
                {whyFeatures.map((feat, i) => (
                  <div key={i} className="compliance-feature-box">
                    <h4 className="compliance-feature-box-title">{feat.title}</h4>
                    <p className="compliance-feature-box-desc">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BENEFITS OF BUSINESS COMPLIANCE */}
      <section className="compliance-benefits-section">
        <div className="compliance-container">
          <div className="compliance-benefits-grid">
            <div>
              <h2 className="compliance-section-title" style={{ textAlign: "left" }}>
                Benefits of Business Compliance
              </h2>
              <p className="compliance-section-desc" style={{ textAlign: "left", marginBottom: "24px" }}>
                Maintaining proper compliance strengthens your company's credibility, avoids penalties, improves investor confidence, and supports sustainable business growth.
              </p>

              <div className="compliance-benefits-checklist">
                {benefitsList.map((item, idx) => (
                  <div key={idx} className="compliance-check-item">
                    <Check size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="compliance-hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Business compliance report and governance dashboard"
                className="compliance-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO WE HELP */}
      <section className="compliance-who-section">
        <div className="compliance-container">
          <div className="compliance-section-header">
            <h2 className="compliance-section-title">Businesses We Support</h2>
            <p className="compliance-section-desc">
              Tailored compliance management solutions across all corporate structures and industry sectors.
            </p>
          </div>

          <div className="compliance-who-grid">
            {businessesSupported.map((biz, idx) => {
              const IconComponent = biz.icon;
              return (
                <div key={idx} className="compliance-who-card">
                  <div className="compliance-who-icon">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="compliance-who-title">{biz.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMPLIANCE KNOWLEDGE CENTRE */}
      <section className="compliance-blog-section">
        <div className="compliance-container">
          <div className="compliance-section-header">
            <h2 className="compliance-section-title">Latest Compliance Insights</h2>
            <p className="compliance-section-desc">
              Stay updated with recent MCA notifications, ROC filing guidelines, and statutory deadlines.
            </p>
          </div>

          <div className="compliance-blog-grid">
            {blogCards.map((blog, i) => (
              <div key={i} className="compliance-blog-card">
                <img src={blog.img} alt={blog.title} className="compliance-blog-img" />
                <div className="compliance-blog-content">
                  <h4 className="compliance-blog-title">{blog.title}</h4>
                  <Link href={blog.link} className="compliance-blog-link">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/blog" className="compliance-btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="compliance-faq-section">
        <div className="compliance-container">
          <div className="compliance-section-header">
            <h2 className="compliance-section-title">Frequently Asked Questions</h2>
            <p className="compliance-section-desc">
              Got questions regarding ROC filing, annual compliance, or secretarial services? Find quick answers below.
            </p>
          </div>

          <div className="compliance-faq-list">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`compliance-faq-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    className="compliance-faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {isOpen && (
                    <div className="compliance-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="compliance-cta-section">
        <div className="compliance-container">
          <div className="compliance-cta-card">
            <h2 className="compliance-cta-title">
              Keep Your Business Fully Compliant
            </h2>
            <p className="compliance-cta-desc">
              Focus on growing your business while our experts manage your statutory filings, corporate compliance, and regulatory obligations with complete accuracy and transparency.
            </p>

            <div className="compliance-cta-badges">
              <span className="compliance-cta-badge-item">
                <CheckCircle2 size={16} /> Expert Compliance Team
              </span>
              <span className="compliance-cta-badge-item">
                <CheckCircle2 size={16} /> Timely Filings
              </span>
              <span className="compliance-cta-badge-item">
                <CheckCircle2 size={16} /> End-to-End Documentation
              </span>
              <span className="compliance-cta-badge-item">
                <CheckCircle2 size={16} /> Dedicated Business Support
              </span>
            </div>

            <div className="compliance-cta-buttons">
              <button
                className="compliance-btn-primary"
                onClick={() => openServiceModal("Final Business Compliance CTA")}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <a href="tel:+919936351555" className="compliance-btn-outline">
                <PhoneCall size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <h3 className="modal-title">Book Free Compliance Consultation</h3>
            <p className="modal-subtitle">Fill out the details below for {selectedService || "Business Compliance"}.</p>
            {submittedMessage ? (
              <div className="modal-success-msg">{submittedMessage}</div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modal-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <button type="submit" className="compliance-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TALK TO EXPERT MODAL */}
      {isExpertModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsExpertModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsExpertModalOpen(false)}>
              <X size={20} />
            </button>
            <h3 className="modal-title">Talk to a Compliance Specialist</h3>
            <p className="modal-subtitle">Get direct advisory on ROC filings, secretarial compliance, and TDS returns.</p>
            {submittedMessage ? (
              <div className="modal-success-msg">{submittedMessage}</div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modal-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button type="submit" className="compliance-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Connecting..." : "Request Callback Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
