import { StyledUl, StyledSection } from "./styles";
import BarLi from "./barLi";
import BarHeader from "./barHeader";

function MenuBar({ titleH2, titleH3, date, listItems, width = "auto" }) {
  return (
    <StyledSection>
      <BarHeader titleH2={titleH2} titleH3={titleH3} date={date} />
      <StyledUl style={{ width }}>
        {listItems.map((option, index) => (
          <BarLi text={option} key={index} />
        ))}
      </StyledUl>
    </StyledSection>
  );
}

export default MenuBar;
