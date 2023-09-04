import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import NoPage from "./pages/NoPage";
import FilmeDetalhes from "./pages/FilmeDetalhes";
import SerieDetalhes from "./pages/SerieDetalhes";

function App() {
  return (
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
  );
}

export default App;
