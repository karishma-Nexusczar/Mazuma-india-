import { Metadata } from "next";
import { Article } from "@/data/articles";
import { createCanonical } from "./createCanonical";

interface GenerateMetaProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  article?: Article;
  robotsIndex?: "index" | "noindex";
  robotsFollow?: "follow" | "nofollow";
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  article,
  robotsIndex = "index",
  robotsFollow = "follow"
}: GenerateMetaProps): Metadata {
  const canonical = article?.canonicalUrl || createCanonical(path);
  const metaTitle = article?.seoTitle || `${title} | Mazuma India`;
  const metaDesc = article?.metaDescription || description;
  const metaImage = article?.ogImage || article?.image || image;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      ...(article?.tags || []),
      ...(keywords || []),
      "Mazuma India",
      "Tax Advisory",
      "GST Filing",
      "Company Registration"
    ],
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: (article?.robotsIndex || robotsIndex) === "index",
      follow: (article?.robotsFollow || robotsFollow) === "follow",
    },
    openGraph: {
      title: article?.ogTitle || metaTitle,
      description: article?.ogDescription || metaDesc,
      url: canonical,
      siteName: "Mazuma India",
      type: article ? "article" : "website",
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: article?.imageAlt || title,
        },
      ],
      ...(article?.date
        ? {
            publishedTime: article.date,
            modifiedTime: article.updatedDate || article.date,
            authors: ["Mazuma India Tax & Advisory Team"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article?.ogTitle || metaTitle,
      description: article?.ogDescription || metaDesc,
      images: [article?.twitterImage || metaImage],
    },
  };
}
