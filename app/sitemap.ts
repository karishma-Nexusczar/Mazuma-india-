import { MetadataRoute } from "next";
import { getStoredArticles } from "@/lib/blogStore";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazumaindia.com";
  const articles = getStoredArticles();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  const servicePages = [
    "company-registration",
    "gst-services",
    "income-tax",
    "accounting-bookkeeping",
    "trademark-business-registration",
    "msme-startup-india-registration",
    "ngo-services",
    "business-compliance",
    "business-registrations",
    "ffmc-ad-nbfc-registration"
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${baseUrl}/services/${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Blog article routes
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedDate ? new Date(article.updatedDate) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Category Archive routes
  const categories = ["income-tax", "gst", "company-registration", "roc", "accounting", "trademark", "msme"];
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes, ...categoryRoutes];
}
