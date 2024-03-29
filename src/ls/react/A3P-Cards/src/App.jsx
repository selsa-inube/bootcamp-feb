import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Credit from "./pages/Credit";
import ECommerce from "./pages/ECommerce";
import Fish from "./pages/Fish";
import NotFound from "./pages/NotFound";
import { StyledSection } from "./styles";

function App() {
  return (
    <>
      <Header />
      <StyledSection>
        <Routes>
          <Route path="/" element={<ECommerce />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/fish" element={<Fish />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </StyledSection>
    </>
  );
}

export default App;
