import { useState } from "react";
import copyicon from "./assets/icon-copy.svg";
import { ArrowRightIcon } from "./components/ArrowIcon.tsx";
import PasswordStrength from "./components/PasswordStrength";
import { CheckBoxOption } from "@types.ts/index.ts";
import { AppContainer, CharacterCount, CharacterSlider, CheckBoxOptionsContainer, CopyButton, FlexComponent, Main, PasswordSection, PasswordSettings, PasswordStrengthSection, Wrapper } from "./styles/index.ts";


function App() {
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
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

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

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

    setStrengthLabel(strengthLabel);
  };

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
            <input placeholder="P4$5W0rD!" readOnly value={password} />
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
            <CharacterSlider
              min={8}
              max={20}
              value={character}
              onChange={handleChange}
            />
            <CheckBoxOptionsContainer>
              {checkBoxOptions.map((item: CheckBoxOption) => (
                <FlexComponent key={item.id}>
                  <input
                    type="checkbox"
                    checked={
                      (item.id === 1 && uppercase) ||
                      (item.id === 2 && lowercase) ||
                      (item.id === 3 && numbers) ||
                      (item.id === 4 && symbols)
                    }
                    onChange={item.onClick}
                  />
                  <p>{item.text}</p>
                </FlexComponent>
              ))}
            </CheckBoxOptionsContainer>
            <PasswordStrengthSection>
              <p>STRENGTH</p>
              <PasswordStrength level={strengthLabel} />
            </PasswordStrengthSection>
            <button onClick={generatePassword}>
             <p> Generate </p><ArrowRightIcon />
            </button>
          </PasswordSettings>
        </Main>
      </AppContainer>
    </Wrapper>
  );
}

export default App;
