import styled from "styled-components";

const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    background-color: #23201d;

    ul{
        display: flex;
        gap: 20px;
        margin-right: 30px;
    }

    li a{
        color: #FE924D;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }


    img{
        width: 140px;
        height: 140px;
        margin-left: 30px;
    }

  
    

    @media(max-width: 600px){
        width: 100%;
        z-index: 2;

        img{
            width: 100px;
            height: 100px;
        }

        ul {
            display: none;
        }
    }

`

export default StyleHeader;