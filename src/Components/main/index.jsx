import {
  Stylesection,
  Divtext,
  ButtonTesteGratis,
  SectionPlanos,
} from "./style";

const Main = () => {
  return (
    <Stylesection>
      <div>
        <Divtext>Disponibilizamos um teste grátis por 2 horas</Divtext>
      </div>
      <div className="box-button-text">
        <ButtonTesteGratis>
          Clique para solicitar um teste grátis
        </ButtonTesteGratis>
      </div>

      <SectionPlanos>
        <p className="planosPrimeLink">Conheça nossos planos PrimeLink</p>

        <div className="boxLine">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <p className="paragrafoPlanos">
          A <span>PrimeLink TV</span> oferece as melhores{" "}
          <span>listas IPTV</span> do <span>mercado brasileiro</span> com{" "}
          <p>
            atendimento ao cliente e suporte para configurações dos nossos
            planos
          </p>
        </p>
      </SectionPlanos>
    </Stylesection>
  );
};

export default Main;
