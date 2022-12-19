import styled from "styled-components";

export const StyledRegister = styled.div`
    width: 100%;
    padding: 25px;

    .descriptionSection{
        display: none;
    }

    section{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

   a{
        color: var(--grey-50);
        font-size: var(--font-size-4);
        text-decoration: none;
    }

    a:hover{
        border-bottom: 1px solid var(--grey-50);
    }
    h3{
        font-size: var(--font-size-4);
    }

    @media (min-width: 500px){
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        margin: 30px;
        padding: 30px;
        gap: 35px;

    img{
        width: 180px;
    }

    p{
        font-size: var(--font-size-4);
        color: var(--grey-50);
    }

    .formSection{
        width: 50%;
        max-width: 450px;
    }

    fieldset{
        border-radius: var(--radius-2);
    }

    fieldset p {
        text-align: center;
        padding: 20px;
    }

    .descriptionSection{
        width: 50%;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-bottom: -40px;
    }

    .descriptionBox{
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 15px;
        margin-top: 25px;
        border: 1px solid rgba(0,0,0,.25);
        padding: 10px;
        border-radius: var(--radius-2);

        .bagIcon{
            width: 80px;
            height: 65px;
            color: var(--color-primary);
            background-color: var(--grey-20);
            padding: 20px;
            border-radius: var(--radius-2);
        }

       
        strong{
            color: var(--grey-100);
        }
    }
}
`