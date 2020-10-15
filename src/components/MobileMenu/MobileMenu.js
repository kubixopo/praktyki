import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import { theme } from "../../Utils/theme"
import { Link as LinkScroll} from "react-scroll"

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.secondary};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.35s ease-in-out;
`

const MenuLink = styled(LinkScroll)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.mobile.medium};
  margin-top: 40px;

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.large};
  }
`

const StyledLink = styled(Link) `
  font-weight: 700;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.mobile.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 40px;

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.large};
  }
`

const MobileMenu = ({ isOpen, openMenu}) => {

  return (
    <StyledWrapper isOpen={isOpen}>
          <StyledLink to="/galeria">Galeria</StyledLink>
          <MenuLink
          to="ServicesSection"
          smooth={true}
          offset={-100}
          duration={500} 
          onClick={openMenu}>Usługi Serwisowe</MenuLink>
        <MenuLink
          to="ContactSection"
          smooth={true}
          duration={500}
          onClick={openMenu}>Kontakt</MenuLink>
    </StyledWrapper>
  )
}

export default MobileMenu
