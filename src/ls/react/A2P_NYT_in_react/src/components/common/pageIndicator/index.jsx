import { StyledSection } from "./styles";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

function PageIndicator() {
  return (
    <StyledSection>
      <a href="#">
        <FaRegCircle />
      </a>
      <a href="#">
        <FaCircle />
      </a>
      <a href="#">
        <FaCircle />
      </a>
    </StyledSection>
  );
}

export default PageIndicator;
