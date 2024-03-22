import styled from "styled-components";

const StyledHeader = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
`;

const StyledSectionLeft = styled.section`
  justify-self: start;

  & a:last-of-type {
    padding: 20px;
    color: #000;
    position: relative;

    &::after {
      z-index: 10;
      position: absolute;
      top: 17px;
      right: 18px;
      height: 5px;
      width: 5px;
      background-color: #ed4b23;
      border: 2px solid #ffffff;
      border-radius: 50%;
      content: "";
    }
    & a:hover {
      text-shadow: 2px 2px 7px #11111133;
    }
  }
`;

const StyledSectionRight = styled.section`
  justify-self: end;
  font-size: 10px;
  font-weight: 800;
  & a {
    color: #000;
    padding: 10px 20px;
  }
  & a:last-of-type {
    color: #000;
    border: 2px solid silver;
  }
  & a:hover {
    text-shadow: 2px 2px 6px #11111144;
  }
`;

const StyledSectionNYT = styled.section`
  & svg {
    width: 220px;
  }
`;

const StyledNav = styled.nav`
  grid-area: 2 / 1 / 3 / 4;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & section:last-child {
    margin: 0px;
    padding: 20px;
    background: #000;

    & a {
      color: #fff;
      text-align: center;
    }
  }
`;

const StyledNotificationDot = styled.section`
  position: absolute;
  top: 0px;
  left: 7px;
  height: 9px;
  width: 9px;
  background-color: #ed4b23;
  border: 2px solid #ffffff;
  border-radius: 50%;
`;

export {
  StyledHeader,
  StyledNav,
  StyledSectionLeft,
  StyledSectionRight,
  StyledSectionNYT,
  StyledNotificationDot,
};
