import { URL_IMG } from "../../apiConfig"
import { StyledCard, StyledCardButton, StyledCardH1, StyledCardImg} from "./style"

function Card({ id, titulo, poster }) {


    return (
        <StyledCard>
            <StyledCardImg src={`${URL_IMG}${poster}`} />
            <StyledCardH1>{titulo}</StyledCardH1>
            <StyledCardButton>
                ver mais
            </StyledCardButton>
        </StyledCard>
    )
}

export default Card