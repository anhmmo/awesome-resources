import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <section className="header">
        <div className="wrapper">
          <h1>Awere - Design resources for developers</h1>
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
      </section>
      <section className="category">
        <div className="wrapper">
          <div className="category-list flex">
            <div className="flex-item three category-item">
              <div className="single-item">
                <img
                  className="close-btn"
                  src="https://i.imgur.com/4nDYTIT.png"
                  alt=""
                />

                <div
                  className="preview-window"
                  title="click to view bigger image"
                >
                  <a target="_blank" href="https://i.imgur.com/k8i8X9v.png">
                    {" "}
                    <img src="https://i.imgur.com/k8i8X9v.png" alt="" />
                  </a>
                </div>
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://ian.umces.edu/apple-touch-icon.png"
                      alt="test"
                    />
                  </div>
                  <p title="Integration & Application Network Image Library">
                    Integration & Application Network Image Library
                  </p>
                  <a href="#">
                    {/*<div className="header-link"></div>*/}

                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p>
                    An online social networking community and creative research
                    platform.
                  </p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li>included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>
                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-item three category-item">
              <div className="single-item">
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://freepik.cdnpk.net/img/favicons/apple-icon-144x144.png?v=2018082101"
                      alt="test"
                    />
                  </div>
                  <p>Freepik</p>
                  <a href="#">
                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p>
                    Fully coded HTML templates to help you easily build your
                    startup landing page without hassles.
                  </p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li className="red">included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>

                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-item three category-item">
              <div className="single-item">
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://illlustrations.co/icons/icon-48x48.png?v=1d0394bf9fc267e40ccc6d562175855a"
                      alt="test"
                    />
                  </div>
                  <p>Illlustrations</p>
                  <a href="#">
                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p
                    title="Create stunning mockups using latest device frames like
                    iPhone X & custom backgrounds that make your mobile or
                    website design standout, right from your browser quickly &
                    for free."
                  >
                    Create stunning mockups using latest device frames like
                    iPhone X & custom backgrounds that make your mobile or
                    website design standout, right from your browser quickly &
                    for free.
                  </p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li className="red">included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>
                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-item three category-item">
              <div className="single-item">
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://smartmockups.com/apple-touch-icon.png"
                      alt="test"
                    />
                  </div>
                  <p>Smart Mockups</p>
                  <a href="#">
                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p>Create stunning product mockups (free & premium)</p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li className="red">included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>
                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-item three category-item">
              <div className="single-item">
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://screenshot.rocks/apple-touch-icon.png"
                      alt="test"
                    />
                  </div>
                  <p>Screenshot.rocks</p>
                  <a href="#">
                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p>
                    Create beautiful browser & mobile mockups in seconds
                  </p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li className="red">included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>
                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-item three category-item">
              <div className="single-item">
                <div className="item-header">
                  <div className="image-box">
                    <img
                      src="https://html5up.net/assets/icons/apple-touch-icon-precomposed.png"
                      alt="test"
                    />
                  </div>
                  <p>HTML5Up</p>
                  <a href="#">
                    <div className="header-link"></div>
                  </a>
                </div>
                <div className="item-body">
                  {" "}
                  <p>Very modern, unique responsive HTML5/CSS3 themes</p>{" "}
                  <ul className="list-tag">
                    <a href="#">
                      {" "}
                      <li className="green">free</li>
                    </a>
                    <a href="#">
                      <li className="red">included paid services</li>
                    </a>
                  </ul>
                </div>
                <div className="item-footer">
                  <div className="item-preview-link">
                    <div className="item-preview-image">
                      <img src="https://i.imgur.com/yrvSIVk.png" alt="test" />
                    </div>
                    <div className="preview-link">preview</div>
                  </div>
                  <a className="bookmark-link" href="#">
                    like
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
