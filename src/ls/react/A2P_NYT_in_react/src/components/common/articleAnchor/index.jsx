import { StyledAnchor } from "./styles";

function ArticleAnchor({ anchorText = "Continue Reading", href = "#" }) {
  return (
    <StyledAnchor>
      <a href={href}>{anchorText}</a>
    </StyledAnchor>
  );
}

export default ArticleAnchor;
