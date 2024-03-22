import styled from "styled-components";

export const StyleSection = styled.section`
    display: flex;
    justify-content: center;
    width: 450px;
    background-color: #FFFFFF;
    border: 10px solid black;
    margin: 50px 0 20px 0;

    h1{
        text-align: center;
        margin: 80px 0 60px 0;
    }

    data{
        display: flex;
        justify-content: center;
        font-weight: bold;
    }
    
    h1, data{
        font-size: 36px;
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 50%);

    }

    ul{
        margin-top: 80px;
    }
    
    ul li{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        font-size: 20px;

    }

`