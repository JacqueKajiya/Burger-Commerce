import styled from "styled-components";

export const CartContainer = styled.aside`
    width: 100%;
    max-width: 31rem;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    
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