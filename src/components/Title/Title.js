import styled from "styled-components"
import { theme } from "../../Utils/theme"

export const StyledTitle = styled.h1`
    font-size: ${({theme}) => theme.font.mobile.large};

    ${({theme}) => theme.mq.tablet} {
    font-size: ${({theme}) => theme.font.desktop.large}
    };
`
