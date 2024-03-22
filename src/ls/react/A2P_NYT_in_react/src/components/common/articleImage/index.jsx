import { StyledAnchor } from "./styles";

function ArticleImage({ src, alt = "image", width = "220px", href = "#" }) {
  return (
    <StyledAnchor>
      <a href={href}>{<img src={src} alt={alt} width={width} />}</a>
    </StyledAnchor>
  );
}

export default ArticleImage;
