import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Layout />}>

          <Route path="/" element={<Home />}></Route>
          <Route path="sobre" element={<Sobre />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:idProjeto" element={ <Projeto /> } />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
