import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter',sans-serif;
        font-weight: lighter;
    }
    body{
        color : white;
        overflow-x: hidden;
        background: #1b1b1b;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .green{
        color:#23d997;
        font-weight: bold;
    }
    button{
        cursor: pointer;
    }

`

export default GlobalStyle;