import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Article } from "@/data/articles";

interface FeaturedPostProps {
  post: Article;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="blog-featured-card-wrapper">
      <div className="blog-featured-badge">FEATURED GUIDE</div>
      <Link href={`/blog/${post.slug}`} className="blog-featured-card">
        <div className="blog-featured-img-col">
          <img src={post.image} alt={post.imageAlt || post.title} />
          <span className="article-category-badge">{post.category}</span>
        </div>
        <div className="blog-featured-content-col">
          <h2 className="featured-card-title">{post.title}</h2>
          <p className="featured-card-excerpt">{post.excerpt}</p>

          <div className="card-trust-tag-row" style={{ marginBottom: 12 }}>
            <ShieldCheck size={14} className="trust-shield-icon" />
            <span className="trust-tag-text">Verified Tax Advisory • Mazuma India</span>
          </div>

          <div className="article-meta-row">
            <span className="meta-item"><Calendar size={14} className="meta-icon" />{post.date}</span>
            <span className="meta-divider">•</span>
            <span className="meta-item"><Clock size={14} className="meta-icon" />{post.readTime}</span>
            <span className="featured-read-link">
              Read Full Article <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
