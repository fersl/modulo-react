import { useEffect, useState } from "react"
import { API_KEY, URL_SERIES } from "../../apiConfig"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Card from "../../components/Card"
import { StyledListaSeries } from "./style"


function Series() {

    const [series, setSeries] = useState([])
    const navigate = useNavigate()

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
            <h1>Página de Séries</h1>
            <StyledListaSeries>
                {series.map((serie) => {
                    return (
                        <Card
                            key={serie.id}
                            id={serie.id}
                            titulo={serie.name}
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