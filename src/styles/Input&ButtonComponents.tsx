import styled from "styled-components";
import { colors } from "../constants";

const PassWordInput = styled.input`
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

const CopyButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &:hover {
    img {
      filter: contrast(3.5);
    }
  }
  p {
    display: none;
    margin-right: 0.5em;
    color: ${colors.green};
    font-size: 1.2em;
  }

  &:active p {
    display: block;
  }
  &:active img {
    filter: none;
  }
`;
const GenerateButton = styled.button`
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

  &:hover {
    background-color: transparent;
    border: 2px solid ${colors.green};
    color: ${colors.green};

    svg path {
      fill: #a4ffaf;
    }
  }
`;
export default {
    GenerateButton,CopyButton,PassWordInput
}