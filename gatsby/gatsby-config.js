// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config");

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
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
