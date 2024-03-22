import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  justify-content: center;
  width: 450px;
  background-color: #ffffff;
  margin: 50px 0 20px 0;
  background-image: url("./public/superman.png");
  background-repeat: no-repeat;
  color: #ffffff;
  position: relative;
  padding: 10px;



  h2 {
    text-align: center;
    margin: 80px 0 60px 0;
  }

  data {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  h2,
  data {
    font-size: 36px;
    text-shadow: 0px 2px 0px rgba(255, 255, 255, 50%);
  }

  ul {
    margin-top: 80px;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  ul li img{
    width: 24px;
    height: 24px;
  }

  
`;
