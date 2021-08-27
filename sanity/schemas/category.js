import { MdLoyalty as icon } from "react-icons/md";
const tagIcon = { fonts: "(◕‿◕)", color: "✎", design: "✨" };
export default {
  // Computer Name
  name: "category",
  // visible title
  title: "Categories",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      description: "What is the name of the Category?",
    },
    {
      name: "desc",
      title: "Category Desc",
      type: "string",
      description: "Category Description",
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
  ],
  preview: {
    select: {
      name: "name",
      desc: "desc",
    },
    prepare: ({ name, desc }) => ({
      title: `${name} ${
        tagIcon[name.toLowerCase()] ? tagIcon[name.toLowerCase()] : ""
      } `,
      subtitle: desc,
    }),
  },
};
