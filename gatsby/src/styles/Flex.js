import { createGlobalStyle } from "styled-components"

const FlexLayout = createGlobalStyle`

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%; 
}
.flex.row-reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse; 
}
.flex.row-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; 
}

.flex-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto; 
}
.flex-item.full {
  width: 100%; 
}
.flex-item.one {
  width: 100%; 
}
.flex-item.two {
  width: 50%; 
}

.flex-item.three {
  width: 33.33333%; 
}
.flex-item.four {
  width: 25%; 
}
.flex-item.five {
  width: 20%; 
}
.flex-item.six {
  width: 16.666%; 
}
.flex-item.seven {
  width: 14.285%; 
}
.flex-item.eight {
  width: 12.5%; 
}
.flex-item.nine {
  width: 75%; 
}
.flex-item.ten {
  width: 11.11111%; 
}
.flex-item.eleven {
  width: 16.666%; 
}
.flex-item.twelve {
  width: 8.333%; 
}


`

export default FlexLayout
