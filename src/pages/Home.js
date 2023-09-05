import { useNavigate } from "react-router-dom"

export default function Home() {
    const navegacao = useNavigate()

    function toSobre() {
        navegacao("/sobre")
    }

    function toPortfolio() {
        navegacao("/portfolio")
    }

    function toContato() {
        navegacao("/contato")
    }

    function voltarPagina() {
        navegacao(-1)
    }

    return(
        <>
            <h1>Página Inicial.</h1>

            <button  onClick={toSobre}>sobre</button>

            <button onClick={toPortfolio}>portfolio</button>

            <button onClick={toContato}>contato</button>

            <button onClick={voltarPagina} >voltar</button>

        </>
    )
}
