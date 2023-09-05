import { useNavigate } from "react-router-dom"

export default function Contato() {
    const navegacao = useNavigate()

    function voltarPagina() {
        navegacao(-1)
    }

    return (
        <>
            <h1>Página de Contato.</h1>
            <button onClick={voltarPagina}>voltar</button>
        </>
    )
}