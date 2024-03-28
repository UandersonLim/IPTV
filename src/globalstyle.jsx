import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: #23201d;
        /* position: relative; */
    }

    @media (max-width: 600px) {
    .displayON {
      position: absolute;
      color: #FE924D;
      background-color: #23201d;
      z-index: 3;
      right: 0;

      width: 60%;
      top: 120px;

      padding: 1rem;
      font-weight: 900;
      cursor: pointer;

    }

    .displayON ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 1rem;
      
    }

    .displayOFF{
        display: none;
    }

    .box{
      transition: 0.7s;
      transform: rotate(45deg);
    }

    .boxNone{
      transform: rotate(0deg);
    }
  }

`;

export default GlobalStyle;
