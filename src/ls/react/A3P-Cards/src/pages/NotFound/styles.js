import styled from "styled-components";

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;

  border: 1px solid #333;
  box-shadow: #33333388 0px 6px 12px 0px;
`;

const StyledH1 = styled.h1`
  color: #fff;
  padding: 10px;
  font-weight: normal;
  font-size: 30px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;

const StyledListItem = styled.li`
  padding: 20px;
`;

export { StyledSection, StyledH1, StyledList, StyledListItem };
