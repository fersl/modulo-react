import { useNavigate } from "react-router-dom";
import { URL_IMG } from "../../apiConfig";
import "./FilmeCard.css";

function FilmeCard({ id, title, poster }) {
  const navigate = useNavigate()

  return (
    <div className="card-filme">
      <img src={`${URL_IMG}${poster}`} />
      <h1>{title}</h1>
      <button
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        ver mais
      </button>
    </div>
  );
}

export default FilmeCard
