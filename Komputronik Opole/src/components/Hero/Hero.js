import React from "react"
import styled from "styled-components"
import { Button } from "../Button/Button"

const data = {
  title:
    "Potrzebujesz komputer, ale nie masz pojęcia jakie części byłyby najlepsze?",
  description:
    "Nasi wykwalifikowani pracownicy dobiorą odpowiednie komponenty i złożą  dla Ciebie idealny komputer dostosowany do Twoich potrzeb.",
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledTitle = styled.h1`
    font-size: {({theme}) => theme.font.size.mobile.large}
`

const StyledDescription = styled.p`
    font-size: {({theme}) => theme.font.size.mobile.small};
    margin-top: 18px;
`

const Hero = () => {
  return (
    <StyledWrapper>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledDescription>{data.description}</StyledDescription>
      <Button>Poproś o wycenę</Button>
      <Button secondary>Zadzwoń Teraz</Button>
    </StyledWrapper>
  )
}

export default Hero
