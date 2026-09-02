"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

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
    city: "",
    website_hp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          city: formData.city,
          website_hp: formData.website_hp,
          source: "Book Free Consultation Modal"
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "Company Registration",
            city: "",
            website_hp: ""
          });
        }, 3500);
      } else {
        setErrorMsg(data.message || "Unable to submit your request. Please try again.");
      }
    } catch (err) {
      console.error("Consultation modal submit error:", err);
      setErrorMsg("Unable to submit your request. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 className="cr-modal-title" style={{ fontSize: 22, fontWeight: 800, color: "#0F2D52", marginBottom: 8 }}>
              Request Submitted Successfully
            </h3>
            <p className="cr-modal-desc" style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Thank you for contacting Mazuma India. Your request has been received successfully. Our team will contact you at <strong>compliance@mazumaindia.com</strong> shortly.
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

              {errorMsg && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 8, background: "#FEF2F2", color: "#DC2626", fontSize: 13, marginBottom: 12, border: "1px solid #FCA5A5" }}>
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
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

                {/* Row 1: Mobile Number & Email Address */}
                <div className="cr-form-grid-2col">
                  <div className="cr-form-group">
                    <label className="cr-form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      className="cr-form-input"
                      required
                      placeholder="10-digit mobile"
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
                      placeholder="name@email.com"
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
                      placeholder="Enter city/state"
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

                <button type="submit" disabled={isSubmitting} className="cr-modal-submit-btn">
                  <span>{isSubmitting ? "Submitting Request..." : "Request Consultation →"}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
