import React from "react";
import Link from "next/link";
import { Search, Download, PhoneCall, ArrowRight } from "lucide-react";
import { Article } from "@/data/articles";

interface BlogSidebarProps {
  recentPosts: Article[];
  popularPosts: Article[];
  categoryCounts: Record<string, number>;
}

export default function BlogSidebar({
  recentPosts,
  popularPosts,
  categoryCounts,
}: BlogSidebarProps) {
  return (
    <aside className="article-right-sidebar">
      {/* 1. Search Box Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Search Articles</h3>
        <div className="sidebar-search-box">
          <Search size={16} className="sidebar-search-icon" />
          <input
            type="text"
            placeholder="Search tax, GST..."
            className="sidebar-search-input"
          />
        </div>
      </div>

      {/* 2. Categories Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="sidebar-categories-list">
          {Object.entries(categoryCounts).map(([catName, count]) => (
            <li key={catName}>
              <Link href={`/blog/category/${catName.toLowerCase().replace(/ /g, "-")}`}>
                <span>{catName}</span>
                <span className="category-count-badge">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Recent Posts Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Recent Posts</h3>
        {recentPosts.length > 0 ? (
          <div className="sidebar-posts-list">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="sidebar-post-item">
                <img src={post.image} alt={post.imageAlt || post.title} className="sidebar-post-thumb" />
                <div>
                  <h4 className="sidebar-post-title">{post.title}</h4>
                  <span className="sidebar-post-date">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: 13, color: "#94A3B8", margin: 0, fontStyle: "italic" }}>No recent posts available.</p>
        )}
      </div>

      {/* 4. Popular Posts Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Guides</h3>
        {popularPosts.length > 0 ? (
          <div className="sidebar-posts-list">
            {popularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="sidebar-post-item">
                <img src={post.image} alt={post.imageAlt || post.title} className="sidebar-post-thumb" />
                <div>
                  <h4 className="sidebar-post-title">{post.title}</h4>
                  <span className="sidebar-post-date">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: 13, color: "#94A3B8", margin: 0, fontStyle: "italic" }}>No popular guides available.</p>
        )}
      </div>

      {/* 5. Download Brochure CTA Card */}
      <div className="sidebar-widget sidebar-brochure-card">
        <Download size={28} className="brochure-icon" />
        <h4>2026 Tax &amp; Corporate Compliance Guide</h4>
        <p>Download our free PDF guide detailing all filing due dates, tax brackets &amp; ROC compliance rules.</p>
        <a href="/#contact-us" className="brochure-download-btn">
          Download Free PDF <Download size={15} />
        </a>
      </div>

      {/* 6. Book Consultation CTA Card */}
      <div className="sidebar-widget sidebar-consultation-card">
        <PhoneCall size={28} className="consultation-icon" />
        <h4>Need Personal Advisory?</h4>
        <p>Speak directly with our senior CA &amp; corporate compliance experts.</p>
        <Link href="/#contact-us" className="sidebar-consultation-btn">
          Book Consultation <ArrowRight size={15} />
        </Link>
      </div>
    </aside>
  );
}
