import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Contexto from "../contexto/Contexto";

const Menu = () => {
  const { active, setActive } = useContext(Contexto);
  const click = () => {
    active ? setActive(false) : active;
  };
  return (
    <aside className={active ? "panel is-active" : "panel"}>
      <ul>
        <li>
          <NavLink onClick={click} to="helmets">
            Helmets
          </NavLink>
        </li>
        <li>
          <NavLink onClick={click} to="gloves">
            Gloves
          </NavLink>
        </li>
        <li>
          <NavLink onClick={click} to="boots">
            Boots
          </NavLink>
        </li>
        <li>
          <NavLink onClick={click} to="suits">
            Suits
          </NavLink>
        </li>
        <li>
          <NavLink onClick={click} to="cart">
            <FaShoppingCart />
          </NavLink>
        </li>
        <li>
          <NavLink onClick={click} to="account">
            <AiOutlineUser />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
