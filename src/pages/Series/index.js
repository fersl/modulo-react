import { useEffect, useState, useContext } from "react"
import { API_KEY, URL_SERIES } from "../../apiConfig"
import { useNavigate} from "react-router-dom"
import axios from "axios"
import Card from "../../components/Card"
import { StyledListaSeries } from "./style"
import { UsuarioContext } from "../../App";


function Series() {

    const [series, setSeries] = useState([])
    const navigate = useNavigate()
    const username = useContext(UsuarioContext)

    useEffect(() => {
        axios.get(`${URL_SERIES}/popular${API_KEY}`)
            .then(res => {
                console.log('retorno do axios:', res)
                setSeries(res.data.results)
            })
    }, [])
    console.log('series:', series);

    function voltarPagina() {
        navigate(-1)
    }

    return (
        <>
            <h2>Olá, {username}!</h2>
            <h1>Página de Séries</h1>
            <StyledListaSeries>
                {series.map((serie) => {
                    return (
                        <Card
                            key={serie.id}
                            id={serie.id}
                            title={serie.name}
                            poster={serie.poster_path}
                        />
                    )
                })}
            </StyledListaSeries>
            <button onClick={ voltarPagina}>Voltar</button>
        </>
    )
}

export default Series