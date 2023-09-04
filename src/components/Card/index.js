import { useNavigate } from "react-router-dom"
import { URL_IMG } from "../../apiConfig"
import { StyledCard, StyledCardButton, StyledCardH1, StyledCardImg} from "./style"

function Card({ id, titulo, poster }) {
    const navigate = useNavigate()

    return (
        <StyledCard>
            <StyledCardImg src={`${URL_IMG}${poster}`} />
            <StyledCardH1>{titulo}</StyledCardH1>
            <StyledCardButton
                onClick={ () => {
                    navigate(`${id}`)
                }}
            >
                ver mais
            </StyledCardButton>
        </StyledCard>
    )
}

export default Card