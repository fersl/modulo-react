import { useNavigate, useParams } from "react-router-dom"

export default function Projeto() {
    const {idProjeto} = useParams()
    const navegacao = useNavigate()

    function voltarPagina() {
        navegacao(-1)
    }

    return(
        <>
            <h1>Página do projeto {idProjeto}</h1>
            <p>Descrição do projeto {idProjeto} </p>
            <button onClick={voltarPagina}>voltar</button>
        </>
    )
}