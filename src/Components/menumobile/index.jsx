import StyleMenuMobile from "./style";
import { motion } from "framer-motion";

const MenuMobile = (props) => {
  return (
      <motion.StyleMenuMobile className={props.class}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        // repeat: Infinity,
        repeatDelay: 1
      }}
      >
        <ul>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#compatibilidade">Compatibilidade</a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5519981047544&text=Ol%C3%A1!%20Quero%20saber%20mais."
              target="_blank"
            >
              Contato
            </a>
          </li>
        </ul>
      </motion.StyleMenuMobile>
  );
};

export default MenuMobile;
