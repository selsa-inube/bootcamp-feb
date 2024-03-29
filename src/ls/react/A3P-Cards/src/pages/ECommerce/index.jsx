import {
  StyledSection,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledText,
  StyledTime,
  StyledCard,
  StyledBG,
  StyledLogo,
  StyledChip,
  StyledDiv,
  StyledTimeDiv,
} from "./styles";
import { BiCaretRight } from "react-icons/bi";
import CreditBDImage from "./assets/credit-bg.png";
import LogoImage from "./assets/logo.png";
import ChipImage from "./assets/chip.png";

function ECommerce() {
  return (
    <>
      <StyledH2>Credit</StyledH2>
      <StyledCard>
        <StyledBG src={CreditBDImage} alt="background" />
        <StyledSection>
          <StyledChip src={ChipImage} alt="background" />
          <StyledH4>2671 9860 8300 0202</StyledH4>
          <StyledDiv>
            <StyledText>expires</StyledText>
            <StyledText>end</StyledText>
          </StyledDiv>
          <StyledTimeDiv>
            <BiCaretRight />
            <StyledTime>11/22</StyledTime>
          </StyledTimeDiv>
          <StyledH3>clark doe</StyledH3>
          <StyledLogo src={LogoImage} alt="background" />
        </StyledSection>
      </StyledCard>
    </>
  );
}

export default ECommerce;
