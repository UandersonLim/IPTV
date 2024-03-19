import styled from "styled-components";

const Stylesection = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .box-button-text{
        display: flex;
        justify-content: center;
    }

`

const Divtext = styled.div`
    text-align: center;
    margin-top: 40px;
    font-weight: 600;
    color: #ffffff;
    font-size: 20px;
`

const ButtonTesteGratis = styled.button`
    width: 600px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 35px;
    border-radius: 5px;
`

const SectionPlanos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 1400px;
    height: 900px;
    background-color: #FDFBFB;

    .planosPrimeLink{
        text-align: center;
        color: #000000;
        font-size: 20px;
        font-weight: 600;
        margin: 30px 0;
    }
    
    span{
        font-weight: bold;
    }

    .paragrafoPlanos{
        text-align: center;
        padding: 0 150px;
        margin-top: 20px;
    }

    
    
    .boxLine{
        display: flex;
        justify-content: center;

    }

     .line1{
        width: 465px;
        height: 5px;
        background-color: #23201D;
    }

    .line2{
        width: 50px;
        height: 5px;
        background-color: #FE924D;
    }

`

export {Stylesection, Divtext, ButtonTesteGratis, SectionPlanos};