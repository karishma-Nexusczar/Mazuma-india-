import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "mazuma_tax_db",
  port: Number(process.env.MYSQL_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query<T = any>(sql: string, params: any[] = []): Promise<T> {
  try {
    const [results] = await pool.execute(sql, params);
    return results as T;
  } catch (error) {
    console.error("MySQL Database Error:", error);
    throw error;
  }
}

export function getPool() {
  return pool;
}

// Database Row Types (Phase 1 Schema)
export interface BlogRow {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  summary: string | null;
  content: string | null;
  cover_image: string | null;
  category_id: number | null;
  status: "draft" | "published";
  seo_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  canonical_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  robots: string;
  schema_type: string;
  reading_time: string;
  featured: number;
  created_at: Date;
  updated_at: Date;
  published_at: Date | null;
}

export interface CategoryRow {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface TagRow {
  id: number;
  name: string;
  slug: string;
  created_at: Date;
}

export interface BlogTagRow {
  blog_id: number;
  tag_id: number;
}

export interface FaqRow {
  id: number;
  blog_id: number;
  question: string;
  answer: string;
  created_at: Date;
}
