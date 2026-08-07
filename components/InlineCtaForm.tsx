"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function InlineCtaForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Company Registration",
    website_hp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Visitor",
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          website_hp: formData.website_hp,
          source: "Inline CTA Form"
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Unable to submit your request. Please try again.");
      }
    } catch (err) {
      console.error("Inline CTA form API error:", err);
      setErrorMsg("Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="au-cta-form-card au-cta-form-success" style={{ textAlign: "center", padding: "32px 20px" }}>
        <CheckCircle2 size={44} className="au-cta-success-icon" style={{ color: "#10B981", margin: "0 auto 12px auto" }} />
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0F2747", marginBottom: "8px" }}>Request Submitted Successfully</h3>
        <p style={{ fontSize: "14px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
          Thank you for contacting Mazuma India. Your request has been received successfully. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="au-cta-form-card">
      <h3 className="au-cta-form-title">Request Free Consultation</h3>

      {errorMsg && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 8, background: "#FEF2F2", color: "#DC2626", fontSize: 13, marginBottom: 12, border: "1px solid #FCA5A5" }}>
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="au-cta-form">
        {/* Anti-Spam Honeypot Field */}
        <input
          type="text"
          name="website_hp"
          value={formData.website_hp}
          onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="au-cta-form-grid">
          <div className="au-cta-form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="au-cta-form-group">
            <label>Email Address *</label>
            <input
              type="email"
              required
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="au-cta-form-group">
          <label>Service Required *</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="Company Registration">Company Registration</option>
            <option value="GST Services">GST Services</option>
            <option value="Income Tax">Income Tax</option>
            <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
            <option value="Trademark & Registrations">Trademark & Registrations</option>
            <option value="Business Compliance">Business Compliance</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="au-cta-submit-btn">
          <span>{isSubmitting ? "Submitting Request..." : "Book Free Consultation"}</span>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
