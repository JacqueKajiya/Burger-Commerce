import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #e0e0e0;
    --grey-0: #f5f5f5;

    --negative: #e60000;
    --warning: #ffcd07;
    --success: #168821;
    --information: #155bcb;

    --font-size-1: 1.625rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1.125rem;
    --font-size-4: 0.875rem;

    --radius: 8px;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
}

body{
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
}

@media (min-width:700px){
    main{
        display: flex;
    }
}


`