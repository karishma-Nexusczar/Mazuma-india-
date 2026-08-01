"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { ContentBlock } from "@/data/articles";

interface TableOfContentsProps {
  blocks?: ContentBlock[];
  sections?: { heading: string }[];
}

export default function TableOfContents({ blocks, sections }: TableOfContentsProps) {
  const headings: { id: string; text: string; level: string }[] = [];

  if (blocks && blocks.length > 0) {
    blocks.forEach((b, idx) => {
      if (b.type === "heading" && b.text) {
        headings.push({
          id: `heading-${idx}`,
          text: b.text,
          level: b.level || "h2"
        });
      }
    });
  } else if (sections && sections.length > 0) {
    sections.forEach((sec, idx) => {
      if (sec.heading) {
        headings.push({
          id: `section-${idx + 1}`,
          text: sec.heading,
          level: "h2"
        });
      }
    });
  }

  if (headings.length === 0) return null;

  return (
    <div className="table-of-contents-card" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", padding: 20, borderRadius: 14, marginBottom: 24 }}>
      <div className="toc-header" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: "#051A2E", marginBottom: 12 }}>
        <BookOpen size={18} style={{ color: "#FF6B1A" }} />
        <span>Table of Contents</span>
      </div>

      <ul className="toc-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {headings.map((h, i) => (
          <li key={h.id} style={{ paddingLeft: h.level === "h3" ? 16 : 0, fontSize: 13, fontWeight: 600 }}>
            <a
              href={`#${h.id}`}
              style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}
              onClick={(e) => {
                const el = document.getElementById(h.id);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span style={{ color: "#FF6B1A", marginRight: 6 }}>{i + 1}.</span>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
