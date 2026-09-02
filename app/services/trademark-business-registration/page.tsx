"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./trademark-business-registration.css";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Rocket,
  Utensils,
  Globe,
  BadgeCheck,
  ShoppingCart,
  Store,
  ReceiptText,
  KeyRound,
  Check,
  PhoneCall,
  Phone,
  X,
  FileCheck,
  Shield,
  Clock,
  FileText,
  DollarSign,
  Headset,
  Award,
  TrendingUp,
  UserCheck,
  Users,
  ClipboardList
} from "lucide-react";

const ServiceLogoBadge = ({ title }: { title: string }) => {
  if (title.includes("Trademark")) {
    return <img src="/logos/logo-trademark.svg" alt="Trademark Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("MSME")) {
    return <img src="/logos/logo-msme.svg" alt="MSME Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("Startup")) {
    return <img src="/logos/logo-startupindia.svg" alt="Startup India Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("FSSAI")) {
    return <img src="/logos/logo-fssai.svg" alt="FSSAI Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("IEC")) {
    return <img src="/logos/logo-iec.svg" alt="IEC Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("ISO")) {
    return <img src="/logos/logo-iso.svg" alt="ISO Certification Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("GeM")) {
    return <img src="/logos/logo-gem.svg" alt="GeM Registration Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("Shop")) {
    return <img src="/logos/logo-shop.svg" alt="Shop & Establishment Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("Professional Tax") || title.includes("P. Tax")) {
    return <img src="/logos/logo-ptax.svg" alt="Professional Tax Logo" className="tbr-card-logo-img" />;
  }
  if (title.includes("Digital Signature") || title.includes("DSC")) {
    return <img src="/logos/logo-dsc.svg" alt="DSC Logo" className="tbr-card-logo-img" />;
  }
  return <Award size={28} className="tbr-badge-icon" />;
};

