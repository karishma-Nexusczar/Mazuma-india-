import { NextResponse } from "next/server";
import { getStoredArticles } from "@/lib/blogStore";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazumaindia.com";
  const articles = getStoredArticles();

  const rssItemsXml = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid>${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description><![CDATA[${article.excerpt}]]></description>
      <category><![CDATA[${article.category}]]></category>
    </item>`
    )
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mazuma India Tax &amp; Business Advisory Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Official statutory tax guides, GST compliance rules, and corporate legal advisories for Indian enterprises.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
