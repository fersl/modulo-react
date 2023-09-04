import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import NoPage from "./pages/NoPage";
import FilmeDetalhes from "./pages/FilmeDetalhes";
import SerieDetalhes from "./pages/SeriesDetalhes";

import { createContext } from "react";

export const UsuarioContext = createContext("");

function App() {

  const nome = "Fernanda"

  return (
    <UsuarioContext.Provider value={nome}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filmes" element={<Filmes />} />
          <Route path="filmes/:idFilme" element={<FilmeDetalhes />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:idSerie" element={<SerieDetalhes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UsuarioContext.Provider>




  );
}

export default App;
