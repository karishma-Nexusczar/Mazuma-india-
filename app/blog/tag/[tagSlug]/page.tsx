import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, Article } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { ArrowLeft, Tag as TagIcon } from "lucide-react";

interface TagPageProps {
  params: {
    tagSlug: string;
  };
}

function formatTagFromSlug(slug: string): string {
  const map: Record<string, string> = {
    "income-tax": "Income Tax",
    "startup-tax": "Startup Tax",
    "tds-filing": "TDS Filing",
    "gst-returns": "GST Returns",
    "pvt-ltd": "Pvt Ltd",
    "company-incorporation": "Company Incorporation",
    "roc-filing": "ROC Filing",
    "bookkeeping": "Bookkeeping",
    "trademark": "Trademark",
    "msme-udyam": "MSME Udyam",
  };

  return map[slug.toLowerCase()] || slug.replace(/-/g, " ").toUpperCase();
}

export async function generateStaticParams() {
  const tags = ["income-tax", "startup-tax", "tds-filing", "gst-returns", "pvt-ltd", "company-incorporation", "roc-filing", "bookkeeping", "trademark", "msme-udyam"];
  return tags.map((tagSlug) => ({
    tagSlug,
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const tagName = formatTagFromSlug(params.tagSlug);
  return {
    title: `Articles tagged with "${tagName}" | Mazuma India Blog`,
    description: `Read all expert guides and regulatory updates tagged under ${tagName} on Mazuma India.`,
  };
}

export default function TagBlogPage({ params }: TagPageProps) {
  const tagName = formatTagFromSlug(params.tagSlug);

  const taggedArticles = articles.filter((a) =>
    a.tags.some(
      (t) =>
        t.toLowerCase() === tagName.toLowerCase() ||
        t.toLowerCase().replace(/ /g, "-") === params.tagSlug.toLowerCase()
    )
  );

  return (
    <div className="blog-page-wrapper">
      <Header />

      {/* Tag Hero Banner */}
      <section className="blog-hero-section">
        <div className="blog-hero-shell">
          <Link href="/blog" className="back-to-blogs-link" style={{ color: "#94A3B8" }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
          <div className="blog-hero-badge">
            <TagIcon size={14} />
            <span>TAG ARCHIVE</span>
          </div>
          <h1 className="blog-hero-title">Articles Tagged: #{tagName}</h1>
        </div>
      </section>

      {/* Tag Articles Grid */}
      <div className="blog-listing-shell">
        <div className="all-blogs-header-row">
          <h2 className="all-blogs-section-title">
            Tag Results ({taggedArticles.length})
          </h2>
        </div>

        {taggedArticles.length > 0 ? (
          <div className="articles-grid-3cols">
            {taggedArticles.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <h3>No Articles Found</h3>
            <p>No articles tagged with "{tagName}" yet.</p>
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
