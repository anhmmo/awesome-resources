import React from "react"
import { Link } from "gatsby"

const getLink = link => {
  let newLink = ""
  if (link[link.length - 1] === "/") {
    newLink = link.slice(0, link.length - 1)
  }
  if (link.includes("http")) {
    newLink = link.slice(link.indexOf("/") + 1)
  }

  return newLink
}

function SingleResource({ resource }) {
  let faviconLink = getLink(resource.link)
  return (
    <div className="flex-item three resource-item">
      <div className="single-item">
        <img
          className="close-btn"
          src="https://i.imgur.com/4nDYTIT.png"
          alt="close button"
        />

        <div className="preview-window" title="click to view bigger image">
          <a
            href="https://i.imgur.com/k8i8X9v.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="https://i.imgur.com/k8i8X9v.png" alt="preview" />
          </a>
        </div>
        <div className="item-header">
          <div className="image-box">
            <img
              src={`https://api.faviconkit.com/${faviconLink}/144`}
              alt={resource.name}
            />
          </div>
          <p title={resource.name}>{resource.name}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {/*<div className="header-link"></div>*/}
            <div className="header-link"></div>
          </a>
        </div>
        <div className="item-body">
          {" "}
          <p title={resource.description}>{resource.description}</p>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i.imgur.com/vAUTnoW.png"
              style={{
                width: "20px",
                marginRight: "10px",
              }}
              alt="tag"
            />
            <ul
              className="list-tag"
              style={{ whiteSpace: "nowrap", overflowX: "auto" }}
            >
              {resource.category.map(item => {
                return (
                  <Link
                    key={item._id}
                    to={`/category/${item.slug.current}#resource`}
                  >
                    <li>{item.name}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="item-footer">
          <div className="item-preview-link">
            <div className="item-preview-image">
              <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
            </div>
            <div className="preview-link">preview</div>
          </div>
          <div className="bookmark-link">like</div>
        </div>
      </div>
    </div>
  )
}

export default function ResourceList({ resources }) {
  console.log(resources)
  return (
    <section className="resource" id="resource">
      <div className="wrapper">
        <div className="resource-list flex">
          {resources.map(resource => (
            <SingleResource key={resource._id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
