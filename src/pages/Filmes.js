import { useEffect, useState } from "react"
import { API_KEY, URL_FILMES } from "../apiConfig"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Filmes() {
    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()

    // useEffect( função, array de dependências )
    // useEffect( ()=>{}, [] )
    useEffect(() => {
        axios.get(`${URL_FILMES}/popular${API_KEY}`)
        .then(res => {
            console.log("retorno do axios:", res)
            setFilmes(res.data.results)
        })
    }, [])
    console.log("filmes:", filmes);

    function voltarPagina() {
        navigate(-1)
    }

    return (
        <>
        <h1>Página de Filmes</h1>
        <ul>
            {filmes.map( (filme) => {
                return(
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <button onClick={() => {
                            navigate(`/filmes/${filme.id}`)
                        }}>ver mais</button>
                    </li>
                )
            } )}
        </ul>
        <button onClick={voltarPagina}>Voltar</button>
        </>
    )
}

export default Filmes