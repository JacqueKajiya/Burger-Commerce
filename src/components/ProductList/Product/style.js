import styled from "styled-components";

export const MenuProduct = styled.li`
    width: 350px;
    min-width: 250px;
    height: 100%;
    min-height: 310px;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    border: 2px solid var(--grey-0);
    border-radius: 5px;

    .imgBox{
        display: flex;
        justify-content: center;
        background-color: var(--grey-0);
    }

    img{
        width: 100%;
        height: 115px;
        object-fit: contain; 
    }

    .productInfo{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }

    h3{
        font-weight: 700;
        font-size: var(--font-size-3);
    }

    small{
        color: var(--grey-50);
        font-size: var(--font-size-4)
    }

    p{
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-size-4)
    }

    button{
        width: 106px;
        height: 40px;
        color: white;
        font-size: var(--font-size-4);
        font-weight: 600;
        background-color: var(--color-primary);
        border: 2px solid #27AE60;
        border-radius: var(--radius);
        
    }

    button:hover{
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }

    @media (min-width: 700px){
        width: 250px;
        height: 150px;
        gap: 18px;

    img{
        object-fit: none;
    }

}
`