"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headset, Phone, UserCheck, X, Send } from "lucide-react";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "Company Registration" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTalkToExpert = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quick Callback Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(`Client Name: ${formData.name}\nPhone Number: ${formData.phone}\nEmail Address: ${formData.email}\nInterested Service: ${formData.service}`);
    
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          source: "CTA Section Expert Callback"
        })
      });
    } catch (err) {
      console.error("CTASection API error:", err);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", email: "", service: "Company Registration" });
    }, 3000);
  };

  return (
    <section className="cta-redesign-section" id="expert-advice">
      <div className="cta-redesign-container">
        <motion.div
          className="cta-gradient-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Text & Icon */}
          <div className="cta-banner-left">
            <div className="cta-icon-wrapper">
              <Headset size={32} className="cta-icon-svg" />
            </div>
            <div className="cta-banner-text">
              <h2 className="cta-banner-heading">Need Expert Advice For Your Business?</h2>
              <p className="cta-banner-subtext">
                Consult with our financial &amp; tax experts to grow your business with confidence.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="cta-banner-buttons">
            {/* 1. Talk to Expert Button */}
            <button
              className="cta-btn cta-btn-white"
              onClick={handleTalkToExpert}
            >
              <UserCheck size={17} />
              <span>Talk to Expert</span>
            </button>

            {/* 2. WhatsApp Us Button with Green Icon */}
            <a
              href="https://wa.me/919936351555"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.616-.919-2.213-.242-.58-.487-.5-.67-.51-.172-.01-.369-.01-.566-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.725-.515-5.286-1.411l-.379-.221-3.926 1.029 1.047-3.829-.247-.393A9.773 9.773 0 012.25 12c0-5.376 4.374-9.75 9.75-9.75 5.376 0 9.75 4.374 9.75 9.75 0 5.376-4.374 9.75-9.75 9.75m0-21.75C5.383.092.092 5.383.092 12c0 2.22.607 4.372 1.76 6.242L0 24l5.908-1.55c1.802 1.05 3.864 1.642 6.042 1.642 6.617 0 11.908-5.291 11.908-11.908C23.858 5.383 18.567.092 12 .092z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* 3. Call Now Button to 9936351555 */}
            <a
              href="tel:+919936351555"
              className="cta-btn cta-btn-outline"
              onClick={(e) => {
                // If on desktop (no tel app), open modal so phone number and callback options are displayed
                if (typeof window !== "undefined" && window.innerWidth > 768) {
                  setIsModalOpen(true);
                }
              }}
            >
              <Phone size={17} />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Short Quick Chat Modal for "Talk to Expert" */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="expert-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="expert-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="expert-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="expert-modal-header">
                <div className="expert-modal-icon">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3>Talk to an Expert</h3>
                  <p>Get a quick callback from our Senior Tax Consultant</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="expert-modal-success" style={{ textAlign: "center", padding: "20px 10px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0F2747", marginBottom: "6px" }}>Callback Request Received!</h4>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Thank you! Your enquiry has been sent to <strong>compliance@mazumaindia.com</strong>. Our senior consultant will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="expert-modal-form">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder=""
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder=""
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Service Needed *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="Company Registration">Company Registration (Pvt Ltd / LLP)</option>
                      <option value="GST & Income Tax">GST &amp; Income Tax Filing</option>
                      <option value="NGO 80G/12A">NGO Services (80G / 12A)</option>
                      <option value="Trademark & License">Trademark &amp; Licenses</option>
                    </select>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>Request Callback</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

