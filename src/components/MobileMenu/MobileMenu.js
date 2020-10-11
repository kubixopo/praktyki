import styled from "styled-components"
import React from "react"
import { theme } from "../../Utils/theme"

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

const MenuLink = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.mobile.medium};
  margin-top: 40px;

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.large};
  }
`

const MenuItems = ["Galeria", "Usługi Serwisowe", "Kontakt"]

const MobileMenu = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      {MenuItems.map(item => (
        <MenuLink key={item}>{item}</MenuLink>
      ))}
    </StyledWrapper>
  )
}

export default MobileMenu
