"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../gst-services.css";
import {
  FileCheck2,
  FileText,
  Receipt,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  Coins,
  Briefcase,
  Calculator,
  Scale,
  RefreshCw,
  TrendingUp,
  FileSpreadsheet,
  Truck,
  Building2,
  Phone,
  FileSearch,
  X
} from "lucide-react";

export default function AllGSTServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("GST Registration");
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
          service: selectedService || "GST Service",
          city: formData.city,
          source: "All GST Services Page"
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 3500);
    } catch (err) {
      console.error("All GST Services API error:", err);
    }
  };

  const allGstServicesList = [
    {
      id: "gst-registration",
      title: "GST Registration",
      category: "Registration & Set Up",
      desc: "Business registration under GST with complete documentation, application filing, verification, and GSTIN certificate issuance.",
      icon: FileCheck2,
      benefits: ["100% legal business identity", "Interstate trade eligibility", "Seamless GSTIN portal setup"],
      formType: "Form GST REG-01"
    },
    {
      id: "gst-amendment",
      title: "GST Amendment",
      category: "Registration & Set Up",
      desc: "Update core and non-core details including business name, principal address, additional places of business, partners, and bank accounts.",
      icon: RefreshCw,
      benefits: ["Core & non-core modification", "Fast portal approval", "Updated GST certificate"],
      formType: "Form GST REG-14"
    },
    {
      id: "gst-cancellation",
      title: "GST Cancellation",
      category: "Registration & Set Up",
      desc: "Complete support for voluntary GST surrender, business closure cancellation, and response to departmental cancellation notices.",
      icon: X,
      benefits: ["Zero penalty surrender", "Final return filing (GSTR-10)", "No future liability"],
      formType: "Form GST REG-16"
    },
    {
      id: "gst-return-filing",
      title: "GST Return Filing",
      category: "Returns & Filing",
      desc: "Comprehensive monthly, quarterly, annual, and NIL return filing services for regular and composition taxpayers.",
      icon: FileText,
      benefits: ["Penalty-free filing", "Automated due date alerts", "Expert CA verification"],
      formType: "GSTR-1 / 3B / QRMP"
    },
    {
      id: "gstr1-filing",
      title: "GSTR-1 Filing",
      category: "Returns & Filing",
      desc: "Accurate reporting of outward B2B and B2C sales supplies, debit/credit notes, and invoice details on the GST portal.",
      icon: FileSpreadsheet,
      benefits: ["B2B & B2C invoice reporting", "E-Invoicing auto-population", "HSN code compliance"],
      formType: "Monthly / Quarterly GSTR-1"
    },
    {
      id: "gstr3b-filing",
      title: "GSTR-3B Filing",
      category: "Returns & Filing",
      desc: "Monthly summary return filing for reporting tax liabilities, claiming Input Tax Credit, and completing GST tax payments.",
      icon: Receipt,
      benefits: ["ITC offset optimization", "Tax payment voucher creation", "Interest-free timely filing"],
      formType: "Monthly GSTR-3B"
    },
    {
      id: "gstr9-annual",
      title: "Annual GST Return (GSTR-9 & 9C)",
      category: "Returns & Filing",
      desc: "Preparation and filing of annual GST returns along with turnover reconciliation and self-certified reconciliation statement (GSTR-9C).",
      icon: Calculator,
      benefits: ["Yearly turnover audit review", "Sales & ITC reconciliation", "Departmental penalty protection"],
      formType: "GSTR-9 & GSTR-9C"
    },
    {
      id: "gst-audit",
      title: "GST Audit & Verification",
      category: "Audit & Compliance",
      desc: "Professional GST audit support, financial statement reconciliation, departmental audit representation, and compliance verification.",
      icon: ShieldCheck,
      benefits: ["Turnover & ITC audit", "ASMT-10 discrepancy response", "Departmental audit defense"],
      formType: "Section 65 / 66 Audit"
    },
    {
      id: "gst-refund",
      title: "GST Refund Assistance",
      category: "Refunds & Credit",
      desc: "Fast processing of export refunds (with or without payment of tax), inverted duty structure refunds, and excess cash ledger refunds.",
      icon: Coins,
      benefits: ["Export refund e-filing", "Inverted duty ITC refund", "RFD-01 portal processing"],
      formType: "Form GST RFD-01"
    },
    {
      id: "itc-reconciliation",
      title: "Input Tax Credit (ITC) Management",
      category: "Refunds & Credit",
      desc: "Claim eligible ITC while maintaining 2B/2A invoice matching, vendor follow-ups, and complete GST compliance.",
      icon: TrendingUp,
      benefits: ["2B vs Books reconciliation", "Vendor non-filing alert", "Maximum tax credit optimization"],
      formType: "GSTR-2B Matching Portal"
    },
    {
      id: "gst-notices",
      title: "GST Notices & Show Cause Defense",
      category: "Audit & Compliance",
      desc: "Professional assistance for DRC-01, SCN, ASMT-10 mismatch notices, tax demand appeals, and departmental legal representation.",
      icon: Scale,
      benefits: ["Legal reply drafting", "Penalty waiver request", "Department representation"],
      formType: "Form GST DRC-06 / Reply"
    },
    {
      id: "eway-bill",
      title: "E-Way Bill Management",
      category: "Logistics & Accounting",
      desc: "Instant generation, extension, cancellation, and compliance management of E-Way Bills for goods transport above ₹50,000.",
      icon: Truck,
      benefits: ["Instant portal generation", "Consolidated E-Way bill", "Vehicle update assistance"],
      formType: "EWB-01 Portal"
    },
    {
      id: "gst-accounting",
      title: "GST Accounting & Bookkeeping",
      category: "Logistics & Accounting",
      desc: "Maintenance of GST-compliant accounts, tax ledgers, electronic credit ledger matching, and invoicing support.",
      icon: Building2,
      benefits: ["GST-ready Tally/Zoho setup", "Electronic ledger matching", "Invoice format audit"],
      formType: "Books u/s 35 GST Act"
    },
    {
      id: "gst-health-check",
      title: "GST Compliance Health Check",
      category: "Audit & Compliance",
      desc: "Comprehensive diagnostic review of past GST returns, ITC claims, tax rates, and notice vulnerabilities to insulate your business.",
      icon: FileSearch,
      benefits: ["Historical risk assessment", "Rate classification review", "Zero notice guarantee roadmap"],
      formType: "Custom Audit Health Report"
    }
  ];

  return (
    <div className="gst-page-wrapper">
      <Header />

      {/* Breadcrumbs */}
      <div className="itr-breadcrumb-bar">
        <div className="itr-breadcrumb-inner">
          <Link href="/" className="itr-breadcrumb-link">Home</Link>
          <ChevronRight size={13} />
          <Link href="/services/gst-services" className="itr-breadcrumb-link">GST Services</Link>
          <ChevronRight size={13} />
          <span className="itr-breadcrumb-current">All GST Services</span>
        </div>
      </div>

      <main>
        {/* Header Hero Banner */}
        <section className="all-tax-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span className="all-tax-badge">
              Complete GST Directory
            </span>
            <h1 className="all-tax-title">
              All Goods &amp; Services Tax (GST) Solutions
            </h1>
            <p className="all-tax-desc">
              Explore our full directory of GST registration, monthly GSTR return filing, ITC 2B reconciliation, export refunds, audit defense, and notice resolution handled by senior Chartered Accountants.
            </p>
          </div>
        </section>

        {/* All Services Grid Section */}
        <section className="all-tax-grid-section">
          <div style={{ maxWidth: 1340, margin: "0 auto" }}>
            <div className="all-tax-grid">
              {allGstServicesList.map((svc) => {
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
        <section className="gst-cta-section">
          <div className="gst-section-shell">
            <div className="gst-cta-card">
              <div className="gst-cta-left-content">
                <h3 className="gst-cta-title">Need Customized GST Compliance Advisory?</h3>
                <p className="gst-cta-desc">
                  Speak directly with our senior CAs and GST attorneys for personalized consultation regarding DRC notices, high-value transactions, or ITC refund appeals.
                </p>
              </div>

              <div className="global-cta-contact-section">
                <button
                  className="global-consultation-btn"
                  onClick={() => {
                    setSelectedService("General GST Advisory");
                    setIsModalOpen(true);
                  }}
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
                Fill in your details below and a Senior GST Advisor will contact you shortly.
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
        </div>
      )}

      <Footer />
    </div>
  );
}
