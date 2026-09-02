import React from "react";
import type { Metadata } from "next";
import SingleArticleClient from "@/components/blog/SingleArticleClient";
import { getBlogBySlug, getAllBlogs } from "@/lib/sanity/service";
import { articles } from "@/data/articles";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const article = await getBlogBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found | Mazuma India",
      description: "The requested blog article was not found.",
    };
  }

  return {
    title: article.seoTitle || `${article.title} | Mazuma India`,
    description: article.metaDescription || article.excerpt,
    keywords: article.focusKeywords || article.tags || [],
    openGraph: {
      title: article.ogTitle || article.seoTitle || article.title,
      description: article.ogDescription || article.metaDescription || article.excerpt,
      images: [article.ogImage || article.image],
    },
  };
}

export async function generateStaticParams() {
  try {
    const allArticles = await getAllBlogs();
    const list = allArticles && allArticles.length > 0 ? allArticles : articles;
    if (list && list.length > 0) {
      return list.map((a) => ({
        slug: a.slug,
      }));
    }
  } catch (err) {
    console.error("generateStaticParams error:", err);
  }
  return [{ slug: "welcome" }];
}

export default function SingleBlogPage({ params }: BlogPageProps) {
  return <SingleArticleClient slug={params.slug} />;
}
