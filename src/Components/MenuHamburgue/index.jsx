import { StyleMenuHamburgue } from "./style";
import MenuMobile from "../menumobile";
import { useEffect, useState } from "react";

const MenuHamburgue = () => {
  const [classCSS, setClassCSS] = useState("displayOFF");
  const [ menu, setMenu] = useState("menu-hamburgue")

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-hamburgue')) {
        setClassCSS("displayOFF");
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  const toggleMenu = () => {
    setMenu(menu === "menu-hamburgue" ? "menu-hamburgue box" : "menu-hamburgue")
    setClassCSS(classCSS === "displayOFF" ? "displayON" : "displayOFF");
  };

  return (
    <>
      <StyleMenuHamburgue onClick={toggleMenu} className={menu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </StyleMenuHamburgue>
      <MenuMobile class={classCSS} />
    </>
  );
};

export default MenuHamburgue;
