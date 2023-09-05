import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <h1>Página Inicial.</h1>
            <Link to="/sobre">Sobre</Link>
            <br/>
            <Link to="/portfolio">Portfolio</Link>
            <br/>
            <Link to="/contato">Contato</Link>
        </>
    )
}
