import { Article } from "@/data/articles";
import { createCanonical } from "./createCanonical";

const SITE_NAME = "Mazuma India";
const SITE_LOGO = "https://mazumaindia.com/mazuma-logo-transparent.png";
const ORG_URL = "https://mazumaindia.com";

/**
 * Generates JSON-LD schema for single blog article
 */
export function generateBlogPostingSchema(article: Article) {
  const articleUrl = article.canonicalUrl || createCanonical(`blog/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "Mazuma India Tax & Legal Advisory",
      url: ORG_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  };
}

/**
 * Generates JSON-LD BreadcrumbList schema (Home > Blog > Category > Article)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates JSON-LD FAQPage schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates JSON-LD Blog collection schema
 */
export function generateBlogCollectionSchema(articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mazuma India Tax & Business Advisory Blog",
    description: "Official statutory tax guides, GST compliance rules, and corporate legal advisories for Indian enterprises.",
    url: createCanonical("blog"),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: SITE_LOGO,
    },
    blogPost: articles.map((art) => ({
      "@type": "BlogPosting",
      headline: art.title,
      description: art.metaDescription || art.excerpt,
      datePublished: art.date,
      url: art.canonicalUrl || createCanonical(`blog/${art.slug}`),
      image: art.image,
    })),
  };
}
