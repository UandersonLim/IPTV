import styled from "styled-components";

const StyleButton = styled.button`
  width: 235px;
  height: 37px;
  margin: 140px 0;
  border: none;
  font-weight: 600;
  background-color: #000000;
  
  a{
      color: #FFFFFF;
      
  }

  @media(max-width: 480px){
    width: 200px;
  }

`;

export { StyleButton };