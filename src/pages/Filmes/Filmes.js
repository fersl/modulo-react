import { useEffect, useState } from "react";
import { API_KEY, URL_FILMES } from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FilmeCard from "../../components/FilmeCard/FilmeCard";
import "./Filmes.css"

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  // useEffect( função, array de dependências )
  // useEffect( ()=>{}, [] )
  useEffect(() => {
    axios.get(`${URL_FILMES}/popular${API_KEY}`).then((res) => {
      console.log("retorno do axios:", res);
      setFilmes(res.data.results);
    });
  }, []);
  console.log("filmes:", filmes);

  function voltarPagina() {
    navigate(-1);
  }

  return (
    <>
      <h1>Página de Filmes</h1>
      <ul className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <FilmeCard
              key={filme.id}
              id={filme.id}
              title={filme.title}
              poster={filme.poster_path}
            />
          );
        })}
      </ul>
      <button onClick={voltarPagina}>Voltar</button>
    </>
  );
}

export default Filmes;
