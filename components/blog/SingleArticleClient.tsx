"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSEO from "@/components/blog/BlogSEO";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  Calendar,
  Clock,
  ChevronRight,
  Share2,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  MessageCircle,
  ChevronLeft,
  Tag
} from "lucide-react";

interface SingleArticleClientProps {
  slug: string;
}

export default function SingleArticleClient({ slug }: SingleArticleClientProps) {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setArticleList(getStoredArticles());
    setLoaded(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);

  if (!loaded) {
    return (
      <div className="blog-detail-page-wrapper" style={{ background: "#F8FAFC", minHeight: "100vh" }}>
        <Header />
        <div style={{ padding: "100px 20px", textAlign: "center", fontFamily: "var(--font-head)" }}>
          Loading Article...
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = articleList.findIndex((a) => a.slug === slug);
  const article = articleList[currentIndex];

  if (!article) {
    return (
      <div className="blog-detail-page-wrapper" style={{ background: "#F8FAFC", minHeight: "100vh" }}>
        <Header />
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#051A2E" }}>Article Not Found</h2>
          <p style={{ color: "#64748B", margin: "10px 0 20px 0" }}>The requested article does not exist or has been removed.</p>
          <Link href="/blog" style={{ padding: "10px 20px", borderRadius: 10, background: "#FF6B1A", color: "#ffffff", fontWeight: 700, textDecoration: "none" }}>
            Return to All Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const prevPost = currentIndex > 0 ? articleList[currentIndex - 1] : null;
  const nextPost = currentIndex < articleList.length - 1 ? articleList[currentIndex + 1] : null;

  return (
    <div className="blog-detail-page-wrapper">
      {/* Dynamic JSON-LD Schema (BlogPosting, Breadcrumbs, FAQs) */}
      <BlogSEO article={article} />

      <Header />

      {/* Automated Breadcrumb Bar: Home > Blog > Category > Article */}
      <div className="blog-breadcrumb-bar">
        <div className="blog-breadcrumb-shell">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="breadcrumb-arrow" />
          <Link href="/blog">Blog</Link>
          <ChevronRight size={14} className="breadcrumb-arrow" />
          <Link href={`/blog/category/${article.category.toLowerCase().replace(/ /g, "-")}`}>{article.category}</Link>
          <ChevronRight size={14} className="breadcrumb-arrow" />
          <span className="current-page">{article.title}</span>
        </div>
      </div>

      {/* Article Header Hero */}
      <section className="article-detail-hero">
        <div className="article-hero-shell">
          <span className="article-category-chip">{article.category}</span>
          <h1 className="article-main-title">{article.title}</h1>

          <div className="article-hero-meta-bar">
            <span className="meta-badge-item">
              <ShieldCheck size={14} style={{ color: "#FF6B1A" }} />
              <span>Verified Statutory Advisory</span>
            </span>
            <span className="meta-dot">•</span>
            <span className="meta-item">
              <Calendar size={14} className="meta-icon" />
              <span>Published: {article.date}</span>
            </span>
            <span className="meta-dot">•</span>
            <span className="meta-item">
              <Clock size={14} className="meta-icon" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Social Share Bar */}
      <div className="social-share-sticky-bar">
        <div className="share-bar-shell">
          <div className="share-label-row">
            <Share2 size={16} />
            <span>Share Guide:</span>
          </div>
          <div className="share-buttons-row">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " - " + (article.canonicalUrl || ""))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-whatsapp"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(article.canonicalUrl || "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-twitter"
              aria-label="Share on Twitter"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(article.canonicalUrl || "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-linkedin"
              aria-label="Share on LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/></svg> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="article-detail-body-shell" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          <main>
            {/* Featured Image with ALT */}
            <div className="article-hero-image-box" style={{ marginBottom: 28 }}>
              <img src={article.image} alt={article.imageAlt || article.title} className="article-hero-cover" style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 16 }} />
            </div>

            {/* Table of Contents (Auto-detected H2 & H3) */}
            <TableOfContents blocks={article.blocks} sections={article.content?.sections} />

            {/* Article Content Render */}
            <div className="article-content-wrapper">
              {article.blocks && article.blocks.length > 0 ? (
                article.blocks.map((b, bIdx) => {
                  if (b.type === "intro") {
                    return <p key={b.id} className="article-lead-paragraph">{b.text}</p>;
                  }
                  if (b.type === "heading") {
                    return <h2 key={b.id} id={`heading-${bIdx}`} className="article-section-heading" style={{ marginTop: 28 }}>{b.text}</h2>;
                  }
                  if (b.type === "paragraph") {
                    return <p key={b.id} className="article-body-text">{b.text}</p>;
                  }
                  if (b.type === "checklist") {
                    return (
                      <div key={b.id} className="article-checklist-box">
                        <h3 className="checklist-heading">Key Checklist Items</h3>
                        <ul className="article-bullet-list">
                          {b.items?.map((item, i) => (
                            <li key={i}>
                              <CheckCircle2 size={16} className="check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (b.type === "image" && b.imageUrl) {
                    return (
                      <div key={b.id} style={{ margin: "28px 0", textAlign: "center" }}>
                        <img src={b.imageUrl} alt={b.caption || article.title} style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 14 }} />
                        {b.caption && <span style={{ display: "block", fontSize: 13, color: "#64748B", marginTop: 8, fontStyle: "italic" }}>{b.caption}</span>}
                      </div>
                    );
                  }
                  if (b.type === "table" && b.tableHeaders) {
                    return (
                      <div key={b.id} style={{ margin: "28px 0", overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #CBD5E1", fontSize: 14 }}>
                          <thead>
                            <tr style={{ background: "#F1F5F9", color: "#051A2E", fontWeight: 700 }}>
                              {b.tableHeaders.map((th, i) => (
                                <th key={i} style={{ padding: "12px 16px", border: "1px solid #CBD5E1", textAlign: "left" }}>{th}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.tableRows?.map((row, rIdx) => (
                              <tr key={rIdx} style={{ borderBottom: "1px solid #E2E8F0" }}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} style={{ padding: "12px 16px", border: "1px solid #E2E8F0" }}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (b.type === "quote") {
                    return (
                      <div key={b.id} className="article-callout-box" style={{ borderLeftColor: "#FF6B1A", background: "#FFF4EE" }}>
                        <ShieldCheck size={20} className="callout-icon" style={{ color: "#FF6B1A" }} />
                        <div>
                          <strong>"{b.text}"</strong>
                          {b.author && <span style={{ display: "block", fontSize: 12, color: "#FF6B1A", marginTop: 4 }}>— {b.author}</span>}
                        </div>
                      </div>
                    );
                  }
                  if (b.type === "faq") {
                    return (
                      <div key={b.id} className="article-faq-item" style={{ background: "#F8FAFC", padding: 16, borderRadius: 10, marginBottom: 12 }}>
                        <h3 className="article-faq-q" style={{ margin: 0 }}>
                          <HelpCircle size={18} className="faq-q-icon" />
                          <span>{b.faqQuestion}</span>
                        </h3>
                        <p className="article-faq-a" style={{ marginTop: 8 }}>{b.faqAnswer}</p>
                      </div>
                    );
                  }
                  if (b.type === "conclusion") {
                    return (
                      <div key={b.id} className="article-conclusion-block">
                        <h3>Key Takeaways</h3>
                        <p>{b.text}</p>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <>
                  <p className="article-lead-paragraph">{article.content?.introduction}</p>

                  {article.content?.sections?.map((sec, idx) => (
                    <section key={idx} id={`section-${idx + 1}`} className="article-section-block">
                      <h2 className="article-section-heading">{sec.heading}</h2>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="article-body-text">{p}</p>
                      ))}

                      {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                        <div className="article-checklist-box">
                          <h3 className="checklist-heading">Key Checklist Items</h3>
                          <ul className="article-bullet-list">
                            {sec.bulletPoints.map((bp, bIdx) => (
                              <li key={bIdx}>
                                <CheckCircle2 size={16} className="check-icon" />
                                <span>{bp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  ))}
                </>
              )}
              {/* Article Focus Keywords & Tags */}
              {((article.focusKeywords && article.focusKeywords.length > 0) || (article.tags && article.tags.length > 0)) && (
                <div style={{ margin: "36px 0 20px 0", padding: "20px 24px", background: "#F8FAFC", borderRadius: 14, border: "1px solid #E2E8F0" }}>
                  <strong style={{ fontSize: 13, fontWeight: 800, color: "#051A2E", display: "flex", alignItems: "center", gap: 6, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    <Tag size={15} style={{ color: "#FF6B1A" }} />
                    <span>Focus Keywords &amp; Article Tags ({Array.from(new Set([...(article.focusKeywords || []), ...(article.tags || [])])).length})</span>
                  </strong>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {Array.from(new Set([...(article.focusKeywords || []), ...(article.tags || [])])).map((kw, i) => (
                      <Link
                        key={i}
                        href={`/blog/search?q=${encodeURIComponent(kw)}`}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 8,
                          background: "#ffffff",
                          border: "1px solid #CBD5E1",
                          color: "#051A2E",
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4
                        }}
                      >
                        #{kw}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Prev / Next Post Controls */}
              <div className="prev-next-posts-row" style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 40, borderTop: "1px solid #E2E8F0", paddingTop: 24 }}>
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`} className="prev-post-btn" style={{ textDecoration: "none", color: "#051A2E", display: "flex", alignItems: "center", gap: 8 }}>
                    <ChevronLeft size={16} />
                    <div>
                      <span style={{ fontSize: 11, color: "#64748B", display: "block" }}>Previous Article</span>
                      <strong style={{ fontSize: 13 }}>{prevPost.title}</strong>
                    </div>
                  </Link>
                ) : <div />}

                {nextPost ? (
                  <Link href={`/blog/${nextPost.slug}`} className="next-post-btn" style={{ textDecoration: "none", color: "#051A2E", display: "flex", alignItems: "center", gap: 8, textAlign: "right" }}>
                    <div>
                      <span style={{ fontSize: 11, color: "#64748B", display: "block" }}>Next Article</span>
                      <strong style={{ fontSize: 13 }}>{nextPost.title}</strong>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                ) : <div />}
              </div>

              {/* Corporate Advisory Verification Badge */}
              <div className="article-author-bio-card" style={{ background: "#F8FAFC", padding: 20, borderRadius: 14, border: "1px solid #E2E8F0", display: "flex", gap: 14, alignItems: "center", marginTop: 32 }}>
                <ShieldCheck size={36} style={{ color: "#FF6B1A", flexShrink: 0 }} />
                <div>
                  <h4 className="bio-author-name" style={{ margin: "0 0 4px 0", fontSize: 15, fontWeight: 800, color: "#051A2E" }}>Verified by Mazuma Tax & Advisory Experts</h4>
                  <p className="bio-author-desc" style={{ margin: 0, fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Published and systematically reviewed by senior Chartered Accountants and corporate legal specialists at Mazuma India for 100% statutory accuracy and regulatory compliance.</p>
                </div>
              </div>
            </div>
          </main>

          {/* Related Articles & Enterprise Services Component */}
          <RelatedPosts currentArticle={article} allArticles={articleList} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
