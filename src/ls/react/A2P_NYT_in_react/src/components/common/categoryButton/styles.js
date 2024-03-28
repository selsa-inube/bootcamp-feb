import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0;

  & a {
    text-decoration: none;
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 800;
    font-size: 10px;
  }

  & time {
    padding: 10px;
    font-weight: 800;
    font-size: 10px;
  }
`;

export { StyledSection };
