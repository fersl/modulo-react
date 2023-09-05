import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/">Home</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/portfolio">Portfolio</Link>
            <br/>
            <Link to="/contato">Contato</Link>
        </>
    )
}