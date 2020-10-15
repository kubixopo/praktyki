import React from 'react';
import styled from "styled-components";
import {theme} from "../../Utils/theme"

const StyledWrapper = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    border: 3px solid ${({theme}) => theme.colors.primary};
    margin-top: 50px;
`

const Map = () => {
    return (
        <StyledWrapper>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1291.683590976646!2d17.904960641499127!3d50.66621905643707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710535201285035%3A0x75c3e36ec2087c9b!2sKomputronik!5e1!3m2!1spl!2spl!4v1602598321808!5m2!1spl!2spl" style={{
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
            position: "absolute",
            border: "none"}}></iframe>
        </StyledWrapper>
    );
}

export default Map;

