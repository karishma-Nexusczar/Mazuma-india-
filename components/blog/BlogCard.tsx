import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Article } from "@/data/articles";

interface BlogCardProps {
  post: Article;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="article-redesign-card">
      <Link href={`/blog/${post.slug}`} className="article-card-link-wrapper">
        {/* Cover Image */}
        <div className="article-image-box">
          <img src={post.image} alt={post.imageAlt || post.title} className="article-card-img" />
          <span className="article-category-badge">{post.category}</span>
        </div>

        {/* Card Body */}
        <div className="article-card-body">
          <h3 className="article-card-title">{post.title}</h3>

          <p className="article-card-excerpt">{post.excerpt}</p>

          {/* Corporate Trust Badge (No personal author / user displayed) */}
          <div className="card-trust-tag-row">
            <ShieldCheck size={13} className="trust-shield-icon" />
            <span className="trust-tag-text">Mazuma Tax &amp; Advisory</span>
          </div>

          {/* Published Date & Reading Time */}
          <div className="article-meta-row">
            <span className="meta-item">
              <Calendar size={13} className="meta-icon" />
              <span>{post.date}</span>
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Clock size={13} className="meta-icon" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Read More Link */}
          <div className="card-action-row">
            <span className="card-read-more-btn">
              Read Full Guide <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
