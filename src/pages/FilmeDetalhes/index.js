import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY, URL_FILMES, URL_IMG } from "../../apiConfig";
import axios from "axios";
import { StyledDEtalhesImg, StyledDetalhesButton, StyledDetalhesContainer, StyledDetalhesH2, StyledDetalhesUl } from "./style";

function FilmeDetalhes() {

    const { idFilme } = useParams();
    const [filme, setFilme] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL_FILMES}${idFilme}${API_KEY}`)
            .then(res => {
                console.log(res);
                setFilme(res.data);
            });
    }, []);

    function voltarPagina() {
        navigate(-1)
    }

    console.log("filme:", filme);

    return (
        <>
            <StyledDEtalhesImg src={`${URL_IMG}${filme.backdrop_path}`} />
            <StyledDetalhesContainer>
                <h1>Página do filme {filme.title}</h1>
                <StyledDetalhesH2>{filme.tagline}</StyledDetalhesH2>
                <p>{filme.overview}</p>

                <StyledDetalhesUl>
                    <li>Data de Lançamento: {filme.release_date}</li>
                    <li>Orçamento: ${filme.budget}</li>
                    <li>Arrecadação: ${filme.revenue}</li>
                    <li>Avaliação Média: {filme.vote_average}</li>
                </StyledDetalhesUl>
                <StyledDetalhesButton
                    onClick={voltarPagina}
                >
                    voltar
                </StyledDetalhesButton>
            </StyledDetalhesContainer>

        </>
    );
}
export default FilmeDetalhes;