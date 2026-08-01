import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, Article } from "@/data/articles";
import { getStoredArticles } from "@/lib/blogStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { ArrowLeft, BookOpen } from "lucide-react";

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

const CATEGORY_SLUG_MAP: Record<string, Article["category"]> = {
  "income-tax": "Income Tax",
  "gst": "GST",
  "company-registration": "Company Registration",
  "roc": "ROC",
  "accounting": "Accounting",
  "trademark": "Trademark",
  "msme": "MSME",
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = CATEGORY_SLUG_MAP[params.categorySlug];
  if (!categoryName) {
    return { title: "Category Not Found | Mazuma India" };
  }

  return {
    title: `${categoryName} Articles & Guides | Mazuma India Blog`,
    description: `Explore all expert articles, compliance checklists, and guides on ${categoryName} for Indian startups and SMEs.`,
    keywords: [categoryName, `${categoryName} India`, "Mazuma India Tax", "Business Legal Guide"],
  };
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_SLUG_MAP).map((slug) => ({
    categorySlug: slug,
  }));
}

export default function CategoryBlogPage({ params }: CategoryPageProps) {
  const categoryName = CATEGORY_SLUG_MAP[params.categorySlug];
  if (!categoryName) {
    notFound();
  }

  const categoryArticles = articles.filter((a) => a.category === categoryName);

  return (
    <div className="blog-page-wrapper">
      <Header />

      {/* Category Hero Banner */}
      <section className="blog-hero-section">
        <div className="blog-hero-shell">
          <Link href="/blog" className="back-to-blogs-link" style={{ color: "#94A3B8" }}>
            <ArrowLeft size={16} /> Back to All Categories
          </Link>
          <div className="blog-hero-badge">
            <BookOpen size={15} />
            <span>CATEGORY ARCHIVE</span>
          </div>
          <h1 className="blog-hero-title">{categoryName} Articles</h1>
          <p className="blog-hero-subtitle">
            Browse all expert guides, compliance rules, and tactical advice specifically focused on {categoryName}.
          </p>
        </div>
      </section>

      {/* Category Articles Listing */}
      <div className="blog-listing-shell">
        <div className="all-blogs-header-row">
          <h2 className="all-blogs-section-title">
            Showing {categoryName} Articles
            <span className="blogs-count-badge">({categoryArticles.length})</span>
          </h2>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="articles-grid-3cols">
            {categoryArticles.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <h3>No Articles Found</h3>
            <p>No articles published in "{categoryName}" yet.</p>
            <Link href="/blog" className="reset-filter-btn">
              Browse All Articles
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
