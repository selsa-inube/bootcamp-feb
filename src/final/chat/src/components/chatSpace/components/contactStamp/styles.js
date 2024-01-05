import { styled } from "styled-components";

const StyledContactStamp = styled.section`
  margin-left: 10px;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > div img {
    width: 40px;
    border-radius: 50%;
    margin: 5px;
  }
  > div p {
    font-weight: bold;
    font-size: 1rem;
  }
  > p {
    text-align: left;
    font-size: 1rem;
    color: #988f8f;
  }
`;

const StyledContactStampYou = styled(StyledContactStamp)`
  margin-left: 0px;
  margin-right: 15px;
  > div {
    justify-content: flex-end;
  }

  > p {
    text-align: right;
  }
`;

export { StyledContactStamp, StyledContactStampYou };
