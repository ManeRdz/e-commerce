import { product } from "./data";
import Product from "../pages/Product";
import { useContext, useRef, useState } from "react";

import React from "react";
import Contexto from "../contexto/Contexto";

const CreateProducts = ({ category }) => {
  const list = product.filter((prod) => prod.category == category);

  return (
    <>
      <div className="products-page">
        {list.map((e, index) => (
          <Product key={index} {...e} />
        ))}
      </div>
    </>
  );
};

export default CreateProducts;
