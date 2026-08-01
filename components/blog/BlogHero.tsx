import React from "react";
import { BookOpen } from "lucide-react";

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}

export default function BlogHero({
  title = "Latest Tax, GST & Business Insights",
  subtitle = "Comprehensive guides, regulatory updates, and strategic financial advice to keep your business compliant and investor-ready.",
  badge = "EXPERT KNOWLEDGE HUB",
  children,
}: BlogHeroProps) {
  return (
    <section className="blog-hero-section">
      <div className="blog-hero-shell">
        <div className="blog-hero-badge">
          <BookOpen size={15} />
          <span>{badge}</span>
        </div>
        <h1 className="blog-hero-title">{title}</h1>
        <p className="blog-hero-subtitle">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
