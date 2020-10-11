import styled from "styled-components"
import { theme } from "../../Utils/theme"

export const Button = styled.button`
  margin-top: ${({ secondary }) => (secondary ? "18px" : "30px")};
  width: 240px;
  height: 65px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  border: ${({ theme, secondary }) =>
    secondary ? "2px solid" + theme.colors.primary : "none"};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primary : theme.colors.secondary};
  border-radius: 10px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.mobile.small};
  transition: color 0.5s ease-in-out;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primary : theme.colors.secondary};
    cursor: pointer;
    color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
    border: ${({ theme, secondary }) =>
    secondary ? "none" : "2px solid" + theme.colors.primary};
  }

  ${({theme}) => theme.mq.tablet} {
    margin-left: ${({ secondary }) =>
    secondary ? "20px" : "0"};
    margin-top: 30px;
    width: 300px;
    height: 81px;
    font-size: ${({ theme }) => theme.font.mobile.medium};
  }
`
