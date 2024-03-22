import styled from "styled-components";

const StyledMain = styled.section`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 23%;
  grid-template-rows: auto 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 10px;

  &section:nth-child(2),
  &section:nth-child(3) {
    border-right: 1px solid #e8e8e8;
    padding: 0 50px 0 0;
  }
`;

const StyledNav = styled.nav`
  grid-area: 1 / 1 / 2 / 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  font-size: 12px;
  align-items: center;
`;

const StyledSectionAB = styled.section`
  border-right: 1px solid #e8e8e8;
  padding: 0 50px 0 0;
`;

export { StyledMain, StyledNav, StyledSectionAB };
