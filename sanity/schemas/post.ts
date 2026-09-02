export const post = {
  name: "post",
  title: "Posts (Blogs)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Image Alt" }],
    },
    {
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Content Editor",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "focusKeyword",
      title: "Focus Keyword",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
    },
  ],
};
