"use client";

import React from "react";
import { Globe, CheckCircle2, AlertCircle } from "lucide-react";

interface SEOSettingsProps {
  title: string;
  slug: string;
  excerpt: string;
  seoTitle: string;
  setSeoTitle: (val: string) => void;
  metaDescription: string;
  setMetaDescription: (val: string) => void;
  focusKeyword: string;
  setFocusKeyword: (val: string) => void;
  canonicalUrl: string;
  setCanonicalUrl: (val: string) => void;
  ogTitle: string;
  setOgTitle: (val: string) => void;
  ogDescription: string;
  setOgDescription: (val: string) => void;
  ogImage: string;
  setOgImage: (val: string) => void;
  twitterImage: string;
  setTwitterImage: (val: string) => void;
  robotsIndex: "index" | "noindex";
  setRobotsIndex: (val: "index" | "noindex") => void;
  robotsFollow: "follow" | "nofollow";
  setRobotsFollow: (val: "follow" | "nofollow") => void;
  onNext: () => void;
  onBack: () => void;
}

export default function SEOSettings({
  title,
  slug,
  excerpt,
  seoTitle,
  setSeoTitle,
  metaDescription,
  setMetaDescription,
  focusKeyword,
  setFocusKeyword,
  canonicalUrl,
  setCanonicalUrl,
  ogTitle,
  setOgTitle,
  ogDescription,
  setOgDescription,
  ogImage,
  setOgImage,
  twitterImage,
  setTwitterImage,
  robotsIndex,
  setRobotsIndex,
  robotsFollow,
  setRobotsFollow,
  onNext,
  onBack
}: SEOSettingsProps) {
  // Calculate dynamic SEO Score (0 - 100)
  let score = 0;
  if (seoTitle.length >= 30 && seoTitle.length <= 60) score += 25;
  else if (seoTitle.length > 0) score += 10;

  if (metaDescription.length >= 100 && metaDescription.length <= 160) score += 25;
  else if (metaDescription.length > 0) score += 10;

  if (focusKeyword.trim().length > 0) score += 25;
  if (canonicalUrl.trim().length > 0) score += 25;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 850 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: "#051A2E", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
          <Globe size={18} style={{ color: "#FF6B1A" }} />
          <span>Search Engine Optimization (SEO) &amp; Google Snippets</span>
        </h3>

        {/* SEO Score Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: score >= 75 ? "#DCFCE7" : "#FEF3C7", padding: "6px 14px", borderRadius: 99, border: `1px solid ${score >= 75 ? "#16A34A" : "#D97706"}` }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: score >= 75 ? "#15803D" : "#B45309" }}>SEO Score:</span>
          <strong style={{ fontSize: 14, fontWeight: 900, color: score >= 75 ? "#15803D" : "#B45309" }}>{score}/100</strong>
        </div>
      </div>

      {/* Google Search Live Preview Card */}
      <div style={{ background: "#ffffff", padding: 24, borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Globe size={16} style={{ color: "#2563EB" }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#051A2E" }}>Google Search Snippet Live Preview</span>
        </div>

        <div style={{ background: "#ffffff", padding: "16px 20px", borderRadius: 12, border: "1px solid #CBD5E1", fontFamily: "Arial, sans-serif" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#051A2E", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900 }}>M</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, color: "#202124", fontWeight: 400 }}>Mazuma India</span>
              <span style={{ fontSize: 12, color: "#4d5156" }}>https://mazumaindia.com › blog › {slug || "gst-registration-guide"}</span>
            </div>
          </div>
          <h3 style={{ fontSize: 20, color: "#1a0dab", margin: "4px 0 6px 0", fontWeight: 400, textDecoration: "none" }}>
            {seoTitle || title || "Complete GST Registration Guide 2026"}
          </h3>
          <p style={{ fontSize: 14, color: "#4d5156", margin: 0, lineHeight: 1.5 }}>
            {metaDescription || excerpt || "Comprehensive statutory guide on GST registration threshold limits, mandatory documents, return filing steps, and CA compliance..."}
          </p>
        </div>
      </div>

      {/* SEO Form Controls */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#051A2E" }}>SEO TITLE</label>
            <span style={{ fontSize: 11, color: seoTitle.length > 60 ? "#DC2626" : "#64748B" }}>
              {seoTitle.length}/60 chars
            </span>
          </div>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            placeholder="Title tag displayed on Google Search Results..."
            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#051A2E", marginBottom: 4 }}>
            FOCUS KEYWORD
          </label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            placeholder="e.g. GST Registration 2026"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
          />
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#051A2E" }}>META DESCRIPTION</label>
          <span style={{ fontSize: 11, color: metaDescription.length > 160 ? "#DC2626" : "#64748B" }}>
            {metaDescription.length}/160 chars
          </span>
        </div>
        <textarea
          rows={3}
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Snippet summary for Google search results (150-160 characters)..."
          style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#051A2E", marginBottom: 4 }}>
          CANONICAL URL
        </label>
        <input
          type="text"
          value={canonicalUrl}
          onChange={(e) => setCanonicalUrl(e.target.value)}
          placeholder="https://mazumaindia.com/blog/..."
          style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
        />
      </div>

      <div style={{ background: "#F8FAFC", padding: 20, borderRadius: 14, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 16 }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, color: "#051A2E", margin: 0 }}>Social Sharing (OpenGraph / Twitter) &amp; Robots</h4>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>OG TITLE</label>
            <input type="text" value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder="OpenGraph Title" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>OG IMAGE URL</label>
            <input type="text" value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder="OpenGraph Image URL" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>TWITTER IMAGE</label>
            <input type="text" value={twitterImage} onChange={(e) => setTwitterImage(e.target.value)} placeholder="Twitter Card Image URL" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>ROBOTS INDEXING</label>
            <select value={robotsIndex} onChange={(e) => setRobotsIndex(e.target.value as any)} style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12, background: "#fff" }}>
              <option value="index">Index</option>
              <option value="noindex">NoIndex</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>ROBOTS FOLLOWING</label>
            <select value={robotsFollow} onChange={(e) => setRobotsFollow(e.target.value as any)} style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12, background: "#fff" }}>
              <option value="follow">Follow</option>
              <option value="nofollow">NoFollow</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <button type="button" onClick={onBack} style={{ padding: "10px 20px", borderRadius: 8, background: "#E2E8F0", color: "#475569", fontWeight: 600, border: "none", cursor: "pointer" }}>← Back: Blog Info</button>
        <button type="button" onClick={onNext} style={{ padding: "10px 24px", borderRadius: 8, background: "#051A2E", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}>Next: Content Builder →</button>
      </div>
    </div>
  );
}
