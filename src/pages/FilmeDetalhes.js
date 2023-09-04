import { useNavigate, useParams } from "react-router-dom"
import { API_KEY, URL_FILMES, URL_IMG } from "../apiConfig"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { UsuarioContext } from "../UsuarioContext"

function FilmeDetalhes() {
    const {idFilme} = useParams()
    const [filme, setFilme] = useState({})
    const navigate = useNavigate()
    const usuario = useContext(UsuarioContext)

    useEffect(() => {
        axios.get(`${URL_FILMES}${idFilme}${API_KEY}`)
        .then(res => {
            console.log(res)
            setFilme(res.data)
        })
    }, [])

    function voltarPagina() {
        navigate(-1)
    }

    return(
        <div>
            <h2>Bem Vindo, {usuario}!</h2>
            <h1>Página do Filme {filme.title}</h1>
            <p>{ filme.overview }</p>
            <img src={`${URL_IMG}${filme.poster_path}`} />
            <button onClick={ voltarPagina}>Voltar</button>
        </div>
    )

}

export default FilmeDetalhes