import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { product } from "../data/data";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Contexto from "../contexto/Contexto";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Buy = () => {
  const naveg = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();
  const { dispatch2, setSuma, suma, cart } = useContext(Contexto);
  const findProduct = product.find((producto) => producto.id == id);
  const finded = cart.find((el) => el.name == findProduct.name);
  const goback = () => {
    naveg(-1);
    window.scrollTo({ top: 0 });
  };
  const addToCart = () => {
    setSuma(suma + findProduct.price * cantidad);
    const action = {
      type: "incart",
      payload: {
        name: findProduct.name,
        price: findProduct.price,
        image: findProduct.image,
        cantidad: cantidad,
        id: findProduct.id,
      },
    };

    if (finded) {
      dispatch2({ type: "modify", payload: { name: findProduct.name } });
    } else {
      dispatch2(action);
    }
  };
  return (
    <>
      <div className="product">
        <button className="goback" onClick={goback}>
          <IoIosArrowBack /> Go back
        </button>
        <div className="maininfo">
          <div className="productinfo">
            <h3>{findProduct.name}</h3>
            <p>${findProduct.price}</p>
            <img src={findProduct.image} alt="product-image" />
          </div>
          <div className="productdesc">
            <h3>Description: </h3>
            <p>{findProduct.description}</p>
            <p>Color: {findProduct.color}</p>
            {finded ? null : (
              <div className="cantidad">
                {cantidad > 1 ? (
                  <AiOutlineMinus
                    className="minus-prod"
                    onClick={() => {
                      if (finded) {
                        setSuma(suma - findProduct.price);
                      }
                      setCantidad(cantidad - 1);
                      dispatch2({
                        type: "minus",
                        payload: { name: findProduct.name },
                      });
                    }}
                  />
                ) : null}

                <p>{cantidad}</p>
                <AiOutlinePlus
                  className="plus-prod"
                  onClick={() => {
                    setCantidad(cantidad + 1);
                    if (finded) {
                      setSuma(suma + findProduct.price * cantidad);
                    }
                    dispatch2({
                      type: "modify",
                      payload: { name: findProduct.name },
                    });
                  }}
                />
              </div>
            )}

            {finded ? (
              <button
                className="cartbtn incart"
                onClick={() => naveg("/e-commerce/cart")}
              >
                In your cart <FaShoppingCart />
              </button>
            ) : (
              <button className="cartbtn" onClick={addToCart}>
                Add to cart <FaShoppingCart />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
