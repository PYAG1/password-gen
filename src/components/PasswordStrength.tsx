import styled from "styled-components";
import { colors } from "../constants";


const BarsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Bar = styled.div`
  width: 8px;
  height: 20px;
  background-color: ${(props) => props.color || "transparent"};

  border: ${(props) => (props.color ? "none" : "2px solid white")};
`;
const StrengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10;
`;

const StrengthText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const PasswordStrength = ({ level }) => {
  const levels = {
    "too weak": { text: "TOO WEAK!", color: colors.red, bars: 1 },
    weak: { text: "WEAK", color: colors.orange, bars: 2 },
    medium: { text: "MEDIUM", color: colors.yellow, bars: 3 },
    strong: { text: "STRONG", color: colors.green, bars: 4 },
  };

  const { text, color, bars } = levels[level] || levels["too weak"];

  return (
    <StrengthContainer>
      <StrengthText>{text}</StrengthText>
      <BarsContainer>
        {[...Array(4)].map((_, index) => (
          <Bar key={index} color={index < bars ? color : ""} />
        ))}
      </BarsContainer>
    </StrengthContainer>
  );
};

export default PasswordStrength