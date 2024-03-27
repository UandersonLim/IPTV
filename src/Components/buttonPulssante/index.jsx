import StyleButton from "./style";

const ButtonWhatApp = () => {
  return (
    <StyleButton>
      <a href="https://api.whatsapp.com/send?phone=5519981047544&text=Ol%C3%A1!%20Quero%20saber%20mais." target="_blank">
        <img
          src="icones/Whatsapp.png"
          alt="Icone WhatsApp"
          title="Fale com Atendente"
        />
      </a>
    </StyleButton>
  );
};

export default ButtonWhatApp;
