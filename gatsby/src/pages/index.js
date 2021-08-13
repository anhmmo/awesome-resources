import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="header">
        <div className="wrapper">
          <h1>Design resources for developers</h1>
          <h2>
            Curated list of <span className="hightlight">design</span> and{" "}
            <span className="hightlight">UI</span> resources from stock photos,
            web templates, CSS frameworks, UI libraries, tools and much more
          </h2>
          <form action="">
            <input type="text" placeholder="Type sources name, topic or URL" />
          </form>
          <ul className="list-topic">
            <li>
              {" "}
              UI Graphics<span>3</span>
            </li>
            <li className="green">
              {" "}
              Fonts<span>3</span>
            </li>
            <li>
              {" "}
              Colors<span>3</span>
            </li>
            <li>
              {" "}
              Stock Music & Sound Effects<span>3</span>
            </li>
            <li className="yellow">
              {" "}
              Icons<span>98</span>
            </li>
            <li>
              {" "}
              Logos<span>177</span>
            </li>
            <li>
              {" "}
              Favicons<span>6</span>
            </li>
            <li>
              {" "}
              Icon Fonts<span>4</span>
            </li>
            <li className="pea">
              {" "}
              Stock Photos<span>33</span>
            </li>
            <li>
              {" "}
              Stock Videos<span>09</span>
            </li>
            <li className="lavender">
              {" "}
              Vectors & Clipart<span>37</span>
            </li>
            <li>
              {" "}
              Product & Image Mockups<span>1</span>
            </li>
            <li>
              {" "}
              HTML & CSS Templates<span>2</span>
            </li>
            <li className="aqua">
              {" "}
              CSS Frameworks<span>7</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
