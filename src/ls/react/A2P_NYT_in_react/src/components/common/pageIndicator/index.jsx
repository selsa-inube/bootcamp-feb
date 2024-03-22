import { StyledAnchor } from "./styles";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

function PageIndicator() {
  return (
    <StyledAnchor>
      <a href="#">
        <FaRegCircle />
      </a>
      <a href="#">
        <FaCircle />
      </a>
      <a href="#">
        <FaCircle />
      </a>
    </StyledAnchor>
  );
}

export default PageIndicator;
