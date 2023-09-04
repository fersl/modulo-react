import { useContext, useEffect, useState } from "react";
import { API_KEY, URL_SERIES } from "../../apiConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SerieCard from "../../components/SerieCard/SerieCard";
import "./Series.css"
import { UserContext } from "../../UserContext";

function Series() {
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();
  const user = useContext(UserContext)

  useEffect(() => {
    axios.get(`${URL_SERIES}/popular${API_KEY}`).then((res) => {
      console.log("retorno do axios:", res);
      setSeries(res.data.results);
    });
  }, []);
  console.log("series:", series);

  function voltarPagina() {
    navigate(-1);
  }

  return (
    <>
      <h1>Página de Séries de {user}</h1>
      <ul className="lista-series">
        {series.map((serie) => {
          return (
            <SerieCard
              key={serie.id}
              id={serie.id}
              name={serie.name}
              poster={serie.poster_path}
            />
          );
        })}
      </ul>
      <button onClick={voltarPagina}>Voltar</button>
    </>
  );
}

export default Series;
