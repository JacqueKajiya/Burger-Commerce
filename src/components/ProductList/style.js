import styled from "styled-components";

export const ListOfProducts = styled.ul`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin-top: 30px;
    gap: 25px;

    overflow: auto;

@media (min-width: 700px){
    width: 70%;
    flex-wrap: wrap;
    gap: 15px;
}
`