import { NextResponse } from "next/server";
import { initializeDatabase } from "@/lib/db/initDb";

export const dynamic = "force-static";

export async function GET() {
  try {
    await initializeDatabase();
    return NextResponse.json({
      success: true,
      message: "MySQL Phase 1 Database Tables (blogs, categories, tags, blog_tags, faqs) initialized successfully!"
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to initialize MySQL Database" },
      { status: 500 }
    );
  }
}
