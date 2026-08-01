import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "@/sanity/env";
import { articles, Article } from "@/data/articles";

export const sanityClient =
  projectId !== "demo_project_id"
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
      })
    : null;

/**
 * Get latest published blogs (Homepage requests limit: 3)
 */
export async function getLatestBlogs(limit: number = 3): Promise<Article[]> {
  if (sanityClient) {
    try {
      const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...${limit}] {
        "id": _id,
        "title": title,
        "slug": slug.current,
        "seoTitle": seoTitle,
        "metaDescription": metaDescription,
        "focusKeyword": focusKeyword,
        "canonicalUrl": "https://mazumaindia.com/blog/" + slug.current,
        "image": mainImage.asset->url,
        "ogImage": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        "category": category->title,
        "tags": tags,
        "author": {
          "name": author->name,
          "role": author->role,
          "avatar": author->image.asset->url
        },
        "date": publishedAt,
        "updatedDate": _updatedAt,
        "excerpt": excerpt,
        "readTime": "5 min read"
      }`;
      const data = await sanityClient.fetch(query);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity CMS fetch fallback to local articles:", err);
    }
  }

  // Dual Fallback: Local articles array
  return articles.slice(0, limit);
}

/**
 * Get all published blogs (/blog page requests all)
 */
export async function getAllBlogs(): Promise<Article[]> {
  if (sanityClient) {
    try {
      const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        "id": _id,
        "title": title,
        "slug": slug.current,
        "seoTitle": seoTitle,
        "metaDescription": metaDescription,
        "focusKeyword": focusKeyword,
        "canonicalUrl": "https://mazumaindia.com/blog/" + slug.current,
        "image": mainImage.asset->url,
        "ogImage": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        "category": category->title,
        "tags": tags,
        "author": {
          "name": author->name,
          "role": author->role,
          "avatar": author->image.asset->url
        },
        "date": publishedAt,
        "updatedDate": _updatedAt,
        "excerpt": excerpt,
        "readTime": "5 min read"
      }`;
      const data = await sanityClient.fetch(query);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity CMS fetch fallback to local articles:", err);
    }
  }

  return articles;
}

/**
 * Get single blog by slug (/blog/[slug] requests)
 */
export async function getBlogBySlug(slug: string): Promise<Article | null> {
  if (sanityClient) {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        "id": _id,
        "title": title,
        "slug": slug.current,
        "seoTitle": seoTitle,
        "metaDescription": metaDescription,
        "focusKeyword": focusKeyword,
        "canonicalUrl": "https://mazumaindia.com/blog/" + slug.current,
        "image": mainImage.asset->url,
        "ogImage": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        "category": category->title,
        "tags": tags,
        "author": {
          "name": author->name,
          "role": author->role,
          "avatar": author->image.asset->url
        },
        "date": publishedAt,
        "updatedDate": _updatedAt,
        "excerpt": excerpt,
        "readTime": "5 min read"
      }`;
      const data = await sanityClient.fetch(query, { slug });
      if (data) return data;
    } catch (err) {
      console.warn("Sanity CMS single blog fetch fallback:", err);
    }
  }

  return articles.find((a) => a.slug === slug) || null;
}
