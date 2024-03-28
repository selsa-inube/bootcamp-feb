import { StyledLi } from "./styles";

function Li({ text }) {
  return (
    <StyledLi>
      <a href="#">{text}</a>
    </StyledLi>
  );
}

export default Li;
