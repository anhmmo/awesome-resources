import * as React from "react"
import { graphql } from "gatsby"
import ResourceList from "../components/ResourceList"
import CategoryFilter from "../components/CategoryFilter"
import SearchForm from "../components/SearchForm"
import SEO from "../components/SEO"

export default function CategoryPage({ data, pageContext }) {
  const resources = data.resources.nodes

  return (
    <>
      <SEO
        title={
          pageContext.category
            ? `Resorces With ${pageContext.category}`
            : `All Resorces`
        }
      />
      <section className="header">
        <div className="wrapper">
          <h1>Awere - Design resources for developers</h1>
          <h2>
            Curated list of <span className="hightlight">design</span> and{" "}
            <span className="hightlight">UI</span> resources from stock photos,
            web templates, CSS frameworks, UI libraries, tools and much more
          </h2>
          <SearchForm />
          <CategoryFilter activeCategory={pageContext.category} />
        </div>
      </section>
      <ResourceList resources={resources} />
    </>
  )
}

export const query = graphql`
  query ResourceQuery2(
    $categoryRegex: String
    $skip: Int = 0
    $pageSize: Int = 50
  ) {
    resources: allSanityResource(
      filter: { category: { elemMatch: { _id: { eq: $categoryRegex } } } }
      limit: $pageSize
      skip: $skip
    ) {
      totalCount
      nodes {
        name
        link
        description
        _id
        slug {
          current
        }
        category {
          _id
          name
          desc
          slug {
            current
          }
        }
      }
    }
  }
`
