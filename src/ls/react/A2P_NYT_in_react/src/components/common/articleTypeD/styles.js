import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  padding: 10px;
  color: #fff;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 12px;
  }

  & > a:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    align-items: center;
  }

  & > section {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > a:nth-child(4) {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    color: #fff;
  }

  & > a:nth-child(3) {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    align-items: center;
  }

  & h2 {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    color: #fff;
    padding: 5px;
  }

  & p {
    font-size: 10px;
    display: inline;
    color: #fff;
    padding: 5px;
  }
`;

export { StyledSection };
