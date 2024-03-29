import { StyleMenuHamburguer } from "./style";
import MenuMobile from "../menumobile";
import { useEffect, useState } from "react";

const MenuHamburgue = () => {
  const [classCSS, setClassCSS] = useState("displayOFF");
  const [ menu, setMenu] = useState("menu-Hamburguer")

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-Hamburguer')) {
        setClassCSS("displayOFF");
        setMenu(menu === "menu-Hamburguer boxNone" ? "menu-Hamburguer box" : "menu-Hamburguer")
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };

  }, []); 

  const toggleMenu = () => {
    setMenu(menu === "menu-Hamburguer" ? "menu-Hamburguer box" : "menu-Hamburguer")
    setClassCSS(classCSS === "displayOFF" ? "displayON" : "displayOFF");
  };

  return (
    <>
      <StyleMenuHamburguer onClick={toggleMenu} className={menu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </StyleMenuHamburguer>
      <MenuMobile class={classCSS} />
    </>
  );
};

export default MenuHamburgue;
