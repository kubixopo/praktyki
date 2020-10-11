import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../Utils/theme"
import Hamburger from "../Hamburger/Hamburger"
import MobileMenu from "../MobileMenu/MobileMenu"

const StyledHeader = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.font.mobile.tiny};

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.small};
  }

  ${({theme}) => theme.mq.large} {
      font-size: ${({theme}) => theme.font.desktop.small};
  }
`

const StyledHamburger = styled(Hamburger) `
  display: block;

  ${({theme}) => theme.mq.desktop} {
    display: none;
  }
`

const StyledLinks = styled.div `
  display: none;
  align-items: center;
  justyfi-content: space-between;

  ${({theme}) => theme.mq.desktop} {
    display: flex;
  }
`

const StyledLink = styled.h1`
    font-size: ${({theme}) => theme.font.mobile.small};
    margin-left: 30px;

    ${({theme}) => theme.mq.big} {
      font-size: ${({theme}) => theme.font.desktop.small};
      margin-left: 50px;
  }
`

const Links = ["Galeria", "Usługi Serwisowe", "Kontakt"]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <StyledHeader>
      <StyledLogo>Komputronik Opole</StyledLogo>
      <StyledHamburger onClick={openMenu} isOpen={isMenuOpen} />
      <StyledLinks>
        {Links.map(Link => (
          <StyledLink key={Link}>{Link}</StyledLink>
        ))}
      </StyledLinks>
      <MobileMenu isOpen={isMenuOpen} />
    </StyledHeader>
  )
}

export default Header
