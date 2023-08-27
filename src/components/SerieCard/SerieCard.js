import { useNavigate } from "react-router-dom";
import { URL_IMG } from "../../apiConfig";
import "./SerieCard.css"

function SerieCard({ id, name, poster }) {
    const navigate = useNavigate()

    return (
        <div className="card-serie">
            <img 
            src={`${URL_IMG}${poster}`} />
            <h1>{name}</h1>
            <button
            onClick={() => {
                navigate(`${id}`)
            }}
            >
                ver mais
            </button>
        </div>
    )
}

export default SerieCard