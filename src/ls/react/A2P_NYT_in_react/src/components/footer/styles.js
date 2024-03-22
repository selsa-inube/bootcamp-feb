import styled from "styled-components";

const StyledSection = styled.section`
  grid-area: 3 / 2 / 4 / 3;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  border-top: 1px solid silver;
  padding-bottom: 30px;
`;

const StyledNav = styled.nav`
  grid-area: 1 / 1 / 2 / 7;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & section:last-child {
    margin: 0px;
    padding: 20px;

    & a {
      text-align: center;
      color: #606060;
      white-space: nowrap;
      font-weight: 600;
      font-size: 10px;
      letter-spacing: 0;
    }
    & a:hover {
      text-shadow: 2px 2px 7px #11111133;
    }
  }
`;

export { StyledSection, StyledNav };
