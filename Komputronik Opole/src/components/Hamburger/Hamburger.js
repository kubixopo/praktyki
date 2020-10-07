import React from "react"
import styled from "styled-components"
import { theme } from "../../Utils/theme"

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 15px 0px 15px 15px;
  z-index: 2000;
`

const InnerHamburger = styled.div`
  position: relative;
  width: 30px;
  height: 4px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? "tranparent" : theme.colors.primary};
  transition: background-color 0.2s ease-in-out;

  ::after,
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 30px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ::after {
    top: 9px;
    transform: translateY(${({ isOpen }) => (isOpen ? "-9px" : "0")})
      rotate(${({ isOpen }) => (isOpen ? "45deg" : "0")});
    transition: transform 0.2s ease-in-out;
  }

  ::before {
    top: -9px;
    transform: translateY(${({ isOpen }) => (isOpen ? "9px" : "0")})
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    transition: transform 0.2s ease-in-out;
  }
`

const Hamburger = ({ isOpen, ...props }) => {
  return (
    <StyledHamburger {...props}>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  )
}

export default Hamburger
