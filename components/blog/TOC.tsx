import React from "react";
import { BookOpen } from "lucide-react";

interface TOCProps {
  sections: { heading: string }[];
}

export default function TOC({ sections }: TOCProps) {
  return (
    <div className="table-of-contents-card">
      <div className="toc-header">
        <BookOpen size={18} />
        <span>Table of Contents</span>
      </div>
      <ul className="toc-list">
        {sections.map((sec, idx) => (
          <li key={idx}>
            <a href={`#section-${idx + 1}`}>{sec.heading}</a>
          </li>
        ))}
        <li><a href="#article-faqs">Frequently Asked Questions</a></li>
        <li><a href="#key-takeaways">Key Takeaways</a></li>
      </ul>
    </div>
  );
}
