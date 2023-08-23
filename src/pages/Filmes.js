import { useEffect, useState } from "react"
import { API_KEY, URL_FILMES } from "../apiConfig"
import axios from "axios"

function Filmes() {

    const [filmes, setFilmes] = useState([])

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

    return (
        <>
        <h1>Página de Filmes</h1>
        <ul>
            {filmes.map( (filme) => {
                return(
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                    </li>
                )
            } )}
        </ul>
        </>
    )
}

export default Filmes