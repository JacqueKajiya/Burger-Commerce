import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 10px;

    @media (min-width: 700px){
        max-width: 1200px;
    }
`