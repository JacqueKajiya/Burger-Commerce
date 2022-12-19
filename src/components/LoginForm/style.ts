import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3{
        font-size: var(--font-size-4);
    }

    fieldset{
        display: flex;
        gap: 10px;
    }

    fieldset:hover{
        border: solid 1px black;
    }

    label{
        color: var(--grey-100);
        font-size: var(--font-size-4);
        font-weight: 600;
        transform: translate(-10%, -110%);
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
        height: 35px;
        color: var(--grey-0);
        font-weight: 500;
        background-color: var(--color-primary);
        border: none;
        border-radius: var(--radius-2);
    }

`