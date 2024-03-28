import styled from "styled-components";

const StyledLink = styled.a`
  width: fit-content;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  text-decoration: none;
  color: #808080;
  border-bottom: 3px solid #d0d0d0;

  &:hover {
    color: #000;
    text-decoration: none;
    border-bottom: 2px solid #000;
  }
`;

export { StyledLink };
