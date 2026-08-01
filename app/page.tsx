"use client";

// Mazuma India Homepage

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedSection from "../components/TrustedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
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

const legalRaastaServices = [
  {
    id: "service-company-registration",
    num: "01",
    tag: "Corporate Setup",
    title: "Company Registration",
    description: "Fast & hassle-free Private Limited, OPC, LLP, and Section 8 company incorporation with expert legal support.",
    icon: Building2,
    href: "/services/company-registration"
  },
  {
    id: "service-incometax",
    num: "02",
    tag: "Tax Compliance",
    title: "Income Tax",
    description: "Complete ITR filing, income tax planning, TDS compliance, and strategic tax saving guidance.",
    icon: ReceiptText,
    href: "/services/income-tax"
  },
  {
    id: "service-gst",
    num: "03",
    tag: "GST & Returns",
    title: "GST Services",
    description: "GST registration, monthly return filing, reconciliation, GST audit, and notice response support.",
    icon: ScanLine,
    href: "/#service-gst"
  },
  {
    id: "service-accounting",
    num: "04",
    tag: "Bookkeeping & Audit",
    title: "Accounting & Bookkeeping",
    description: "End-to-end bookkeeping, annual return filing, financial statement preparation, and statutory audit support.",
    icon: Calculator,
    href: "/#service-accounting"
  },
  {
    id: "service-trademark",
    num: "05",
    tag: "IP & Licensing",
    title: "Trademark & Registrations",
    description: "Trademark search & registration, ISO certification, IEC code, and FSSAI food business licensing.",
    icon: ShieldCheck,
    href: "/#service-trademark"
  },
  {
    id: "service-ngo-registration",
    num: "06",
    tag: "Non-Profit & CSR",
    title: "NGO Services",
    description: "Trust, Society, Section 8 registration, 12A/80G tax exemption certificates, and FCRA compliance.",
    icon: Users,
    href: "/#service-ngo-registration"
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
                Mazuma is a team of experienced tax, compliance and business advisory specialists, delivering clear guidance and dependable financial solutions.
              </p>

              <div className="hero-cta-group">
                <button className="button button-primary hero-btn-main" onClick={() => consultation("hero")}>
                  Book Free Consultation <span>→</span>
                </button>
                <a className="button button-outline hero-btn-sub" href="#services">
                  Explore Services <span>→</span>
                </a>
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

            {/* Right Visual Image Card */}
            <div className="hero-right-visual">
              <div className="hero-main-card">
                <Image
                  src="/mazuma-hero-right-card.jpg"
                  alt="Mazuma India team professionals at work in Noida office"
                  className="hero-main-img"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedSection />

      {/* ── Services Section (Below Hero & TrustedSection, Above About Us) ── */}
      <section id="services" className="legalraasta-services-section">
        <div className="services-container section-shell">
          <div className="services-header-center">
            <p className="services-eyebrow-brand">OUR SERVICES</p>
            <h2 className="services-title-navy">Professional Registration &amp; Compliance Services</h2>
            <p className="services-subtitle">Expert guidance across company formation, taxation, compliance &amp; licensing — all under one roof.</p>
          </div>

          <div className="legalraasta-grid">
            {legalRaastaServices.map((service) => {
              const IconComponent = service.icon;
              const isCompanyReg = service.title === "Company Registration";
              const isIncomeTax = service.title === "Income Tax";
              const getServiceHref = () => {
                if (isCompanyReg) return "/services/company-registration";
                if (isIncomeTax) return "/services/income-tax";
                return "#contact-us";
              };

              return (
                <article key={service.title} id={service.id} className="lr-service-card">
                  <div className="lr-card-top">
                    <div className="lr-icon-box">
                      <IconComponent size={22} className="lr-icon-svg" />
                    </div>
                  </div>
                  <h3 className="lr-card-title">{service.title}</h3>
                  <p className="lr-card-desc">{service.description}</p>
                  {isCompanyReg || isIncomeTax ? (
                    <Link
                      href={getServiceHref()}
                      className="lr-card-arrow-btn"
                      aria-label={`Read more about ${service.title}`}
                    >
                      <span className="lr-card-arrow-text">Read More</span>
                      <ArrowRight size={15} className="lr-card-arrow-icon" />
                    </Link>
                  ) : (
                    <a
                      href="#contact-us"
                      className="lr-card-arrow-btn"
                      onClick={(e) => handleNavClick(e, "contact-us")}
                      aria-label={`Read more about ${service.title}`}
                    >
                      <span className="lr-card-arrow-text">Read More</span>
                      <ArrowRight size={15} className="lr-card-arrow-icon" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>

          <div className="services-explore-row">
            <a
              href="#contact-us"
              className="services-explore-btn"
              onClick={(e) => handleNavClick(e, "contact-us")}
            >
              <span>Explore More Services</span>
              <div className="services-explore-btn-icon">
                <ArrowRight size={16} />
              </div>
            </a>
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
              India&apos;s Trusted Tax &amp;<br />
              Business Compliance Partner
            </h2>

            <div className="about-description-text">
              <p>
                Mazuma India is a trusted taxation and business compliance consultancy helping Startups, MSMEs, Companies, Professionals and NGOs manage registrations, taxation and regulatory compliance with confidence.
              </p>
              <p>
                With years of industry expertise, we simplify complex business processes through transparent guidance, timely execution and dedicated professional support.
              </p>
              <p>
                Our mission is to become the most trusted compliance partner for businesses across India by delivering reliable, efficient and client-focused solutions.
              </p>
            </div>

            <div className="about-cta-group">
              <button
                className="about-btn-primary"
                onClick={() => consultation("about-section")}
              >
                <span>Book Free Consultation</span>
              </button>

              <a className="about-btn-secondary" href="#services">
                <span>Learn More</span>
                <span className="btn-arrow">→</span>
              </a>
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



      <section className="section process-section section-shell"><div className="section-heading"><p className="eyebrow">Our process</p><h2>Simple, structured and supportive.</h2></div><div className="process-grid">{[["01", "Consultation", "Understand your goals and requirements."], ["02", "Documentation", "Quick, guided collection of the right paperwork."], ["03", "Processing", "Expert review, filings and clear status updates."], ["04", "Compliance support", "Ongoing guidance to keep you confidently compliant."]].map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      {/* 1. Client Testimonials */}
      <TestimonialsSection />

      {/* 2. Latest Articles */}
      <ArticlesSection />

      {/* 3. Need Expert Advice CTA */}
      <CTASection />

      {/* 4. FAQ + Get In Touch */}
      <FaqContactSection />

      <Footer />

      <div className="floating-actions">
        <a
          className="whatsapp-float-btn"
          href="https://wa.me/919936351555"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg className="wa-icon" viewBox="0 0 32 32" width="32" height="32" fill="none">
            <path
              d="M16 2C8.268 2 2 8.268 2 16c0 2.66.744 5.15 2.036 7.28L2 30l6.892-1.99C11.01 29.31 13.432 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.44c-2.28 0-4.408-.62-6.242-1.7l-.448-.262-4.108 1.185 1.203-3.992-.288-.458C5.008 20.354 4.36 18.25 4.36 16 4.36 9.582 9.582 4.36 16 4.36S27.64 9.582 27.64 16 22.418 27.44 16 27.44zm7.256-8.775c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.896.199-.265.398-1.028 1.295-1.26 1.56-.232.265-.464.298-.862.099-.398-.199-1.68-.619-3.201-1.974-1.183-1.055-1.983-2.358-2.215-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.099-.199-.896-2.155-1.228-2.951-.323-.775-.651-.67-.896-.682-.232-.012-.497-.012-.763-.012-.265 0-.696.099-1.061.497-.365.398-1.393 1.36-1.393 3.316 0 1.956 1.426 3.846 1.625 4.111.199.265 2.805 4.283 6.796 6.006.949.409 1.69.654 2.268.838.953.303 1.821.26 2.507.158.765-.114 2.355-.962 2.686-1.89.332-.928.332-1.724.232-1.89-.099-.166-.365-.265-.763-.464z"
              fill="#FFFFFF"
            />
          </svg>
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Mazuma India", email: "compliance@mazumaindia.com", telephone: "+919936351555", address: { "@type": "PostalAddress", streetAddress: "A-9, Sector 4", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201301", addressCountry: "IN" } }) }} />
    </main>
  );
}
