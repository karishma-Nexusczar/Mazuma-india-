import React from "react";

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="blog-categories-bar">
      <span className="categories-label">Categories:</span>
      <div className="categories-pills-row">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-pill-btn ${selectedCategory === cat ? "is-active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
