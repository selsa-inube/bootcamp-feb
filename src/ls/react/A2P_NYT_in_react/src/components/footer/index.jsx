import { StyledSection, StyledNav } from "./styles";
import MenuBar from "../common/menuBar";
import { IoChevronForwardSharp } from "react-icons/io5";
import ArticleTypeD from "../common/articleTypeD";
import DataArticlesD from "./data";

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

      {DataArticlesD.map((article) => (
        <ArticleTypeD
          key={article.id}
          imgSrc={article.image}
          imgAlt={article.type}
          imgWidth={article.width}
          articleHeader={article.title}
          val1={article.value1}
          val2={article.value2}
          val3={article.value3}
          date={article.time}
          boxColor={article.color}
        />
      ))}
    </StyledSection>
  );
}

export default Footer;
