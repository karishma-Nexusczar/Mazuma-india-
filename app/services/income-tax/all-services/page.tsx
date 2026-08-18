"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../income-tax.css";
import {
  UserCheck,
  ChevronRight,
  FileText,
  Briefcase,
  Calculator,
  TrendingUp,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  X,
  Laptop,
  Calendar,
  PieChart,
  Link2,
  FileCheck
} from "lucide-react";

export default function AllIncomeTaxServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Individual ITR Filing");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: selectedService || "Income Tax Service",
          city: formData.city,
          source: "All Income Tax Services Page"
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 3500);
    } catch (err) {
      console.error("All Tax Services API error:", err);
    }
  };

  const allTaxServices = [
    {
      id: "individual-itr",
      title: "Individual ITR Filing",
      category: "Individual & Salaried",
      desc: "Accurate income tax return filing for salaried employees, pensioners, house property owners, interest income, capital gains and other individual taxpayers.",
      icon: FileText,
      benefits: ["Max tax refund calculation", "Form 16 & 26AS matching", "Expert CA review"],
      formType: "ITR-1 (Sahaj) / ITR-2"
    },
    {
      id: "business-itr",
      title: "Business ITR Filing",
      category: "Corporate & Firms",
      desc: "Complete income tax return filing for proprietorships, partnership firms, LLPs, private limited companies and other business entities.",
      icon: Briefcase,
      benefits: ["Presumptive tax optimization", "Audit report submission", "Balance sheet & P&L review"],
      formType: "ITR-3 / ITR-4 (Sugam) / ITR-5 / ITR-6"
    },
    {
      id: "salaried-itr",
      title: "Salaried Employee ITR",
      category: "Individual & Salaried",
      desc: "Professional tax filing with salary computation, deductions (80C, 80D, HRA, LTA), exemptions and refund assistance.",
      icon: UserCheck,
      benefits: ["Multiple Form 16 support", "HRA & LTA deduction optimization", "Fast refund processing"],
      formType: "ITR-1 / ITR-2"
    },
    {
      id: "freelancer-itr",
      title: "Professional & Freelancer ITR",
      category: "Professionals & Consultants",
      desc: "Specialized tax filing for consultants, doctors, architects, designers, software professionals and freelancers under Section 44ADA.",
      icon: Laptop,
      benefits: ["50% flat income presumption", "Expense deduction tracking", "Advance tax calculation"],
      formType: "ITR-4 (Sugam) / ITR-3"
    },
    {
      id: "tds-return",
      title: "TDS Return Filing",
      category: "Corporate Compliance",
      desc: "Preparation and filing of quarterly TDS returns, correction statements, Form 24Q, 26Q, 27Q and complete TDS compliance.",
      icon: FileCheck,
      benefits: ["Quarterly e-TDS filing", "Form 16/16A generation", "TDS default correction"],
      formType: "Form 24Q / 26Q / 27Q"
    },
    {
      id: "belated-itr",
      title: "Belated Return Filing",
      category: "Delayed & Revised",
      desc: "File delayed income tax returns under Section 139(4) with expert assistance while minimizing penalties wherever applicable.",
      icon: Calendar,
      benefits: ["Late filing relief", "Section 234F penalty optimization", "Loss carry-forward review"],
      formType: "Belated Return u/s 139(4)"
    },
    {
      id: "updated-itr",
      title: "Updated Return Filing (ITR-U)",
      category: "Delayed & Revised",
      desc: "Update previously filed returns under Section 139(8A) within 24 months to disclose omitted income or rectify tax calculations voluntarily.",
      icon: RotateCcw,
      benefits: ["Avoid tax notices", "Disclose undisclosed income", "Legal immunity support"],
      formType: "ITR-U u/s 139(8A)"
    },
    {
      id: "revised-itr",
      title: "Revised Return Filing",
      category: "Delayed & Revised",
      desc: "Correct mistakes, update information, add missed deductions, and revise previously filed returns under Section 139(5) before the legal deadline.",
      icon: RotateCcw,
      benefits: ["Rectify Form 16 errors", "Claim missed deductions", "Zero penalty modification"],
      formType: "Revised Return u/s 139(5)"
    },
    {
      id: "tax-planning",
      title: "Tax Planning & Computation",
      category: "Advisory & Planning",
      desc: "Comprehensive tax planning to legally reduce tax liability while maximizing deductions and exemptions under Old vs New Tax Regimes.",
      icon: Calculator,
      benefits: ["Old vs New Regime analysis", "80C, 80D, 80CCD investment advice", "Tax saving roadmap"],
      formType: "Custom Tax Computation Sheet"
    },
    {
      id: "capital-gains",
      title: "Capital Gains Tax Assistance",
      category: "Advisory & Planning",
      desc: "Expert guidance on property sales, equity shares, mutual funds, crypto assets, indexation benefits and exemption planning under Section 54.",
      icon: TrendingUp,
      benefits: ["STCG & LTCG computation", "Section 54/54F reinvestment advice", "Cost indexation calculation"],
      formType: "ITR-2 / ITR-3 Capital Gains"
    },
    {
      id: "ais-tis",
      title: "AIS / TIS Compliance & Audit",
      category: "Compliance & Rectification",
      desc: "Review Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) to ensure accurate income reporting and resolve discrepancies.",
      icon: PieChart,
      benefits: ["Identify high-value transactions", "Submit AIS feedback online", "Prevent tax mismatch notices"],
      formType: "AIS/TIS Feedback Portal"
    },
    {
      id: "pan-aadhaar",
      title: "Aadhaar–PAN Linking & Correction",
      category: "Compliance & Rectification",
      desc: "Quick Aadhaar-PAN linking support along with PAN correction, operative status activation, and compliance assistance.",
      icon: Link2,
      benefits: ["Inoperative PAN resolution", "Name/DOB mismatch correction", "Instant status verification"],
      formType: "Income Tax Portal Linking"
    },
    {
      id: "penalty-assistance",
      title: "Late Fee, Notice & Penalty Assistance",
      category: "Compliance & Rectification",
      desc: "Professional assistance for Section 142(1), 143(1), 139(9) defective return notices, interest calculations, and penalty waiver appeals.",
      icon: AlertTriangle,
      benefits: ["Notice reply drafting", "Defective return rectification", "Section 143(1) intimation response"],
      formType: "e-Proceedings Reply"
    }
  ];

  return (
    <div className="itr-page-wrapper">
      <Header />

      {/* Breadcrumbs */}
      <div className="itr-breadcrumb-bar">
        <div className="itr-breadcrumb-inner">
          <Link href="/" className="itr-breadcrumb-link">Home</Link>
          <ChevronRight size={13} />
          <Link href="/services/income-tax" className="itr-breadcrumb-link">Income Tax Return</Link>
          <ChevronRight size={13} />
          <span className="itr-breadcrumb-current">All Income Tax Services</span>
        </div>
      </div>

      <main>
        {/* Header Hero Banner */}
        <section className="all-tax-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span className="all-tax-badge">
              Complete Tax Directory
            </span>
            <h1 className="all-tax-title">
              All Income Tax Services &amp; Compliance Solutions
            </h1>
            <p className="all-tax-desc">
              Explore our full portfolio of Income Tax Return filing, TDS compliance, capital gains planning, updated returns, and notice resolution services handled by senior Chartered Accountants.
            </p>
          </div>
        </section>

        {/* All Services Grid Section */}
        <section className="all-tax-grid-section">
          <div style={{ maxWidth: 1340, margin: "0 auto" }}>
            <div className="all-tax-grid">
              {allTaxServices.map((svc) => {
                const IconC = svc.icon;
                return (
                  <div key={svc.id} className="all-tax-card">
                    <div>
                      <div className="all-tax-card-top">
                        <div className="all-tax-icon-box">
                          <IconC size={26} />
                        </div>
                        <span className="all-tax-cat-pill">
                          {svc.category}
                        </span>
                      </div>

                      <h3 className="all-tax-card-title">
                        {svc.title}
                      </h3>

                      <p className="all-tax-card-desc">
                        {svc.desc}
                      </p>

                      <div className="all-tax-benefits-box">
                        <span className="all-tax-benefits-label">
                          Key Benefits:
                        </span>
                        {svc.benefits.map((b, idx) => (
                          <div key={idx} className="all-tax-benefit-row">
                            <CheckCircle2 size={15} style={{ color: "#10B981", flexShrink: 0 }} />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="all-tax-form-text">
                        Applicable Form: <strong style={{ color: "#0F2D52" }}>{svc.formType}</strong>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedService(svc.title);
                          setIsModalOpen(true);
                        }}
                        className="all-tax-book-btn"
                      >
                        <span>Book Consultation</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="itr-cta-banner-section">
          <div className="itr-cta-banner-card">
            <div className="itr-cta-banner-left">
              <h3 className="itr-cta-banner-title">Need Customized Income Tax Advisory?</h3>
              <p className="itr-cta-banner-desc">
                Speak directly with our senior CAs and tax attorneys for personalized consultation regarding notices, high-value transactions, or corporate tax optimization.
              </p>
            </div>

            <div className="itr-cta-banner-right">
              <button
                className="itr-cta-btn-orange"
                onClick={() => {
                  setSelectedService("General Tax Advisory");
                  setIsModalOpen(true);
                }}
              >
                <span>Book Free Consultation</span>
              </button>
              <div className="itr-cta-phone-box">
                <span>or call us at</span>
                <a href="tel:+919936351555" className="itr-cta-phone-link">
                  <PhoneCall size={14} color="#0F2D52" />
                  +91 99363 51555 <br /> +91 99998 65586
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
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

            <div className="cr-modal-right" style={{ width: "100%", padding: "28px" }}>
              <h3 className="cr-modal-title">Book Consultation: {selectedService}</h3>
              <p className="cr-modal-desc">
                Fill in your details below and a Senior CA will contact you shortly.
              </p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "24px 12px" }}>
                  <CheckCircle2 size={36} style={{ color: "#16A34A", margin: "0 auto 10px auto" }} />
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0F2D52" }}>Consultation Requested!</h4>
                  <p style={{ color: "#64748B", fontSize: 13 }}>We have prepared your request for compliance@mazumaindia.com.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="cr-form-grid-2col">
                    <div className="cr-form-group">
                      <label className="cr-form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="cr-form-input"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-form-label">Email Address *</label>
                      <input
                        type="email"
                        className="cr-form-input"
                        required
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="cr-form-grid-2col">
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

                  <button type="submit" className="cr-modal-submit-btn">
                    Request Consultation <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div >
      )}

      <Footer />
    </div>
  );
}
