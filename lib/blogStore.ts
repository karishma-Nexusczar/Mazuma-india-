import { Article, articles as initialArticles } from "@/data/articles";

const STORAGE_KEY = "mazuma_custom_articles_v2";

export function getStoredArticles(): Article[] {
  if (typeof window === "undefined") {
    return initialArticles;
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter(
          (a: Article) =>
            ![
              "post-itr-2026-guide",
              "post-gst-compliance-2026",
              "post-pvt-ltd-registration",
              "post-roc-compliance-checklist",
              "post-trademark-registration-guide",
              "post-msme-udyam-benefits",
            ].includes(a?.id)
        );
        if (filtered.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        }
        return filtered;
      }
    }
    // Also clear old v1 key if present
    localStorage.removeItem("mazuma_custom_articles_v1");
  } catch (e) {
    console.error("Error reading articles from storage", e);
  }
  return initialArticles;
}

export function saveArticleToStore(article: Article): Article[] {
  if (typeof window === "undefined") return [];
  const current = getStoredArticles();
  const index = current.findIndex((a) => a.id === article.id || a.slug === article.slug);
  let updated: Article[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = article;
  } else {
    updated = [article, ...current];
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("mazuma_articles_updated", { detail: updated }));
  } catch (e) {
    console.error("Error saving article", e);
  }
  return updated;
}

export function deleteArticleFromStore(id: string): Article[] {
  if (typeof window === "undefined") return [];
  const current = getStoredArticles();
  const updated = current.filter((a) => a.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("mazuma_articles_updated", { detail: updated }));
  } catch (e) {
    console.error("Error deleting article", e);
  }
  return updated;
}

export function clearAllArticlesFromStore(): Article[] {
  if (typeof window === "undefined") return [];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    window.dispatchEvent(new CustomEvent("mazuma_articles_updated", { detail: [] }));
  } catch (e) {
    console.error("Error clearing articles", e);
  }
  return [];
}
