import styled from "styled-components";

const StyledLi = styled.li`
  margin: 20px;

  & a {
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      color: #555;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }
`;

export { StyledLi };
