import React from "react"
import styled from "styled-components"
import { Button } from "../Button/Button"
import { Data } from "../../Data/HeroData"
import { StyledTitle } from "../Title/Title"
const StyledWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledDescription = styled.p`
    font-size: {({theme}) => theme.font.size.mobile.small};
    margin-top: 18px;
`

const Hero = () => {
  return (
    <StyledWrapper>
      <StyledTitle>{Data.title}</StyledTitle>
      <StyledDescription>{Data.description}</StyledDescription>
      <Button>Poproś o wycenę</Button>
      <Button secondary>Zadzwoń Teraz</Button>
    </StyledWrapper>
  )
}

export default Hero
