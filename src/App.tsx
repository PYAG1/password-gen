import { useState } from "react";
import styled from "styled-components";
import copyicon from "./assets/icon-copy.svg";
import { colors } from "./constants";
import PasswordStrength from "./components/PasswordStrength";

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

  h3{
  color: ${colors.gray};
  margin-bottom: 1em;  
  }
  @media (min-width: 768px) {
    max-width: 500px;
  }
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
  align-items: center; /* Center vertically */
`;

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

const PasswordSettings = styled.section`
  width: 100%;
  padding: 1.5em;
  background: ${colors.background_light};
  color: ${colors.text};
  text-align: left;
`;

const FlexComponent = styled.section<{ $space?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) =>
    props.$space ? "space-between" : "flex-start"};
  align-items: center;
`;
const CharacterCount = styled.p`
  font-size: 1.8em;
  color: ${colors.green};
`;
const ArrowRightIcon = () => (
  <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#24232C"
      d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
    />
  </svg>
);
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
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
`;

interface CheckBoxOption {
  id: number;
  text: string;
  onClick?: () => void;
}

const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
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
`;

interface SliderProps {
  min: number;
  max: number;
  value: number;
}

const CharacterSlider = styled.input.attrs(props => ({
  type: 'range',
  max: props.max,
  min: props.min,
  value: props.value
}))<SliderProps>`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 7px;
  margin-bottom: 2rem;
  background: hsl(248, 15%, 11%);
  background-image: linear-gradient(hsl(127, 100%, 82%), hsl(127, 100%, 82%));
  background-size: ${props => (props.value - props.min) / (props.max - props.min) * 100}% 100%;
  background-repeat: no-repeat;
  accent-color: green;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 28px;
    width: 28px;
    border: 2px solid hsl(252, 11%, 91%);
    border-radius: 50%;
    background-color: hsl(252, 11%, 91%);
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    border: 2px solid hsl(127, 100%, 82%);
    background-color: hsl(248, 15%, 11%);
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 28px;
    width: 28px;
    border: 2px solid hsl(252, 11%, 91%);
    border-radius: 50%;
    background-color: hsl(252, 11%, 91%);
    cursor: pointer;
  }

  &::-moz-range-thumb:hover,
  &::-moz-range-thumb:active {
    border: 2px solid hsl(127, 100%, 82%);
    background-color: hsl(248, 15%, 11%);
  }
`;



function App() {
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [strengthLabel, setStrengthLabel] = useState("Too Weak");
  const [character, setCharacter] = useState(8);
  const checkBoxOptions: CheckBoxOption[] = [
    {
      id: 1,
      text: "Include Uppercase Letters",
      onClick: () => setUppercase((prev) => !prev),
    },
    {
      id: 2,
      text: "Include Lowercase Letters",
      onClick: () => setLowercase((prev) => !prev),
    },
    {
      id: 3,
      text: "Include Numbers",
      onClick: () => setNumbers((prev) => !prev),
    },
    {
      id: 4,
      text: "Include Symbols",
      onClick: () => setSymbols((prev) => !prev),
    },
  ];

  const generatePassword = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";
    if (uppercase) characterPool += uppercaseLetters;
    if (lowercase) characterPool += lowercaseLetters;
    if (numbers) characterPool += numberChars;
    if (symbols) characterPool += symbolChars;

    if (characterPool === "") {
      alert("Please select at least one option.");
      return;
    }

    const passwordLength = character;
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
    evaluatePasswordStrength(generatedPassword);
  };

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  const evaluatePasswordStrength = (password: string) => {
    let strength = 0;
    // const lengthCriteria = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // if (lengthCriteria) strength += 25;
    if (hasUppercase) strength += 25;
    if (hasLowercase) strength += 25;
    if (hasNumbers) strength += 25;
    if (hasSymbols) strength += 25;

    strength = Math.min(strength, 100);
    let strengthLabel = "too weak";
    if (strength >= 75) {
      strengthLabel = "strong";
    } else if (strength >= 50) {
      strengthLabel = "medium";
    } else if (strength >= 25) {
      strengthLabel = "weak";
    }

    setStrength(strength);
    setStrengthLabel(strengthLabel);
  };
  console.log("apple",character)

  console.log(password, strength);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {})
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  };
  return (
    <Wrapper>
      <AppContainer>
        <h3>Password Generator</h3>
        <Main>
          <PasswordSection>
            <PassWordInput placeholder="P4$5W0rD!" readOnly value={password} />
            <CopyButton onClick={() => copyToClipboard()}>
              <p>COPIED</p>
              <img src={copyicon} alt="Copy Icon" width="21" height="24" />
            </CopyButton>
          </PasswordSection>
          <PasswordSettings>
            <FlexComponent $space={true}>
              <p>Character Length</p>
              <CharacterCount>{character}</CharacterCount>
            </FlexComponent>
            <CharacterSlider min={8} max={20} value={character} onChange={handleChange}/>
            <CheckBoxOptionsContainer>
              {checkBoxOptions.map((item: CheckBoxOption) => (
                <FlexComponent key={item.id}>
                  <CheckBoxInput
                    type="checkbox"
                    checked={
                      (item.id === 1 && uppercase) ||
                      (item.id === 2 && lowercase) ||
                      (item.id === 3 && numbers) ||
                      (item.id === 4 && symbols)
                    }
                    onChange={item.onClick}
                  />
                  <CheckBoxTextItem>{item.text}</CheckBoxTextItem>
                </FlexComponent>
              ))}
            </CheckBoxOptionsContainer>
            <PasswordStrengthSection>
              <p>STRENGTH</p>
              <PasswordStrength level={strengthLabel} />
            </PasswordStrengthSection>
            <GenerateButton onClick={generatePassword}>
              Generate <ArrowRightIcon />
            </GenerateButton>
          </PasswordSettings>
        </Main>
      </AppContainer>
    </Wrapper>
  );
}

export default App;
