import styled from "styled-components";
import { colors } from "../constants";

export const CopyButton = styled.button`
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