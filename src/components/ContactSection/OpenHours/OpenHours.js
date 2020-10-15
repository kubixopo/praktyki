import React from 'react';
import {Data} from "../../../Data/OpenHours";
import styled from "styled-components"

const StyledWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 50px;
`

const StyledTitle = styled.h6`
    font-size: ${({theme}) => theme.font.mobile.small};

    ${({theme}) => theme.mq.desktop} {
        font-size: ${({theme}) => theme.font.desktop.small};
  }

  ${({theme}) => theme.mq.big} {
        font-size: ${({theme}) => theme.font.desktop.medium};
  }
`

const StyledDescription = styled.p`
    font-size: ${({theme}) => theme.font.mobile.small};

    ${({theme}) => theme.mq.desktop} {
        font-size: ${({theme}) => theme.font.desktop.small}
    }

    ${({theme}) => theme.mq.big} {
        font-size: ${({theme}) => theme.font.desktop.medium};
  }
`

const BoxWrapper = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const Box = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    :last-of-type {
        margin-left: 20px;
    }

    ${({theme}) => theme.mq.desktop} {
        :last-of-type {
        margin-left: 40px;
        }
    }
`

const OpenHours = () => {
    return (
        <StyledWrapper>
            <StyledTitle>Godziny Pracy</StyledTitle>
            <BoxWrapper>
                <Box>
                    <StyledTitle>Pon. - Pt.</StyledTitle>
                    <StyledTitle>Sob</StyledTitle>
                    <StyledTitle>Niedz.</StyledTitle>
                </Box>
                <Box>
                    <StyledDescription>{Data.MoFr}</StyledDescription>
                    <StyledDescription>{Data.Sat}</StyledDescription>
                    <StyledDescription>{Data.Sun}</StyledDescription>
                </Box>
            </BoxWrapper>
        </StyledWrapper>
    );
}

export default OpenHours;
