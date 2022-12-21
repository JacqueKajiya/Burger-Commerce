import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;

    main{
        width: 100%;
        height: 100%;
    }

    @media (min-width: 500px){
        max-width: 1200px;
        
    }
`
export const ContainerForm = styled.div`
    width: 450px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;

@media (min-width: 700px){
    width: 950px;
    height: 500px;
    margin: 80px auto 0px;
}
`