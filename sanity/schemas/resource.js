import { MdLaunch as icon } from "react-icons/md";

export default {
  // Computer Name
  name: "resource",
  // visible title
  title: "Resources",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Resource Name",
      type: "string",
      description: "Name of the resource",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    },
    {
      name: "description",
      title: "Resource Description",
      type: "string",
      description: "Write some info about the resource",
    },
    {
      name: "link",
      title: "Resource Link",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      desc: "description",
      category0: "category.0.name",
      category1: "category.1.name",
      category2: "category.2.name",
      category3: "category.3.name",
    },
    prepare: ({ title, desc, ...category }) => {
      const lists = Object.values(category).filter(Boolean);

      return {
        title,
        subtitle: desc + " - " + lists.join(", "),
      };
    },
  },
};
