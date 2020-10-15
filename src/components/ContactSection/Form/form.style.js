import styled from "styled-components";

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;

    ${({theme}) => theme.mq.desktop} {
        width: 50%;
        margin-top: 0;
        align-items: flex-start;
  }

  ${({theme}) => theme.mq.large} {
        width: 45%;
        margin-left: 5%;
  }
`

export const StyledWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%

`

export const StyledLabel = styled.label `
    margin-top: 20px;
    font-size: ${({ theme}) => theme.font.mobile.small };
    transition: transform 0.3s ease;

    ${({theme}) => theme.mq.large} {
        font-size: ${({ theme}) => theme.font.desktop.small};
    }
`

export const StyledInput = styled.input `
    width: 100%;
    background-color: transparent;
    padding: 0 10px;
    height: 30px;
    border: none;
    margin-top: 3px;
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({ theme}) => theme.font.mobile.small };
    font-family: "Montserrat", sans-serif;

    ::placeholder {
        font-size: ${({ theme}) => theme.font.mobile.tiny};
        color: ${({theme}) => theme.colors.primary};
    }

    ${({theme}) => theme.mq.large} {
        font-size: ${({ theme}) => theme.font.desktop.small};
        height: 40px;

        ::placeholder {
        font-size: ${({ theme}) => theme.font.mobile.small};
        }
    }
`

export const StyledError = styled.p `
    font-size: ${({ theme}) => theme.font.mobile.tiny };
    color: red;
    padding: 5px 0;
    font-family: "Montserrat", sans-serif;
`

export const StyledTextarea = styled.textarea `
    width: 100%;
    background-color: transparent;
    resize: none;
    padding: 0 10px;
    height: 25px;
    margin-top: 3px;
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({ theme}) => theme.font.mobile.small };
    font-family: "Montserrat", sans-serif;
    transition: height 0.3s ease;

    :focus {
        height: 90px;
    }

    ::placeholder {
        font-size: ${({ theme}) => theme.font.mobile.tiny};
        color: ${({theme}) => theme.colors.primary};
    }

    ${({theme}) => theme.mq.large} {
        font-size: ${({ theme}) => theme.font.desktop.small};
        height: 40px;

        ::placeholder {
        font-size: ${({ theme}) => theme.font.mobile.small};
        }

        :focus {
        height: 150px;
    }
    }
`

export const StyledButton = styled.button `
    width: 100%;
    padding: 5px;
    align-self: center;
    font-weight: 700;
    align-self: flex-end;
    border-radius: 10px;
    margin-top: 20px;
    border: none;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${({ theme}) => theme.font.mobile.medium};

    :hover {
        cursor: pointer;
    }

    ${({theme}) => theme.mq.desktop} {
        width: 50%;
    }

    ${({theme}) => theme.mq.large} {
        font-size: ${({ theme}) => theme.font.desktop.medium};
    }
`