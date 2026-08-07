'use client';

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ConsultationModal from "@/components/ConsultationModal";
import InlineCtaForm from "@/components/InlineCtaForm";
import "./about-us.css";
import {
  Calendar,
  Users,
  FileText,
  Briefcase,
  Star,
  Target,
  Eye,
  ShieldCheck,
  Lock,
  Zap,
  Award,
  BookOpen,
  Check,
  MessageSquare,
  Settings,
  Headphones,
  Phone,
  ArrowRight,
  ChevronRight,
  Rocket,
  Building2,
  Scale,
  UserCheck,
  HeartHandshake,
  Factory,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Laptop,
  User
} from "lucide-react";

export default function AboutUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Mazuma India",
    "description":
      "Mazuma Professional Services Private Limited (Mazuma India) helps startups, SMEs, companies, professionals, and individuals with taxation, accounting, GST, compliance, business registration, and financial advisory services.",
    "publisher": {
      "@type": "Organization",
      "name": "Mazuma India",
      "url": "https://mazumaindia.com"
    }
  };

  return (
    <div className="au-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ── 1. HERO BANNER ── */}
      <section className="au-hero-section">
        <div className="au-shell">
          <nav className="au-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="au-breadcrumb-sep">&gt;</span>
            <span className="current">About Us</span>
          </nav>

          <div className="au-hero-content-wrapper">
            <div className="au-hero-left">
              <span className="au-eyebrow">ABOUT MAZUMA INDIA</span>
              <h1 className="au-hero-title">
                India&apos;s Trusted Tax &amp;<br />
                Business Compliance Partner
              </h1>

              <div className="au-hero-desc-group">
                <p className="au-hero-desc-p">
                  Mazuma Professional Services Private Limited, operating under the brand name <strong>Mazuma India</strong>, has been helping individuals, startups, SMEs, companies, and professionals simplify taxation, accounting, compliance, and business advisory since its incorporation.
                </p>

                <div className="au-inc-badge">
                  <div className="au-inc-icon"><Award size={15} /></div>
                  <span className="au-inc-label">Incorporated:</span>
                  <span className="au-inc-date">07 October 2021</span>
                </div>

                <p className="au-hero-desc-p">
                  Our experienced professionals deliver accurate, transparent, and practical solutions that enable businesses to remain compliant while focusing on long-term growth.
                </p>
              </div>

              <div className="au-hero-ctas">
                <button type="button" className="au-btn-orange" onClick={() => setIsModalOpen(true)}>
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <Link href="/contact-us" className="au-btn-outline">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMPANY AT A GLANCE (5 EQUAL CARDS) ── */}
      <section className="au-glance-section">
        <div className="au-shell">
          <div className="au-section-header">
            <h2 className="au-heading-center">COMPANY AT A GLANCE</h2>
            <div className="au-heading-underline"></div>
          </div>

          <div className="au-glance-grid">
            <div className="au-glance-card">
              <div className="au-glance-icon"><Calendar size={22} /></div>
              <div className="au-glance-num">2021</div>
              <div className="au-glance-label">Incorporated</div>
            </div>

            <div className="au-glance-card">
              <div className="au-glance-icon"><Users size={22} /></div>
              <div className="au-glance-num">5000<span>+</span></div>
              <div className="au-glance-label">Happy Clients</div>
            </div>

            <div className="au-glance-card">
              <div className="au-glance-icon"><FileText size={22} /></div>
              <div className="au-glance-num">100000<span>+</span></div>
              <div className="au-glance-label">Tax Filings</div>
            </div>

            <div className="au-glance-card">
              <div className="au-glance-icon"><Briefcase size={22} /></div>
              <div className="au-glance-num">3000<span>+</span></div>
              <div className="au-glance-label">Businesses Served</div>
            </div>

            <div className="au-glance-card">
              <div className="au-glance-icon"><Star size={22} /></div>
              <div className="au-glance-num">4.9<span>★</span></div>
              <div className="au-glance-label">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COMPANY INTRODUCTION & MISSION / VISION ── */}
      <CompanyIntroSection />

      {/* ── 4. OUR CORE VALUES ── */}
      <CoreValuesSection />

      {/* ── 5. WHY CHOOSE MAZUMA INDIA ── */}
      <section className="au-why-section">
        <div className="au-shell">
          <div className="au-why-grid">
            <div className="au-why-left">
              <span className="au-eyebrow">WHY CHOOSE MAZUMA INDIA</span>
              <h2 className="au-why-title">Why Businesses Choose Us</h2>

              <div className="au-why-checklist">
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>Experienced Professionals</span>
                </div>
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>End-to-End Services</span>
                </div>
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>Technology Driven Approach</span>
                </div>
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>Affordable Pricing</span>
                </div>
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>Dedicated Support</span>
                </div>
                <div className="au-why-item">
                  <div className="au-why-check-icon"><Check size={16} /></div>
                  <span>Timely &amp; Accurate Compliance</span>
                </div>
              </div>
            </div>

            <div className="au-why-right">
              <div className="au-why-img-box">
                <img
                  src="/why-about-page.jpg"
                  alt="Corporate financial consultants collaborating at office desk"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES WE SERVE ── */}
      <IndustriesSection />

      {/* ── 6. OUR JOURNEY (TIMELINE) ── */}
      <section className="au-timeline-section">
        <div className="au-shell">
          <div className="au-section-header">
            <h2 className="au-heading-center">OUR JOURNEY</h2>
            <div className="au-heading-underline"></div>
          </div>

          <div className="au-timeline-track">
            <div className="au-timeline-line"></div>

            <div className="au-timeline-node">
              <div className="au-timeline-circle">2021</div>
              <div className="au-timeline-card">
                <h3 className="au-timeline-year-title">Company Founded</h3>
                <p className="au-timeline-year-desc">07 October 2021</p>
              </div>
            </div>

            <div className="au-timeline-node">
              <div className="au-timeline-circle">2022</div>
              <div className="au-timeline-card">
                <h3 className="au-timeline-year-title">1000+ Clients</h3>
                <p className="au-timeline-year-desc">Strong start with trust and growth</p>
              </div>
            </div>

            <div className="au-timeline-node">
              <div className="au-timeline-circle">2023</div>
              <div className="au-timeline-card">
                <h3 className="au-timeline-year-title">Expanded GST &amp; Tax Services</h3>
                <p className="au-timeline-year-desc">Added more expertise and solutions</p>
              </div>
            </div>

            <div className="au-timeline-node">
              <div className="au-timeline-circle">2024</div>
              <div className="au-timeline-card">
                <h3 className="au-timeline-year-title">5000+ Clients</h3>
                <p className="au-timeline-year-desc">Achieved a major milestone with happy clients</p>
              </div>
            </div>

            <div className="au-timeline-node">
              <div className="au-timeline-circle">2025</div>
              <div className="au-timeline-card">
                <h3 className="au-timeline-year-title">Business Advisory Expansion</h3>
                <p className="au-timeline-year-desc">Helping businesses grow strategically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HOW WE WORK (PROCESS) ── */}
      <section className="au-process-section">
        <div className="au-shell">
          <div className="au-section-header">
            <h2 className="au-heading-center">HOW WE WORK</h2>
            <div className="au-heading-underline"></div>
          </div>

          <div className="au-process-grid">
            <div className="au-process-step">
              <div className="au-process-icon"><MessageSquare size={22} /></div>
              <h3 className="au-process-title">Consultation</h3>
              <p className="au-process-desc">Understand your business needs</p>
            </div>

            <div className="au-process-step">
              <div className="au-process-icon"><FileText size={22} /></div>
              <h3 className="au-process-title">Documentation</h3>
              <p className="au-process-desc">Collect and verify required documents</p>
            </div>

            <div className="au-process-step">
              <div className="au-process-icon"><Settings size={22} /></div>
              <h3 className="au-process-title">Processing</h3>
              <p className="au-process-desc">Expert review and processing</p>
            </div>

            <div className="au-process-step">
              <div className="au-process-icon"><ShieldCheck size={22} /></div>
              <h3 className="au-process-title">Compliance Support</h3>
              <p className="au-process-desc">Ongoing support to keep you compliant</p>
            </div>

            <div className="au-process-step">
              <div className="au-process-icon"><Headphones size={22} /></div>
              <h3 className="au-process-title">Continuous Support</h3>
              <p className="au-process-desc">We are with you at every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CALL TO ACTION (CTA WITH EMBEDDED FORM) ── */}
      <section className="au-cta-section" id="contact-us">
        <div className="au-shell">
          <div className="au-cta-card">
            <div className="au-cta-left">
              <h2 className="au-cta-title">Ready to Simplify Your Compliance?</h2>
              <p className="au-cta-subtitle">
                Partner with Mazuma India and focus on what you do best - we handle the rest.
              </p>

              <div className="au-cta-btns">
                <a
                  href="https://wa.me/919936351555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="au-btn-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Us</span>
                </a>

                <a href="tel:+919936351555" className="au-btn-call">
                  <Phone size={18} />
                  <span>Call Now +91 99363 51555</span>
                </a>
              </div>
            </div>

            <div className="au-cta-right">
              <InlineCtaForm />
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}
