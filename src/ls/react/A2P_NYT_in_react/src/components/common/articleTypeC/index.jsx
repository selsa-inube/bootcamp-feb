import { StyledSection } from "./styles";
import ArticleImage from "../articleImage";

function ArticleTypeC({
  imgSrc,
  imgAlt,
  imgWidth,
  articleHeader,
  articleSubheader,
}) {
  return (
    <StyledSection>
      <a href="#">
        <h2>{articleHeader} </h2>
      </a>
      <a href="#">
        <p>{articleSubheader} </p>
      </a>
      <ArticleImage src={imgSrc} alt={imgAlt} width={imgWidth} />
    </StyledSection>
  );
}

export default ArticleTypeC;
