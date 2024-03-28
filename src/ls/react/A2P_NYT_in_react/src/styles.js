import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: content-box;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    ul {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
    }

    & a {
        color: #000;
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        color: #000;
    }

`;

const StyledSection = styled.section`
  margin: 0;
  padding: 0;
  color: black;
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr 0;
  grid-template-rows: 14vh 60% auto;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  justify-content: space-evenly;
`;

export { GlobalStyle, StyledSection };
