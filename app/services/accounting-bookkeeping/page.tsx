"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./accounting-bookkeeping.css";
import {
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calculator,
  Users,
  Landmark,
  ReceiptText,
  FileText,
  PieChart,
  TrendingUp,
  Scale,
  UserCheck,
  ShieldCheck,
  Check,
  PhoneCall,
  Calendar,
  Lock,
  Headset,
  Award,
  DollarSign,
  FileCheck,
  BarChart3,
  X,
  FileSpreadsheet,
  Target
} from "lucide-react";

export default function AccountingBookkeepingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Accounting & Bookkeeping");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "Accounting & Bookkeeping"
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Accounting & Bookkeeping Request: ${formData.service} - ${formData.name || formData.email}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a consultation regarding ${formData.service}.\n\nDetails:\n- Full Name: ${formData.name || "Client"}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Service Requested: ${formData.service}\n- City / Location: ${formData.city}\n\nPlease contact me as soon as possible.\n\nThank you,\n${formData.name || "Client"}`
    );

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Accounting & Bookkeeping",
          city: formData.city,
          source: "Accounting & Bookkeeping Page"
        })
      });
    } catch (err) {
      console.error("Accounting API error:", err);
    }

    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;

    setIsModalOpen(false);
    setIsExpertModalOpen(false);
    setFormData({ name: "", email: "", phone: "", city: "", service: "Accounting & Bookkeeping" });
  };

  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setFormData(prev => ({ ...prev, service: serviceName }));
    setIsModalOpen(true);
  };

  const accountingServices = [
    {
      title: "Bookkeeping",
      desc: "Daily recording of financial transactions to keep your books accurate and up-to-date.",
      icon: BookOpen
    },
    {
      title: "Accounting Services",
      desc: "Full-cycle accounting including ledger maintenance, journal entries & compliance.",
      icon: Calculator
    },
    {
      title: "Payroll Processing",
      desc: "Accurate salary processing, tax deductions, payslips & statutory compliance.",
      icon: Users
    },
    {
      title: "Bank Reconciliation",
      desc: "Reconcile bank statements with books to ensure 100% financial accuracy.",
      icon: Landmark
    },
    {
      title: "Accounts Payable",
      desc: "Manage vendor bills, payments & outstanding liabilities efficiently.",
      icon: ReceiptText
    },
    {
      title: "Accounts Receivable",
      desc: "Track invoices, follow-ups & collections to improve business cash flow.",
      icon: FileText
    },
    {
      title: "Financial Statements",
      desc: "Prepare accurate financial statements as per accounting standards.",
      icon: PieChart
    },
    {
      title: "MIS Reports",
      desc: "Get customized MIS reports to monitor business performance & growth.",
      icon: TrendingUp
    },
    {
      title: "Balance Sheet & P&L",
      desc: "Detailed Balance Sheet and Profit & Loss statements for total clarity.",
      icon: Scale
    },
    {
      title: "Virtual CFO",
      desc: "Strategic financial guidance and data-driven decision support for businesses.",
      icon: UserCheck
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Document Collection",
      desc: "We collect your financial data, invoices, and bank statements securely.",
      icon: FileCheck
    },
    {
      num: "02",
      title: "Bookkeeping",
      desc: "Transactions are recorded accurately in cloud accounting software.",
      icon: BookOpen
    },
    {
      num: "03",
      title: "Reconciliation",
      desc: "Accounts and bank reconciliations are systematically performed.",
      icon: Landmark
    },
    {
      num: "04",
      title: "Financial Reporting",
      desc: "P&L, Balance Sheet, and customized MIS reports are generated.",
      icon: BarChart3
    },
    {
      num: "05",
      title: "Monthly Review",
      desc: "We review financial performance and key insights with your team.",
      icon: TrendingUp
    },
    {
      num: "06",
      title: "Business Support",
      desc: "Ongoing CA guidance, tax optimization, and audit support.",
      icon: ShieldCheck
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Accountants",
      desc: "Qualified CA & finance experts managing your books.",
      icon: Award
    },
    {
      title: "Accurate Records",
      desc: "100% accurate recording and error-free financials.",
      icon: CheckCircle2
    },
    {
      title: "Monthly Reports",
      desc: "On-time reports to help you make better decisions.",
      icon: Calendar
    },
    {
      title: "Secure Data",
      desc: "Your financial data is completely safe & confidential.",
      icon: Lock
    },
    {
      title: "Affordable Packages",
      desc: "Flexible solutions that save time & operating costs.",
      icon: DollarSign
    },
    {
      title: "Dedicated Support",
      desc: "Personal CA assigned for all your queries & filings.",
      icon: Headset
    }
  ];

  const benefitsList = [
    "Better Cash Flow Management & Tracking",
    "Accurate Monthly Financial Reports (P&L & Balance Sheet)",
    "Easier GST & Income Tax Return Filing",
    "Improved Business & Investment Decisions",
    "Bank Loan Ready Financial Statements",
    "Investor Ready Financial Reports & MIS"
  ];

  const faqs = [
    {
      q: "What bookkeeping services do you provide?",
      a: "We offer end-to-end bookkeeping including daily transaction entries, accounts payable & receivable management, bank reconciliations, ledger maintenance, and preparation of financial statements."
    },
    {
      q: "How often will I receive financial reports?",
      a: "You will receive customized monthly financial reports, including Profit & Loss statements, Balance Sheets, Cash Flow statements, and MIS analytics by the 5th of every month."
    },
    {
      q: "Do you support GST accounting?",
      a: "Yes! Our accounting services seamlessly integrate GST compliance, GSTR-2B ITC reconciliation, e-way bill verification, and monthly GST return filing assistance."
    },
    {
      q: "Can you manage payroll?",
      a: "Absolutely. We handle complete payroll computation, employee payslip generation, Provident Fund (PF), ESI, Professional Tax (PT), and TDS deductions."
    },
    {
      q: "Do you provide Virtual CFO services?",
      a: "Yes, our Virtual CFO service provides high-level financial leadership, budgeting, cash flow forecasting, investor deck support, and strategic advisory at a fraction of the cost of a full-time CFO."
    },
    {
      q: "How do you ensure data security?",
      a: "We enforce strict enterprise-grade data security protocols, 256-bit encryption, NDA confidentiality agreements, and secure cloud storage to protect your financial records."
    }
  ];

  return (
    <div className="ab-page-wrapper">
      <Header />

      {/* =========================================================
          SECTION 1: HERO SECTION (FULL UN-CROPPED HIGH-RES IMAGE)
         ========================================================= */}
      <section className="ab-hero-section">
        <div className="ab-container">
          <div className="ab-breadcrumb-bar">
            <ul className="ab-breadcrumb-list">
              <li>
                <Link href="/" className="ab-breadcrumb-link">Home</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link href="/services" className="ab-breadcrumb-link">Services</Link>
              </li>
              <li>&gt;</li>
              <li className="ab-breadcrumb-current">Accounting &amp; Bookkeeping</li>
            </ul>
          </div>

          <div className="ab-hero-grid">
            <div className="ab-hero-left">
              <span className="ab-hero-eyebrow-text">ACCOUNTING &amp; BOOKKEEPING</span>
              <h1 className="ab-hero-title">
                Accurate Books.<br />
                Stronger Business.
              </h1>
              <p className="ab-hero-desc">
                We take care of your books, compliance and financial reporting so you can focus on growing your business with confidence.
              </p>

              <div className="ab-hero-features-row">
                <div className="ab-hero-feat-item">
                  <div className="ab-hero-feat-icon">
                    <Target size={20} />
                  </div>
                  <span className="ab-hero-feat-text">Accurate<br />Recording</span>
                </div>
                <div className="ab-hero-feat-item">
                  <div className="ab-hero-feat-icon">
                    <Calendar size={20} />
                  </div>
                  <span className="ab-hero-feat-text">Timely<br />Reporting</span>
                </div>
                <div className="ab-hero-feat-item">
                  <div className="ab-hero-feat-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="ab-hero-feat-text">Secure &amp;<br />Confidential</span>
                </div>
                <div className="ab-hero-feat-item">
                  <div className="ab-hero-feat-icon">
                    <Scale size={20} />
                  </div>
                  <span className="ab-hero-feat-text">Expert<br />Support</span>
                </div>
              </div>

              <div className="ab-hero-cta-group">
                <button
                  className="ab-btn-primary"
                  onClick={() => openServiceModal("Accounting & Bookkeeping Consultation")}
                >
                  <span>Book Free Consultation</span>
                  <div className="ab-btn-arrow-circle">
                    <ArrowRight size={12} />
                  </div>
                </button>
                <button
                  className="ab-btn-outline"
                  onClick={() => setIsExpertModalOpen(true)}
                >
                  <PhoneCall size={16} className="ab-phone-icon" />
                  <span>Talk to Expert</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="ab-hero-right">
              <div className="ab-hero-img-container">
                <img
                  src="/accounting-hero-hd.jpg"
                  alt="Mazuma India Accounting & Bookkeeping Dashboard"
                  className="ab-hero-un-cropped-img"
                />
                <div className="ab-hero-left-fade"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 2: ACCOUNTING SERVICES GRID (10 CARDS)
         ========================================================= */}
      <section className="ab-grid-section">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-section-eyebrow">OUR SERVICES</span>
            <h2 className="ab-section-title">Complete Accounting &amp; Bookkeeping Solutions</h2>
            <div className="ab-title-divider"></div>
          </div>

          <div className="ab-grid-10col">
            {accountingServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className="ab-service-card">
                  <div className="ab-card-icon-box">
                    <IconComp size={20} />
                  </div>
                  <h3 className="ab-card-title">{service.title}</h3>
                  <p className="ab-card-desc">{service.desc}</p>
                  <button
                    className="ab-card-arrow-link"
                    onClick={() => openServiceModal(service.title)}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: OUR PROCESS (HORIZONTAL TIMELINE)
         ========================================================= */}
      <section className="ab-process-section">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-section-eyebrow">OUR PROCESS</span>
            <h2 className="ab-section-title">How We Work</h2>
            <div className="ab-title-divider"></div>
          </div>

          <div className="ab-process-timeline-wrapper">
            <div className="ab-process-line"></div>
            <div className="ab-process-timeline">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="ab-process-step-card">
                    <div className="ab-process-num-badge">
                      <StepIcon size={16} />
                      <span className="ab-step-number">{step.num}</span>
                    </div>
                    <h3 className="ab-process-step-title">{step.title}</h3>
                    <p className="ab-process-step-desc">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 4: WHY CHOOSE MAZUMA INDIA
         ========================================================= */}
      <section className="ab-why-section">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-section-eyebrow">WHY CHOOSE US</span>
            <h2 className="ab-section-title">Why Businesses Trust Mazuma India</h2>
            <div className="ab-title-divider"></div>
          </div>

          <div className="ab-why-grid">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="ab-why-card">
                  <div className="ab-why-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <h3 className="ab-why-title">{item.title}</h3>
                  <p className="ab-why-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 5: BUSINESS BENEFITS
         ========================================================= */}
      <section className="ab-benefits-section">
        <div className="ab-container">
          <div className="ab-benefits-grid">
            <div className="ab-benefits-left-card">
              <div className="ab-dashboard-mockup">
                <div className="ab-dash-header">
                  <div className="ab-dash-header-left">
                    <FileSpreadsheet size={18} style={{ color: "#FF6B1A" }} />
                    <span className="ab-dash-title">Financial Health Dashboard</span>
                  </div>
                  <span className="ab-dash-badge">Active CA Support</span>
                </div>
                <div className="ab-dash-stats-row">
                  <div className="ab-dash-stat-box">
                    <div className="ab-dash-stat-label">Monthly Revenue</div>
                    <div className="ab-dash-stat-val">₹24,50,000</div>
                  </div>
                  <div className="ab-dash-stat-box">
                    <div className="ab-dash-stat-label">Net Profit Margin</div>
                    <div className="ab-dash-stat-val">28.4%</div>
                  </div>
                  <div className="ab-dash-stat-box">
                    <div className="ab-dash-stat-label">Tax Saved</div>
                    <div className="ab-dash-stat-val">₹3,85,000</div>
                  </div>
                </div>
                <div className="ab-dash-chart-box">
                  <div className="ab-dash-chart-text">
                    <h4>Bank Loan &amp; Audit Ready</h4>
                    <p>100% compliant ledgers &amp; MIS reports ready for investors.</p>
                  </div>
                  <CheckCircle2 size={24} style={{ color: "#10B981" }} />
                </div>
              </div>
            </div>

            <div className="ab-benefits-right">
              <span className="ab-section-eyebrow" style={{ textAlign: "left" }}>KEY ADVANTAGES</span>
              <h2 className="ab-benefits-title">Benefits of Professional Accounting</h2>
              <div className="ab-benefits-list">
                {benefitsList.map((benefit, idx) => (
                  <div key={idx} className="ab-benefit-item">
                    <div className="ab-benefit-check-icon">
                      <Check size={13} />
                    </div>
                    <span className="ab-benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 6: FAQ ACCORDION
         ========================================================= */}
      <section className="ab-faq-section">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="ab-section-title">Got Questions? We Have Answers</h2>
            <div className="ab-title-divider"></div>
          </div>

          <div className="ab-faq-container">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`ab-faq-item ${openFaq === idx ? "active" : ""}`}
              >
                <button
                  className="ab-faq-question"
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
                  <div className="ab-faq-answer">
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
      <section className="ab-cta-section">
        <div className="ab-container">
          <div className="ab-cta-banner">
            <div className="ab-cta-left">
              <h2 className="ab-cta-title">Need Professional Accounting Support?</h2>
              <p className="ab-cta-desc">
                Let our experts manage your accounts while you focus on growing your business. Get complete financial clarity today.
              </p>
              <div className="ab-cta-features">
                <span className="ab-cta-feat-tag">✓ Expert CA Team</span>
                <span className="ab-cta-feat-tag">✓ Accurate Reporting</span>
                <span className="ab-cta-feat-tag">✓ Secure Accounting</span>
                <span className="ab-cta-feat-tag">✓ End-to-End Support</span>
              </div>
            </div>

            <div className="ab-cta-right">
              <button
                className="ab-btn-primary"
                onClick={() => openServiceModal("Accounting & Bookkeeping Support")}
              >
                <span>Book Free Consultation</span>
                <div className="ab-btn-arrow-circle">
                  <ArrowRight size={12} />
                </div>
              </button>
              <button
                className="ab-btn-outline"
                onClick={() => setIsExpertModalOpen(true)}
              >
                <PhoneCall size={16} className="ab-phone-icon" />
                <span>Call Now: +91 99363 51555</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONSULTATION MODAL
         ========================================================= */}
      {isModalOpen && (
        <div className="cr-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="cr-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="cr-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={18} />
            </button>
            <div className="cr-modal-header">
              <h3 className="cr-modal-title">Book Consultation for {selectedService ? selectedService.replace(/\s*Consultation$/i, '') : 'Accounting & Bookkeeping'}</h3>
              <p className="cr-modal-desc">Fill out your details to speak with a Mazuma CA expert.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="cr-modal-body">
              <div className="cr-form-grid-2col">
                <div className="cr-form-group">
                  <label className="cr-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="cr-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="cr-form-group">
                  <label className="cr-form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="cr-form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="cr-form-group">
                <label className="cr-form-label">City / Location</label>
                <input
                  type="text"
                  className="cr-form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <button type="submit" className="cr-modal-submit-btn">
                <span>Submit Consultation Request</span>
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
                className="ab-btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "16px",
                  textDecoration: "none"
                }}
              >
                <PhoneCall size={18} />
                <span>+91 99363 51555</span>
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
                <button type="submit" className="expert-submit-btn">
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
