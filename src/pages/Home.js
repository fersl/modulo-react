import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../UsuarioContext"

function Home() {
    const usuario = useContext(UsuarioContext)

    return (
        <>
            <h1>Página Inicial de {usuario}</h1>
            <Link to='/filmes'>Filmes</Link>
            <br/>
            <Link to='/series'>Series</Link>
        </>
    )
}

export default Home