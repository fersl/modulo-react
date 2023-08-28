import { useNavigate } from "react-router-dom";
import { URL_IMG } from "../../apiConfig";
import "./FilmeCard.css";
import { StyledFilmCard, StyledFilmCardButton, StyledFilmCardH1, StyledFilmCardImg } from "./style";

function FilmeCard({ id, title, poster }) {
  const navigate = useNavigate()

  return (
    // <div className="card-filme">
    //   <img src={`${URL_IMG}${poster}`} />
    //   <h1>{title}</h1>
    //   <button>
    //   </button>
    // </div>

    <StyledFilmCard>
        <StyledFilmCardImg src={`${URL_IMG}${poster}`}  />
        <StyledFilmCardH1>{title}</StyledFilmCardH1>
      <StyledFilmCardButton></StyledFilmCardButton>
    </StyledFilmCard>
  );
}

export default FilmeCard