export default function TrademarkBusinessRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Trademark Registration");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    city: "",
    service: "Trademark Registration"
  });

  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllTbrServices, setShowAllTbrServices] = useState(false);
  const [showAllTbrProcess, setShowAllTbrProcess] = useState(false);

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
          name: formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Trademark & Registration",
          city: formData.city,
          source: "Trademark & Business Registration Page"
        })
      });
      setIsModalOpen(false);
      setIsExpertModalOpen(false);
      setFormData({ email: "", phone: "", city: "", service: "Trademark Registration" });
    } catch (err) {
      console.error("Trademark API error:", err);
    }
  };

  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setFormData(prev => ({ ...prev, service: serviceName }));
    setIsModalOpen(true);
  };

  // 10 Registration Services
  const registrationServices = [
    {
      title: "Trademark Registration",
      desc: "Protect your brand identity with complete trademark registration and filing support.",
      icon: ShieldCheck
    },
    {
      title: "MSME (Udyam) Registration",
      desc: "Obtain Udyam Registration and unlock government benefits for your business.",
      icon: Building2
    },
    {
      title: "Startup India Registration",
      desc: "Get DPIIT Startup India recognition and startup incentives.",
      icon: Rocket
    },
    {
      title: "FSSAI Registration",
      desc: "Food business licensing and FSSAI registration with complete documentation.",
      icon: Utensils
    },
    {
      title: "IEC (Import Export Code)",
      desc: "Import Export Code registration for international trade.",
      icon: Globe
    },
    {
      title: "ISO Certification",
      desc: "ISO certification consulting to improve business credibility and quality standards.",
      icon: BadgeCheck
    },
    {
      title: "GeM Registration",
      desc: "Register your business on Government e-Marketplace (GeM) for public procurement opportunities.",
      icon: ShoppingCart
    },
    {
      title: "Shop & Establishment Registration",
      desc: "Register your commercial establishment and comply with state labour regulations.",
      icon: Store
    },
    {
      title: "Professional Tax Registration",
      desc: "Professional Tax registration, enrollment, and compliance support for businesses and employers.",
      icon: ReceiptText
    },
    {
      title: "Digital Signature Certificate (DSC)",
      desc: "Obtain Class 3 Digital Signature Certificates for MCA, GST, Income Tax, and e-filing requirements.",
      icon: KeyRound
    }
  ];

  // 6 Process Steps
  const processSteps = [
    {
      step: 1,
      title: "Business Consultation",
      icon: Users
    },
    {
      step: 2,
      title: "Document Collection",
      icon: FileText
    },
    {
      step: 3,
      title: "Application Preparation",
      icon: ClipboardList
    },
    {
      step: 4,
      title: "Government Filing",
      icon: Building2
    },
    {
      step: 5,
      title: "Certificate Approval",
      icon: Award
    },
    {
      step: 6,
      title: "Post Registration Support",
      icon: Headset
    }
  ];

  // 6 Why Choose Us Cards
  const whyChooseFeatures = [
    {
      title: "Expert Registration Consultants",
      desc: "Experienced professionals handling registrations across multiple government departments.",
      icon: UserCheck
    },
    {
      title: "Fast Processing",
      desc: "Quick documentation and timely filing to minimize delays.",
      icon: Clock
    },
    {
      title: "Complete Documentation",
      desc: "End-to-end assistance with forms, verification, and submission.",
      icon: FileText
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable pricing with no hidden charges.",
      icon: DollarSign
    },
    {
      title: "Dedicated Support",
      desc: "Personalized guidance from consultation to certificate issuance.",
      icon: Headset
    },
    {
      title: "Trusted Compliance Partner",
      desc: "Long-term assistance for renewals, amendments, and regulatory compliance.",
      icon: Shield
    }
  ];

  // 8 Benefits Checklist Items
  const benefitsList = [
    "Brand Protection",
    "Legal Recognition",
    "Government Scheme Benefits",
    "Increased Business Credibility",
    "Easy Bank Loan & Funding",
    "Better Customer Trust",
    "Business Expansion Opportunities",
    "Long-Term Compliance"
  ];

  // 5 Main Important FAQs
  const faqs = [
    {
      q: "What is Trademark Registration?",
      a: "Trademark registration grants legal ownership and exclusive rights to use your brand name, logo, slogan, or symbol in India, protecting your business identity from unauthorized copying and infringement."
    },
    {
      q: "Who can apply for MSME Registration?",
      a: "Any micro, small, or medium enterprise—including proprietorships, partnerships, LLPs, private limited companies, and OPCs engaged in manufacturing or service sectors—can apply for MSME (Udyam) registration."
    },
    {
      q: "How long does Trademark Registration take?",
      a: "After filing the application, you can use the ™ symbol immediately within 24 hours. Final trademark registration with the ® symbol usually takes 6 to 12 months, depending on government examination."
    },
    {
      q: "What documents are required for FSSAI Registration?",
      a: "Key documents include applicant ID proof (Aadhaar/PAN), address proof of the business premise, passport size photograph, and details of food business operational categories."
    },
    {
      q: "What are the benefits of Startup India Registration?",
      a: "Benefits include 3-year income tax exemption, self-certification compliance, fast-track patent application with 80% fee reduction, and access to government startup fund schemes."
    }
  ];

  return (
    <div className="tbr-page">
      <Header />

      {/* =========================================================
          SECTION 1: HERO SECTION (FLUSH RIGHT FULL BG IMAGE - ABOUT US STYLE)
         ========================================================= */}
      <section className="tbr-hero-section">
        {/* Right Side Edge-to-Edge Background Image */}
        <div className="tbr-hero-bg-wrapper">
          <img
            src="/trademark-hero-clean.png"
            alt="Trademark & Business Registrations Desk"
            className="tbr-hero-bg-img"
          />
        </div>

        <div className="tbr-container">
          <div className="tbr-hero-content-box">
            <div className="tbr-breadcrumb">
              <Link href="/">Home</Link>
              <span className="tbr-breadcrumb-separator">&gt;</span>
              <Link href="/#services">Services</Link>
              <span className="tbr-breadcrumb-separator">&gt;</span>
              <span className="tbr-breadcrumb-current">Trademark &amp; Business Registrations</span>
            </div>

            <span className="tbr-hero-badge">TRADEMARK &amp; BUSINESS REGISTRATIONS</span>

            <h1 className="tbr-hero-title">
              Protect Your Brand.<br />
              Grow Your Business<br />
              With Confidence.
            </h1>

            <p className="tbr-hero-desc">
              Register and protect your business with expert assistance for trademarks, MSME, Startup India, FSSAI, IEC, ISO certification, GeM registration, and other essential business registrations—all under one roof.
            </p>

            {/* 4 Feature Badges */}
            <div className="tbr-hero-badges-row">
              <div className="tbr-hero-badge-card">
                <span className="tbr-hero-check">✓</span>
                <span>Trademark Protection</span>
              </div>
              <div className="tbr-hero-badge-card">
                <span className="tbr-hero-check">✓</span>
                <span>Government Registrations</span>
              </div>
              <div className="tbr-hero-badge-card">
                <span className="tbr-hero-check">✓</span>
                <span>Fast Documentation</span>
              </div>
              <div className="tbr-hero-badge-card">
                <span className="tbr-hero-check">✓</span>
                <span>Expert Compliance Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="tbr-hero-buttons">
              <button
                className="tbr-btn-primary"
                onClick={() => openServiceModal("Trademark Registration")}
              >
                <span>Book Free Consultation</span>
                <span className="tbr-btn-arrow-circle">→</span>
              </button>
              <button
                className="tbr-btn-outline"
                onClick={() => setIsExpertModalOpen(true)}
              >
                <PhoneCall size={16} className="tbr-phone-icon" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: BUSINESS REGISTRATION SERVICES (5 COLUMNS GRID - TRUSTERA STYLE)
         ========================================================= */}
      <section className="tbr-services-section">
        <div className="tbr-container">
          <div className="tbr-section-header-center">
            <span className="tbr-section-tag">OUR SERVICES</span>
            <h2 className="tbr-section-title">
              Complete Trademark &amp;<br />
              Business Registration Solutions
            </h2>
            <p className="tbr-section-subtitle">
              End-to-end assistance for brand protection, government licenses, and statutory business registrations.
            </p>
          </div>

          <div className="tbr-services-trust-grid">
            {registrationServices.map((service, idx) => {
              const hideMobileClass = idx >= 3 && !showAllTbrServices ? "tbr-service-hide-mobile" : "";
              return (
                <div key={idx} className={`tbr-service-trust-card ${hideMobileClass}`}>
                  <div className="tbr-trust-top-content">
                    <div className="tbr-trust-logo-box">
                      <ServiceLogoBadge title={service.title} />
                    </div>
                    <h3 className="tbr-trust-service-title">{service.title}</h3>
                  </div>

                  <p className="tbr-service-desc">{service.desc}</p>

                  <button
                    className="tbr-trust-contact-btn"
                    onClick={() => openServiceModal(service.title)}
                  >
                    <span>Enquiry Now</span>
                    <span className="tbr-btn-mini-arrow">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Toggle Button for Mobile Services */}
          <div className="tbr-services-view-all-wrapper" style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              type="button"
              className="tbr-who-toggle-btn"
              onClick={() => setShowAllTbrServices(!showAllTbrServices)}
            >
              <span>{showAllTbrServices ? "Show Less Services" : "View All 10 Services"}</span>
              <ArrowRight
                size={14}
                style={{
                  transform: showAllTbrServices ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: STREAMLINED REGISTRATION PROCESS
         ========================================================= */}
      <section className="tbr-process-section">
        <div className="tbr-container">
          <div className="tbr-section-header-center">
            <span className="tbr-section-tag">OUR PROCESS</span>
            <h2 className="tbr-section-title">Our Registration Process</h2>
            <p className="tbr-section-subtitle">
              A transparent, 6-step streamlined workflow from initial consultation to final government certificate approval.
            </p>
          </div>

          <div className="tbr-process-horizontal-flow">
            {processSteps.map((pStep, index) => {
              const IconComp = pStep.icon;
              const hideMobileClass = index >= 2 && !showAllTbrProcess ? "tbr-process-hide-mobile" : "";
              return (
                <div key={pStep.step} className={`tbr-process-flow-item ${hideMobileClass}`}>
                  <div className="tbr-process-icon-circle">
                    <IconComp size={24} className="tbr-step-svg-icon" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className={`tbr-flow-connector ${hideMobileClass}`}>
                      <div className="tbr-connector-line"></div>
                      <ChevronRight size={14} className="tbr-connector-arrow" />
                    </div>
                  )}
                  <div className="tbr-step-meta">
                    <span className="tbr-step-label">Step {pStep.step}</span>
                    <h3 className="tbr-step-title">{pStep.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toggle Button for Mobile Process */}
          <div className="tbr-process-view-all-wrapper" style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              type="button"
              className="tbr-who-toggle-btn"
              onClick={() => setShowAllTbrProcess(!showAllTbrProcess)}
            >
              <span>{showAllTbrProcess ? "Show Less Registration Steps" : "View All 6 Registration Steps"}</span>
              <ArrowRight
                size={14}
                style={{
                  transform: showAllTbrProcess ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 & 5 COMBINED: WHY CHOOSE US & BENEFITS (SIDE-BY-SIDE SPLIT)
         ========================================================= */}
      <section className="tbr-why-benefits-combined-section">
        <div className="tbr-container">
          <div className="tbr-why-benefits-flex">
            
            {/* LEFT COLUMN: WHY CHOOSE MAZUMA INDIA */}
            <div className="tbr-why-side-col">
              <div className="tbr-side-header">
                <span className="tbr-side-tag">WHY CHOOSE US</span>
                <h2 className="tbr-side-title">Why Businesses Choose Mazuma India</h2>
                <div className="tbr-side-line"></div>
              </div>

              <div className="tbr-why-cards-grid">
                {whyChooseFeatures.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <div key={idx} className="tbr-why-mini-card">
                      <div className="tbr-mini-icon-circle">
                        <IconComp size={18} />
                      </div>
                      <div className="tbr-why-card-info">
                        <h3 className="tbr-mini-title">{feat.title}</h3>
                        <p className="tbr-mini-desc">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="tbr-vertical-divider"></div>

            {/* RIGHT COLUMN: BENEFITS OF BUSINESS REGISTRATION */}
            <div className="tbr-benefits-side-col">
              <div className="tbr-side-header">
                <span className="tbr-side-tag">BENEFITS</span>
                <h2 className="tbr-side-title">Benefits of Business Registration</h2>
                <div className="tbr-side-line"></div>
              </div>

              <div className="tbr-benefits-sub-grid">
                <div className="tbr-benefits-graphic-box">
                  <img
                    src="/business-desk-illustration.png"
                    alt="Business Registration Desk Illustration"
                    className="tbr-benefits-hd-img"
                  />
                </div>

                <div className="tbr-benefits-checklist-column">
                  {benefitsList.map((benefit, idx) => (
                    <div key={idx} className="tbr-benefit-check-row">
                      <div className="tbr-orange-check-circle">✓</div>
                      <span className="tbr-benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS (5 MAIN FAQs)
         ========================================================= */}
      <section className="tbr-faq-section">
        <div className="tbr-container">
          <div className="tbr-section-header-center">
            <span className="tbr-section-tag">FAQ</span>
            <h2 className="tbr-section-title">Frequently Asked Questions</h2>
            <p className="tbr-section-subtitle">
              Got questions about trademarks and business registrations? We have answers.
            </p>
          </div>

          <div className="tbr-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="tbr-faq-item">
                <button
                  className="tbr-faq-question"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: openFaq === idx ? "#FF6B1A" : "#0F2748"
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="tbr-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: FINAL CTA
         ========================================================= */}
      <section className="tbr-cta-section">
        <div className="tbr-container">
          <div className="tbr-cta-banner">
            <div className="tbr-cta-left">
              <h2 className="tbr-cta-title">Ready to Register Your Business?</h2>
              <p className="tbr-cta-desc">
                Protect your brand, comply with regulations, and grow your business with expert registration services from Mazuma India.
              </p>
              <div className="tbr-cta-features">
                <span className="tbr-cta-feat-tag">✓ Government Approved Process</span>
                <span className="tbr-cta-feat-tag">✓ Expert Guidance</span>
                <span className="tbr-cta-feat-tag">✓ Fast Documentation</span>
                <span className="tbr-cta-feat-tag">✓ Complete Support</span>
              </div>
            </div>

            <div className="global-cta-contact-section">
              <button
                className="global-consultation-btn"
                onClick={() => openServiceModal("Trademark & Business Registrations")}
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
      </section>

      {/* =========================================================
          SHORT ENQUIRY MODAL (PROPER DESIGN & FIXING)
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
              <div className="tbr-form-group">
                <label className="tbr-form-label">City / Location</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="tbr-form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <button type="submit" className="tbr-modal-submit-btn">
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
        <div className="expert-modal-backdrop" onClick={() => setIsExpertModalOpen(false)}>
          <div className="expert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="expert-modal-close-btn" onClick={() => setIsExpertModalOpen(false)}>
              <X size={18} />
            </button>
            <div className="expert-modal-header">
              <div className="expert-circle-icon-wrapper">
                <PhoneCall size={22} style={{ color: "#FF6B1A" }} />
              </div>
              <h3 className="expert-modal-header-title">Talk to Our CA Expert</h3>
              <p className="expert-modal-header-sub">Direct phone consultation line for urgent queries.</p>
            </div>
            <div className="expert-modal-body">
              <p style={{ fontSize: "14px", color: "#475569", marginBottom: "16px" }}>
                Call our direct advisor helpline below or submit your phone number for an instant callback.
              </p>
              <a
                href="tel:+919936351555"
                className="tbr-btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "16px",
                  textDecoration: "none"
                }}
              >
                <PhoneCall size={18} />
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span>+91 99363 51555</span><span>+91 99998 65586</span></span>
              </a>
              <form onSubmit={handleFormSubmit}>
                <div className="cr-form-group">
                  <label className="cr-form-label">Your Phone Number for Callback</label>
                  <input
                    type="tel"
                    required
                    className="cr-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <button type="submit" className="expert-submit-btn" style={{ marginTop: "12px", width: "100%" }}>
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
