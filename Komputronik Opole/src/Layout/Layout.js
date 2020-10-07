import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import React from "react"
import { theme } from "../Utils/theme"
import "./Layout.css"

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 62.5%;
    }

    body {
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        font-size: 1.6rem;
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

const StyledWrapper = styled.div`
  width: 100vw;
  padding: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Montserrat", sans-serif;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>{children}</StyledWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
