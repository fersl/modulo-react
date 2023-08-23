import { useEffect, useState } from "react"
import { API_KEY, URL_SERIES } from "../apiConfig"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Series() {
    const [series, setSeries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${URL_SERIES}/popular${API_KEY}`)
        .then(res => {
            console.log("retorno do axios:", res)
            setSeries(res.data.results)
        })
    }, [])
    console.log("series:", series)

    function voltarPagina() {
        navigate(-1)
    }

    return(
        <>
            <h1>Página de Séries</h1>
            <ul>
                {series.map( (serie) => {
                    return(
                        <li key={serie.id}>
                            <span>{serie.name}</span>
                            <button onClick={() => {
                                navigate(`/series/${serie.id}`)
                            }}>ver mais</button>
                        </li>
                    )
                } )}
            </ul>
            <button onClick={voltarPagina}>Voltar</button>
        </>
        )
}

export default Series