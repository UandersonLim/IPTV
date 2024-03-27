import styled from "styled-components";

const Stylesection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  .box-button-text {
    display: flex;
    justify-content: center;
  }

  .boxMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #fd914c;
    margin-bottom: 160px;

    p {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

const Divtext = styled.div`
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
  color: #ffffff;
  font-size: 20px;

  @media (max-width: 748px) {
    font-size: 90%;
  }
`;

const ButtonTesteGratis = styled.button`
  width: 600px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 35px;
  border-radius: 5px;

  a {
    color: #000000;
  }

  @media (max-width: 748px) {
    width: 300px;
    font-size: 90%;
    background-color: #c7b6ac;

    a {
      color: #ffffff;
    }
  }
`;

const SectionPlanos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  background-color: #fdfbfb;

  .planosPrimeLink {
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
  }

  span {
    font-weight: bold;
  }

  .paragrafoPlanos {
    text-align: center;
    padding: 0 150px;
    margin-top: 20px;
  }

  .boxLine {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .line1 {
    width: 465px;
    height: 5px;
    background-color: #23201d;
  }

  .line2 {
    width: 50px;
    height: 5px;
    background-color: #fe924d;
  }

  .boxPlans {
    display: flex;
  }
  .linebox {
    width: 2px;
    margin-top: 50px;
    height: 995px;
    background-color: #696969;
  }

  .textInfor {
    margin-bottom: 180px;
  }

  .boxPlataformas {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .boxPlataformas li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 300;
    border: 1px solid #000000;
    width: 350px;
    height: 85px;
    gap: 7px;
    margin-bottom: 50px;
  }

  .boxPlataformas img {
    width: 26px;
    height: 34px;
  }

  @media (max-width: 748px) {
    width: 80%;

    .line1 {
      display: none;
    }

    .line2 {
      width: 70%;
    }

    .paragrafoPlanos {
      font-size: 90%;
      line-height: 25px;
      letter-spacing: 5%;
      padding: 0 5%;
    }

    .planosPrimeLink {
      font-size: 18px;
    }
  }
  @media (max-width: 1024px) {
    .boxPlans {
      flex-direction: column;
      align-items: center;
    }

    .linebox {
      display: none;
    }

    .textInfor {
      margin-bottom: 50px;
      text-align: center;
      font-size: 90%;
    }
  }

  @media (max-width: 1280px) {

    .boxMessage{
      margin-bottom: 3rem;
    }
    .boxPlataformas {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* width: 90%; */
    }

    .boxPlataformas li{
      width: 80%;
    }
  }

  @media (max-width: 468px) {
    .boxMessage p {
      font-size: 15px;
    }

    .boxPlataformas li{
      font-size: 120%;
    }

    .planosPrimeLink{
      font-size: 16px;
    }
    
  }
`;

export { Stylesection, Divtext, ButtonTesteGratis, SectionPlanos };
