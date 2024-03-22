import styled from "styled-components";

const StyledBarHeader = styled.section`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px 5px 0;

  & h2 {
    margin: 0;
    font-family: Times, "Times New Roman", Times, serif;
    font-size: 28px;
    letter-spacing: 0;
    white-space: nowrap;
  }

  & h3 {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 800;
    line-height: 2.2;
    white-space: nowrap;
  }

  & time {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

export { StyledBarHeader };
