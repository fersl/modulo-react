import { useNavigate } from "react-router-dom"

export default function Portfolio() {
    const navegacao = useNavigate()

    function voltarPagina() {
        navegacao(-1)
    }

    return (
        <>
            <h1>Página de Portfolio</h1>
            <button onClick={voltarPagina}>voltar</button>
        </>
    )
}