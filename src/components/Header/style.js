import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    @media (min-width: 700px){
        flex-direction: row;
        justify-content: space-between;
    }
`