import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        flex-wrap: wrap; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        height: 100vh;
        width: 100%;


        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
  border: 1px solid yellow;
  /* margin-top: 80px; */
`;

export { GlobalStyle, StyledSection };
