import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import React from "react"
import { theme } from "../Utils/theme"
import Nav from "../components/Nav/Nav"
import "./Layout.css"


const StyledWrapper = styled.div`
  position: relative;
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

    <ThemeProvider theme={theme}>
      <>
          <Nav />
          <StyledWrapper>{children}</StyledWrapper>
      </>
    </ThemeProvider>

  )
}

export default Layout
