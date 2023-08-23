import { useEffect, useState } from "react"
import { API_KEY, URL_FILMES } from "../apiConfig"
import axios from "axios"

function Filmes() {

    const [filmes, setFilmes] = useState([])

    // useEffect( função, array de dependências )
    // useEffect( ()=>{}, [] )

    // Use apenas uma das opções abaixo:
    // 1 - CONEXÃO COM FETCH
    useEffect(() => {
        fetch(`${URL_FILMES}/popular${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log("retorno do fetch:", data)
            setFilmes(data.results)
        })
    }, [])

    // 2 - CONEXÃO COM AXIOS
    useEffect(() => {
        axios.get(`${URL_FILMES}/popular${API_KEY}`)
        .then(res => {
            console.log("retorno do axios:", res)
            setFilmes(res.data.results)
        })
    }, [])

    console.log("filmes:", filmes);

    return (
        <h1>Página de Filmes</h1>
    )
}

export default Filmes