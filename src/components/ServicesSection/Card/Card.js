import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../Utils/theme"

const StyledCard = styled.div`
  width: 100%;
  height: ${({ isClicked }) => (isClicked ? "auto" : "150px")};
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 23px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(1, 104, 179, 0.5);

  :hover {
    cursor: pointer;
  }
`

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.mobile.medium};

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.large};
  }
`

const StyledDescription = styled.p`
  display: ${({ isClicked }) => (isClicked ? "block" : "none")};
  margin-top: 20px;
  font-size: ${({ theme }) => theme.font.mobile.tiny};

  ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.mobile.medium};
  }
`

const Card = ({ title, description }) => {
  const [isClicked, setIsClicked] = useState(false)

  const clickToggle = () => {
    setIsClicked(prev => !prev)
  }
  return (
    <StyledCard onClick={clickToggle} isClicked={isClicked}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription isClicked={isClicked}>{description}</StyledDescription>
    </StyledCard>
  )
}

export default Card
