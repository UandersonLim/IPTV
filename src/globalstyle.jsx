import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: #23201d;

    }

`

export default GlobalStyle;