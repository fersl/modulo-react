import { useNavigate } from "react-router-dom"

export default function Portfolio() {
    const navegacao = useNavigate()
    const projetos = [
        {"id": 1, "nome": "projeto 1"},
        {"id": 2, "nome": "projeto 2"},
        {"id": 3, "nome": "projeto 3"},
        {"id": 4, "nome": "projeto 4"},
        {"id": 5, "nome": "projeto 5"}
    ]



    function voltarPagina() {
        navegacao(-1)
    }

    function toProjetoAleatorio() {
        let numProjeto = Math.floor(Math.random() * 100) +1;
        navegacao(`/portfolio/${numProjeto}`)
    }

    return (
        <>
            <h1>Página de Portfolio</h1>
            <button onClick={voltarPagina}>voltar</button>

            <ul>
                {projetos.map( (projeto) => {
                    return(
                        <li key={projeto.id}>
                            {projeto.nome}
                            <button
                                onClick={() => {navegacao(`/portfolio/${projeto.id}`)}}>
                                mais
                            </button>
                        </li>
                    )
                } )}
            </ul>

            <button onClick={toProjetoAleatorio} >projeto aleatório</button>
        </>
    )
}