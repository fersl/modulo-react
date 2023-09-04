import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuarioContext } from "../App";

function Home() {

    const nome = useContext(UsuarioContext)

    return (
        <>
            <h1>Página Inicial de {nome}</h1>
            <Link to='/filmes'>Filmes</Link>
            <br/>
            <Link to='/series'>Series</Link>
        </>
    )
}

export default Home