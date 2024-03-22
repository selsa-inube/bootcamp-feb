import { StyledSection, StyledNav } from "./styles";
import MenuBar from "../common/menuBar";
import { IoChevronForwardSharp } from "react-icons/io5";
import ArticleTypeD from "../common/articleTypeD";
import ImageArticleD from "../assets/art_type4_02.png";

function Footer() {
  const footerBarOtpions = [
    "Features",
    "Americas",
    "Europe",
    "Asia",
    "Commodities",
  ];
  return (
    <StyledSection>
      <StyledNav>
        <MenuBar
          listItems={footerBarOtpions}
          titleH3={"MARKET SNAPSHOT"}
          date={"6:07 A.M."}
        />
        <section>
          <a href="#">
            FULL MARKET OVERVIEW <IoChevronForwardSharp />
          </a>
        </section>
      </StyledNav>
      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#ff3366"}
      />

      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#398939"}
      />

      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#398939"}
      />

      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#ff3366"}
      />

      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#000"}
      />

      <ArticleTypeD
        imgSrc={ImageArticleD}
        imgAlt={"graph"}
        imgWidth={"90px"}
        articleHeader={"Dow Jones mini"}
        val1={"-40.00"}
        val2={"24394.00"}
        val3={"-0.51%"}
        date={"7:13 A.M."}
        boxColor={"#ff3366"}
      />
    </StyledSection>
  );
}

export default Footer;
