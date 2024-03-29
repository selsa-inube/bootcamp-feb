import styled from "styled-components";

const StyledH2 = styled.h2`
  color: #fff;
  padding: 10px;
  font-weight: 100;
  font-size: 24px;
  font-weight: 200;
`;

const StyledCard = styled.section`
  font-family: "Major Mono Display", Consolas, "Courier New", Courier, monospace;
  display: block;
  position: relative;
`;

const StyledSection = styled.section`
  position: absolute;
  top: 0;
  left: 15px;
  right: 0;
  bottom: 0;
  margin: 25px;

  display: grid;
  grid-template-columns: 30% auto 30%;
  grid-template-rows: 4fr repeat(3, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 15px;
  align-items: center;

  font-weight: normal;
`;

const StyledBG = styled.img`
  border-radius: 23px;
  width: 500px;
  display: block;
`;

const StyledChip = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  width: 75px;
  padding: 5px;
  font-weight: normal;
  justify-self: start;
  align-self: end;
`;

const StyledLogo = styled.img`
  grid-area: 3 / 3 / 5 / 4;
  width: 75px;
  font-weight: normal;
  justify-self: end;
  align-self: end;
`;

const StyledH3 = styled.h3`
  grid-area: 4 / 1 / 5 / 3;
  font-weight: normal;
  font-size: 20px;
  text-shadow: 0px 0px 1px black;
`;

const StyledH4 = styled.h4`
  grid-area: 2 / 1 / 3 / 4;
  font-weight: bold;
  font-size: 28px;
  display: block;
  text-shadow: 0px 0px 1px black;
  text-justify: center;
`;

const StyledDiv = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

const StyledText = styled.p`
  font-weight: normal;
  font-size: 8px;
  text-align: right;
  color: #555;
  text-shadow: 0px 0px 1px #555;
`;

const StyledTimeDiv = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  font-size: 16px;
  color: #000;
`;

const StyledTime = styled.time`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  text-shadow: 0px 0px 1px black;
  align-items: center;
`;

export {
  StyledSection,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledText,
  StyledTime,
  StyledCard,
  StyledBG,
  StyledLogo,
  StyledChip,
  StyledDiv,
  StyledTimeDiv,
};
