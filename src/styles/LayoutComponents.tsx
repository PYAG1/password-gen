import styled from "styled-components";
import { colors } from "../constants";

export const Wrapper = styled.div`
  width: 100vw;
  background: ${colors.background};
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;

export const AppContainer = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;

  h3{
  color: ${colors.gray};
  margin-bottom: 1em;  
  }
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;



export const Main = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: transparent;

  margin-bottom: 1em;
`;
