import { StyledSection } from "./styles";
import Aside from "./components/aside";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <StyledSection>
      <Aside>aside</Aside>
      <Header>header</Header>
      <Main>main</Main>
      <Footer>footer</Footer>
    </StyledSection>
  );
}

export default App;
