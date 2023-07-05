import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import { NavLink } from "react-router-dom";

const Product = ({ ...e }) => {
  return (
    <>
      <div className="producto">
        <h3>{e.name}</h3>
        <h4>${e.price}</h4>
        <img src={e.image} alt="product-image" />
        <NavLink to={`/e-commerce/product/${e.id}`} className="moreinfo">
          More info +
        </NavLink>
      </div>
    </>
  );
};

export default Product;
