"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FaqContactSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Business Enquiry from ${formData.name || "Client"} - ${formData.service}`);
    const bodyText = `Hello Mazuma India Team,\n\nI would like to enquire about your services.\n\nFull Name: ${formData.name}\nEmail Address: ${formData.email}\nPhone Number: ${formData.phone}\nRequired Service: ${formData.service}\n\nMessage:\n${formData.message}\n\nThank you!`;
    const body = encodeURIComponent(bodyText);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "General Enquiry",
          message: formData.message,
          source: "Homepage FAQ Contact Section"
        })
      });
    } catch (err) {
      console.error("FaqContactSection API error:", err);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 4000);
  };

  return (
    <section className="faq-contact-redesign-section" id="contact-us">
      <div className="faq-contact-container">
        <div className="faq-contact-grid">
          {/* LEFT 55%: FAQ Accordion */}
          <div className="faq-left-col">
            <div className="faq-eyebrow-badge">
              <span className="badge-dot"></span>
              <span>COMMON QUESTIONS</span>
            </div>
            <h2 className="faq-main-heading">Frequently Asked Questions</h2>
            <p className="faq-subtext">
              Have questions about tax filings, company registration, or business compliance? Find quick answers below.
            </p>

            <div className="faq-accordion-list">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`faq-item-card ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <div className="faq-chevron-box">
                        <ChevronDown
                          size={18}
                          className={`faq-chevron-icon ${isOpen ? "is-active" : ""}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="faq-answer-wrapper"
                        >
                          <p className="faq-answer-text">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 45%: Contact Form & Details Card */}
          <div className="contact-right-col">
            <div className="contact-form-card">
              <h3 className="contact-card-heading">Let&apos;s Discuss Your Business</h3>
              <p className="contact-card-subtext">
                Fill out the form below and our tax experts will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <motion.div
                  className="contact-success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={40} className="success-icon" style={{ color: "#10B981", margin: "0 auto 12px auto" }} />
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0F2747", marginBottom: "6px" }}>Enquiry Submitted Successfully!</h4>
                  <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Thank you! Your enquiry has been routed to <strong>compliance@mazumaindia.com</strong>. Our senior tax expert will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder=""
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder=""
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder=""
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service">Required Service</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="Company Services (Pvt Ltd / LLP)">Company Services (Pvt Ltd / LLP)</option>
                      <option value="NGO Services (80G / 12A / FCRA)">NGO Services (80G / 12A / FCRA)</option>
                      <option value="Income Tax Filing & Advisory">Income Tax Filing &amp; Advisory</option>
                      <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                      <option value="Other Registrations & Licenses">Other Registrations &amp; Licenses</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea
                      id="contact-message"
                      rows={2}
                      placeholder=""
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>Submit Enquiry</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
