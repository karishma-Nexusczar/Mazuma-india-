"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import BlogCard from "@/components/blog/BlogCard";

export default function ArticlesSection() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);

  const loadArticles = () => {
    setArticlesList(getStoredArticles());
  };

  useEffect(() => {
    loadArticles();
    const handleUpdate = () => loadArticles();
    window.addEventListener("mazuma_articles_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("mazuma_articles_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const latestArticles = articlesList.slice(0, 3);

  return (
    <section className="articles-redesign-section" id="blog">
      <div className="articles-redesign-container">
        {/* Header */}
        <div className="articles-redesign-header">
          <div>
            <div className="articles-eyebrow-badge">
              <span className="badge-dot"></span>
              <span>INSIGHTS &amp; UPDATES</span>
            </div>
            <h2 className="articles-redesign-title">
              Latest Insights &amp; Resources
            </h2>
          </div>

          <Link href="/blog" className="articles-view-all-btn">
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* 3 Blog Cards Grid or Empty State */}
        {latestArticles.length > 0 ? (
          <div className="articles-grid-3cols">
            {latestArticles.map((post, idx) => (
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
        ) : (
          <div style={{ background: "#ffffff", borderRadius: 16, padding: "36px 20px", textAlign: "center", border: "1px dashed #CBD5E1" }}>
            <h3 style={{ fontSize: 18, color: "#0F2747", margin: "0 0 6px 0", fontWeight: 700 }}>No Articles Published Yet</h3>
            <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>Articles published via CMS will automatically appear here once published.</p>
          </div>
        )}
      </div>
    </section>
  );
}
