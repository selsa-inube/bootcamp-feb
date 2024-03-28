import { StyledSection } from "./styles";
import ArticleAnchor from "../articleAnchor";
import ArticleImage from "../articleImage";
import CategoryButton from "../categoryButton";

function ArticleTypeA({
  imgSrc,
  imgAlt,
  imgWidth,
  catTitle,
  catDate,
  articleHeader,
  articleSubheader,
  anchorText,
}) {
  return (
    <StyledSection>
      <ArticleImage src={imgSrc} alt={imgAlt} width={imgWidth} />
      <CategoryButton category={catTitle} date={catDate} />
      <a href="#">
        <h1>{articleHeader} </h1>
      </a>
      <a href="#">
        <p>{articleSubheader} </p>
      </a>
      <ArticleAnchor text={anchorText} />
    </StyledSection>
  );
}

export default ArticleTypeA;
