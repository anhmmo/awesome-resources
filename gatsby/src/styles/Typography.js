import { createGlobalStyle } from "styled-components"
import font from "../assets/fonts/Varela-Regular.woff"

const Typography = createGlobalStyle`

  @font-face {
    font-family: Varela;
    src: url(${font});
  }
  html {
    font-family: Varela, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
 
  .center {
    text-align: center;
  }

 
`

export default Typography
