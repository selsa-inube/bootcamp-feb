import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0;

  & h1 {
    margin: 0;
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 0;
    padding: 10px 0;
  }

  & p {
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 600;
    color: #606060;
    padding: 10px 0;
  }
`;

export { StyledSection };
