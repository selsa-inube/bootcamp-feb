import { StyledSection } from "./styles";
import ArticleAnchor from "../articleAnchor";
import CategoryButton from "../categoryButton";

function ArticleTypeB({ catTitle, catDate, articleHeader, anchorText }) {
  return (
    <StyledSection>
      <CategoryButton category={catTitle} date={catDate} />
      <a href="#">
        <h2>{articleHeader} </h2>
      </a>
      <ArticleAnchor text={anchorText} />
    </StyledSection>
  );
}

export default ArticleTypeB;
