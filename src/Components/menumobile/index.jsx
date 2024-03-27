import StyleMenuMobile from "./style";

const MenuMobile = (props) => {
    return(
        <StyleMenuMobile className={props.class}>
            <ul>
            <li><a href="#planos">Planos</a></li>
                <li><a href="#compatibilidade">Compatibilidade</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5519981047544&text=Ol%C3%A1!%20Quero%20saber%20mais." target="_blank">Contato</a></li>
            </ul>
        </StyleMenuMobile>
    )
};

export default MenuMobile;