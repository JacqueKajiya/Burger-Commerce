import styled from "styled-components";

export const SearchInputStyled = styled.div`
    width: 20rem;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 20px;
    border: 2px solid var(--grey-20);
    border-radius: var(--radius);

    input{
        width: 75%;
        height: 80%;
        border-radius: 5px;
        border: none;
    }

    input:focus{
        border: 1px solid #333333;
    }

    button{
        width: 23%;
        height: 80%;
        color: var(--grey-0);
        background-color: var(--color-primary);
        font-size: 0.7rem;
        border-radius: var(--radius);
        border: none;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }
`