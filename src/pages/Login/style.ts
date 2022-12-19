import styled from "styled-components";

export const StyledLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 2rem 3rem;

    p{
        font-size: var(--font-size-4);
        color: var(--grey-50);
    }

    fieldset{
        padding: 10px;
        border-radius: var(--radius-2);
    }

    fieldset p {
        text-align: center;
        padding: 20px;
    }

    a {
        display: none;
    }

    .descriptionSection{
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

    @media (min-width: 500px){
        width: 100%;
        flex-direction: row;
        margin: 30px 0;

        gap: 35px;

        a{
            display: flex;
            justify-content: center;

            color: var(--grey-50);
            font-size: var(--font-size-4);
            background-color: var(--grey-0);

            padding: 10px;
            text-decoration: none;

            cursor: pointer;
        }

        .descriptionSection{
            margin: auto 0;
        }
    }
`