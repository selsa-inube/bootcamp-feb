import { StyledLink } from "./styles";

function ArticleAnchor({ anchorText = "Continue Reading", href = "#" }) {
  return <StyledLink href={href}>{anchorText}</StyledLink>;
}

export default ArticleAnchor;
