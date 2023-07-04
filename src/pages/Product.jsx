import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Product = ({ ...e }) => {
  return (
    <>
      <div className="producto">
        <h3>{e.name}</h3>
        <h4>${e.price}</h4>
        <img src={e.image} alt="product-image" />
        <Link to={`/product/${e.id}`} className="moreinfo">
          More info +
        </Link>
      </div>
    </>
  );
};

export default Product;
