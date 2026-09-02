"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import { Search, Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight, X, ShieldCheck, Sparkles, Tag } from "lucide-react";

const CATEGORIES = [
  "All",
  "Income Tax",
  "GST",
  "Company Registration",
  "ROC",
  "Accounting",
  "Trademark",
  "MSME"
] as const;

const ITEMS_PER_PAGE = 6;

function BlogListingContent() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    const loadArticles = () => setArticlesList(getStoredArticles());
    loadArticles();
    window.addEventListener("mazuma_articles_updated", loadArticles);
    window.addEventListener("storage", loadArticles);
    return () => {
      window.removeEventListener("mazuma_articles_updated", loadArticles);
      window.removeEventListener("storage", loadArticles);
    };
  }, []);

  // Featured article is the first featured or first article
  const featuredArticle = useMemo(() => {
    return articlesList.find((a) => a.featured) || articlesList[0];
  }, [articlesList]);

  const filteredArticles = useMemo(() => {
    return articlesList.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [articlesList, searchQuery, selectedCategory]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mazuma India Tax & Business Advisory Blog",
    description: "Official guides, regulatory tax updates, and strategic compliance insights for Indian businesses.",
    url: "https://mazumaindia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Mazuma India",
      logo: "https://mazumaindia.com/mazuma-logo-transparent.png"
    },
    blogPost: articlesList.map(art => ({
      "@type": "BlogPosting",
      headline: art.title,
      description: art.metaDescription,
      datePublished: art.date,
      url: art.canonicalUrl,
      image: art.image
    }))
  };

  return (
    <div className="blog-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      <Header />

      {/* Full Background Image Clear Hero Section */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 26, 46, 0.45), rgba(5, 26, 46, 0.55)), url('/blog-hero-desk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        padding: "95px 0 75px",
        textAlign: "center",
        position: "relative"
      }}>
        <div className="section-shell" style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#FF6B1A",
            padding: "8px 22px",
            borderRadius: 99,
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 800,
            marginBottom: 20,
            border: "1px solid #FF8542",
            letterSpacing: 0.8,
            boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)"
          }}>
            <BookOpen size={15} style={{ color: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>MAZUMA KNOWLEDGE & COMPLIANCE HUB</span>
          </div>

          <h1 style={{
            fontSize: "clamp(30px, 3.6vw, 48px)",
            fontWeight: 900,
            color: "#ffffff",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
          }}>
            Latest Tax, GST & Business Advisory Insights
          </h1>
          
          <p style={{
            fontSize: 17,
            color: "#F1F5F9",
            margin: "0 auto",
            lineHeight: 1.6,
            maxWidth: 680,
            fontWeight: 500,
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"
          }}>
            Daily statutory compliance guides, GST updates, MCA corporate law insights, and expert financial advice for Indian startups & enterprises.
          </p>
        </div>
      </section>

      {/* Breadcrumbs Bar */}
      <div style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "12px 0", fontSize: 13, color: "#64748B" }}>
        <div className="section-shell">
          <span style={{ color: "#FF6B1A", fontWeight: 700 }}>HOME</span> &nbsp;/&nbsp; <strong style={{ color: "#051A2E" }}>BLOG</strong>
        </div>
      </div>

      {/* Main 2-Column Shell Container */}
      <div className="section-shell" style={{ padding: "40px 0 80px" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 36,
          alignItems: "start"
        }}>
          {/* ==========================================
              LEFT COLUMN: PUBLICATIONS & ARTICLES (68%)
             ========================================== */}
          <div style={{ flex: "1 1 600px", minWidth: 0 }}>
            {/* Column Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24, borderBottom: "2px solid #E2E8F0", paddingBottom: 14 }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#FF6B1A", textTransform: "uppercase", letterSpacing: 1.2, display: "block", marginBottom: 4 }}>
                  PUBLICATIONS
                </span>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#051A2E", margin: 0 }}>
                  {selectedCategory !== "All" ? `${selectedCategory} Guides` : "All Published Articles"}
                </h2>
              </div>
              <span style={{ background: "#FFF4EE", color: "#FF6B1A", padding: "4px 12px", borderRadius: 99, fontSize: 13, fontWeight: 800 }}>
                {filteredArticles.length} {filteredArticles.length === 1 ? "POST" : "POSTS"}
              </span>
            </div>

            {/* Articles List */}
            {/* Articles List (2 cards per row) */}
            {paginatedArticles.length > 0 ? (
              <div className="articles-grid-2cols">
                {paginatedArticles.map((post) => (
                  <div key={post.id} style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 8px 24px rgba(5,26,46,0.04)",
                    transition: "transform 0.2s ease, boxShadow 0.2s ease"
                  }}>
                    {/* Featured Image */}
                    <div style={{ position: "relative", width: "100%", height: 210, overflow: "hidden", background: "#051A2E" }}>
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <span style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: "#FF6B1A",
                        color: "#ffffff",
                        padding: "5px 12px",
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 800,
                        boxShadow: "0 4px 12px rgba(255,107,26,0.4)"
                      }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                      <div>
                        {/* Author Meta Row */}
                        <div style={{ fontSize: 12, color: "#64748B", marginBottom: 10, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                          <span style={{ fontWeight: 700, color: "#051A2E" }}>Mazuma Advisory</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: 17, fontWeight: 800, color: "#051A2E", margin: "0 0 10px 0", lineHeight: 1.35 }}>
                          <Link href={`/blog/${post.slug}`} style={{ color: "#051A2E", textDecoration: "none" }}>
                            {post.title}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.55, margin: "0 0 16px 0", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Bottom Read Button Row */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #F1F5F9", marginTop: "auto" }}>
                        <span style={{ background: "#F1F5F9", color: "#475569", padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>
                          {post.category}
                        </span>

                        <Link href={`/blog/${post.slug}`} style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "8px 18px",
                          borderRadius: 8,
                          background: "#FF6B1A",
                          color: "#ffffff",
                          fontSize: 12,
                          fontWeight: 800,
                          textDecoration: "none",
                          boxShadow: "0 4px 14px rgba(255,107,26,0.3)"
                        }}>
                          <span>READ POST</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: "#ffffff", padding: "60px 30px", borderRadius: 20, border: "1px solid #E2E8F0", textAlign: "center" }}>
                <BookOpen size={42} style={{ color: "#CBD5E1", marginBottom: 14 }} />
                <h3 style={{ fontSize: 20, color: "#051A2E", margin: "0 0 8px 0", fontWeight: 800 }}>
                  {articlesList.length === 0 ? "No Articles Published Yet" : "No Articles Match Your Filter"}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px 0" }}>
                  {articlesList.length === 0
                    ? "Articles published via Admin CMS will automatically appear here."
                    : "Try searching with different keywords or select 'All Topics' in the sidebar."}
                </p>
                {articlesList.length > 0 && (
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    style={{ padding: "10px 24px", borderRadius: 10, background: "#FF6B1A", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}
                  >
                    View All Articles
                  </button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 40 }}>
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  style={{ padding: "10px 18px", borderRadius: 10, background: "#F1F5F9", color: "#051A2E", fontWeight: 700, border: "none", cursor: "pointer", opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    style={{ padding: "10px 16px", borderRadius: 10, background: currentPage === pageNum ? "#FF6B1A" : "#F1F5F9", color: currentPage === pageNum ? "#ffffff" : "#051A2E", fontWeight: 800, border: "none", cursor: "pointer" }}
                  >
                    {pageNum}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  style={{ padding: "10px 18px", borderRadius: 10, background: "#F1F5F9", color: "#051A2E", fontWeight: 700, border: "none", cursor: "pointer", opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* ==========================================
              RIGHT COLUMN: SIDEBAR WIDGETS (32%)
             ========================================== */}
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Widget 1: SEARCH BY KEYWORDS */}
            <div style={{ background: "#ffffff", padding: "24px 28px", borderRadius: 20, border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(5,26,46,0.03)" }}>
              <h4 style={{ fontSize: 15, fontWeight: 800, color: "#051A2E", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.5 }}>
                <Search size={16} style={{ color: "#FF6B1A" }} />
                <span>SEARCH BY KEYWORDS</span>
              </h4>
              <div style={{ position: "relative", marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="Search by keywords..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    borderRadius: 12,
                    border: "1px solid #CBD5E1",
                    background: "#F8FAFC",
                    fontSize: 14,
                    color: "#051A2E",
                    outline: "none"
                  }}
                />
                <Search size={16} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
              </div>

              {/* Dynamic Keywords & Tags Pills */}
              {Array.from(new Set(articlesList.flatMap((art) => [...(art.tags || []), ...(art.focusKeywords || []), ...(art.focusKeyword ? art.focusKeyword.split(",").map(k => k.trim()) : [])]).filter(Boolean))).length > 0 && (
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#64748B", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Focus Keywords &amp; Tags:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {Array.from(new Set(articlesList.flatMap((art) => [...(art.tags || []), ...(art.focusKeywords || []), ...(art.focusKeyword ? art.focusKeyword.split(",").map(k => k.trim()) : [])]).filter(Boolean))).map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => {
                          setSearchQuery(kw);
                          setSelectedCategory("All");
                        }}
                        style={{
                          padding: "5px 10px",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          border: searchQuery === kw ? "1px solid #FF6B1A" : "1px solid #E2E8F0",
                          background: searchQuery === kw ? "#FFF4EE" : "#F8FAFC",
                          color: searchQuery === kw ? "#FF6B1A" : "#475569",
                          cursor: "pointer"
                        }}
                      >
                        #{kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Widget 2: FILTER BY TAG */}
            <div style={{ background: "#ffffff", padding: "24px 28px", borderRadius: 20, border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(5,26,46,0.03)" }}>
              <h4 style={{ fontSize: 15, fontWeight: 800, color: "#051A2E", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.5 }}>
                <Tag size={16} style={{ color: "#FF6B1A" }} />
                <span>FILTER BY TAG</span>
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategorySelect(cat)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        background: isActive ? "#FF6B1A" : "#F8FAFC",
                        color: isActive ? "#ffffff" : "#475569",
                        boxShadow: isActive ? "0 4px 12px rgba(255,107,26,0.3)" : "none",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {cat === "All" ? "All Topics" : cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: RECENT POSTS */}
            {articlesList.length > 0 && (
              <div style={{ background: "#ffffff", padding: "24px 28px", borderRadius: 20, border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(5,26,46,0.03)" }}>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: "#051A2E", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.5 }}>
                  <BookOpen size={16} style={{ color: "#FF6B1A" }} />
                  <span>RECENT POSTS</span>
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {articlesList.slice(0, 3).map((art) => (
                    <Link href={`/blog/${art.slug}`} key={art.id} style={{ display: "flex", gap: 12, textDecoration: "none", color: "inherit", alignItems: "center" }}>
                      <img src={art.image} alt={art.title} style={{ width: 64, height: 54, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                      <div>
                        <h5 style={{ fontSize: 13, fontWeight: 700, color: "#051A2E", margin: "0 0 4px 0", lineHeight: 1.3 }}>{art.title}</h5>
                        <span style={{ fontSize: 11, color: "#94A3B8" }}>📅 {art.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Widget 4: SUBSCRIBE NEWSLETTER */}
            <div style={{
              background: "linear-gradient(135deg, #FF6B1A 0%, #E05300 100%)",
              color: "#ffffff",
              padding: "28px",
              borderRadius: 20,
              boxShadow: "0 10px 30px rgba(255,107,26,0.3)"
            }}>
              <h4 style={{ fontSize: 18, fontWeight: 900, color: "#ffffff", margin: "0 0 8px 0" }}>
                SUBSCRIBE
              </h4>
              <p style={{ fontSize: 13, color: "#FFE8DC", lineHeight: 1.5, margin: "0 0 18px 0" }}>
                Get the latest tax articles, compliance updates and advisory news directly in your inbox.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "none", outline: "none", fontSize: 13, marginBottom: 12 }}
                />
                <button
                  type="submit"
                  style={{ width: "100%", padding: "12px", borderRadius: 10, background: "#051A2E", color: "#ffffff", fontWeight: 800, fontSize: 13, border: "none", cursor: "pointer" }}
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function BlogListingPage() {
  return (
    <Suspense fallback={<div className="blog-page-wrapper" style={{ padding: 60, textAlign: "center", fontFamily: "sans-serif" }}>Loading Mazuma Knowledge Hub...</div>}>
      <BlogListingContent />
    </Suspense>
  );
}
