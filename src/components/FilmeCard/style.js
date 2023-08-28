import styled from "styled-components";

export const StyledFilmCard = styled.div`
    border: 1px solid black;
    width: 200px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const StyledFilmCardImg = styled.img`
width: 100%;
`

export const StyledFilmCardH1 = styled.h1`
    font-size: 24px;
`

export const StyledFilmCardButton = styled.button`
    border: none;
    background-color: rgb(62, 99, 155);
    border-radius: 10px;
    color: white;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
`