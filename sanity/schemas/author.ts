export const author = {
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Author Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role / Designation",
      type: "string",
    },
    {
      name: "image",
      title: "Avatar Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio Description",
      type: "text",
    },
  ],
};
