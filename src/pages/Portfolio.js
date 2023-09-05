import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <>
            <h1>Página de Portfolio</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/contato">Contato</Link>
        </>
    )
}