import { StyledSection } from "./styles";

function Category({ category, date }) {
  return (
    <StyledSection>
      <a href="#">{category}</a>
      <time datetime="">{date}</time>
    </StyledSection>
  );
}

export { Category };
