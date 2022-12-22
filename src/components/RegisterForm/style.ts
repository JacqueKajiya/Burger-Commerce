import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    border: 1px solid var(--grey-50);
    border-radius: var(--radius-2);

    padding: 25px;

    label{
        color: var(--grey-50);
        font-size: var(--font-size-4);
    }
    
    input{
        font-size: var(--font-size-4);
        border: none;
    }

    small{
        color: var(--negative);
        font-size: var(--font-size-error);
        text-align: center;
    }

    button{
        width: 100%;
        height: 40px;
        color: var(--grey-0);
        font-weight: 500;
        background-color: var(--color-primary);
        border: none;
        border-radius: var(--radius-2);
    }

`