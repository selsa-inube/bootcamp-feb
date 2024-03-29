import styled from "styled-components";
import { Link } from "react-router-dom";

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

  align-items: end;

  border: 1px solid #333;
  box-shadow: #33333388 0px 6px 12px 0px;
`;

const StyledH1 = styled.h1`
  color: #fff;
  padding: 10px;
  font-weight: 300;
  font-size: 32px;
  padding: 0 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  align-items: end;
`;

const StyledListItem = styled.li`
  padding: 2px 12px;
`;

const StyledLink = styled(Link)`
  color: #888;
  font-size: 18px;
  font-weight: normal;
  font-weight: 300;

  &:hover {
    color: #ddd;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
  }
`;

export { StyledSection, StyledH1, StyledList, StyledListItem, StyledLink };
