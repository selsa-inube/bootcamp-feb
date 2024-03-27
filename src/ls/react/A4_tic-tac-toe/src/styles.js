import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 20px;
    padding: 0;
  }
`;

const StyledGameBoard = styled.div`
  display: block;
`;

const StyledSquare = styled.div`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
`;

const StyledGame = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledText = styled.p`
  margin: 2px 0;
  font-size: 14px;
`;

const StyledStatus = styled.p`
  margin-bottom: 10px;
`;

const StyledGameInfo = styled.div`
  margin-left: 20px;
`;

const StyledSection = styled.div`
  .game-info {
    margin-left: 20px;
  }
`;

export {
  GlobalStyle,
  StyledGameBoard,
  StyledSection,
  StyledSquare,
  StyledGame,
  StyledText,
  StyledStatus,
  StyledGameInfo,
};
