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
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <StyledHeader>
      <StyledLogo>Komputronik Opole</StyledLogo>
      <Hamburger onClick={openMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />
    </StyledHeader>
  )
}

export default Header
