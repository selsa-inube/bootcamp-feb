import { StyledUl } from "./styles";
import Li from "./li";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { PiMoonFill } from "react-icons/pi";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";

function verticalBar() {
  return (
    <StyledUl>
      <Li text=<IoEllipsisHorizontal /> />
      <Li text=<LiaGripLinesVerticalSolid /> />
      <Li text=<PiMoonFill /> />
    </StyledUl>
  );
}

export default verticalBar;
