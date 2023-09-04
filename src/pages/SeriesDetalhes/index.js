import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_KEY, URL_IMG, URL_SERIES } from "../../apiConfig";
import { StyledDetalhesButton, StyledDetalhesH2 } from "./style";
import axios from "axios";

function SerieDetalhes() {
    const { idSerie } = useParams();
    const [serie, setSerie] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${URL_SERIES}${idSerie}${API_KEY}`)
            .then(res => setSerie(res.data));
    }, []);

    console.log(serie);

    function voltarPagina() {
        navigate(-1)
    }

    function voltarPaginaInicial() {
        navigate("/")
    }

    return (
        <>
            <h1>Página da Série {serie.name}</h1>
            <h2>{serie.tagline}</h2>
            <StyledDetalhesH2> {serie.tagline} </StyledDetalhesH2>
            <p>{serie.overview}</p>
            <img src={`${URL_IMG}${serie.backdrop_path}`} />
            <StyledDetalhesButton onClick={voltarPagina} > voltar </StyledDetalhesButton>
            <StyledDetalhesButton onClick={voltarPaginaInicial} > página inicial</StyledDetalhesButton>
            <Link to="/">link página inicial</Link>
        </>
    );
}
export default SerieDetalhes;