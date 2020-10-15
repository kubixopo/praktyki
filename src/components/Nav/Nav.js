import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Hamburger from "../Hamburger/Hamburger"
import MobileMenu from "../MobileMenu/MobileMenu"
import { Link as LinkScroll} from "react-scroll"

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  font-family: "Montserrat", sans-serif;
  z-index: 9999;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 10px rgba(1,104,179, 0.5);
`

const StyledHeader = styled.nav`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`

export const StyledLogo = styled.h1`
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

export const StyledLink = styled(Link) `
  text-decoration: none;
  color: ${({theme}) => theme.colors.primary}
`

const StyledLinks = styled.div `
  display: none;
  align-items: center;
  justify-content: space-between;

  ${({theme}) => theme.mq.desktop} {
    display: flex;
  }
`

export const StyledLinkScroll = styled(LinkScroll)`
    font-size: ${({theme}) => theme.font.mobile.small};
    padding: 5px 15px;
    font-weight: 700;
    border-radius: 5px;
    transition: color 0.3s ease,
     background-color 0.3s ease;

    :hover {
      cursor: pointer;
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.secondary};
    }

    ${({theme}) => theme.mq.big} {
      font-size: ${({theme}) => theme.font.desktop.small};
      margin-left: 50px;
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledLink to="/"><StyledLogo>Komputronik Opole</StyledLogo></StyledLink>
        <StyledHamburger onClick={openMenu} isOpen={isMenuOpen} />
        <StyledLinks>
          {/* <StyledLinkScroll to="/galeria">Galeria</StyledLinkScroll> */}
          <StyledLinkScroll
          to="ServicesSection"
          smooth={true}
          offset={-100}
          duration={500}>Usługi Serwisowe</StyledLinkScroll>
        <StyledLinkScroll
          to="ContactSection"
          smooth={true}
          duration={500}>Kontakt</StyledLinkScroll>
        </StyledLinks>
        <MobileMenu isOpen={isMenuOpen} openMenu={openMenu}/>
      </StyledHeader>
    </StyledWrapper>
  )
}

export default Header
