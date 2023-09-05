import { Link } from "react-router-dom";

export default function Contato() {
    return (
        <>
            <h1>Página de Contato.</h1>

            <Link to="/">Home</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/portfolio">Portfolio</Link>
        </>
    )
}