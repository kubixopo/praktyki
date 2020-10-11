import React from "react"
import styled from "styled-components"
import { Button } from "../Button/Button"
import { Data } from "../../Data/HeroData"
import { StyledTitle } from "../Title/Title"
import { theme } from "../../Utils/theme"
import  HeroImage from "../../images/Hero_IMG.svg"

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHeroContent = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledDescription = styled.p`
  font-size: ${({theme}) => theme.font.mobile.small};
  margin-top: 18px;

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.medium};
    margin-top: 30px;
  }
`

const ButtonGroup = styled.div `
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;

  ${({theme}) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`

const StyledHeroImg = styled.div `
  display: none;
  margin-left: 100px;

  ${({theme}) => theme.mq.large} {
    display: block;
  }
`

const Hero = () => {
  return (
    <StyledWrapper>
      <StyledHeroContent>
        <StyledTitle>{Data.title}</StyledTitle>
        <StyledDescription>{Data.description}</StyledDescription>
        <ButtonGroup>
          <Button>Poproś o wycenę</Button>
          <Button secondary>Zadzwoń Teraz</Button>
        </ButtonGroup>
      </StyledHeroContent>
      <StyledHeroImg>
        <img src={HeroImage} alt="HeroImage"/>
      </StyledHeroImg>
    </StyledWrapper>
  )
}

export default Hero
