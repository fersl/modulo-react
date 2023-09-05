import { useNavigate } from "react-router-dom"

export default function Sobre() {
    const navegacao = useNavigate()

    function voltarPagina() {
        navegacao(-1)
    }

    return(
        <>
            <h1>Página Sobre</h1>
            <button onClick={voltarPagina}>voltar</button>
        </>  
    )
}























