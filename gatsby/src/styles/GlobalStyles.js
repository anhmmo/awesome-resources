import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2c3e50;
    --beige: #87969d;
    --white: #fff;
    --grey: #f4f8fb;
    --orange: #f97616;
    --green: #4eaa5f;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box; 
    font-size: 10px;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit; 
  }
 
  html,
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth; 
  }

  ::selection {
      background-color: var(--black);
      color: var(--white);
    }

  body {
    position: relative;
    left: 0;
    right: 0;
    margin: 0;
    width: 100%;
    font-style: normal;
    font-size: 1.6rem;
    overflow-x: hidden; 
    background-color: var(--grey);

    
  }

  header,
  main,
  section,
  footer {
    width: 100%; 
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    position: relative;
    margin: 0;
    padding: 0;
  }

 

  a {
    color: #080806;
    text-decoration: none; 
  }

  a:hover {
    color: white; 
  }
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    @media only screen and (max-width: 900px) {
      padding: 0 30px;
    }
    @media only screen and (max-width: 600px) {
      padding: 0 20px;
    }
  }
  
  /* Layout */

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

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 14px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--beige) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--beige) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

/* reset ul properties */
  ul {
    -webkit-padding-start: 0 !important;
      padding-inline-start: 0 !important;
      @media (max-width: 600px) {
        -webkit-margin-before: 0 !important;
        margin-block-start: 0 !important;
        -webkit-margin-after: 0 !important;
        margin-block-end: 0 !important;
      }
  }

  section.header {
    padding: 50px 0;
    background-color: var(--white);
    font-family: Lato, sans-serif;
    @media (max-width: 600px) {
      padding: 30px 0;
    }
    @media (max-width: 400px) {
      padding: 20px 0;
    }
    @media (max-width: 300px) {
      padding: 10px 0;
    }
    h1 {
      font-family: 'Lobster', cursive;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 4rem;
      @media (max-width: 600px) {
        font-size: 3rem;
      }
    }
    h2 {
        font-family: Montserrat, sans-serif;
        font-size: 1.6rem;
        font-weight: normal;
        text-align: center;
        color: #1a2a30;
        .hightlight {
          padding-left: .5rem;
          padding-right: .5rem;
          border-top-left-radius: .5rem;
          border-bottom-left-radius: .25rem;
          border-top-right-radius: .5rem;
          border-bottom-right-radius: .6rem;
          background-image: -o-linear-gradient(
          300deg
          ,#fff,#2a3e52 15.5%,#2a3e40 80.29%,#fff);
          background-image: linear-gradient(
          150deg
          ,#fff,#2a3e52 15.5%,#2a3e40 80.29%,#fff);
          color: #fff;

        }
    }

    form {
      text-align: center;
      max-width: 60rem;
      margin: 0 auto;
      position: relative;

      @media (max-width: 600px) {
        width: 100%;
      }

     
      input {
        width: 100%;
        height: 5rem;
        padding: 10px;
        margin: 40px 0;
        outline: none;
        font-family: Lato, sans-serif;
        border: 1px solid #DFE9F0;
        border-radius: 7px;
        color: #2a3e52;
   
        text-align: center;
        font-weight: 600;
        font-style: normal;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        @media (max-width: 600px) {
          width: 100%;
          height: 4rem;
          margin: 30px 0;
        }
        @media (max-width: 400px) {
          margin: 20px 0;
        }
        &:focus-visible {
          outline-offset: 0px;
        }
      }
    }


    ul.list-topic {
      display: block;
      
      text-align: center;

      a {
        &[aria-current="page"] li {
          color: #000000;
          background-color: #ffb400;

          &:hover {
            color: #000000;
            background-color: #ffb400;
          }
        }

        li {
          display: inline-block;
          font-family: Montserrat, sans-serif;
          font-weight: 600;
          border-radius: 12rem;
          font-size: 1.4rem;
          margin: 6px;
          padding: 6px 14px;
          color: #87969d;
          background-color: #f4f8fb;
          cursor: pointer;
          -webkit-transition: all 400ms;
          -o-transition: all 400ms;
          transition: all 400ms;

          &.active {
            color: #000000;
            background-color: #ffb400;
            
            &:hover {
              color: #000000;
              background-color: #ffb400;
            }
          }

          &.green {
            &:hover {
              color: #71c3aa;
              background-color: #e2faf2;
            }
          
          }

          &.yellow {
            
            &:hover {
              color: #968047;
              background-color: #fcf2da;
            }
          }

          &.lavender {
          
            &:hover {
              color: #784d79;
              background-color: #fce9fd;
            }
          }

          &.aqua {
            
            &:hover {
              color: #1b6e66;
              background-color:#e6fbf9;
            }
          }

          &.pea {
            
            &:hover {
              color: #3e6c47;
              background-color:#dbeede;
            }
          }

          &:hover {
            background-color: var(--black);
            color: var(--white);
            -webkit-box-shadow: rgb(46 41 51 / 8%) 0px 4px 16px, rgb(71 63 79 / 16%) 0px 8px 24px;
            box-shadow: rgb(46 41 51 / 8%) 0px 4px 16px, rgb(71 63 79 / 16%) 0px 8px 24px;
          }

          &:hover span {
            transform: scale(1.15) rotate(12deg);
            color: var(--black);
          }

          span {
            display: inline-block;
            margin-left: 6px;
            padding: 2px 6px;
            background-color: var(--white);
            border-radius: 12rem;
            transition: all 400ms;
          }
        }
      }
      
    
    }
  }

  section.resource {
    padding: 50px 0;
    /*box-shadow: -2px -2px 60px 20px #ececec;*/
    .resource-list {
      width: auto;
      margin-left: -20px;
      margin-right: -20px;
      @media (max-width: 1000px) {
        margin-left: -16px;
        margin-right: -16px;
      }
      @media (max-width: 880px) {
        margin-left: -14px;
        margin-right: -14px;
      }
      .resource-item {
        padding: 20px;
        @media (max-width: 1000px) {
          padding: 16px;
        }
        @media (max-width: 880px) {
          width: 50%;
          padding: 14px;
        }
        @media (max-width: 600px) {
          width: 100%;
        }
        .single-item {
          min-height: 210px;
          padding: 12px;
          border-radius: 2px;
          background-color: var(--white);
          position: relative;
      
          -webkit-box-shadow: 0 5px 23px -7px rgb(163 185 197 / 77%);
          -moz-box-shadow: 0 5px 23px -7px rgba(163,185,197,.77);
          box-shadow: 0 5px 23px -7px rgb(163 185 197 / 77%);
          transition: all 200ms;

          @media (max-width: 600px) {
            min-height: 150px;
          }


          &:hover {
            transform: translateY(-4px);
          }

          .close-btn {
            display: none;
            position: absolute;
            top: -22px;
            right: 0;
            width: 18px;
            height: 18px;
            cursor: pointer;
            &:hover {

            }
          }

          .info-btn {
            position: absolute;
            top: -20px;
            right: 26px;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }
        .preview-window {
          display: none;
          width: inherit;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
          overflow-y: scroll;
          height: 100%;

          
          /* Scrollbar Styles */
          &::-webkit-scrollbar {
            width: 5px;
            
          }
          &::-webkit-scrollbar-track {
            background: var(--white);
            
          }
          &::-webkit-scrollbar-thumb {
            background-color: var(--beige) ;
            border-radius: 6px;
            height: 5px;
          }
          img {
            width: 100%;
            object-fit: cover;
          }

         
        }

        .item-header {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          position: relative;
          .image-box {
            width: 4rem;
            height: 4rem;
            img {
              width: 100%;
            }
          }

          p {
            color: var(--black);
            font-weight: 600;
            font-size: 1.4rem;
            margin-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            width: 74%;
            text-overflow: ellipsis;
          }

          a {
            position: absolute;
            right: 0;
            top: 0;
            display: block;
            width: 1.6rem;
            height: 1.6rem;
           
            div.header-link {
              background-image: url("https://i.imgur.com/C2z8R3L.png");
              height: 20px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              transition: all 300ms;
            }
            &:hover div.header-link{
              background-image: url("https://i.imgur.com/zwIWnFm.png");
              transform: scale(1.1);
            }
          }

        }

        .item-body {

          p {
            font-family: Lato,sans-serif;
            letter-spacing: .5px;
            -webkit-letter-spacing: .5px;
            -moz-letter-spacing: .5px;
            -ms-letter-spacing: .5px;
            font-size: 1.4rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .tag-body {
            display: flex;
            align-items: center;
            @media (max-width: 600px) {
                  margin-bottom: 20px !important;
            }

            img {
              width: 20px;
              margin-right: 10px;
            }

            .list-tag {
              display: block;
              white-space: nowrap;
              overflow-x: auto;
              &::-webkit-scrollbar {
                display: none;
              }
              &::-webkit-scrollbar-track {
                background: var(--white);
                
              }
              &::-webkit-scrollbar-thumb {
                background-color: var(--beige) ;
                border-radius: 2px;
                height: 2px;
              }
           
              a {
                display: inline-block;
                &:not(:last-child) {
                  margin-right: 8px;
                }
                li {
                  font-family: Lato,sans-serif;
                  display: inline-block;
                  font-size: 1.4rem;
                  
                  padding: 6px 8px;
                  border-radius: 50px;
                  color: #87969d;
                  background-color: #f4f8fb;
              
                  &.green {
                    color: #3e6c47;
                    background-color:#dbeede;
                  } 
                }
              }
            }
          
          }
        }

        .item-footer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          align-items: center;
          a {
            font-size: 1.4rem;
          }
          .item-preview-link {
            display: flex;
            align-items: center;
            .item-preview-image {
              width: 20px;
                height: 20px;
                margin-right: 8px;
                img {
                  width: 100%;
                }
            }
            .preview-link {
              color: #87969d;
              transition: all 300ms;
              cursor: pointer;
              font-size: 1.4rem;
              &:hover {
                color: var(--black);
                font-weight: bold;
              }
            }
          }
      
            
          .bookmark-link {
              color: #87969d;
              background: #f4f8fb;
              border-color: #eceef1;
              margin: 0 0 0 auto;
              padding: 2px 10px;
              border: 1px solid #eceef1;
              line-height: 16px;
              font-size: 12px;
              border-radius: 2px;
              font-family: Montserrat,sans-serif;
              font-weight: 400;
              font-style: normal;
              -moz-transition: all .2s ease-out;
              -o-transition: all .2s ease-out;
              -ms-transition: all .2s ease-out;
              -webkit-transition: all .2s ease-out;
              transition: all .2s ease-out;
              cursor: pointer;
              -webkit-perspective: 1000;
              -webkit-backface-visibility: hidden;
              -webkit-transform: translate3d(0,0,0);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              &:hover { 
                background: #4eaa5f;
                color: #fff;
              }
            }
          
        }
      }
    }
  }



`

export default GlobalStyles
