import styled from "styled-components";
import { StyledBarHeader } from "./styles";

const StyledH2 = styled.h2`
  visibility: ${(props) => (props.$titleH2 ? "collapse " : "visible")};
`;
const StyledH3 = styled.h3`
  visibility: ${(props) => (props.$titleH3 ? "collapse " : "visible")};
`;
const StyledTime = styled.time`
  visibility: ${(props) => (props.$date ? "collapse " : "visible")};
`;

function BarHeader({ titleH2, titleH3, date }) {
  return (
    <StyledBarHeader>
      <StyledH2>{titleH2}</StyledH2>
      <StyledH3>{titleH3}</StyledH3>
      <StyledTime>{date}</StyledTime>
    </StyledBarHeader>
  );
}

export default BarHeader;
