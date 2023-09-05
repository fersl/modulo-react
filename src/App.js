import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="sobre" element={ <Sobre/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="contato" element={ <Contato/> } />
        <Route path="*" element={ <NoPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
