"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronRight, ChevronDown, Zap, ShieldCheck, Award, User, Briefcase, MessageSquare, Sparkles } from "lucide-react";
import "./contact.css";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Company Registration",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          source: "Contact Us Page"
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact Us form submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <Header />

      {/* Breadcrumb Bar */}
      <div className="contact-breadcrumb-bar">
        <div className="contact-breadcrumb-inner">
          <Link href="/" className="contact-breadcrumb-link">Home</Link>
          <ChevronRight size={13} />
          <span className="contact-breadcrumb-current">Contact Us</span>
        </div>
      </div>

      {/* EXECUTIVE PURE WHITE HERO SECTION */}
      <section className="contact-hero-section">
        <div className="contact-hero-inner">
          <span className="contact-hero-tag">
            CONTACT US
          </span>

          <h1 className="contact-hero-title">
            Let's Discuss Your Business
          </h1>

          <p className="contact-hero-desc">
            Need expert guidance on taxation, GST, company registration or compliance? Speak directly with our senior CAs and corporate legal advisors.
          </p>

          <div className="contact-hero-trust-row">
            <div className="contact-trust-pill">
              <Zap size={14} />
              <span>Fast 2-Hour Response</span>
            </div>
            <div className="contact-trust-pill">
              <Award size={14} />
              <span>Dedicated CA Team</span>
            </div>
            <div className="contact-trust-pill">
              <ShieldCheck size={14} />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION GRID */}
      <section className="contact-main-section">
        <div className="contact-main-grid">
          
          {/* LEFT COLUMN: CONTACT INFORMATION CARD */}
          <div className="contact-card">
            <div className="contact-card-header">
              <h2 className="contact-card-title">
                Contact Information
              </h2>
              <p className="contact-card-subtitle">
                Get in touch directly with our corporate team or visit our headquarters.
              </p>
            </div>

            <div className="contact-info-list">
              {/* Phone Item */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div className="contact-info-content">
                  <h3>Phone</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><a href="tel:+919936351555">+91 99363 51555</a><a href="tel:+919999865586">+91 99998 65586</a></div>
                </div>
              </div>

              {/* Email Item */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-info-content">
                  <h3>Email</h3>
                  <a href="mailto:compliance@mazumaindia.com" style={{ color: "#FF6B1A", wordBreak: "break-all" }}>
                    compliance@mazumaindia.com
                  </a>
                </div>
              </div>

              {/* Office Location Item */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="contact-info-content">
                  <h3>Office Location</h3>
                  <p>
                    B-236, 2nd Floor, IT Tower-2,<br />
                    Grandthum, Plot No. 7,<br />
                    Techzone-4, Greater Noida West,<br />
                    Gautam Budh Nagar,<br />
                    Uttar Pradesh – 201308, India.
                  </p>
                </div>
              </div>

              {/* Business Hours Item */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Clock size={18} />
                </div>
                <div className="contact-info-content">
                  <h3>Business Hours</h3>
                  <p style={{ fontWeight: 600 }}>Mon - Sat: 9:30 AM – 6:30 PM</p>
                  <span className="contact-closed-tag">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CARD */}
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="contact-form-badge">
                <Sparkles size={13} /> Direct Advisor Response
              </span>
              <h2 className="contact-card-title">
                Send Us A Message
              </h2>
              <p className="contact-card-subtitle">
                Fill out the form below and our CAs will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-card">
                <CheckCircle2 size={40} style={{ color: "#16A34A", margin: "0 auto 10px auto" }} />
                <h3 className="contact-success-title">Enquiry Submitted Successfully!</h3>
                <p className="contact-success-desc">
                  Thank you for reaching out to Mazuma India. Our corporate compliance specialist will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: 16,
                    padding: "9px 20px",
                    borderRadius: 8,
                    background: "#16A34A",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13.5
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Full Name */}
                <div className="contact-form-group">
                  <label>Full Name *</label>
                  <div className="contact-input-icon-wrapper">
                    <User size={16} className="contact-field-icon" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="contact-form-group">
                  <label>Email Address *</label>
                  <div className="contact-input-icon-wrapper">
                    <Mail size={16} className="contact-field-icon" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="contact-form-group">
                  <label>Phone Number *</label>
                  <div className="contact-input-icon-wrapper">
                    <Phone size={16} className="contact-field-icon" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="contact-form-group">
                  <label>Service Required *</label>
                  <div className="contact-input-icon-wrapper select-wrapper">
                    <Briefcase size={16} className="contact-field-icon" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Company Registration">Company Registration</option>
                      <option value="GST Services">GST Services</option>
                      <option value="Income Tax Filing">Income Tax Filing</option>
                      <option value="MSME & Startup">MSME &amp; Startup</option>
                      <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                      <option value="Trademark Services">Trademark Services</option>
                      <option value="NGO Services">NGO Services</option>
                      <option value="Business Compliance">Business Compliance</option>
                      <option value="Business Registrations">Business Registrations</option>
                      <option value="FFMC / NBFC Licensing">FFMC / NBFC Licensing</option>
                    </select>
                    <ChevronDown size={16} className="contact-select-chevron" />
                  </div>
                </div>

                {/* Message */}
                <div className="contact-form-group">
                  <label>Message / Specific Query</label>
                  <div className="contact-input-icon-wrapper textarea-wrapper">
                    <MessageSquare size={16} className="contact-field-icon textarea-icon" />
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business goals or compliance requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="contact-submit-btn"
                >
                  {loading ? "Submitting Request..." : <>Submit Enquiry <Send size={15} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* OFFICE MAP SECTION */}
      <section className="contact-map-section">
        <div className="contact-map-inner">
          <div className="contact-map-header">
            <h2 className="contact-map-title">Find Our Office</h2>
            <p className="contact-map-subtitle">
              B-236, 2nd Floor, IT Tower-2, Grandthum, Plot No. 7, Techzone-4, Greater Noida West, Gautam Budh Nagar, UP – 201308
            </p>
          </div>

          <div className="contact-map-card">
            <iframe
              title="Mazuma India Grandthum Office Map"
              src="https://maps.google.com/maps?q=Grandthum+by+Group+108+Plot+no+7+Tech+Zone+IV+Greater+Noida+West+Uttar+Pradesh+201308&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
