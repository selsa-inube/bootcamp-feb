import styled from "styled-components";

const StyledSection = styled.section`
  grid-area: 1 / 1 / 4 / 2;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 50px;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 30px;
  }
`;

export { StyledSection };
