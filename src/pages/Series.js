import { useEffect, useState } from "react"
import { API_KEY, URL_SERIES } from "../apiConfig"
import axios from "axios"

function Series() {

    const [series, setSeries] = useState([])

    // 1 - CONEXÃO COM FETCH
    useEffect(() => {
        fetch(`${URL_SERIES}/popular${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log("retorno do fetch:", data)
            setSeries(data.results)
        })
    }, [])

    // 2 - CONEXÃO COM AXIOS
    useEffect(() => {
        axios.get(`${URL_SERIES}/popular${API_KEY}`)
        .then(res => {
            console.log("retorno do axios:", res)
            setSeries(res.data.results)
        })
    }, [])

    console.log("series:", series)

    return(
        <h1>Página de Séries</h1>
    )
}

export default Series