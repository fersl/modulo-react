import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY, URL_IMG, URL_SERIES } from "../../apiConfig";
import "./SerieDetalhes.css"

function SerieDetalhes() {
  const { idSerie } = useParams();
  const [serie, setSerie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL_SERIES}${idSerie}${API_KEY}`).then((res) => {
      console.log(res);
      setSerie(res.data);
    });
  }, []);

  function voltarPagina() {
    navigate(-1);
  }

  return (
    <div className="serie-detalhes">
      <h1>Página da Série {serie.name}</h1>
      <p>{serie.overview}</p>
      <img src={`${URL_IMG}${serie.poster_path}`} />
      <button onClick={voltarPagina}>Voltar</button>
    </div>
  );
}

export default SerieDetalhes;
