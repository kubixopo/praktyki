import React from "react"
import styled from "styled-components"
import { Data } from "../../Data/ServicesSectionData"
import { theme } from "../../Utils/theme"
import { StyledTitle } from "../Title/Title"
import Card from "./Card/Card"

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`

const CardWrapper = styled.div`
  display: grid;
  width: inherit;
  grid-template-columns: repeat(auto-fit, minmax(auto, 460px));
  grid-gap: 40px;

  ${({theme}) => theme.mq.big} {
    grid-template-columns: repeat(auto-fit, 600px);
  }
`

const Title = styled(StyledTitle)`
  padding-bottom: 30px;

  ${({theme}) => theme.mq.tablet} {
    padding-bottom: 50px;
  }

`

const ServicesSection = () => {
  return (
    <StyledWrapper id="ServicesSection">
      <Title>Usługi Serwisowe</Title>
      <CardWrapper>
        {Data.map(item => (
          <Card {...item} key={item.title}/>
        ))}
      </CardWrapper>
    </StyledWrapper>
  )
}

export default ServicesSection
