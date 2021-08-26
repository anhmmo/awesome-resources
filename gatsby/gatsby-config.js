require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default {
  siteMetadata: {
    title: `Awere - creative tools for developers`,
    siteUrl: "http://localhost:8000/",
    description: "A collection of creative tools for developers",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "fxm4gf2b",
        dataset: "production",
        watchMode: true,
        token: process.env.API_TOKEN,
      },
    },
  ],
}
