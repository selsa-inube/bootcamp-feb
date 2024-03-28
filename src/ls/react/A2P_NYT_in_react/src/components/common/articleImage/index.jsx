import { StyledLinkedImage } from "./styles";

function ArticleImage({ src, alt = "image", width = "220px", href = "#" }) {
  return (
    <StyledLinkedImage href={href}>
      <img src={src} alt={alt} width={width} />
    </StyledLinkedImage>
  );
}

export default ArticleImage;
