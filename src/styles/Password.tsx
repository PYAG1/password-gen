import styled from "styled-components";
import { colors } from "../constants";

export const PasswordSection = styled.section`
  width: 100%;
  background: ${colors.background_light};
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  align-items: center; 
  input{
   background: transparent;
  border: none;
  font-size: 1.7em;
  outline: none;
  font-weight: 700;
  width: 80%;
  color: ${colors.text};
  padding: 0.5em 0;
  text-transform: uppercase;
   
`;

export const PasswordSettings = styled.section`
  width: 100%;
  padding: 1.5em;
  background: ${colors.background_light};
  color: ${colors.text};
  text-align: left;

  button {
    width: 100%;
    background: ${colors.green};
    font-size: 1em;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 1em 0;
    margin-top: 1em;
    gap: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    color:${colors.background};

    &:hover {
      background-color: transparent;
      border: 2px solid ${colors.green};
      color: ${colors.green};

      svg path {
        fill: #a4ffaf;
      }
    }
  }
`;

export const PasswordStrengthSection = styled.section`
  background: ${colors.background};
  width: 100%;
  padding: 1.5em;
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
`;
