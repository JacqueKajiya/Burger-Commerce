import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    gap: 10px;

    .headerOptions{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .searchInput{
        display: flex;
        align-items: center;
        border: 1px solid var(--grey-50);
        padding: 10px;
        border-radius: var(--radius);

        input{
            width: 100px;
            opacity: .5;
            border: none;
        }

        .searchIcon{
            width: 30px;
            height: 30px;
            padding: 9px;
            color: var(--grey-0);
            background-color: var(--color-primary);
            border-radius: var(--radius);
        }
    }

    .logOutBtn, .shoppingCartBtn{
        cursor: pointer;
    }

    .cartBtnBox{
        position: relative;
    }

    span{
        font-size: 10px;
        font-weight: bold;
        color: var(--grey-0);
        background-color: var(--color-primary);
        position: absolute;
        top: 0;
        right: 0;
        padding: 3px;
        border-radius: var(--radius-2);
        transform: translate(50%, -50%);
    }

    @media (min-width: 700px){
        justify-content: space-between;

        input{
            width: 250px;
        }
    }
`