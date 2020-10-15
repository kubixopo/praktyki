import React from 'react';
import styled from "styled-components";
import {StyledLogo, StyledLink} from "../Nav/Nav";
import { Link as LinkScroll} from "react-scroll";
import {Styledanchor} from "../ContactSection/ContactSection";
import facebookIcon from "../../images/facebook_icon.svg";

const StyledWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-top: 2px solid ${({theme}) => theme.colors.primary};

    ${({theme}) => theme.mq.desktop} {
        flex-direction: row;
        justify-content: space-between;
  }
`

const FooterLink = styled.p `
    padding: 10px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.mobile.tiny};

    :hover {
        cursor: pointer;
    }

    ${({theme}) => theme.mq.desktop} {
        font-size: ${({theme}) => theme.font.mobile.small};
    }
`

const Footerfb = styled.div `
    display: flex;
    align-items: center;
`

const LinkBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    ${({theme}) => theme.mq.desktop} {
        flex-direction: row;
        margin-top: 0;
  }
`

const Footer = () => {
    return (
        <StyledWrapper>
        <StyledLink to="/"><StyledLogo>Komputronik Opole</StyledLogo></StyledLink>
        <LinkBox>
            <LinkScroll
            to="ServicesSection"
            smooth={true}
            offset={-100}
            duration={500}><FooterLink >Usługi Serwisowe</FooterLink></LinkScroll>
            <LinkScroll
            to="ContactSection"
            smooth={true}
            duration={500}><FooterLink >Kontakt</FooterLink></LinkScroll>
          </LinkBox>
        <Styledanchor href="https://www.facebook.com/komputronik.niemodlinska">
            <Footerfb>
                <img src={facebookIcon} alt="facebook icon"/>
                <FooterLink>Odwiedź nas na fb!</FooterLink>
            </Footerfb>
        </Styledanchor>

        </StyledWrapper>
    );
}

export default Footer;
