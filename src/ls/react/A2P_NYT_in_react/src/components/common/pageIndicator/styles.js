import styled from "styled-components";

const StyledSection = styled.section`
  padding: 10px 0;
  display: flex;
  align-items: center;

  & a:first-child {
    font-size: 10px;
    color: #000;
  }

  & a {
    text-decoration: none;
    padding: 20px 10px 0 0;
    font-size: 6px;
    color: #bbb;
  }

  & a:hover {
    color: #000;
    text-decoration: none;
  }
`;

export { StyledSection };
