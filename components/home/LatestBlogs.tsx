"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, BookOpen, ShieldCheck } from "lucide-react";
import { Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import BlogCard from "@/components/blog/BlogCard";

export default function LatestBlogs() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);

  useEffect(() => {
    setArticlesList(getStoredArticles());
  }, []);

  const featuredPost = articlesList.find((a) => a.featured) || articlesList[0];
  const gridPosts = articlesList.slice(0, 3);

  if (articlesList.length === 0) {
    return (
      <section className="articles-redesign-section" id="blog" style={{ background: "#F8FAFC", padding: "60px 0" }}>
        <div className="articles-redesign-container">
          <div className="articles-redesign-header">
            <div>
              <div className="articles-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>INSIGHTS &amp; UPDATES</span>
              </div>
              <h2 className="articles-redesign-title">Latest Insights &amp; Resources</h2>
            </div>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", padding: "40px 20px", borderRadius: 16, textAlign: "center" }}>
            <BookOpen size={32} style={{ color: "#CBD5E1", marginBottom: 12 }} />
            <h3 style={{ fontSize: 18, color: "#051A2E", margin: "0 0 6px 0", fontWeight: 700 }}>No Articles Published Yet</h3>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 16px 0" }}>Articles published via the CMS will automatically appear here on the homepage.</p>
            <Link href="/admin/blog" style={{ padding: "8px 18px", borderRadius: 8, background: "#FF6B1A", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Go to CMS Dashboard
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="articles-redesign-section" id="blog">
      <div className="articles-redesign-container">
        {/* Header */}
        <div className="articles-redesign-header">
          <div>
            <div className="articles-eyebrow-badge">
              <span className="badge-dot"></span>
              <span>INSIGHTS &amp; TAX UPDATES</span>
            </div>
            <h2 className="articles-redesign-title">
              Latest Tax Insights &amp; Compliance Guides
            </h2>
          </div>

          <Link href="/blog" className="articles-view-all-btn">
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Featured Blog Spotlight Card */}
        {featuredPost && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ background: "#ffffff", borderRadius: 20, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "center" }}>
                <div style={{ padding: "32px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FFF4EE", color: "#FF6B1A", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
                    <Star size={13} fill="#FF6B1A" />
                    <span>FEATURED SPOTLIGHT</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 800, color: "#051A2E", margin: "0 0 12px 0", lineHeight: 1.3 }}>
                    <Link href={`/blog/${featuredPost.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px 0", lineHeight: 1.6 }}>
                    {featuredPost.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: "#94A3B8" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#FF6B1A", fontWeight: 700 }}>
                      <ShieldCheck size={16} /> Mazuma Tax &amp; Advisory
                    </span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div style={{ position: "relative", height: "100%", minHeight: 260 }}>
                  <img src={featuredPost.image} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Latest Insights Grid */}
        <div className="articles-grid-3cols">
          {gridPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
