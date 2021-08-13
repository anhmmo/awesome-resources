import React from "react"
import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {children}
    </>
  )
}
