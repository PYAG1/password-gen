import styled from "styled-components";
import { colors } from "../constants";

export const CheckBoxOptionsContainer = styled.section`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 15px;

  p{
    margin-left: 1em;
  }
    input {
     width: 16px;
  height: 16px;
  background: transparent;
  border: 2px solid ${colors.text};
  border-radius: 2px;
  appearance: none;
  cursor: pointer;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  &:checked {
    background-color: ${colors.green};
    border-color: ${colors.green};

    &::after {
      content: "";
      display: block;
      width: 5px;
      height: 8px;
      border: solid black;
      border-width: 0 2px 2px 0;
      font-weight: 700;
      transform: rotate(45deg);
    }
  }
    }
`;