"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Article, ContentBlock } from "@/data/articles";
import { getStoredArticles, saveArticleToStore, deleteArticleFromStore } from "@/lib/blogStore";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Save,
  Globe,
  Tag as TagIcon,
  ShieldCheck,
  LayoutDashboard,
  HelpCircle,
  Calendar,
  Clock,
  Sparkles,
  Layers,
  Send,
  MoveUp,
  MoveDown,
  Quote,
  Table as TableIcon,
  Heading as HeadingIcon,
  Image as ImageIcon,
  CheckSquare,
  MessageSquare,
  Wand2,
  ExternalLink,
  Copy,
  AlertCircle,
  Lock,
  KeyRound,
  LogOut
} from "lucide-react";

const CATEGORIES = [
  "Income Tax",
  "GST",
  "Company Registration",
  "ROC",
  "Accounting",
  "Trademark",
  "MSME"
] as const;

const PRESET_IMAGES = [
  { name: "Tax & Finance", url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" },
  { name: "GST & Filing", url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80" },
  { name: "Corporate Office", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
  { name: "Legal Compliance", url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80" },
  { name: "Business Growth", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" },
];

export default function AdminBlogDashboard() {
  const ADMIN_PASSWORD = "Nexusczar@2026";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [activeView, setActiveView] = useState<"list" | "editor">("list");
  const [activeTab, setActiveTab] = useState<"info" | "seo" | "content" | "preview" | "publish">("info");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"All" | "published" | "draft">("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("mazuma_cms_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("mazuma_cms_auth", "true");
      }
      setPasswordError(null);
    } else {
      setPasswordError("Invalid Admin Password! Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("mazuma_cms_auth");
    }
  };

  // -------------------------------------------------------------
  // TAB 1: BLOG INFORMATION STATE
  // -------------------------------------------------------------
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<Article["category"]>("Income Tax");
  const [tagsInput, setTagsInput] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [publishDate, setPublishDate] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [featured, setFeatured] = useState(false);

  // -------------------------------------------------------------
  // TAB 2: SEO STATE
  // -------------------------------------------------------------
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [twitterImage, setTwitterImage] = useState("");
  const [robotsIndex, setRobotsIndex] = useState<"index" | "noindex">("index");
  const [robotsFollow, setRobotsFollow] = useState<"follow" | "nofollow">("follow");

  // -------------------------------------------------------------
  // TAB 3: BLOCK-BASED CONTENT BUILDER STATE
  // -------------------------------------------------------------
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  useEffect(() => {
    setArticlesList(getStoredArticles());
  }, []);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Helper: Auto generate slug from title
  const generateSlugFromTitle = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!editingId) {
      const generatedSlug = generateSlugFromTitle(val);
      setSlug(generatedSlug);
      setFocusKeyword(val);
      setSeoTitle(`${val} | Mazuma India`);
      setOgTitle(val);
      setCanonicalUrl(`https://mazumaindia.com/blog/${generatedSlug}`);
    }
  };

  const handleAutoGenerateSlug = () => {
    const generatedSlug = generateSlugFromTitle(title || "new-blog-post");
    setSlug(generatedSlug);
    if (!canonicalUrl) {
      setCanonicalUrl(`https://mazumaindia.com/blog/${generatedSlug}`);
    }
  };

  // -------------------------------------------------------------
  // BLOCK BUILDER ACTIONS
  // -------------------------------------------------------------
  const addBlock = (type: ContentBlock["type"]) => {
    const newId = `b-${Date.now()}`;
    let newBlock: ContentBlock = { id: newId, type };

    switch (type) {
      case "intro":
        newBlock.text = "Write your introduction overview paragraph here...";
        break;
      case "heading":
        newBlock.level = "h2";
        newBlock.text = "New Section Heading";
        break;
      case "paragraph":
        newBlock.text = "Write detailed section paragraph here...";
        break;
      case "checklist":
        newBlock.items = ["First key requirement", "Second key document", "Third compliance step"];
        break;
      case "image":
        newBlock.imageUrl = PRESET_IMAGES[0].url;
        newBlock.caption = "Section Infographic Preview";
        break;
      case "quote":
        newBlock.text = "Important compliance warning or statutory advisory statement.";
        newBlock.author = "Senior Chartered Accountant, Mazuma India";
        break;
      case "table":
        newBlock.tableHeaders = ["Compliance Return", "Due Date", "Penalty Rate"];
        newBlock.tableRows = [
          ["GSTR-3B Return", "20th of every month", "₹50 / day late fee"],
          ["ITR Return Filing", "July 31 annually", "₹5,000 under Sec 234F"]
        ];
        break;
      case "faq":
        newBlock.faqQuestion = "Sample Frequently Asked Question?";
        newBlock.faqAnswer = "Detailed step-by-step answer explaining statutory compliance.";
        break;
      case "conclusion":
        newBlock.text = "Key takeaway summary and recommendation for business owners.";
        break;
    }

    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, updatedFields: Partial<ContentBlock>) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, ...updatedFields } : b)));
  };

  const removeBlock = (id: string) => {
    if (blocks.length <= 1) {
      alert("At least one content block is required!");
      return;
    }
    setBlocks(blocks.filter((b) => b.id !== id));
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    const copy = [...blocks];
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;
    setBlocks(copy);
  };

  // -------------------------------------------------------------
  // EDIT & RESET HANDLERS
  // -------------------------------------------------------------
  const handleEdit = (article: Article) => {
    setEditingId(article.id);
    setTitle(article.title);
    setSlug(article.slug);
    setCategory(article.category);
    setTagsInput(article.tags ? article.tags.join(", ") : "");
    setFeaturedImage(article.image);
    setExcerpt(article.excerpt);
    setSummary(article.summary || article.excerpt);
    setStatus(article.status || "published");
    setPublishDate(article.date);
    setReadTime(article.readTime || "5 min read");
    setFeatured(article.featured ?? true);

    setSeoTitle(article.seoTitle || article.title);
    setMetaDescription(article.metaDescription || article.excerpt);
    setFocusKeyword(article.focusKeywords && article.focusKeywords.length > 0 ? article.focusKeywords.join(", ") : (article.focusKeyword || article.title));
    setCanonicalUrl(article.canonicalUrl || `https://mazumaindia.com/blog/${article.slug}`);
    setOgTitle(article.ogTitle || article.title);
    setOgDescription(article.ogDescription || article.excerpt);
    setOgImage(article.ogImage || article.image);
    setTwitterImage(article.twitterImage || article.image);
    setRobotsIndex(article.robotsIndex || "index");
    setRobotsFollow(article.robotsFollow || "follow");

    if (article.blocks && article.blocks.length > 0) {
      setBlocks(article.blocks);
    } else {
      // Reconstruct blocks from standard content sections
      const reconstructed: ContentBlock[] = [];
      if (article.content?.introduction) {
        reconstructed.push({ id: "b-intro", type: "intro", text: article.content.introduction });
      }
      article.content?.sections?.forEach((sec, sIdx) => {
        reconstructed.push({ id: `b-h-${sIdx}`, type: "heading", level: "h2", text: sec.heading });
        sec.paragraphs?.forEach((p, pIdx) => {
          reconstructed.push({ id: `b-p-${sIdx}-${pIdx}`, type: "paragraph", text: p });
        });
        if (sec.bulletPoints && sec.bulletPoints.length > 0) {
          reconstructed.push({ id: `b-c-${sIdx}`, type: "checklist", items: sec.bulletPoints });
        }
      });
      if (article.content?.conclusion) {
        reconstructed.push({ id: "b-concl", type: "conclusion", text: article.content.conclusion });
      }
      setBlocks(reconstructed.length > 0 ? reconstructed : blocks);
    }

    setActiveTab("info");
    setActiveView("editor");
  };

  const handleResetForm = () => {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setCategory("Income Tax");
    setTagsInput("");
    setFeaturedImage("");
    setExcerpt("");
    setSummary("");
    setStatus("published");
    setPublishDate("");
    setReadTime("5 min read");
    setFeatured(false);

    setSeoTitle("");
    setMetaDescription("");
    setFocusKeyword("");
    setCanonicalUrl("");
    setOgTitle("");
    setOgDescription("");
    setOgImage("");
    setTwitterImage("");
    setRobotsIndex("index");
    setRobotsFollow("follow");

    setBlocks([]);
  };

  // Save / Submit Handler
  const handleSaveArticle = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!title.trim() || !slug.trim() || !excerpt.trim()) {
      alert("Please fill in Blog Title, Slug, and Excerpt in Tab 1!");
      setActiveTab("info");
      return;
    }

    const todayDate = publishDate || new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    const parsedFocusKeywords = focusKeyword
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);

    const parsedTags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Extract intro, sections, FAQs, and conclusion from blocks for full backward compatibility
    const introBlock = blocks.find((b) => b.type === "intro");
    const conclusionBlock = blocks.find((b) => b.type === "conclusion");

    // Group heading + paragraphs for standard content view
    const constructedSections: any[] = [];
    let currentSection: any = null;

    blocks.forEach((b) => {
      if (b.type === "heading") {
        if (currentSection) constructedSections.push(currentSection);
        currentSection = { heading: b.text || "Section", paragraphs: [], bulletPoints: [] };
      } else if (b.type === "paragraph" && currentSection) {
        currentSection.paragraphs.push(b.text || "");
      } else if (b.type === "checklist" && currentSection) {
        currentSection.bulletPoints = b.items || [];
      }
    });
    if (currentSection) constructedSections.push(currentSection);

    // Extract FAQs from blocks
    const extractedFaqs = blocks
      .filter((b) => b.type === "faq" && b.faqQuestion && b.faqAnswer)
      .map((b, idx) => ({ id: `faq-${idx + 1}`, question: b.faqQuestion!, answer: b.faqAnswer! }));

    const finalImage = featuredImage.trim() || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80";

    const newArticle: Article = {
      id: editingId || `post-${Date.now()}`,
      title: title.trim(),
      slug: slug.trim(),
      seoTitle: seoTitle.trim() || `${title} | Mazuma India`,
      metaDescription: metaDescription.trim() || excerpt.trim(),
      focusKeyword: focusKeyword.trim() || title.trim(),
      focusKeywords: parsedFocusKeywords.length > 0 ? parsedFocusKeywords : [title.trim()],
      canonicalUrl: canonicalUrl.trim() || `https://mazumaindia.com/blog/${slug.trim()}`,
      image: finalImage,
      ogTitle: ogTitle || title,
      ogDescription: ogDescription || excerpt,
      ogImage: ogImage || finalImage,
      twitterImage: twitterImage || finalImage,
      robotsIndex: robotsIndex,
      robotsFollow: robotsFollow,
      imageAlt: title.trim(),
      category: category,
      tags: parsedTags.length > 0 ? parsedTags : [category, "Tax Compliance"],
      date: todayDate,
      updatedDate: todayDate,
      readTime: readTime || "5 min read",
      excerpt: excerpt.trim(),
      summary: summary.trim() || excerpt.trim(),
      status: status,
      featured: featured,
      blocks: blocks,
      faqs: extractedFaqs.length > 0 ? extractedFaqs : undefined,
      content: {
        introduction: introBlock?.text || excerpt.trim(),
        sections: constructedSections.length > 0 ? constructedSections : [
          {
            heading: "1. Statutory Advisory & Overview",
            paragraphs: [excerpt.trim()],
          }
        ],
        conclusion: conclusionBlock?.text || "Consult Mazuma India Chartered Accountants for compliance advisory."
      }
    };

    const updatedList = saveArticleToStore(newArticle);
    setArticlesList(updatedList);
    triggerNotification(editingId ? "Article Updated Successfully!" : "New Article Published Live!");
    handleResetForm();
    setActiveView("list");
  };

  const handleDelete = (id: string, postTitle: string) => {
    if (confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      const updated = deleteArticleFromStore(id);
      setArticlesList(updated);
      triggerNotification("Article Deleted!");
    }
  };

  const filteredArticles = useMemo(() => {
    return articlesList
      .filter((art) => {
        const matchesCategory =
          selectedCategoryFilter === "All" || art.category === selectedCategoryFilter;
        const matchesStatus =
          statusFilter === "All" || (art.status || "published") === statusFilter;
        const matchesSearch =
          searchQuery.trim() === "" ||
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [articlesList, searchQuery, selectedCategoryFilter, statusFilter, sortBy]);

  if (!isAuthenticated) {
    return (
      <div className="admin-blog-page-wrapper" style={{ background: "#F8FAFC", minHeight: "100vh" }}>
        <Header />

        <div style={{
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "var(--font-head)"
        }}>
          <div style={{
            background: "#ffffff",
            width: "100%",
            maxWidth: 460,
            padding: "36px 32px",
            borderRadius: 20,
            border: "1px solid #E2E8F0",
            boxShadow: "0 10px 40px rgba(5,26,46,0.08)",
            textAlign: "center"
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#FFF4EE",
              color: "#FF6B1A",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16
            }}>
              <Lock size={26} />
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#051A2E", margin: "0 0 8px 0" }}>
              Admin CMS Access Gate
            </h2>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px 0", lineHeight: 1.5 }}>
              Enter the authorized password to access the Blog &amp; SEO Content Studio.
            </p>

            <form onSubmit={handlePasswordSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <input
                  type="password"
                  required
                  placeholder="Enter Password..."
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(null);
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: passwordError ? "1.5px solid #DC2626" : "1px solid #CBD5E1",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
                {passwordError && (
                  <span style={{ display: "block", fontSize: 12, color: "#DC2626", fontWeight: 600, marginTop: 6, textAlign: "left" }}>
                    {passwordError}
                  </span>
                )}
              </div>

              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: 12,
                  background: "#FF6B1A",
                  color: "#ffffff",
                  fontSize: 15,
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(255,107,26,0.3)"
                }}
              >
                <KeyRound size={18} />
                <span>Unlock Admin Studio</span>
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="admin-blog-page-wrapper" style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <Header />

      {/* Notification Banner */}
      {notification && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "#051A2E",
          color: "#ffffff",
          padding: "14px 24px",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 9999,
          fontFamily: "var(--font-head)",
          fontWeight: 600
        }}>
          <CheckCircle2 size={18} style={{ color: "#FF6B1A" }} />
          <span>{notification}</span>
        </div>
      )}

      {/* Knowledge Center SaaS Header */}
      <section style={{
        background: "#F8FAFC",
        color: "#051A2E",
        padding: "70px 0 50px",
        borderBottom: "1px solid #E2E8F0"
      }}>
        <div className="section-shell" style={{ maxWidth: 840, textAlign: "center" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#FFF4EE",
            padding: "6px 16px",
            borderRadius: 99,
            color: "#FF6B1A",
            fontSize: 13,
            fontWeight: 800,
            marginBottom: 16,
            border: "1px solid rgba(255, 107, 26, 0.3)"
          }}>
            <BookOpen size={15} />
            <span>Knowledge Center</span>
          </div>

          <h1 style={{
            color: "#051A2E",
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 900,
            margin: "0 0 16px 0",
            lineHeight: 1.25,
            letterSpacing: "-0.5px"
          }}>
            Latest Tax, GST &amp; <br />
            Business Insights
          </h1>

          <p style={{
            color: "#475569",
            margin: "0 auto 32px auto",
            fontSize: 16,
            lineHeight: 1.6,
            maxWidth: 580
          }}>
            Expert articles, compliance updates and practical guides for Indian businesses.
          </p>

          {/* Search Bar & Primary Actions */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap", maxWidth: 680, margin: "0 auto" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#ffffff",
              border: "1px solid #CBD5E1",
              padding: "12px 18px",
              borderRadius: 14,
              flex: 1,
              minWidth: 280,
              boxShadow: "0 4px 16px rgba(5,26,46,0.04)"
            }}>
              <Search size={18} style={{ color: "#64748B" }} />
              <input
                type="text"
                placeholder="Search Articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", width: "100%", fontSize: 15, color: "#051A2E" }}
              />
            </div>

            <button
              type="button"
              onClick={() => {
                handleResetForm();
                setActiveTab("info");
                setActiveView(activeView === "editor" ? "list" : "editor");
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                borderRadius: 14,
                background: "#FF6B1A",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(255,107,26,0.3)",
                whiteSpace: "nowrap"
              }}
            >
              {activeView === "editor" ? (
                <>
                  <ArrowLeft size={16} />
                  <span>Back to Articles</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>+ Create Article</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                borderRadius: 14,
                background: "#F1F5F9",
                color: "#64748B",
                fontSize: 13,
                fontWeight: 700,
                border: "1px solid #CBD5E1",
                cursor: "pointer"
              }}
            >
              <LogOut size={15} />
              <span>Lock Studio</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Admin View Container */}
      <div className="section-shell" style={{ padding: "48px 0 80px" }}>
        {activeView === "list" ? (
          <div>
            {/* Featured Article Preview Section */}
            {articlesList.length > 0 && (
              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#051A2E", marginBottom: 16 }}>Featured Article</h2>
                <div style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(5,26,46,0.04)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  alignItems: "center"
                }}>
                  <div style={{ height: 260, overflow: "hidden" }}>
                    <img src={articlesList[0].image} alt={articlesList[0].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: 32 }}>
                    <span style={{ background: "#FFF4EE", color: "#FF6B1A", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 800 }}>
                      {articlesList[0].category}
                    </span>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#051A2E", margin: "12px 0 10px 0", lineHeight: 1.3 }}>
                      {articlesList[0].title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.5, margin: "0 0 20px 0" }}>
                      {articlesList[0].excerpt}
                    </p>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <Link href={`/blog/${articlesList[0].slug}`} target="_blank" style={{ color: "#FF6B1A", fontWeight: 800, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        Read More →
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleEdit(articlesList[0])}
                        style={{ padding: "6px 14px", borderRadius: 8, background: "#F1F5F9", color: "#051A2E", fontSize: 12, fontWeight: 700, border: "1px solid #CBD5E1", cursor: "pointer" }}
                      >
                        Edit Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Filter & Search Bar */}
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: 16, border: "1px solid #E2E8F0", marginBottom: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "10px 16px", borderRadius: 10, flex: 1, minWidth: 260 }}>
                  <Search size={16} style={{ color: "#64748B" }} />
                  <input
                    type="text"
                    placeholder="Search articles by title, keyword, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ border: "none", background: "transparent", outline: "none", width: "100%", fontSize: 14 }}
                  />
                </div>

                {/* Status Pills */}
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#64748B" }}>Status:</span>
                  {(["All", "published", "draft"] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setStatusFilter(st)}
                      style={{ padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", background: statusFilter === st ? "#051A2E" : "#F1F5F9", color: statusFilter === st ? "#ffffff" : "#475569", textTransform: "capitalize" }}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  style={{ padding: "9px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, background: "#ffffff", fontWeight: 600, color: "#051A2E" }}
                >
                  <option value="newest">Sort: Newest First</option>
                  <option value="oldest">Sort: Oldest First</option>
                  <option value="title">Sort: Title A-Z</option>
                </select>
              </div>
            </div>

            {/* Articles Table */}
            <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              {filteredArticles.length > 0 ? (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: "#F1F5F9", borderBottom: "1px solid #E2E8F0", color: "#475569", fontWeight: 700 }}>
                        <th style={{ padding: "14px 20px" }}>ARTICLE</th>
                        <th style={{ padding: "14px 20px" }}>CATEGORY</th>
                        <th style={{ padding: "14px 20px" }}>DATE</th>
                        <th style={{ padding: "14px 20px" }}>STATUS</th>
                        <th style={{ padding: "14px 20px", textAlign: "right" }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredArticles.map((art) => (
                        <tr key={art.id} style={{ borderBottom: "1px solid #F1F5F9" }}>
                          <td style={{ padding: "16px 20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                              <img src={art.image} alt={art.title} style={{ width: 52, height: 42, objectFit: "cover", borderRadius: 8 }} />
                              <div>
                                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#051A2E" }}>{art.title}</h4>
                                <span style={{ fontSize: 12, color: "#64748B" }}>/blog/{art.slug}</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: "16px 20px" }}>
                            <span style={{ background: "#FFF4EE", color: "#FF6B1A", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>
                              {art.category}
                            </span>
                          </td>
                          <td style={{ padding: "16px 20px", color: "#64748B", fontSize: 13 }}>{art.date}</td>
                          <td style={{ padding: "16px 20px" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: art.status === "draft" ? "#D97706" : "#16A34A", fontSize: 12, fontWeight: 700 }}>
                              <span style={{ width: 7, height: 7, borderRadius: "50%", background: art.status === "draft" ? "#D97706" : "#16A34A" }}></span>
                              {art.status === "draft" ? "Draft" : "Published"}
                            </span>
                          </td>
                          <td style={{ padding: "16px 20px", textAlign: "right" }}>
                            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                              <Link href={`/blog/${art.slug}`} target="_blank" style={{ padding: "6px 10px", borderRadius: 6, background: "#F1F5F9", color: "#475569", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                                <Eye size={15} />
                              </Link>
                              <button
                                type="button"
                                onClick={() => handleEdit(art)}
                                style={{ padding: "6px 10px", borderRadius: 6, background: "#EFF6FF", color: "#2563EB", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                              >
                                <Edit size={15} />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(art.id, art.title)}
                                style={{ padding: "6px 10px", borderRadius: 6, background: "#FEF2F2", color: "#DC2626", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ padding: "60px 20px", textAlign: "center" }}>
                  <BookOpen size={36} style={{ color: "#CBD5E1", marginBottom: 12 }} />
                  <h3 style={{ fontSize: 18, color: "#051A2E", margin: "0 0 6px 0", fontWeight: 700 }}>No Articles Published Yet</h3>
                  <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px 0" }}>Click "+ Create New Post" above to write your first article with the block editor.</p>
                  <button
                    type="button"
                    onClick={() => {
                      handleResetForm();
                      setActiveTab("info");
                      setActiveView("editor");
                    }}
                    style={{ padding: "10px 22px", borderRadius: 10, background: "#FF6B1A", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}
                  >
                    + Create First Post
                  </button>
                </div>
              )}
            </div>
            {/* Newsletter Section */}
            <div style={{
              background: "#F8FAFC",
              borderRadius: 20,
              border: "1px solid #E2E8F0",
              padding: "48px 32px",
              marginTop: 48,
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(5,26,46,0.03)"
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#051A2E", margin: "0 0 8px 0" }}>
                Subscribe to Statutory Compliance & Tax Updates
              </h3>
              <p style={{ fontSize: 14, color: "#475569", margin: "0 0 20px 0" }}>
                Get monthly GST, ITR, and corporate law compliance checklists delivered straight to your inbox.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Newsletter subscription active!"); }} style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 460, margin: "0 auto", flexWrap: "wrap" }}>
                <input
                  type="email"
                  required
                  placeholder="Enter business email..."
                  style={{ flex: 1, minWidth: 220, padding: "12px 16px", borderRadius: 12, border: "1px solid #CBD5E1", fontSize: 14, outline: "none" }}
                />
                <button
                  type="submit"
                  style={{ padding: "12px 24px", borderRadius: 12, background: "#FF6B1A", color: "#ffffff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* ============================================================
             TABBED EDITOR WORKFLOW (TAB 1, TAB 2, TAB 3, PREVIEW, PUBLISH)
             ============================================================ */
          <div style={{ background: "#ffffff", borderRadius: 20, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.04)" }}>
            {/* Header Control Strip */}
            <div style={{ padding: "20px 28px", borderBottom: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#051A2E", margin: 0 }}>
                  {editingId ? "Edit Article" : "Create New Post"}
                </h2>
                <span style={{ fontSize: 13, color: "#64748B" }}>
                  Step through Blog Info, SEO settings, Block Content Builder, and Live Previews.
                </span>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => setActiveView("list")}
                  style={{ padding: "9px 16px", borderRadius: 8, background: "#F1F5F9", color: "#475569", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveArticle()}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 20px", borderRadius: 8, background: "#FF6B1A", color: "#ffffff", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer" }}
                >
                  <Send size={15} />
                  <span>{status === "draft" ? "Save Draft" : "Publish Live"}</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation Strip */}
            <div style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "0 24px", display: "flex", gap: 6, overflowX: "auto" }}>
              {[
                { id: "info", label: "Tab 1: Blog Information", icon: FileText },
                { id: "seo", label: "Tab 2: SEO & Google Preview", icon: Globe },
                { id: "content", label: "Tab 3: Content Builder", icon: Layers },
                { id: "preview", label: "Live Article Preview", icon: Eye },
                { id: "publish", label: "Publish", icon: Send },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 18px",
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "#FF6B1A" : "#64748B",
                      border: "none",
                      borderBottom: isActive ? "3px solid #FF6B1A" : "3px solid transparent",
                      background: "transparent",
                      cursor: "pointer",
                      whiteSpace: "nowrap"
                    }}
                  >
                    <IconComponent size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENTS */}
            <div style={{ padding: "32px" }}>
              {/* ============================================================
                 TAB 1: BLOG INFORMATION
                 ============================================================ */}
              {activeTab === "info" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#051A2E", margin: 0 }}>
                    Blog Information & Publishing Settings
                  </h3>

                  {/* Title */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                      TITLE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      value={title}
                      onChange={handleTitleChange}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 14, outline: "none" }}
                    />
                  </div>

                  {/* Slug with Auto Generate Button */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: "#051A2E" }}>SLUG (URL IDENTIFIER) *</label>
                      <button
                        type="button"
                        onClick={handleAutoGenerateSlug}
                        style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FFF4EE", color: "#FF6B1A", border: "1px solid rgba(255,107,26,0.3)", padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: "pointer" }}
                      >
                        <Wand2 size={12} /> Auto Generate Slug
                      </button>
                    </div>
                    <input
                      type="text"
                      required
                      placeholder=""
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                    />
                    <span style={{ fontSize: 12, color: "#64748B", display: "block", marginTop: 4 }}>
                      Live URL: https://mazumaindia.com/blog/{slug || "sample-slug"}
                    </span>
                  </div>

                  {/* Category & Status Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                        CATEGORY *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as Article["category"])}
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none", background: "#ffffff" }}
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                        STATUS (DRAFT / PUBLISH) *
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none", background: status === "draft" ? "#FEF3C7" : "#DCFCE7", fontWeight: 700, color: status === "draft" ? "#B45309" : "#15803D" }}
                      >
                        <option value="published">Published (Live on Website)</option>
                        <option value="draft">Draft (Private in Dashboard)</option>
                      </select>
                    </div>
                  </div>

                  {/* Tags & Publish Date Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                        TAGS (COMMA SEPARATED - AT LEAST 5 TAGS RECOMMENDED)
                      </label>
                      <input
                        type="text"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        placeholder=""
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                      />
                      <span style={{ fontSize: 11, color: tagsInput.split(",").filter(t => t.trim()).length >= 5 ? "#16A34A" : "#64748B", display: "block", marginTop: 4, fontWeight: 600 }}>
                        {tagsInput.split(",").filter(t => t.trim()).length >= 5 ? "✓ 5+ Tags Added" : `Added: ${tagsInput.split(",").filter(t => t.trim()).length} / 5 recommended tags`}
                      </span>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                        PUBLISH DATE
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                      />
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                      FEATURED IMAGE URL
                    </label>
                    <input
                      type="text"
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      placeholder=""
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none", marginBottom: 8 }}
                    />
                    <span style={{ fontSize: 12, color: "#64748B", display: "block", marginBottom: 6 }}>Select Preset Cover Image:</span>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {PRESET_IMAGES.map((p) => (
                        <button
                          key={p.name}
                          type="button"
                          onClick={() => setFeaturedImage(p.url)}
                          style={{ padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, border: featuredImage === p.url ? "1.5px solid #FF6B1A" : "1px solid #CBD5E1", background: featuredImage === p.url ? "#FFF4EE" : "#ffffff", cursor: "pointer", color: featuredImage === p.url ? "#FF6B1A" : "#475569" }}
                        >
                          {p.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                      EXCERPT (SHORT CARD PREVIEW) *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder=""
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                    />
                  </div>

                  {/* Summary */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                      SUMMARY (FULL EXECUTIVE OVERVIEW)
                    </label>
                    <textarea
                      rows={3}
                      placeholder=""
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                    <button
                      type="button"
                      onClick={() => setActiveTab("seo")}
                      style={{ padding: "10px 24px", borderRadius: 8, background: "#051A2E", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}
                    >
                      Next: Tab 2 (SEO Settings) →
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================
                 TAB 2: SEO & REAL-TIME GOOGLE SEARCH PREVIEW
                 ============================================================ */}
              {activeTab === "seo" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 850 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#051A2E", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                    <Globe size={18} style={{ color: "#FF6B1A" }} />
                    <span>Search Engine Optimization (SEO) & Social Snippets</span>
                  </h3>

                  {/* Google Search Live Preview Card */}
                  <div style={{ background: "#ffffff", padding: 24, borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <Globe size={16} style={{ color: "#2563EB" }} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#051A2E" }}>Google Search Snippet Preview</span>
                    </div>

                    <div style={{ background: "#ffffff", padding: "16px 20px", borderRadius: 12, border: "1px solid #CBD5E1", fontFamily: "Arial, sans-serif" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#051A2E", color: "#FF6B1A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900 }}>M</div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: 14, color: "#202124", fontWeight: 400 }}>Mazuma India</span>
                          <span style={{ fontSize: 12, color: "#4d5156" }}>https://mazumaindia.com › blog › {slug || "gst-registration-guide"}</span>
                        </div>
                      </div>
                      <h3 style={{ fontSize: 20, color: "#1a0dab", margin: "4px 0 6px 0", fontWeight: 400, cursor: "pointer", textDecoration: "none" }}>
                        {seoTitle || title || "Complete GST Registration Guide 2026"}
                      </h3>
                      <p style={{ fontSize: 14, color: "#4d5156", margin: 0, lineHeight: 1.5 }}>
                        {metaDescription || excerpt || "Comprehensive statutory guide on GST registration threshold limits, mandatory documents, return filing steps, and CA compliance..."}
                      </p>
                    </div>
                  </div>

                  {/* SEO Inputs Grid */}
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
                        placeholder=""
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#051A2E", marginBottom: 4 }}>
                        FOCUS KEYWORDS (COMMA SEPARATED - AT LEAST 5 KEYWORDS)
                      </label>
                      <input
                        type="text"
                        value={focusKeyword}
                        onChange={(e) => setFocusKeyword(e.target.value)}
                        placeholder=""
                        style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                      />
                      <span style={{ fontSize: 11, color: focusKeyword.split(",").filter(k => k.trim()).length >= 5 ? "#16A34A" : "#64748B", display: "block", marginTop: 4, fontWeight: 600 }}>
                        {focusKeyword.split(",").filter(k => k.trim()).length >= 5 ? "✓ 5+ Focus Keywords Added" : `Added: ${focusKeyword.split(",").filter(k => k.trim()).length} / 5 recommended keywords`}
                      </span>
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
                      placeholder=""
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
                      placeholder=""
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }}
                    />
                  </div>

                  {/* OpenGraph & Robots Controls */}
                  <div style={{ background: "#F8FAFC", padding: 20, borderRadius: 14, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#051A2E", margin: 0 }}>OpenGraph (Social Cards) & Robots Control</h4>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>OG TITLE</label>
                        <input type="text" value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder="" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>OG IMAGE URL</label>
                        <input type="text" value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder="" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>TWITTER IMAGE</label>
                        <input type="text" value={twitterImage} onChange={(e) => setTwitterImage(e.target.value)} placeholder="" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>ROBOTS (INDEX / NOINDEX)</label>
                        <select value={robotsIndex} onChange={(e) => setRobotsIndex(e.target.value as any)} style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12, background: "#fff" }}>
                          <option value="index">Index</option>
                          <option value="noindex">NoIndex</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>ROBOTS (FOLLOW / NOFOLLOW)</label>
                        <select value={robotsFollow} onChange={(e) => setRobotsFollow(e.target.value as any)} style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12, background: "#fff" }}>
                          <option value="follow">Follow</option>
                          <option value="nofollow">NoFollow</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                    <button type="button" onClick={() => setActiveTab("info")} style={{ padding: "10px 20px", borderRadius: 8, background: "#E2E8F0", color: "#475569", fontWeight: 600, border: "none", cursor: "pointer" }}>← Back: Blog Info</button>
                    <button type="button" onClick={() => setActiveTab("content")} style={{ padding: "10px 24px", borderRadius: 8, background: "#051A2E", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}>Next: Tab 3 (Content Builder) →</button>
                  </div>
                </div>
              )}

              {/* ============================================================
                 TAB 3: MODULAR BLOCK-BASED CONTENT BUILDER
                 ============================================================ */}
              {activeTab === "content" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 900 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#051A2E", margin: "0 0 6px 0", display: "flex", alignItems: "center", gap: 8 }}>
                      <Layers size={20} style={{ color: "#FF6B1A" }} />
                      <span>Block-Based Content Builder</span>
                    </h3>
                    <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
                      Construct your blog post by adding modular blocks. Drag or move blocks up/down easily.
                    </p>
                  </div>

                  {/* Block Creator Action Bar */}
                  <div style={{ background: "#051A2E", padding: "16px 20px", borderRadius: 14, color: "#ffffff" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", display: "block", marginBottom: 10 }}>
                      + CLICK TO ADD CONTENT BLOCK:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <button type="button" onClick={() => addBlock("intro")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <FileText size={13} style={{ color: "#FF6B1A" }} /> + Add Introduction
                      </button>
                      <button type="button" onClick={() => addBlock("heading")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <HeadingIcon size={13} style={{ color: "#FF6B1A" }} /> + Add Heading
                      </button>
                      <button type="button" onClick={() => addBlock("paragraph")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <BookOpen size={13} style={{ color: "#FF6B1A" }} /> + Add Paragraph
                      </button>
                      <button type="button" onClick={() => addBlock("checklist")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <CheckSquare size={13} style={{ color: "#FF6B1A" }} /> + Add Checklist
                      </button>
                      <button type="button" onClick={() => addBlock("image")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <ImageIcon size={13} style={{ color: "#FF6B1A" }} /> + Add Image
                      </button>
                      <button type="button" onClick={() => addBlock("quote")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <Quote size={13} style={{ color: "#FF6B1A" }} /> + Add Quote
                      </button>
                      <button type="button" onClick={() => addBlock("table")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <TableIcon size={13} style={{ color: "#FF6B1A" }} /> + Add Table
                      </button>
                      <button type="button" onClick={() => addBlock("faq")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <HelpCircle size={13} style={{ color: "#FF6B1A" }} /> + Add FAQ
                      </button>
                      <button type="button" onClick={() => addBlock("conclusion")} style={{ padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <CheckCircle2 size={13} style={{ color: "#FF6B1A" }} /> + Add Conclusion
                      </button>
                    </div>
                  </div>

                  {/* Rendered Block List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {blocks.map((block, idx) => (
                      <div key={block.id} style={{ background: "#ffffff", padding: 20, borderRadius: 14, border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                        {/* Block Bar Header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, borderBottom: "1px solid #F1F5F9", paddingBottom: 10 }}>
                          <span style={{ fontSize: 12, fontWeight: 800, color: "#FF6B1A", textTransform: "uppercase", letterSpacing: 0.5, display: "inline-flex", alignItems: "center", gap: 6 }}>
                            <span style={{ background: "#FFF4EE", padding: "2px 8px", borderRadius: 4 }}>Block #{idx + 1}: {block.type}</span>
                          </span>

                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <button type="button" onClick={() => moveBlock(idx, "up")} disabled={idx === 0} style={{ padding: "4px 8px", borderRadius: 6, background: "#F1F5F9", border: "none", cursor: "pointer", opacity: idx === 0 ? 0.4 : 1 }}>
                              <MoveUp size={13} />
                            </button>
                            <button type="button" onClick={() => moveBlock(idx, "down")} disabled={idx === blocks.length - 1} style={{ padding: "4px 8px", borderRadius: 6, background: "#F1F5F9", border: "none", cursor: "pointer", opacity: idx === blocks.length - 1 ? 0.4 : 1 }}>
                              <MoveDown size={13} />
                            </button>
                            <button type="button" onClick={() => removeBlock(block.id)} style={{ padding: "4px 8px", borderRadius: 6, background: "#FEF2F2", color: "#DC2626", border: "none", cursor: "pointer" }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>

                        {/* Block Specific Form Inputs */}
                        {block.type === "intro" && (
                          <textarea
                            rows={3}
                            value={block.text || ""}
                            onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                            placeholder=""
                            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                          />
                        )}

                        {block.type === "heading" && (
                          <div style={{ display: "flex", gap: 12 }}>
                            <select
                              value={block.level || "h2"}
                              onChange={(e) => updateBlock(block.id, { level: e.target.value as any })}
                              style={{ padding: "10px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, background: "#fff" }}
                            >
                              <option value="h2">H2 Heading</option>
                              <option value="h3">H3 Heading</option>
                              <option value="h4">H4 Heading</option>
                            </select>
                            <input
                              type="text"
                              value={block.text || ""}
                              onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                              placeholder=""
                              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 14, fontWeight: 700 }}
                            />
                          </div>
                        )}

                        {block.type === "paragraph" && (
                          <textarea
                            rows={4}
                            value={block.text || ""}
                            onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                            placeholder=""
                            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                          />
                        )}

                        {block.type === "checklist" && (
                          <div>
                            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>
                              CHECKLIST BULLET POINTS (ONE PER LINE):
                            </label>
                            <textarea
                              rows={3}
                              value={block.items ? block.items.join("\n") : ""}
                              onChange={(e) => updateBlock(block.id, { items: e.target.value.split("\n") })}
                              placeholder=""
                              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                            />
                          </div>
                        )}

                        {block.type === "image" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <input
                              type="text"
                              value={block.imageUrl || ""}
                              onChange={(e) => updateBlock(block.id, { imageUrl: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                            />
                            <input
                              type="text"
                              value={block.caption || ""}
                              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }}
                            />
                          </div>
                        )}

                        {block.type === "quote" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <textarea
                              rows={2}
                              value={block.text || ""}
                              onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                            />
                            <input
                              type="text"
                              value={block.author || ""}
                              onChange={(e) => updateBlock(block.id, { author: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 12 }}
                            />
                          </div>
                        )}

                        {block.type === "table" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <label style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>TABLE HEADERS (COMMA SEPARATED):</label>
                            <input
                              type="text"
                              value={block.tableHeaders ? block.tableHeaders.join(", ") : ""}
                              onChange={(e) => updateBlock(block.id, { tableHeaders: e.target.value.split(",").map(s => s.trim()) })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                            />
                          </div>
                        )}

                        {block.type === "faq" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <input
                              type="text"
                              value={block.faqQuestion || ""}
                              onChange={(e) => updateBlock(block.id, { faqQuestion: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, fontWeight: 700 }}
                            />
                            <textarea
                              rows={2}
                              value={block.faqAnswer || ""}
                              onChange={(e) => updateBlock(block.id, { faqAnswer: e.target.value })}
                              placeholder=""
                              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                            />
                          </div>
                        )}

                        {block.type === "conclusion" && (
                          <textarea
                            rows={2}
                            value={block.text || ""}
                            onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                            placeholder=""
                            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13 }}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                    <button type="button" onClick={() => setActiveTab("seo")} style={{ padding: "10px 20px", borderRadius: 8, background: "#E2E8F0", color: "#475569", fontWeight: 600, border: "none", cursor: "pointer" }}>← Back: SEO</button>
                    <button type="button" onClick={() => setActiveTab("preview")} style={{ padding: "10px 24px", borderRadius: 8, background: "#051A2E", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}>Next: Live Preview →</button>
                  </div>
                </div>
              )}

              {/* ============================================================
                 LIVE ARTICLE PREVIEW TAB
                 ============================================================ */}
              {activeTab === "preview" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div style={{ background: "#FFF4EE", padding: "14px 20px", borderRadius: 12, border: "1px solid rgba(255,107,26,0.3)", display: "flex", alignItems: "center", gap: 10 }}>
                    <Eye size={18} style={{ color: "#FF6B1A" }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#10284a" }}>
                      LIVE VISUAL PREVIEW: Rendered article view for /blog/{slug || "sample-slug"}
                    </span>
                  </div>

                  {/* Rendered Live Article Container */}
                  <div style={{ border: "1px solid #CBD5E1", borderRadius: 16, overflow: "hidden", background: "#ffffff" }}>
                    <div style={{ background: "#051A2E", padding: "36px 28px", color: "#ffffff" }}>
                      <span style={{ background: "#FF6B1A", color: "#ffffff", padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{category}</span>
                      <h1 style={{ color: "#ffffff", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, margin: "14px 0 10px 0" }}>{title || "Untitled Blog Post"}</h1>
                      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#94A3B8" }}>
                        <span>Published: {publishDate || new Date().toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{readTime}</span>
                      </div>
                    </div>

                    <div style={{ padding: "32px", maxWidth: 800, margin: "0 auto" }}>
                      <img src={featuredImage} alt={title} style={{ width: "100%", maxHeight: 360, objectFit: "cover", borderRadius: 14, marginBottom: 24 }} />

                      {/* Render Blocks */}
                      {blocks.map((b) => {
                        if (b.type === "intro") {
                          return <p key={b.id} style={{ fontSize: 16, lineHeight: 1.7, color: "#1E293B", fontWeight: 600, marginBottom: 20 }}>{b.text}</p>;
                        }
                        if (b.type === "heading") {
                          return <h2 key={b.id} style={{ fontSize: 20, color: "#051A2E", fontWeight: 800, marginTop: 24, marginBottom: 12 }}>{b.text}</h2>;
                        }
                        if (b.type === "paragraph") {
                          return <p key={b.id} style={{ fontSize: 14, lineHeight: 1.7, color: "#475569", marginBottom: 16 }}>{b.text}</p>;
                        }
                        if (b.type === "checklist") {
                          return (
                            <div key={b.id} style={{ background: "#F8FAFC", padding: 18, borderRadius: 12, borderLeft: "4px solid #FF6B1A", margin: "20px 0" }}>
                              <strong style={{ display: "block", fontSize: 14, color: "#051A2E", marginBottom: 8 }}>Key Checklist:</strong>
                              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
                                {b.items?.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            </div>
                          );
                        }
                        if (b.type === "image" && b.imageUrl) {
                          return (
                            <div key={b.id} style={{ margin: "20px 0", textAlign: "center" }}>
                              <img src={b.imageUrl} alt={b.caption || title} style={{ width: "100%", maxHeight: 380, objectFit: "cover", borderRadius: 12 }} />
                              {b.caption && <span style={{ display: "block", fontSize: 12, color: "#64748B", marginTop: 6, fontStyle: "italic" }}>{b.caption}</span>}
                            </div>
                          );
                        }
                        if (b.type === "table" && b.tableHeaders) {
                          return (
                            <div key={b.id} style={{ margin: "20px 0", overflowX: "auto" }}>
                              <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #CBD5E1", fontSize: 13 }}>
                                <thead>
                                  <tr style={{ background: "#F1F5F9", color: "#051A2E", fontWeight: 700 }}>
                                    {b.tableHeaders.map((th, i) => (
                                      <th key={i} style={{ padding: "10px 14px", border: "1px solid #CBD5E1", textAlign: "left" }}>{th}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {b.tableRows?.map((row, rIdx) => (
                                    <tr key={rIdx} style={{ borderBottom: "1px solid #E2E8F0" }}>
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} style={{ padding: "10px 14px", border: "1px solid #E2E8F0" }}>{cell}</td>
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
                            <div key={b.id} style={{ background: "#FFF4EE", padding: 20, borderRadius: 12, border: "1px solid rgba(255,107,26,0.2)", margin: "20px 0" }}>
                              <p style={{ fontSize: 14, fontStyle: "italic", color: "#051A2E", margin: "0 0 6px 0", fontWeight: 600 }}>"{b.text}"</p>
                              {b.author && <span style={{ fontSize: 12, color: "#FF6B1A", fontWeight: 700 }}>— {b.author}</span>}
                            </div>
                          );
                        }
                        if (b.type === "faq") {
                          return (
                            <div key={b.id} style={{ background: "#F8FAFC", padding: 16, borderRadius: 10, border: "1px solid #E2E8F0", margin: "14px 0" }}>
                              <strong style={{ fontSize: 14, color: "#051A2E", display: "block", marginBottom: 4 }}>Q: {b.faqQuestion}</strong>
                              <span style={{ fontSize: 13, color: "#64748B" }}>A: {b.faqAnswer}</span>
                            </div>
                          );
                        }
                        if (b.type === "conclusion") {
                          return (
                            <div key={b.id} style={{ background: "#051A2E", color: "#ffffff", padding: 20, borderRadius: 12, margin: "24px 0" }}>
                              <strong style={{ fontSize: 14, color: "#FF6B1A", display: "block", marginBottom: 6 }}>Key Takeaways</strong>
                              <p style={{ fontSize: 13, color: "#E2E8F0", margin: 0 }}>{b.text}</p>
                            </div>
                          );
                        }
                        return null;
                      })}

                      {/* Corporate Verification */}
                      <div style={{ marginTop: 32, background: "#F8FAFC", padding: 20, borderRadius: 14, border: "1px solid #E2E8F0", display: "flex", gap: 14, alignItems: "center" }}>
                        <ShieldCheck size={32} style={{ color: "#FF6B1A" }} />
                        <div>
                          <strong style={{ fontSize: 14, color: "#051A2E", display: "block" }}>Verified by Mazuma Tax & Advisory Experts</strong>
                          <span style={{ fontSize: 13, color: "#64748B" }}>Systematically reviewed by senior Chartered Accountants for 100% statutory accuracy.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                    <button type="button" onClick={() => setActiveTab("content")} style={{ padding: "10px 20px", borderRadius: 8, background: "#E2E8F0", color: "#475569", fontWeight: 600, border: "none", cursor: "pointer" }}>← Back: Content Builder</button>
                    <button type="button" onClick={() => setActiveTab("publish")} style={{ padding: "10px 24px", borderRadius: 8, background: "#FF6B1A", color: "#ffffff", fontWeight: 700, border: "none", cursor: "pointer" }}>Proceed to Publish →</button>
                  </div>
                </div>
              )}

              {/* ============================================================
                 PUBLISH TAB
                 ============================================================ */}
              {activeTab === "publish" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 750 }}>
                  <div style={{ background: "#F8FAFC", padding: 28, borderRadius: 16, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 20 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#051A2E", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                      <Send size={20} style={{ color: "#FF6B1A" }} />
                      <span>Final Publish & Database Sync</span>
                    </h3>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#051A2E", marginBottom: 6 }}>
                        PUBLICATION STATUS *
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #CBD5E1", fontSize: 14, outline: "none", background: status === "draft" ? "#FEF3C7" : "#DCFCE7", fontWeight: 700, color: status === "draft" ? "#B45309" : "#15803D" }}
                      >
                        <option value="published">Published (Live on Website immediately)</option>
                        <option value="draft">Draft (Saved in Dashboard only)</option>
                      </select>
                    </div>

                    <div style={{ background: "#ffffff", padding: 18, borderRadius: 12, border: "1px dashed #CBD5E1" }}>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", margin: "0 0 6px 0" }}>Summary Before Publishing:</h4>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                        <li>Title: <strong>{title || "Untitled"}</strong></li>
                        <li>Category: <strong>{category}</strong></li>
                        <li>URL Slug: <strong>/blog/{slug}</strong></li>
                        <li>Total Content Blocks: <strong>{blocks.length} blocks</strong></li>
                        <li>Robots Indexing: <strong>{robotsIndex}, {robotsFollow}</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                    <button type="button" onClick={() => setActiveTab("preview")} style={{ padding: "12px 20px", borderRadius: 10, background: "#E2E8F0", color: "#475569", fontWeight: 600, border: "none", cursor: "pointer" }}>← Back: Preview</button>
                    <button
                      type="button"
                      onClick={() => handleSaveArticle()}
                      style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 12, background: "#FF6B1A", color: "#ffffff", fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 10px 24px rgba(255,107,26,0.3)" }}
                    >
                      <Send size={18} />
                      <span>{editingId ? "Update Article Live" : "Publish Blog Post Live"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
