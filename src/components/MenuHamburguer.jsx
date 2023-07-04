import React, { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";

const MenuHamburguer = () => {
  const { navbar, active, setActive } = useContext(Contexto);
  const activo = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <>
      <button
        onClick={activo}
        className={
          active
            ? "panel-btn hamburger hamburger--collapse is-active"
            : "panel-btn hamburger hamburger--collapse"
        }
        type="button"
      >
        <span className="hamburger-box">
          <span
            className={navbar ? "hamburger-inner burgernav" : "hamburger-inner"}
          ></span>
        </span>
      </button>
    </>
  );
};

export default MenuHamburguer;
