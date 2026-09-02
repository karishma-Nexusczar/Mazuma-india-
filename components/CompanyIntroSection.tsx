'use client';

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function CompanyIntroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="au-story-section">
      <div className="au-shell">
        <div className="au-story-grid">
          {/* Left: Company Introduction with View All Toggle */}
          <div className="au-story-left">
            <div className="au-story-text-group">
              <span className="au-eyebrow">ABOUT MAZUMA INDIA</span>
              <h3>Your Trusted Partner for Taxation, Compliance &amp; Business Advisory</h3>

              <p>
                Mazuma Professional Services Private Limited, operating under the brand name <strong>Mazuma India</strong>, is a trusted provider of taxation, accounting, compliance, and business advisory services.
              </p>

              <p>
                We are committed to helping individuals, startups, SMEs, and established businesses navigate the complexities of taxation and regulatory compliance with confidence.
              </p>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="au-expandable-content au-fade-in">
                  <p>
                    At Mazuma India, we combine professional expertise with a client-first approach to deliver accurate, timely, and cost-effective solutions.
                  </p>

                  <div className="au-spec-block">
                    <h4 className="au-spec-title">Our team specializes in:</h4>
                    <div className="au-spec-chips">
                      <span className="au-spec-chip"><Check size={14} /> Income Tax</span>
                      <span className="au-spec-chip"><Check size={14} /> GST Compliance</span>
                      <span className="au-spec-chip"><Check size={14} /> TDS Services</span>
                      <span className="au-spec-chip"><Check size={14} /> Accounting &amp; Bookkeeping</span>
                      <span className="au-spec-chip"><Check size={14} /> Payroll</span>
                      <span className="au-spec-chip"><Check size={14} /> ROC Compliance</span>
                      <span className="au-spec-chip"><Check size={14} /> Business Registration</span>
                      <span className="au-spec-chip"><Check size={14} /> Financial Advisory</span>
                      <span className="au-spec-chip"><Check size={14} /> Tax Planning</span>
                    </div>
                  </div>

                  <p>
                    Whether you are launching a new business, managing day-to-day compliance, or planning for long-term growth, Mazuma India is your reliable partner at every stage of your business journey.
                  </p>

                  <p className="au-mission-quote">
                    Our mission is to simplify taxation and compliance while enabling businesses to focus on growth and success.
                  </p>
                </div>
              )}

              {/* View All / Show Less Toggle Button */}
              <div className="au-view-all-box">
                <button
                  type="button"
                  className="au-view-all-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "Show Less" : "View All Details"}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Uncropped Section Image */}
          <div className="au-story-right">
            <div className="au-intro-img-box">
              <img
                src="/about-right-image.jpg"
                alt="Mazuma India Corporate Office &amp; Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
