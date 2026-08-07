"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function InlineCtaForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Company Registration"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a consultation.\n\nDetails:\n- Full Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Service Requested: ${formData.service}\n\nPlease reach out to me.\n\nThank you,\n${formData.name}`
    );

    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="au-cta-form-card au-cta-form-success">
        <CheckCircle2 size={44} className="au-cta-success-icon" />
        <h3>Thank You!</h3>
        <p>Your request has been prepared for <strong>compliance@mazumaindia.com</strong>. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="au-cta-form-card">
      <h3 className="au-cta-form-title">Request Free Consultation</h3>
      <form onSubmit={handleSubmit} className="au-cta-form">
        <div className="au-cta-form-grid">
          <div className="au-cta-form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="au-cta-form-group">
            <label>Email Address *</label>
            <input
              type="email"
              required
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

        <button type="submit" className="au-cta-submit-btn">
          <span>Book Free Consultation</span>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
