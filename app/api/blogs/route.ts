import { NextResponse } from "next/server";
import { query, BlogRow } from "@/lib/db/mysql";

export const dynamic = "force-dynamic";

// GET /api/blogs - List blogs with categories and tags
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "published";

    const blogs = await query<any[]>(`
      SELECT 
        b.id,
        b.title,
        b.slug,
        b.excerpt,
        b.summary,
        b.content,
        b.cover_image,
        b.category_id,
        c.name AS category_name,
        c.slug AS category_slug,
        b.status,
        b.seo_title,
        b.meta_description,
        b.focus_keyword,
        b.canonical_url,
        b.og_title,
        b.og_description,
        b.og_image,
        b.robots,
        b.schema_type,
        b.reading_time,
        b.featured,
        b.created_at,
        b.updated_at,
        b.published_at
      FROM blogs b
      LEFT JOIN categories c ON b.category_id = c.id
      WHERE status = ? OR ? = 'all'
      ORDER BY b.created_at DESC
    `, [status, status]);

    return NextResponse.json({ success: true, count: blogs.length, data: blogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog post in MySQL
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      summary,
      content,
      cover_image,
      category_id,
      status = "published",
      seo_title,
      meta_description,
      focus_keyword,
      canonical_url,
      og_title,
      og_description,
      og_image,
      robots = "index, follow",
      schema_type = "BlogPosting",
      reading_time = "5 min read",
      featured = 0,
      tags = [], // array of tag IDs
      faqs = [] // array of { question, answer }
    } = body;

    if (!title || !slug) {
      return NextResponse.json({ success: false, error: "Title and slug are required" }, { status: 400 });
    }

    const published_at = status === "published" ? new Date() : null;

    const result = await query<any>(`
      INSERT INTO blogs (
        title, slug, excerpt, summary, content, cover_image, category_id,
        status, seo_title, meta_description, focus_keyword, canonical_url,
        og_title, og_description, og_image, robots, schema_type, reading_time,
        featured, published_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      title, slug, excerpt, summary, content, cover_image, category_id,
      status, seo_title || title, meta_description || excerpt, focus_keyword,
      canonical_url || `https://mazumaindia.com/blog/${slug}`,
      og_title || title, og_description || excerpt, og_image || cover_image,
      robots, schema_type, reading_time, featured ? 1 : 0, published_at
    ]);

    const blogId = result.insertId;

    // Attach Tags in blog_tags junction table
    if (Array.isArray(tags) && tags.length > 0) {
      for (const tagId of tags) {
        await query(`INSERT IGNORE INTO blog_tags (blog_id, tag_id) VALUES (?, ?)`, [blogId, tagId]);
      }
    }

    // Insert FAQs
    if (Array.isArray(faqs) && faqs.length > 0) {
      for (const faq of faqs) {
        if (faq.question && faq.answer) {
          await query(`INSERT INTO faqs (blog_id, question, answer) VALUES (?, ?, ?)`, [blogId, faq.question, faq.answer]);
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Blog post created successfully in MySQL database!",
      blogId: blogId
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
