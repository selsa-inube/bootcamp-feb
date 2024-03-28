import { StyledMain, StyledNav, StyledSectionAB } from "./styles";
import MenuBar from "../common/menuBar";
import ArticleTypeA from "../common/articleTypeA";
import ArticleTypeB from "../common/articleTypeB";
import ArticleTypeC from "../common/articleTypeC";
import PageIndicator from "../common/pageIndicator";
import ArticleAnchor from "../common/articleAnchor";
import ImageArticleA from "../assets/art_type1_01.gif";
import ImageArticleC1 from "../assets/art_type3_01.jpg";
import ImageArticleC2 from "../assets/art_type3_02.jpg";
import ImageArticleC3 from "../assets/art_type3_03.jpg";

function Main() {
  const MenuBarOptions = ["Tech", "Econ", "Media", "Money", "DealBook"];

  return (
    <StyledMain>
      <StyledNav>
        <MenuBar titleH2={"Business"} listItems={MenuBarOptions} />
      </StyledNav>
      <StyledSectionAB>
        <ArticleTypeA
          imgSrc={ImageArticleA}
          imgAlt="Image article type 1"
          catTitle={"TECH FIX"}
          catDate={"May 20, 2020"}
          articleHeader={
            "Everything You Need to Know About Slow Internet Speeds"
          }
          articleSubheader={
            "Our crummy connections are the biggest tech headache in the pandemic. Here's comprehensive quide to what to do about them."
          }
        />
      </StyledSectionAB>
      <StyledSectionAB>
        <a href="#">
          <h4>Latest News</h4>
        </a>
        <ArticleTypeB
          catTitle={"THE UPSHOT"}
          catDate={"May 19, 2020"}
          articleHeader={
            "A Wave of Small Business Clousures Is on the Way. Can Washington Stop It?"
          }
        />
        <ArticleTypeB
          catTitle={"NEWS ANALYSIS"}
          catDate={"May 19, 2020"}
          articleHeader={
            "Coronavirus Shut Down the 'Experience Economy.' Can It Come Back"
          }
        />
        <PageIndicator />
      </StyledSectionAB>
      <section>
        <a href="#">
          <h4>Fast Forward</h4>
        </a>
        <ArticleTypeC
          imgSrc={ImageArticleC1}
          imgAlt={"Image article type C - 1"}
          imgWidth={"108px"}
          articleHeader={
            "Another Grim Tally of U.S. Unemployment Is Expected: Live Business Updates"
          }
          articleSubheader={
            "Live Stock Market News During The Coronavirus Pandemic."
          }
        />
        <ArticleTypeC
          imgSrc={ImageArticleC2}
          imgAlt={"Image article type C - 2"}
          imgWidth={"108px"}
          articleHeader={
            "How the 'Plandemic' Movie and Its Falsehoods Spread Widely Online"
          }
          articleSubheader={
            "Conspiracy theories about the pandemic have gained more..."
          }
        />
        <ArticleTypeC
          imgSrc={ImageArticleC3}
          imgAlt={"Image article type C - 3"}
          imgWidth={"108px"}
          articleHeader={
            "Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify Premium"
          }
          articleSubheader={
            "The deal with Joe Rogan, a provocative podcast host with..."
          }
        />
        <ArticleAnchor anchorText={"Show All"} />
      </section>
    </StyledMain>
  );
}

export default Main;
