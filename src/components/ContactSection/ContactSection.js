import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../Title/Title";
import ContactInfo from "./ContactInfo/ContactInfo";
import phoneIcon from "../../images/phone_icon.svg";
import mailIcon from "../../images/mail_icon.svg";
import homeIcon from "../../images/home_icon.svg";
import facebookIcon from "../../images/facebook_icon.svg";
import Map from "../Map/Map";
import {Data} from "../../Data/ContactData"
import OpenHours from "./OpenHours/OpenHours";
import ContactForm  from "./Form/Form";

const StyledWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 100px 0;
`

const ContactBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ${({theme}) => theme.mq.desktop} {
        flex-direction: row;
        align-items: flex-start;
  }
`

const StyledInfo = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 25px;

    ${({theme}) => theme.mq.desktop} {
        width: 50%;
  }
`

export const Styledanchor = styled.a `
    color: ${({theme}) => theme.colors.primary};
`

const ContactSection = () => {
    return (
        <StyledWrapper id="ContactSection">
            <StyledTitle>Kontakt</StyledTitle>
            <ContactBox>
                <StyledInfo>
                    <Styledanchor href="tel:795214404"><ContactInfo src={phoneIcon} alt="phoneIcon" content={Data.phone}/></Styledanchor>
                    <Styledanchor href="mailto:opole@komputronik.pl"><ContactInfo src={mailIcon} alt="mailIcon" content={Data.email}/></Styledanchor>
                    <ContactInfo src={homeIcon} alt="homeIcon" content={Data.adres}/>
                    <Styledanchor href="https://www.facebook.com/komputronik.niemodlinska"><ContactInfo src={facebookIcon} alt="facebookIcon" content="Facebook"/></Styledanchor>
                    <OpenHours />
                </StyledInfo>
                <ContactForm  />
            </ContactBox>
            <Map />
        </StyledWrapper>
    );
}

export default ContactSection;
