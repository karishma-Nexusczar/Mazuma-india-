import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search articles, GST, Income Tax, ROC, Trademark..." }: SearchBarProps) {
  return (
    <div className="blog-search-box-wrapper">
      <div className="blog-search-input-inner">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="blog-search-input"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="search-clear-btn"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
