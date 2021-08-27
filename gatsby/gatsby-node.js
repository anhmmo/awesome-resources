import path, { resolve } from "path"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

async function turnResourcesIntoPages({ graphql, actions }) {
  // 2. Query all Resources
  const { data } = await graphql(`
    query {
      resources: allSanityResource {
        totalCount
        nodes {
          name
          link
          description
          _id
          slug {
            current
          }
        }
      }
    }
  `)

  // 3. Figure out how many pages there are based on how many resources there are, and how many per page!
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
  const pageCount = Math.ceil(data.resources.totalCount / pageSize)
  console.log(
    `There are ${data.resources.totalCount} total people. And we have ${pageCount} pages with ${pageSize} per page`
  )
  // 4. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/${i + 1}`,
      component: path.resolve("./src/pages/index.js"),
      // This data is pass to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    })
  })
}

async function turnCategoryIntoPages({ graphql, actions }) {
  // 1. Get the template
  const categoryTemplate = path.resolve("./src/templates/Category.js")
  // 2. query all the category
  const { data } = await graphql(`
    query {
      category: allSanityCategory {
        totalCount
        nodes {
          desc
          name
          slug {
            current
          }
          _id
        }
      }
    }
  `)

  // 3. createPage for that category
  data.category.nodes.forEach(item => {
    actions.createPage({
      path: `category/${item.slug.current}`,
      component: categoryTemplate,
      context: {
        category: item.name,
        // TODO Regex for category
        categoryRegex: item._id,
      },
    })
  })
  // 4. Pass category data to Category.js
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnResourcesIntoPages(params),
    turnCategoryIntoPages(params),
  ])
  // 1. resources
  // 2. category
}
