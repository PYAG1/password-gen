import styled from "styled-components";
import { colors } from "../constants";

const Wrapper = styled.div`
  width: 100vw;
  background: ${colors.background};
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;

const AppContainer = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;


export default {Wrapper,AppContainer}