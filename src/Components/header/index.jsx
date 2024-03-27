import StyleHeader from "./style";
import MenuHamburgue from "../MenuHamburgue";

const Header = () => {
    return(
        <StyleHeader>
            <figure>
                <img src="Logo.png" alt="Logo"/>
            </figure>

            <ul>
                <li><a href="#planos">Planos</a></li>
                <li><a href="#compatibilidade">Compatibilidade</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5519981047544&text=Ol%C3%A1!%20Quero%20saber%20mais." target="_blank">Contato</a></li>
            </ul>
            <MenuHamburgue/>
        </StyleHeader>
    )
}

export default Header;