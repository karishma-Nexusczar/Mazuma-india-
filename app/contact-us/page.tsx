"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronRight } from "lucide-react";

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
    <div style={{ background: "#FFFFFF", minHeight: "100vh", fontFamily: "var(--font-head)" }}>
      <Header />

      {/* Breadcrumb Bar */}
      <div style={{ background: "#051A2E", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "10px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#94A3B8" }}>
          <Link href="/" style={{ color: "#94A3B8", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#FF6B1A", fontWeight: 700 }}>Contact Us</span>
        </div>
      </div>

      {/* SLEEK COMPACT HERO HEADER SECTION (NO WHITE STRIP) */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 26, 46, 0.85), rgba(5, 26, 46, 0.92)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "44px 24px",
        textAlign: "center",
        color: "#ffffff"
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 20,
            background: "#FF6B1A",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12
          }}>
            Contact Us
          </span>

          <h1 style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 900,
            color: "#ffffff",
            margin: "0 0 10px 0",
            lineHeight: 1.25
          }}>
            Let's Discuss Your Business
          </h1>

          <p style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "#CBD5E1",
            margin: "0 auto",
            maxWidth: 580,
            lineHeight: 1.5
          }}>
            Need expert guidance on taxation, GST, company registration or compliance? Speak directly with our senior CAs and legal advisors.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION GRID (COMPACT PROPORTIONS) */}
      <section style={{ padding: "40px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28,
          alignItems: "start"
        }}>
          
          {/* LEFT COLUMN: COMPACT CONTACT INFORMATION CARD */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: 16,
            border: "1px solid #E2E8F0",
            padding: "28px 24px",
            boxShadow: "0 8px 24px rgba(5,26,46,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: 20
          }}>
            <div style={{ borderBottom: "1px solid #F1F5F9", paddingBottom: 14 }}>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", margin: "0 0 4px 0" }}>
                Contact Information
              </h2>
              <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.4 }}>
                Get in touch directly with our corporate team or visit our headquarters.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Phone Item */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", borderBottom: "1px solid #F8FAFC", paddingBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FFF4EE", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: 0.6 }}>
                    Phone
                  </h3>
                  <a href="tel:+919936351555" style={{ display: "block", fontSize: 14, fontWeight: 800, color: "#0F172A", textDecoration: "none", lineHeight: 1.4 }}>
                    +91 99363 51555
                  </a>
                  <a href="tel:+919999865586" style={{ display: "block", fontSize: 14, fontWeight: 800, color: "#0F172A", textDecoration: "none", lineHeight: 1.4 }}>
                    +91 99998 65586
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", borderBottom: "1px solid #F8FAFC", paddingBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FFF4EE", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: 0.6 }}>
                    Email
                  </h3>
                  <a href="mailto:compliance@mazumaindia.com" style={{ fontSize: 14, fontWeight: 800, color: "#FF6B1A", textDecoration: "none", wordBreak: "break-all" }}>
                    compliance@mazumaindia.com
                  </a>
                </div>
              </div>

              {/* Office Item */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", borderBottom: "1px solid #F8FAFC", paddingBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FFF4EE", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: 0.6 }}>
                    Office Location
                  </h3>
                  <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                    B-236, 2nd Floor, IT Tower-2,<br />
                    Grandthum, Plot No. 7,<br />
                    Techzone-4, Greater Noida West,<br />
                    Gautam Budh Nagar,<br />
                    Uttar Pradesh – 201308, India.
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FFF4EE", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: 0.6 }}>
                    Business Hours
                  </h3>
                  <p style={{ fontSize: 14, color: "#0F172A", fontWeight: 800, margin: "0 0 4px 0" }}>
                    Mon - Sat: 9:30 AM – 6:30 PM
                  </p>
                  <span style={{ fontSize: 12, color: "#DC2626", fontWeight: 700, display: "inline-block", background: "#FEF2F2", padding: "2px 8px", borderRadius: 4 }}>
                    Sunday: Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: COMPACT CONTACT FORM CARD */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: 16,
            border: "1px solid #E2E8F0",
            padding: "28px 24px",
            boxShadow: "0 8px 24px rgba(5,26,46,0.05)"
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", margin: "0 0 4px 0" }}>
              Send Us A Message
            </h2>
            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px 0" }}>
              Fill out the form below and our CAs will respond within 24 hours.
            </p>

            {submitted ? (
              <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", padding: "24px 16px", borderRadius: 12, textAlign: "center" }}>
                <CheckCircle2 size={40} style={{ color: "#16A34A", margin: "0 auto 10px auto" }} />
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#16A34A", margin: "0 0 6px 0" }}>Enquiry Submitted Successfully!</h3>
                <p style={{ fontSize: 13, color: "#15803D", margin: 0 }}>
                  Thank you for reaching out to Mazuma India. Our corporate compliance specialist will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 16, padding: "8px 18px", borderRadius: 8, background: "#16A34A", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: 13 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Full Name */}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 10,
                      border: "1px solid #E2E8F0",
                      background: "#F8FAFC",
                      fontSize: 13,
                      color: "#0F172A",
                      outline: "none",
                      boxSizing: "border-box"
                    }}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder=""
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: 10,
                        border: "1px solid #E2E8F0",
                        background: "#F8FAFC",
                        fontSize: 13,
                        color: "#0F172A",
                        outline: "none",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder=""
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: 10,
                        border: "1px solid #E2E8F0",
                        background: "#F8FAFC",
                        fontSize: 13,
                        color: "#0F172A",
                        outline: "none",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                    Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 10,
                      border: "1px solid #E2E8F0",
                      background: "#F8FAFC",
                      fontSize: 13,
                      color: "#0F172A",
                      outline: "none",
                      boxSizing: "border-box"
                    }}
                  >
                    <option value="Company Registration">Company Registration</option>
                    <option value="Income Tax">Income Tax</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Trademark">Trademark</option>
                    <option value="Firm">Firm</option>
                    <option value="NGO Registration Services">NGO Registration Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder=""
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 10,
                      border: "1px solid #E2E8F0",
                      background: "#F8FAFC",
                      fontSize: 13,
                      color: "#0F172A",
                      outline: "none",
                      boxSizing: "border-box"
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "11px 20px",
                    borderRadius: 10,
                    background: "#FF6B1A",
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontWeight: 800,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(255,107,26,0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    transition: "all 0.2s ease",
                    marginTop: 4
                  }}
                >
                  {loading ? "Submitting Request..." : <>Submit Enquiry <Send size={15} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* OFFICE MAP SECTION (COMPACT HEIGHT & SHORT SIZES) */}
      <section style={{ background: "#F8FAFC", padding: "36px 24px", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 6px 0" }}>
              Find Our Office
            </h2>
            <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.5 }}>
              B-236, 2nd Floor, IT Tower-2, Grandthum, Plot No. 7, Techzone-4, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh – 201308, India.
            </p>
          </div>

          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
            border: "1px solid #E2E8F0",
            background: "#ffffff"
          }}>
            <iframe
              title="Mazuma India Grandthum Office Map"
              src="https://maps.google.com/maps?q=Grandthum+by+Group+108+Plot+no+7+Tech+Zone+IV+Greater+Noida+West+Uttar+Pradesh+201308&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
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
