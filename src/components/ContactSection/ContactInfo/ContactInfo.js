import React from 'react';
import styled from 'styled-components';
import { theme } from "../../../Utils/theme"

const StyledWrapper = styled.div `
    display: flex;
    align-items: center;

    ${({theme}) => theme.mq.desktop} {
        margin-top: 20px;
    }
`

const StyledIcon = styled.img `
    transform: scale(0.7);

    ${({theme}) => theme.mq.desktop} {
        transform: scale(0.9)
  }

  ${({theme}) => theme.mq.big} {
        transform: scale(1)
  }
`

const StyledDescription = styled.p `
    font-size: ${({theme}) => theme.font.mobile.small};
    margin-left: 10px;

    ${({theme}) => theme.mq.desktop} {
        font-size: ${({theme}) => theme.font.desktop.small};
        margin-left: 17px;
  }

    ${({theme}) => theme.mq.big} {
        font-size: ${({theme}) => theme.font.desktop.medium};
        margin-left: 17px;
  }
`

const ContactInfo = ({src, alt, content}) => {
    return (
        <StyledWrapper>
            <StyledIcon src={src} alt={alt}/>
            <StyledDescription>{content}</StyledDescription>
        </StyledWrapper>
    );
}

export default ContactInfo;
