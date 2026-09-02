export interface ContentBlock {
  id: string;
  type: "intro" | "heading" | "paragraph" | "checklist" | "image" | "quote" | "table" | "faq" | "conclusion";
  level?: "h2" | "h3" | "h4";
  text?: string;
  author?: string;
  imageUrl?: string;
  caption?: string;
  items?: string[];
  tableHeaders?: string[];
  tableRows?: string[][];
  faqQuestion?: string;
  faqAnswer?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  focusKeywords?: string[];
  canonicalUrl: string;
  image: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string;
  twitterImage?: string;
  robotsIndex?: "index" | "noindex";
  robotsFollow?: "follow" | "nofollow";
  imageAlt: string;
  category: "Income Tax" | "GST" | "Company Registration" | "ROC" | "Accounting" | "Trademark" | "MSME";
  tags: string[];
  date: string;
  updatedDate: string;
  readTime: string;
  excerpt: string;
  summary?: string;
  status?: "draft" | "published";
  featured?: boolean;
  blocks?: ContentBlock[];
  faqs?: { id: string; question: string; answer: string }[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      bulletPoints?: string[];
      callout?: string;
    }[];
    conclusion: string;
  };
}

// Initial blog articles list (Empty by default; populated via Admin CMS /admin/blog)
export const articles: Article[] = [];

