import { StyledLi } from "./styles";

function BarLi({ text, index }) {
  return (
    <StyledLi key={index}>
      <a href="#">{text}</a>
    </StyledLi>
  );
}

export default BarLi;
