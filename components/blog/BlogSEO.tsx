import React from "react";
import { Article } from "@/data/articles";
import {
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
} from "@/utils/generateSchema";
import { createCanonical } from "@/utils/createCanonical";

interface BlogSEOProps {
  article: Article;
}

export default function BlogSEO({ article }: BlogSEOProps) {
  const articleUrl = article.canonicalUrl || createCanonical(`blog/${article.slug}`);

  // 1. BlogPosting Schema
  const blogPostingSchema = generateBlogPostingSchema(article);

  // 2. Breadcrumb Schema (Home > Blog > Category > Article)
  const breadcrumbItems = [
    { name: "Home", url: createCanonical() },
    { name: "Blog", url: createCanonical("blog") },
    { name: article.category, url: createCanonical(`blog/category/${article.category.toLowerCase().replace(/ /g, "-")}`) },
    { name: article.title, url: articleUrl }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // 3. FAQ Schema (if FAQs exist in blocks or faqs array)
  const faqList: { question: string; answer: string }[] = [];
  if (article.faqs && article.faqs.length > 0) {
    article.faqs.forEach((f) => faqList.push({ question: f.question, answer: f.answer }));
  } else if (article.blocks) {
    article.blocks.forEach((b) => {
      if (b.type === "faq" && b.faqQuestion && b.faqAnswer) {
        faqList.push({ question: b.faqQuestion, answer: b.faqAnswer });
      }
    });
  }
  const faqSchema = generateFAQSchema(faqList);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
