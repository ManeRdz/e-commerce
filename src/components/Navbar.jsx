import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Contexto from "../contexto/Contexto";
import MenuHamburguer from "./MenuHamburguer";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const { responsive, username, navbar, setNavbar } = useContext(Contexto);

  const scrolling = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", scrolling);
  return (
    <nav className={navbar ? "navbar activated" : "navbar"}>
      <div className="userInfo">
        <NavLink className="logo" to="/home">
          MCshop
        </NavLink>
        <h3>Welcome! {username}</h3>
      </div>
      <div className={responsive ? "links hidden" : "links"}>
        <NavLink to="/helmets">Helmets</NavLink>
        <NavLink to="/gloves">Gloves</NavLink>
        <NavLink to="/boots">Boots</NavLink>
        <NavLink to="/suits">Suits</NavLink>
        <NavLink to="/cart">
          <FaShoppingCart />
        </NavLink>
        <NavLink to="/account">
          <AiOutlineUser />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
