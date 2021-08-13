// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: `Awesome sources`,
    siteUrl: "https://awesome-souces.netlify.app",
    description:
      "Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more. Base on https://github.com/bradtraversy/design-resources-for-developers",
    github: "@anhmmo",
    author: `@anhmmo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,400,700,800,900`,
          `Montserrat\:300,400,500,600,800,900`,
          `Lobster\:400`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      // this is the name of the plugin you are adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "0jfvvkkd",
        dataset: "production",
        watchMode: true,
        token: config.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
