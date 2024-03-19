import StyleHeader from "./style";

const Header = () => {
    return(
        <StyleHeader>
            <figure>
                <img src="Logo.png" alt="Logo"/>
            </figure>

            <ul>
                <li>Planos</li>
                <li>Oferta Especial</li>
                <li>Compatibilidade</li>
                <li>Contato</li>
            </ul>
        </StyleHeader>
    )
}

export default Header;