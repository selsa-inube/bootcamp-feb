import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;

  & h2 {
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0;
    padding: 10px 0;
  }
`;

export { StyledSection };
