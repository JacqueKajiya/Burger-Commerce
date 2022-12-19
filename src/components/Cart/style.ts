import styled from "styled-components";

export const ModalWrapper = styled.div`
    inset: 0;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
`

export const ModalBox = styled.div`
    padding: 40px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 555px){
        max-width: 450px;
        height: 342px;
    }
`

export const ModalHeader = styled.div`
    width: 100%;
    font-size: var(--font-size-4);
    color: var(--grey-0);
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 4px 4px 0 0;
   
    button{
        background-color: var(--color-primary);
        color: var(--grey-1);
        border: none;
        cursor: pointer;
    }
`

export const CartContainer = styled.aside`
    width: 100%;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    background-color: var(--grey-0);

    padding: 1rem;
    gap: 20px;
    border-radius: 0 0 5px 5px;
    
    h3{
        color: var(--grey-0);
        background-color: var(--color-primary);
        font-size: var(--font-size-3);
        padding: 15px;
        border-radius: 8px 8px 0 0;
    }

    .noItensBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
        gap: 10px;
    }

    .noItensBox h2{
        font-size: var(--font-size-3);
    }

    small{
        color: var(--grey-50);
        font-size: var(--font-size-4);
    }

    ul{
        display: flex;
        flex-direction: column;
        padding: .625rem;
    }

    .totalBox{
        padding: 0 .625rem;
    }

    p{
        font-size: var(--font-size-4);
        font-weight: 600;
    }

    span{
        color: var(--grey-50);
        margin-left: 12rem;
    }

    button{
        width: 100%;
        color: var(--grey-50);
        background-color: var(--grey-20);
        border:1px solid var(--grey-20);
        border-radius: var(--radius);
        padding: 15px;
        margin-top: 20px;
    }
    
    button:hover{
        background-color: var(--grey-50);
        color: var(--grey-0);
    }

    @media (min-width: 700px){
    
        span{
            color: var(--grey-50);
            margin-left: 13rem;
        }

}
`