import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function countResourcesInCategory(resources) {
  // Return the resources with counts
  const counts = resources
    .map(resource => resource.category)
    .flat()
    .reduce((acc, category) => {
      // check if this is an existing category
      const existingCategory = acc[category._id]
      if (existingCategory) {
        //  if it is, increment by 1
        existingCategory.count += 1
      } else {
        // otherwise create a new entry in our acc and set it to one
        acc[category._id] = {
          _id: category._id,
          name: category.name,
          slug: category.slug.current,
          count: 1,
        }
      }
      return acc
    }, {})
  // sort them based on their count
  const sortedCategory = Object.values(counts).sort((a, b) => b.count - a.count)
  return sortedCategory
}

export default function CategoryFilter({ activeCategory }) {
  // Get a list of all the category
  // Get a list of all the resources with their category
  const { resources } = useStaticQuery(graphql`
    query {
      category: allSanityCategory {
        nodes {
          desc
          name
          _id
        }
      }
      resources: allSanityResource {
        nodes {
          category {
            name
            _id
            desc
            slug {
              current
            }
          }
        }
      }
    }
  `)
  // Count how many resources are in each category
  const categoryWithCounts = countResourcesInCategory(resources.nodes)
  // Loop over the list of category and display the category and the count of resources in that category
  // Link it up.. ...  . . .
  //console.log(categoryWithCounts)
  return (
    <ul className="list-topic">
      <Link to="/">
        <li>
          {" "}
          All
          <span>{resources.nodes.length}</span>
        </li>
      </Link>
      {categoryWithCounts.map(category => (
        <Link to={`/category/${category.slug}#resource`} key={category._id}>
          <li className={category.name === activeCategory ? "active" : ""}>
            {" "}
            {category.name}
            <span>{category.count}</span>
          </li>
        </Link>
      ))}
    </ul>
  )
}
