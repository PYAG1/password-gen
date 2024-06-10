import { useState } from "react";
import styled from "styled-components";
import { FaArrowRight, FaRegCopy } from "react-icons/fa";

const colors = {
  background: "#18171F",
  background_light: "#24232C",
  text: "#E6E5EA",
  gray: "#817D92",
  green: "#A4FFAF",
  red: "#F64A4A",
  orange: "#FB7C58",
  yellow: "#F8CD65",
};

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
`;

const Title = styled.h3`
  color: ${colors.gray};
  margin-bottom: 1em;
`;

const Main = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: transparent;

  margin-bottom: 1em;
`;

const PasswordSection = styled.section`
  width: 100%;
  background: ${colors.background_light};
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const PassWordInput = styled.input`
  background: transparent;
  border: none;
  font-size: 1.4em;
  outline: none;
  font-weight: 700;
  width: 80%;
  color: ${colors.text};
`;

const PasswordSettings = styled.section`
  width: 100%;
  padding: 1.5em;
  background: ${colors.background_light};
  color: ${colors.text};
  text-align: left;
`;

const CopyButton = styled.button`
  background: transparent;
  width: 40px;
  height: 40px;
  border: none;
`;
const FlexComponent = styled.section<{ $space?: boolean }>`
  display: flex;
  width: 100%; /* Ensures full width for flex items */
  flex-direction: row;
  justify-content: ${(props) =>
    props.$space ? "space-between" : "flex-start"};
  align-items: center;
`;
const CharacterCount = styled.p`
  font-size: 1.8em;
  color: ${colors.green};
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
  cursor: pointer; /* Make it clickable */
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Smooth transitions */

  &:hover {
    background-color: transparent; /* Semi-transparent green on hover */
border:2px solid ${colors.green};
color:${colors.green};

  }
`;

const CheckBoxTextItem = styled.p`
  margin-left: 1em;
`;

const CheckBoxOptionsContainer = styled.section`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PasswordStrengthSection = styled.section`
  background: ${colors.background};
  width: 100%;
  padding: 1.5em;
  color:${colors.gray};
  display:flex;
  justify-content:space-between
`;
interface CheckBoxOption {
  id: number;
  text: string;
  onClick?: () => void;
}

const checkBoxOptions: CheckBoxOption[] = [
  {
    id: 1,
    text: "Include Uppercase Letters",
    onClick: () => {},
  },
  {
    id: 2,
    text: "Include Lowercase Letters",
    onClick: () => {},
  },
  {
    id: 3,
    text: "Include Numbers",
    onClick: () => {},
  },
  {
    id: 4,
    text: "Include Symbols",
    onClick: () => {},
  },
];
const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  width: 16px; 
  height: 16px;
  background: transparent;
  border: 2px solid ${colors.green};
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
      font-weight:700;
      transform: rotate(45deg);
    }
  }
`;


function App() {
  return (
    <Wrapper>
      <AppContainer>
        <Title>Password Generator</Title>
        <Main>
          <PasswordSection>
            <PassWordInput placeholder="P4$5W0rD!" readOnly />
            <CopyButton>
              <FaRegCopy size={20} color={`${colors.green}`} />
            </CopyButton>
          </PasswordSection>
          <PasswordSettings>
            <FlexComponent $space={true}>
              <p>Character Length</p>
              <CharacterCount>10</CharacterCount>
            </FlexComponent>
            <CheckBoxOptionsContainer>
              {checkBoxOptions.map((item: CheckBoxOption) => (
                <FlexComponent>
                  <CheckBoxInput />
                  <CheckBoxTextItem>{item?.text}</CheckBoxTextItem>
                </FlexComponent>
              ))}
            </CheckBoxOptionsContainer>
            <PasswordStrengthSection>
              <p>STRENGTH</p>
              
            </PasswordStrengthSection>
            <GenerateButton>Generate <FaArrowRight color={colors.background} /> </GenerateButton>
          </PasswordSettings>
        </Main>
      </AppContainer>
    </Wrapper>
  );
}

export default App;
