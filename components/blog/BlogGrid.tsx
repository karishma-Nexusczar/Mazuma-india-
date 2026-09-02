import React from "react";
import { Article } from "@/data/articles";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  articles: Article[];
}

export default function BlogGrid({ articles }: BlogGridProps) {
  return (
    <div className="articles-grid-3cols">
      {articles.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
