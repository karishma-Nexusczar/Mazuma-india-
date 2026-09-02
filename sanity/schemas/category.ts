export const category = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Category Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
