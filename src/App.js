import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Filmes from "./pages/Filmes/Filmes";
import Series from "./pages/Series/Series";
import NoPage from "./pages/NoPage";
import FilmeDetalhes from "./pages/FilmeDetalhes/FilmeDetalhes";
import SerieDetalhes from "./pages/SerieDetalhes/SerieDetalhes";
import { UserContext } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value="user">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filmes" element={<Filmes />} />
          <Route path="filmes/:idFilme" element={<FilmeDetalhes />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:idSerie" element={<SerieDetalhes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
