import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr) auto;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  margin: 25px 0;

  & > a:nth-child(1) {
    grid-area: 1 / 1 / 4 / 3;
    display: flex;
    align-items: center;
  }

  & > a:nth-child(2) {
    grid-area: 4 / 1 / 6 / 3;
    display: flex;
    align-items: center;
  }

  & > section {
    grid-area: 1 / 3 / 6 / 4;
    display: flex;
    align-items: center;
  }

  & h2 {
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: 0;
    font-weight: bold;
    padding: 3px 0 0 0;
  }

  & p {
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 600;
    color: #606060;
  }
`;

export { StyledSection };
