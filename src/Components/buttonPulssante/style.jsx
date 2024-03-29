import styled from "styled-components";

const StyleButton = styled.a`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    animation: whatsApp 0.5s infinite alternate ease-in-out;
    z-index: 3;

    @keyframes whatsApp {
        0% {
            -webkit-transform: translate(0);
        }
        100%{
            -webkit-transform: translateY(0.7em)
        }
    }

    img{
        width: 72px;
    }

    @media(max-width: 468px){
        right: 1rem;
        bottom: 1rem;
        img{
            width: 48px;
        }
    }
`
export default StyleButton;