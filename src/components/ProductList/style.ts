import styled from "styled-components";

export const ListOfProducts = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin-top: 30px;

    overflow: auto;

@media (min-width: 700px){
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
}

@media (min-width: 1000px){
    justify-content: flex-start;
}
`