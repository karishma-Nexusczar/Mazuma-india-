"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import SearchBar from "@/components/blog/SearchBar";
import BlogGrid from "@/components/blog/BlogGrid";
import { ArrowLeft } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [articlesList, setArticlesList] = useState<Article[]>([]);

  useEffect(() => {
    setArticlesList(getStoredArticles());
  }, []);

  const matchedArticles = useMemo(() => {
    if (!query.trim()) return articlesList;
    return articlesList.filter(
      (a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }, [articlesList, query]);

  return (
    <div className="blog-page-wrapper">
      <Header />

      <BlogHero title="Search Blog Articles" subtitle="Search across all Indian tax guides, GST compliance manuals, and incorporation checklists.">
        <SearchBar value={query} onChange={setQuery} />
      </BlogHero>

      <div className="blog-listing-shell">
        <div className="all-blogs-header-row">
          <Link href="/blog" className="back-to-blogs-link" style={{ margin: 0 }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
          <h2 className="all-blogs-section-title">
            Search Results ({matchedArticles.length})
          </h2>
        </div>

        {matchedArticles.length > 0 ? (
          <BlogGrid articles={matchedArticles} />
        ) : (
          <div className="blog-empty-state">
            <h3>No Articles Matched "{query}"</h3>
            <p>Try searching with broader terms like GST, Income Tax, ROC, or Company Registration.</p>
            <button type="button" onClick={() => setQuery("")} className="reset-filter-btn">
              Clear Search Query
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default function BlogSearchPage() {
  return (
    <Suspense fallback={<div className="blog-page-wrapper" style={{ padding: 40, textAlign: "center" }}>Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}

