"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Company Registration",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Consultation Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mazuma India Team,\n\nI would like to request a free consultation.\n\nDetails:\n- Full Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Service Requested: ${formData.service}\n- City / State: ${formData.city}\n\nPlease reach out to me as soon as possible.\n\nThank you,\n${formData.name}`
    );

    window.location.href = `mailto:compliance@mazumaindia.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Company Registration",
        city: ""
      });
    }, 4000);
  };

  return (
    <div className="cr-modal-backdrop" onClick={onClose}>
      <div className="cr-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="cr-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "44px 28px" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#FFF4EC", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h3 className="cr-modal-title" style={{ fontSize: 22, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
              Thank You! Consultation Requested
            </h3>
            <p className="cr-modal-desc" style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Your details have been prepared for <strong>compliance@mazumaindia.com</strong>. Our senior CA and legal team will contact you shortly.
            </p>
          </div>
        ) : (
          <div className="cr-modal-grid">
            {/* LEFT SIDE: EXPERT BANNER */}
            <div className="cr-modal-left">
              <div>
                <img
                  src="/about-workspace-desk.png"
                  alt="Talk to Our Expert"
                  className="cr-modal-left-img"
                />
                <h4 className="cr-modal-left-title">Talk to Our Expert</h4>
                <div className="cr-modal-left-bullets">
                  <div className="cr-modal-bullet-item">
                    ✓ 100% Free Consultation
                  </div>
                  <div className="cr-modal-bullet-item">
                    ✓ Instant Legal Guidance
                  </div>
                  <div className="cr-modal-bullet-item">
                    ✓ 100% Data Confidentiality
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONSULTATION FORM */}
            <div className="cr-modal-right">
              <h3 className="cr-modal-title">Book Free Consultation</h3>
              <p className="cr-modal-desc">
                Get instant advice from our senior CA team.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1: Mobile Number & Email Address */}
                <div className="cr-form-grid-2col">
                  <div className="cr-form-group">
                    <label className="cr-form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      className="cr-form-input"
                      required
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Row 2: City / State & Service Required */}
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

                  <div className="cr-form-group">
                    <label className="cr-form-label">Service Required *</label>
                    <select
                      className="cr-form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Company Registration">Company Registration</option>
                      <option value="Income Tax / GST">Income Tax / GST</option>
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Trademark & ISO">Trademark & ISO</option>
                      <option value="Firm & MSME">Firm & MSME</option>
                      <option value="NGO Registration">NGO Registration</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="cr-modal-submit-btn">
                  Request Consultation <span>→</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
