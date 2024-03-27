import { StyleMenuHamburgue } from "./style";
import MenuMobile from "../menumobile";
import { useEffect, useState } from "react";

const MenuHamburgue = () => {
  const [classCSS, setClassCSS] = useState("displayOFF");

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
    setClassCSS(classCSS === "displayOFF" ? "displayON" : "displayOFF");
  };

  return (
    <>
      <StyleMenuHamburgue onClick={toggleMenu} className="menu-hamburgue">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </StyleMenuHamburgue>
      <MenuMobile class={classCSS} />
    </>
  );
};

export default MenuHamburgue;
