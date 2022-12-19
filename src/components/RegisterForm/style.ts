import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 35px;

    border: 1px solid var(--grey-50);
    border-radius: var(--radius-2);

    padding: 25px;

    fieldset{
        height: 35px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: var(--radius-2);
        padding-left: 8px;
    }

    fieldset:hover{
        border: solid 1px black;
    }

    label{
        color: var(--grey-100);
        font-size: var(--font-size-4);
        font-weight: 600;
        transform: translate(-5%, -110%);
    }
    
    input{
        margin: -10px 0 10px 0;
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