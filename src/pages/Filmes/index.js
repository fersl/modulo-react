import { API_KEY, URL_FILMES } from "../../apiConfig"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Card from "../../components/Card"
import { StyledListaFilmes } from "./style"

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()

    // useEffect( função, array de dependências )
    // useEffect( ()=>{}, [] )

    useEffect(() => {
        axios.get(`${URL_FILMES}popular${API_KEY}`)
            .then(res => {
                console.log('retorno do axios:', res)
                setFilmes(res.data.results)
            })
    }, [])
    console.log('filmes:', filmes);


    function voltarPagina() {
        navigate(-1)
    }

    return (
        <>
            <h1>Página de Filmes</h1>
            <StyledListaFilmes>
                {filmes.map((filme) => {
                    return (
                        <Card
                            key={filme.id}
                            id={filme.id}
                            titulo={filme.title}
                            poster={filme.poster_path}
                        />
                    )
                })}
            </StyledListaFilmes>
            <button onClick={voltarPagina}>Voltar</button>
        </>
    )
}

export default Filmes