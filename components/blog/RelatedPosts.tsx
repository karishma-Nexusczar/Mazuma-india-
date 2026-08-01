import React from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import { CATEGORIES_DATA } from "@/data/categories";
import BlogCard from "./BlogCard";
import { ArrowRight, ShieldCheck, Briefcase } from "lucide-react";

interface RelatedPostsProps {
  currentArticle: Article;
  allArticles: Article[];
}

export default function RelatedPosts({ currentArticle, allArticles }: RelatedPostsProps) {
  // Filter similar posts in same category or matching tags
  const relatedPosts = allArticles
    .filter((a) => a.slug !== currentArticle.slug)
    .filter((a) => a.category === currentArticle.category || a.tags.some((t) => currentArticle.tags.includes(t)))
    .slice(0, 3);

  // Fallback to latest posts if not enough category matches
  const displayPosts = relatedPosts.length > 0
    ? relatedPosts
    : allArticles.filter((a) => a.slug !== currentArticle.slug).slice(0, 3);

  // Get matching category definition for related services
  const categoryDef = CATEGORIES_DATA.find(
    (c) => c.name.toLowerCase() === currentArticle.category.toLowerCase()
  ) || CATEGORIES_DATA[0];

  return (
    <div className="related-posts-section-wrapper" style={{ marginTop: 48, borderTop: "1px solid #E2E8F0", paddingTop: 40 }}>
      {/* Similar Posts */}
      {displayPosts.length > 0 && (
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#051A2E", margin: 0 }}>
              Similar Compliance Guides
            </h2>
            <Link href="/blog" style={{ color: "#FF6B1A", fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Browse All Articles <ArrowRight size={15} />
            </Link>
          </div>

          <div className="articles-grid-3cols" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {displayPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Related Enterprise Tax & Legal Services */}
      <div style={{ background: "#F8FAFC", borderRadius: 16, padding: "28px 32px", border: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <Briefcase size={20} style={{ color: "#FF6B1A" }} />
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#051A2E", margin: 0 }}>
            Related {currentArticle.category} Advisory Services
          </h3>
        </div>

        <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px 0" }}>
          Need specialized CA or legal execution for your enterprise? Explore Mazuma India's professional services:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {categoryDef.relatedServices.map((service, idx) => (
            <div key={idx} style={{ background: "#ffffff", padding: "18px 20px", borderRadius: 12, border: "1px solid #CBD5E1" }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "#051A2E", margin: "0 0 6px 0" }}>{service.title}</h4>
              <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 12px 0", lineHeight: 1.5 }}>{service.description}</p>
              <Link href={service.link} style={{ color: "#FF6B1A", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Book Consultation <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
