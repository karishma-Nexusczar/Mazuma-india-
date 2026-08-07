'use client';

import React, { useState } from "react";
import {
  Rocket,
  Building2,
  Briefcase,
  Scale,
  UserCheck,
  Users,
  HeartHandshake,
  Factory,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Laptop,
  User,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function IndustriesSection() {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    { name: "Startups", icon: <Rocket size={18} /> },
    { name: "MSMEs", icon: <Building2 size={18} /> },
    { name: "Private Limited Companies", icon: <Briefcase size={18} /> },
    { name: "LLPs", icon: <Scale size={18} /> },
    { name: "Proprietorships", icon: <UserCheck size={18} /> },
    { name: "Partnership Firms", icon: <Users size={18} /> },
    { name: "NGOs & Trusts", icon: <HeartHandshake size={18} /> },
    { name: "Manufacturers", icon: <Factory size={18} /> },
    { name: "Retail Businesses", icon: <ShoppingBag size={18} /> },
    { name: "Healthcare", icon: <Stethoscope size={18} /> },
    { name: "Educational Institutions", icon: <GraduationCap size={18} /> },
    { name: "IT & Software Companies", icon: <Laptop size={18} /> },
    { name: "Freelancers & Professionals", icon: <User size={18} /> }
  ];

  const visibleIndustries = showAll ? industries : industries.slice(0, 6);

  return (
    <section className="au-industries-section">
      <div className="au-shell">
        <div className="au-section-header">
          <span className="au-eyebrow">INDUSTRIES WE SERVE</span>
          <h2 className="au-heading-center">Empowering Diverse Industries Across India</h2>
          <div className="au-heading-underline"></div>
        </div>

        <div className="au-industries-grid">
          {visibleIndustries.map((ind, idx) => (
            <div className="au-industry-card au-fade-in" key={idx}>
              <div className="au-ind-icon">{ind.icon}</div>
              <span>{ind.name}</span>
            </div>
          ))}
        </div>

        <div className="au-industries-action">
          <button
            type="button"
            className="au-view-all-btn"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            <span>{showAll ? "Show Less" : "View All Industries"}</span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
