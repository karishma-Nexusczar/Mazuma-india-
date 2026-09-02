/**
 * Calculates estimated reading time from text or content blocks
 * Default reading speed: 225 words per minute
 */
export function calculateReadingTime(content: string | object[] | any): string {
  let text = "";

  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    content.forEach((block) => {
      if (block?.text) text += " " + block.text;
      if (block?.faqQuestion) text += " " + block.faqQuestion;
      if (block?.faqAnswer) text += " " + block.faqAnswer;
      if (Array.isArray(block?.items)) text += " " + block.items.join(" ");
    });
  } else if (content && typeof content === "object") {
    if (content.introduction) text += " " + content.introduction;
    if (Array.isArray(content.sections)) {
      content.sections.forEach((sec: any) => {
        if (sec.heading) text += " " + sec.heading;
        if (Array.isArray(sec.paragraphs)) text += " " + sec.paragraphs.join(" ");
        if (Array.isArray(sec.bulletPoints)) text += " " + sec.bulletPoints.join(" ");
      });
    }
    if (content.conclusion) text += " " + content.conclusion;
  }

  const cleanText = text.replace(/<[^>]*>/g, "").trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 225));

  return `${minutes} min read`;
}

export function countWords(content: string | any): number {
  let text = typeof content === "string" ? content : JSON.stringify(content || "");
  const cleanText = text.replace(/<[^>]*>/g, "").trim();
  return cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
}
