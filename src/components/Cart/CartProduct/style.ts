import styled from "styled-components";

export const CartProductStyled = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    img{
        width: 25%;
        background-color: var(--grey-20);
        border-radius: var(--radius);
    }

    .productDescription{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .productPrice{
        width: 40%;
        font-size: var(--font-size-4);
        line-height: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .productButtons{
        display: flex;
        justify-content: center;
        margin-top: .1rem;
        gap: .625rem;
    }

    .productButtons button{
        width: 25px;
        font-weight: 600;
        background-color: var(--grey-20);
        border:1px solid var(--grey-50);
        padding: .313rem;
        border-radius: 8px;
    }

    .productButtons button:hover{
        background-color: var(--grey-50);
        color: var(--grey-0);
    }


`


