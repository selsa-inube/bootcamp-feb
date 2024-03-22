import { StyledSection } from "./styles";

function CategoryButton({ category, date }) {
  return (
    <StyledSection>
      <a href="#">{category}</a>
      <time>{date}</time>
    </StyledSection>
  );
}

export default CategoryButton;
