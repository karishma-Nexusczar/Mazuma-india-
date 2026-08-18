"use client";

// Mazuma India Homepage

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedSection from "../components/TrustedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import CTASection from "@/components/home/CTASection";
import FaqContactSection from "@/components/home/FaqContactSection";
import {
  ReceiptText,
  Calculator,
  Building2,
  BadgeIndianRupee,
  ShieldCheck,
  Users,
  BadgeCheck,
  Factory,
  ScanLine,
  ClipboardCheck,
  Handshake,
  FileCheck,
  Landmark,
  Stamp,
  FileBadge,
  Scale,
  BriefcaseBusiness,
  LockKeyhole,
  Clock3,
  Award,
  FileText,
  Star,
  Headset,
  IndianRupee,
  UserCheck,
  FileCheck2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from "lucide-react";

const homeProfessionalServices = [
  {
    id: "service-company-registration",
    title: "Company Registration",
    description: "Private Limited, LLP, OPC, Section 8 Company, ROC compliance, DIN & DSC services.",
    icon: Building2,
    imageIcon: "/images/service-icons/company-registration.png",
    href: "/services/company-registration"
  },
  {
    id: "service-gst",
    title: "GST Registration & Compliance",
    description: "GST registration, return filing, GST audit, refunds, notices and compliance.",
    icon: ReceiptText,
    imageIcon: "/images/service-icons/gst-registration.png",
    href: "/services/gst-services"
  },
  {
    id: "service-incometax",
    title: "Income Tax Return (ITR) Filing",
    description: "ITR filing, TDS returns, tax planning and income tax compliance.",
    icon: FileText,
    imageIcon: "/images/service-icons/income-tax.png",
    href: "/services/income-tax"
  },
  {
    id: "service-accounting",
    title: "ACCOUNTING & BOOKKEEPING",
    description: "Bookkeeping, payroll, financial reporting and audit support.",
    icon: Calculator,
    imageIcon: "/images/service-icons/accounting.png",
    href: "/services/accounting-bookkeeping"
  },
  {
    id: "service-trademark",
    title: "Trademark & Business Registrations",
    description: "Trademark, MSME, FSSAI, Startup India, IEC and ISO.",
    icon: BadgeCheck,
    imageIcon: "/images/service-icons/trademark.png",
    href: "/services/business-registrations"
  },
  {
    id: "service-ngo-registration",
    title: "NGO Services",
    description: "Trust, Society, Section 8, 12A, 80G and FCRA registration.",
    icon: Users,
    imageIcon: "/images/service-icons/ngo.png",
    href: "/services/ngo-services"
  },
  {
    id: "service-roc-compliance",
    title: "ROC & Corporate Compliance",
    description: "Annual filings, director change, share transfer, MCA e-filing.",
    icon: ShieldCheck,
    imageIcon: "/images/service-icons/compliance.png",
    href: "/services/company-registration"
  },
  {
    id: "service-tds-filings",
    title: "TDS & Statutory Tax Filings",
    description: "Quarterly TDS return filing, Form 16/16A generation & advisory.",
    icon: FileText,
    imageIcon: "/images/service-icons/income-tax.png",
    href: "/services/income-tax/all-services"
  },
  {
    id: "service-fssai-iec",
    title: "FSSAI & Import Export Code (IEC)",
    description: "Food license, IEC registration, MSME Udyam & ISO certification.",
    icon: BadgeCheck,
    imageIcon: "/images/service-icons/trademark.png",
    href: "/services/gst-services/all-services"
  }
];

const services = [
  {
    image: "/services-companies.png",
    title: "For Companies",
    items: ["Private Limited Company", "LLP Incorporation", "ROC Annual Compliances", "Accounting & Bookkeeping", "Tax Compliance Management"]
  },
  {
    image: "/services-ngo.png",
    title: "For NGOs",
    items: ["Trust & Society Registration", "Section 8 Company", "CSR & Funding", "FCRA Registration", "Annual Filing"]
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    title: "Income Tax",
    items: ["ITR Filing", "Capital Gains", "Tax Planning", "Updated Return", "AIS & High Value Transactions"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    title: "GST",
    items: ["GST Registration", "Returns & Reconciliation", "GST Audit", "Input Tax Credit", "Notice & Refund Support"]
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    title: "Other Registrations",
    items: ["Trademark & ISO", "FSSAI & IEC", "MSME / Startup India", "Insurance & Loans", "Import Export Code"]
  }
];

const industries = [
  ["⌁", "Startup"], ["⚙", "Manufacturing"], ["✚", "Healthcare"], ["⌘", "IT Companies"], ["⌑", "Education"], ["⌂", "Real Estate"], ["▣", "Retail"], ["♡", "NGO"], ["↗", "Import / Export"]
];

const testimonials = [
  { quote: "Mazuma has been a great partner for our business. Their team is proactive, professional and always ready to help.", name: "Rahul Mehta", role: "CEO, Mehta Industries", initials: "RM" },
  { quote: "The process was transparent from day one. We got practical answers and our company registration was handled seamlessly.", name: "Aditi Sharma", role: "Founder, Amaira Foods", initials: "AS" },
  { quote: "Their GST guidance gave us the clarity we needed. It feels like having a reliable finance team on call.", name: "Rohan Kapoor", role: "Director, Northstar Retail", initials: "RK" }
];

const posts = [
  { category: "Taxation", title: "How to Save Tax Legally in FY 2025–26", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80" },
  { category: "GST", title: "GST Return Filing: A Complete Guide", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80" },
  { category: "Business", title: "Company Registration Checklist for Startups", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" }
];

type EnquiryFormProps = { source: string; compact?: boolean; close?: () => void };

function EnquiryForm({ source, compact = false, close }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: form.get("consent") === "on", source })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus("success");
      setMessage(data.message);
      event.currentTarget.reset();
      window.setTimeout(() => close?.(), 1800);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your enquiry.");
    }
  }

  return (
    <form className={`enquiry-form ${compact ? "compact-form" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label>Full name<input name="name" placeholder="Your name" required /></label>
        <label>Mobile number<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label>
      </div>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
      <label>Company name<input name="company" placeholder="Your company name" /></label>
      <label>Service required<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Company Registration</option><option>Income Tax / GST / TDS</option><option>Accounting / Return / Tax Filing</option><option>Trademark, ISO, IEC, FSSAI</option><option>Firm / MSME / LLP / Startup India</option><option>NGO Registration Services</option></select></label>
      <label>How can we help?<textarea name="message" rows={compact ? 3 : 4} placeholder="Tell us a little about your requirement" /></label>
      <label className="consent"><input name="consent" type="checkbox" required /> <span>I agree to receive communication from Taxtation Mazuma India.</span></label>
      {message && <p className={`form-status ${status}`}>{message}</p>}
      <button className="button button-primary form-submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry..." : "Submit enquiry"} <span>→</span></button>
    </form>
  );
}

const serviceCategories = [
  "Company Registration",
  "Income Tax / GST / TDS",
  "Accounting / Return / Tax Filing",
  "Trademark, ISO, IEC, FSSAI",
  "Firm / MSME / LLP / Startup India",
  "NGO Registration Services"
];

const newServicesList = [
  {
    id: "service-incometax",
    title: "Income Tax",
    description: "ITR Filing, Tax Planning, TDS & More",
    icon: FileText
  },
  {
    id: "service-gst",
    title: "GST Services",
    description: "GST Registration, Returns, GST Audit",
    icon: ReceiptText
  },
  {
    id: "service-company",
    title: "Company Registration",
    description: "Private Limited, LLP, OPC, Section 8",
    icon: Building2
  },
  {
    id: "service-accounting",
    title: "Accounting",
    description: "Bookkeeping, Payroll, MIS & Reporting",
    icon: Calculator
  },
  {
    id: "service-trademark",
    title: "Trademark",
    description: "Trademark Search, Filing & Objections",
    icon: Stamp
  },
  {
    id: "service-ngo",
    title: "NGO Services",
    description: "Trust, Society, Section 8 Registration",
    icon: Handshake
  },
  {
    id: "service-msme",
    title: "MSME Services",
    description: "Udyam Registration, Benefits & Loans",
    icon: BriefcaseBusiness
  },
  {
    id: "service-advisory",
    title: "Business Advisory",
    description: "Financial Planning, Funding & Compliance",
    icon: Landmark
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveReview((current) => (current + 1) % testimonials.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setServicesOpen(false);
    setResourcesOpen(false);
    setMenuOpen(false);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerWrapper = document.querySelector(".sticky-header-wrapper");
      const headerHeight = headerWrapper ? headerWrapper.getBoundingClientRect().height : 100;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerHeight + 10);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.location.hash = targetId;
    }
  };

  const consultation = (_source: string) => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      const headerWrapper = document.querySelector(".sticky-header-wrapper");
      const headerHeight = headerWrapper ? headerWrapper.getBoundingClientRect().height : 100;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerHeight + 10);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };
  const review = testimonials[activeReview];

  return (
    <main>
      <Header />

      <section id="home" className="legacy-hero-section">
        <div className="section-shell">
          <div className="hero-top-row">
            {/* Left Content */}
            <div className="hero-left-content">
              <div className="hero-eyebrow-line">
                <span className="eyebrow-dash">—</span>
                <span>YOUR GROWTH, OUR EXPERTISE</span>
              </div>

              <h1 className="hero-title">
                Smart Solutions For<br />
                Taxes, Compliance &amp;<br />
                <span className="highlight-orange">Business Growth</span>
              </h1>

              <p className="hero-description">
                Mazuma Professional Services Private Limited (Mazuma India) helps startups, SMEs, companies, professionals, and individuals with taxation, accounting, GST, compliance, business registration, and financial advisory services. We simplify complex regulations so you can focus on growing your business.
              </p>

              <div className="hero-cta-group">
                <button className="button button-primary hero-btn-main" onClick={() => consultation("hero")}>
                  Book Free Consultation <span>→</span>
                </button>
                <a className="button button-outline hero-btn-sub" href="#services">
                  Explore Services <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="hero-right-visual">
              <div className="hero-main-card">
                <Image
                  src="/mazuma-directors.jpg"
                  alt="Mazuma India founders and directors sitting at their office desk under the Mazuma Group company board"
                  className="hero-main-img"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="hero-compact-stats-row">
            <div className="compact-stat-item">
              <strong>5000+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="compact-stat-divider"></div>
            <div className="compact-stat-item">
              <strong>1,00,000+</strong>
              <span>Tax Filings</span>
            </div>
            <div className="compact-stat-divider"></div>
            <div className="compact-stat-item">
              <strong>3000+</strong>
              <span>Businesses</span>
            </div>
            <div className="compact-stat-divider"></div>
            <div className="compact-stat-item">
              <strong>4.9/5</strong>
              <span>Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      <TrustedSection />

      {/* ── Homepage Our Professional Services Section (3x2 Grid Default) ── */}
      <section id="services" className="home-services-section">
        <div className="section-shell">
          <div className="home-services-header">
            <span className="home-services-eyebrow">OUR SERVICES</span>
            <h2 className="home-services-title">Our Professional Services</h2>
            <p className="home-services-subtitle">
              Complete business registration, taxation, accounting, compliance, and advisory services under one roof.
            </p>
            <div className="home-services-title-divider"></div>
          </div>

          {/* 3x2 Grid Default / Expanded All Cards Grid */}
          <div className="home-services-grid">
            {(showAllServices ? homeProfessionalServices : homeProfessionalServices.slice(0, 6)).map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="home-service-card"
                >
                  <div className="home-card-top-bar"></div>
                  <div className="home-card-icon-box">
                    {service.imageIcon ? (
                      <img
                        src={service.imageIcon}
                        alt={service.title}
                        className="home-card-custom-icon"
                      />
                    ) : (
                      <IconComponent size={24} />
                    )}
                  </div>
                  <h3 className="home-card-title">{service.title}</h3>
                  <p className="home-card-desc">{service.description}</p>
                  <span className="home-card-btn">
                    <span>Explore Services</span>
                    <ArrowRight size={14} className="home-card-btn-arrow" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* View All Services / Show Less Toggle Button */}
          <div className="home-services-all-cta">
            <button
              className="home-view-all-services-btn"
              onClick={() => setShowAllServices(!showAllServices)}
            >
              <span>{showAllServices ? "Show Less Services" : "View All Services"}</span>
              <ArrowRight
                size={16}
                style={{
                  transform: showAllServices ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease"
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── Premium Modern About Section ── */}
      <section id="about-us" className="premium-about-section">
        {/* Background Decorations */}
        <div className="about-bg-blur-orange"></div>
        <div className="about-bg-blur-blue"></div>
        <div className="about-bg-dots-top-left"></div>
        <div className="about-bg-dots-bottom-right"></div>

        <div className="premium-about-shell">
          {/* Left Content Column (55%) */}
          <div className="about-left-content">
            <div className="about-eyebrow-row">
              <span className="about-label-text">ABOUT MAZUMA INDIA</span>
              <span className="about-label-line"></span>
            </div>

            <h2 className="about-main-title">
              India&apos;s Trusted Tax &amp; Business Compliance Partner
            </h2>

            <div className="about-description-text">
              <p>
                Mazuma Professional Services Private Limited, established on 07 October 2021, operates under the brand name Mazuma India and provides professional taxation, accounting, compliance, and business advisory services.
              </p>
              <p>
                We assist startups, SMEs, companies, professionals, and individuals with Income Tax, GST, ROC compliance, accounting, payroll, TDS, business registrations, financial reporting, and regulatory compliance.
              </p>
              <p>
                With a client-first approach and technology-driven processes, we deliver reliable, transparent, and practical solutions that help businesses remain compliant while achieving sustainable growth.
              </p>
            </div>

            <div className="about-cta-group">
              <button
                className="about-btn-primary"
                onClick={() => consultation("about-section")}
              >
                <span>Book Free Consultation</span>
              </button>

              <Link className="about-btn-secondary" href="/about-us">
                <span>Learn More</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Right Large Image Column with Custom Organic Blob Shape (45%) */}
          <div className="about-right-visual">
            <div className="about-blob-container">
              <img
                src="/about-workspace-desk.png"
                alt="Modern corporate desk workspace with financial documents, laptop and calculator"
                className="about-blob-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Premium "Why Choose Us" Section (Directly Below About Us) ── */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="why-choose-container section-shell">
          {/* Header */}
          <div className="why-choose-header">
            <div className="why-choose-eyebrow-row">
              <span className="why-choose-label-text">WHY CHOOSE MAZUMA INDIA</span>
              <span className="why-choose-label-line"></span>
            </div>
            <h2 className="why-choose-main-heading">Why Businesses Trust Mazuma India</h2>
            <p className="why-choose-subtitle">
              Helping startups, MSMEs and enterprises simplify taxation, company registration, accounting and compliance with expert guidance.
            </p>
          </div>

          {/* 3-Column Desktop Layout: 2 Features | Image | 2 Features */}
          <div className="why-choose-grid">
            {/* Left Column (2 Features) */}
            <div className="why-choose-col why-choose-col-left">
              <article className="why-choose-card">
                <div className="why-choose-icon-box">
                  <UserCheck size={20} className="why-choose-icon-svg" />
                </div>
                <h3 className="why-choose-card-title">Client-Focused Solutions</h3>
                <p className="why-choose-card-desc">
                  Tailored tax, registration and advisory solutions customized specifically to your unique business goals.
                </p>
              </article>

              <article className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Award size={20} className="why-choose-icon-svg" />
                </div>
                <h3 className="why-choose-card-title">Experienced Professionals</h3>
                <p className="why-choose-card-desc">
                  Seasoned CAs, tax consultants, and corporate lawyers delivering accurate, dependable guidance.
                </p>
              </article>
            </div>

            {/* Center Column (Mazuma Office Reception Image) */}
            <div className="why-choose-col why-choose-col-center">
              <div className="why-choose-img-wrapper">
                <img
                  src="/why-choose-office.jpg"
                  alt="Mazuma India luxury reception desk with 3D company logo wall"
                  className="why-choose-img"
                />
              </div>
            </div>

            {/* Right Column (2 Features) */}
            <div className="why-choose-col why-choose-col-right">
              <article className="why-choose-card">
                <div className="why-choose-icon-box">
                  <Clock3 size={20} className="why-choose-icon-svg" />
                </div>
                <h3 className="why-choose-card-title">Fast &amp; Hassle-Free Process</h3>
                <p className="why-choose-card-desc">
                  Quick documentation, seamless online processing, and timely filings with zero stress.
                </p>
              </article>

              <article className="why-choose-card">
                <div className="why-choose-icon-box">
                  <LockKeyhole size={20} className="why-choose-icon-svg" />
                </div>
                <h3 className="why-choose-card-title">Trusted &amp; Transparent</h3>
                <p className="why-choose-card-desc">
                  Clear pricing, 100% data confidentiality, and complete clarity with no hidden surprises.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>



      {/* Our Process Section */}
      <ProcessSection />

      {/* 1. Client Testimonials */}
      <TestimonialsSection />

      {/* 2. Latest Articles */}
      <ArticlesSection />

      {/* 3. Need Expert Advice CTA */}
      <CTASection />

      {/* 4. FAQ + Get In Touch */}
      <FaqContactSection />

      <Footer />


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Mazuma India", email: "compliance@mazumaindia.com", telephone: "+919936351555", address: { "@type": "PostalAddress", streetAddress: "A-9, Sector 4", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201301", addressCountry: "IN" } }) }} />
    </main>
  );
}
