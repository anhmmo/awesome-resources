import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;
  flex-wrap: wrap;
  & > * {
    font-size: 1.4rem;
    transition: all 200ms;
    font-weight: bold;
    width: 34px;
    height: 34px;
    line-height: 34px;
    background-color: white;
    margin: 3px 6px;
    border: 1px solid #0000001a;
    border-radius: 4px;
    text-decoration: none;
    &[aria-current],
    &:hover,
    &.current {
      color: #ffffff;
      background-color: var(--black);
    }
    &[disabled] {
      pointer-events: none;
      color: #989898;
    }
  }
`

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1
  return (
    <PaginationStyles>
      <Link
        title="Prev Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}#resource`}
      >
        ←
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={
            currentPage === 1 && i === 0 ? "current has-page" : "has-page"
          }
          to={`${base}/${i > 0 ? i + 1 : ""}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}#resource`}
      >
        →
      </Link>
    </PaginationStyles>
  )
}
