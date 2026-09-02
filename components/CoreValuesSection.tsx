'use client';

import React, { useState } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  Lock,
  Zap,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function CoreValuesSection() {
  const [showAll, setShowAll] = useState(false);

  const valuesData = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Integrity",
      desc: "We uphold the highest standards of ethics, honesty, and professionalism in every client engagement."
    },
    {
      icon: <Users size={22} />,
      title: "Client-Centric Approach",
      desc: "Every client receives personalized attention and practical solutions tailored to their business goals."
    },
    {
      icon: <Award size={22} />,
      title: "Excellence",
      desc: "We deliver accurate, timely, and high-quality professional services that exceed client expectations."
    },
    {
      icon: <Lock size={22} />,
      title: "Transparency",
      desc: "We believe in open communication, clear processes, and complete accountability at every stage."
    },
    {
      icon: <Zap size={22} />,
      title: "Innovation",
      desc: "We embrace technology to provide secure, efficient, and future-ready compliance solutions."
    },
    {
      icon: <Users size={22} />,
      title: "Collaboration",
      desc: "We work closely with clients, partners, and team members to achieve shared success."
    },
    {
      icon: <BookOpen size={22} />,
      title: "Continuous Learning",
      desc: "We stay updated with evolving tax laws, regulations, and industry best practices to provide informed professional advice."
    }
  ];

  const visibleValues = showAll ? valuesData : valuesData.slice(0, 4);

  return (
    <section className="au-values-section">
      <div className="au-shell">
        <div className="au-section-header">
          <h2 className="au-heading-center">OUR CORE VALUES</h2>
          <div className="au-heading-underline"></div>
        </div>

        <div className="au-values-grid">
          {visibleValues.map((item, idx) => (
            <div className="au-value-card au-fade-in" key={idx}>
              <div className="au-value-icon">{item.icon}</div>
              <h3 className="au-value-title">{item.title}</h3>
              <p className="au-value-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="au-values-action">
          <button
            type="button"
            className="au-view-all-btn"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            <span>{showAll ? "Show Less" : "View All Values"}</span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
