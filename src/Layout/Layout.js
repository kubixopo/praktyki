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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.secondary};
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
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Montserrat", sans-serif;

  ${({theme}) => theme.mq.large} {
    width: 85%;
    padding: 16px 0;
  }

  ${({theme}) => theme.mq.big} {
    width: 85%;
    padding: 32px 0;
  }
`

const Layout = ({ children }) => {
  return (
    <body>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>{children}</StyledWrapper>
      </>
    </ThemeProvider>
    </body>
  )
}

export default Layout
