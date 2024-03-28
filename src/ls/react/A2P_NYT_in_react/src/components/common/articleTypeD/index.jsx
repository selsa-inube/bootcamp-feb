import { StyledSection } from "./styles";
import ArticleImage from "../articleImage";
import { FaClock } from "react-icons/fa6";

function ArticleTypeD({
  imgSrc,
  imgAlt,
  imgWidth,
  articleHeader,
  val1,
  val2,
  val3,
  date,
  boxColor = "green",
}) {
  return (
    <StyledSection style={{ backgroundColor: boxColor }}>
      <a href="#">
        <h2>{articleHeader}</h2>
        <p>{val1}</p>
      </a>
      <ArticleImage src={imgSrc} alt={imgAlt} width={imgWidth} />
      <a href="#">
        <p>{val2}</p>
        <p>{val3}</p>
      </a>
      <a href="#">
        <FaClock />
        <p>{date}</p>
      </a>
    </StyledSection>
  );
}

export default ArticleTypeD;
