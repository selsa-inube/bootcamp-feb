import {
  StyledSection,
  StyledH1,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./styles";

function Header() {
  return (
    <StyledSection>
      <StyledH1>Cards</StyledH1>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/ecommerce">e-commerce</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/credit">credit</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/fish">fish</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledSection>
  );
}

export default Header;
