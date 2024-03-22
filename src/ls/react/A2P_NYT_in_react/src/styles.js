import styled from "styled-components";

const StyledSection = styled.section`
  margin: 0;
  padding: 0;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr 0;
  grid-template-rows: 16vh 1fr 20vh;
  grid-column-gap: 50px;
  grid-row-gap: 20px;

  & a {
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

export { StyledSection };
