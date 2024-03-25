import styled from "styled-components";

const StyledSection = styled.div`

  p {
    margin: 2px 0;
    font-size: 14px;
  }


  .square {
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
  }

    .winner-square {
    background-color: #ddd;
    color: #f88;
    }


  .status {
    margin-bottom: 10px;
  }

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }
`;

export {StyledSection}