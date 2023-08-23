import { useEffect, useState } from "react"
import { API_KEY, URL_SERIES } from "../apiConfig"
import axios from "axios"

function Series() {

    const [series, setSeries] = useState([])

    useEffect(() => {
        axios.get(`${URL_SERIES}/popular${API_KEY}`)
        .then(res => {
            console.log("retorno do axios:", res)
            setSeries(res.data.results)
        })
    }, [])
    console.log("series:", series)

    return(
        <>
            <h1>Página de Séries</h1>
            <ul>
                {series.map( (serie) => {
                    return(
                        <li key={serie.id}>
                            <span>{serie.name}</span>
                        </li>
                    )
                } )}
            </ul>
        </>
        )
}

export default Series