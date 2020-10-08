import React, { useState } from "react"
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
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  row-gap: 40px;
`

const Title = styled(StyledTitle)`
  padding: 30px 0px;
`

const ServicesSection = () => {
  return (
    <StyledWrapper>
      <Title>Usługi Serwisowe</Title>
      <CardWrapper>
        {Data.map(item => (
          <Card {...item} />
        ))}
      </CardWrapper>
    </StyledWrapper>
  )
}

export default ServicesSection
