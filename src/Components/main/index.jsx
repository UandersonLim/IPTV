import {
  Stylesection,
  Divtext,
  ButtonTesteGratis,
  SectionPlanos,
} from "./style";
import ComponentMensal from "../sectionMensal";
import ComponentTrimestral from "../sectionTrimestral";

import App from "../../../public/icones/App.svg";
import Android from "../../../public/icones/android.svg";
import Google from "../../../public/icones/chrome.svg";

const Main = () => {
  return (
    <Stylesection>
      <div>
        <Divtext>Disponibilizamos um teste grátis por 2 horas</Divtext>
      </div>
      <div className="box-button-test-free-two-hours">
        <ButtonTesteGratis>
          <a href="https://api.whatsapp.com/send?phone=5519981047544&text=Quero%20um%20teste%2C%20de%202%20horas!" target="_blank">Clique para solicitar um teste grátis</a>
        </ButtonTesteGratis>
      </div>

      <SectionPlanos id="planos">
        <p className="planosPrimeLink">Conheça nossos planos PrimeLink</p>

        <div className="boxLine">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <p className="paragraphplans">
          A <span>PrimeLink TV</span> oferece as melhores{" "}
          <span>listas IPTV</span> do <span>mercado brasileiro</span> com{" "}
          <p>
            atendimento ao cliente e suporte para configurações dos nossos
            planos
          </p>
        </p>
        <div className="boxPlans">
          <ComponentMensal />
          <div className="linebox"></div>
          <ComponentTrimestral />
        </div>
        <p className="textInfor">
          <span>Informações importantes: </span>Para retirada de canais adultos
          da lista, deve ser
          <p>
            solicitando a exclusão da sua lista. Caso necessario contate nossa
            equipe.
          </p>
        </p>
        <div className="boxMessage">
          <p>
            Uma nova forma de assistir TV
            <p>quando e onde quiser, por um valor super acessível.</p>
          </p>
        </div>
        <ul className="boxPlatforms" id="compatibilidade">
          <li>
            <img src={App} alt="Icone APP" />
            App Store
          </li>
          <li>
            <img src={Android} alt="Icone Android" />
            Google Player
          </li>
          <li>
            <img src={Google} alt="Icone Web Player" />
            Web Player
          </li>
        </ul>
      </SectionPlanos>
    </Stylesection>
  );
};

export default Main;
