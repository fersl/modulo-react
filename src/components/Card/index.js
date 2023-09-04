import { useNavigate } from "react-router-dom";
import { URL_IMG } from "../../apiConfig"
import { StyledCard, StyledCardButton, StyledCardH1, StyledCardImg} from "./style"

function Card({ id, titulo, poster }) {
    const navigate = useNavigate()

    function toPaginaDetalhes() {
        navigate(`${id}`)
    }

    return (
        <StyledCard>
            <StyledCardImg src={`${URL_IMG}${poster}`} />
            <StyledCardH1>{titulo}</StyledCardH1>
            <StyledCardButton onClick={toPaginaDetalhes}>
                ver mais
            </StyledCardButton>
        </StyledCard>

        // <div>
        //     <img></img>
        //     <h1></h1>
        //     <button></button>
        // </div>
    )
}

export default Card