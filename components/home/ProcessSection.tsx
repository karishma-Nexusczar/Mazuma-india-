"use client";

import React from "react";
import { MessageSquareText, FileCheck2, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your business goals, taxation needs, and compliance requirements in detail.",
    icon: MessageSquareText
  },
  {
    number: "02",
    title: "Documentation",
    description: "Quick, guided collection and verification of essential documents with full privacy.",
    icon: FileCheck2
  },
  {
    number: "03",
    title: "Processing & Filings",
    description: "Expert review by CAs and legal advisory team, followed by swift, accurate filings.",
    icon: Cpu
  },
  {
    number: "04",
    title: "Compliance Support",
    description: "Continuous guidance, timely reminders, and full support to keep your business compliant.",
    icon: ShieldCheck
  }
];

export default function ProcessSection() {
  return (
    <section id="our-process" className="process-redesign-section">
      <div className="process-redesign-shell">
        <div className="process-header-wrap">
          <div className="process-eyebrow-badge">
            <span className="process-badge-dot"></span>
            <span>OUR WORKING PROCESS</span>
          </div>
          <h2 className="process-main-title">
            Simple, Structured &amp; <span className="highlight-orange">Supportive</span>
          </h2>
          <p className="process-main-subtitle">
            We follow a streamlined 4-step workflow to deliver fast, accurate, and stress-free financial &amp; legal solutions.
          </p>
        </div>

        <div className="process-timeline-wrapper">
          <div className="process-timeline-grid">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.number} className="process-timeline-step">
                  <div className="process-step-indicator">
                    <div className="process-step-icon-box">
                      <span className="process-step-badge">{step.number}</span>
                      <IconComp size={22} className="process-step-icon" />
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="process-step-connector"></div>
                    )}
                  </div>
                  <div className="process-step-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
