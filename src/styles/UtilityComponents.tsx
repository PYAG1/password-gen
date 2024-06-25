import styled from "styled-components";
import { colors } from "../constants";

export const FlexComponent = styled.section<{ $space?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) =>
    props.$space ? "space-between" : "flex-start"};
  align-items: center;
`;
export const CharacterCount = styled.p`
  font-size: 1.8em;
  color: ${colors.green};
`;