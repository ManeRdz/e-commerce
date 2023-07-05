import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ShoppingCar = () => {
  const naveg = useNavigate();
  const { suma, setSuma, cart, dispatch2 } = useContext(Contexto);
  return (
    <>
      <div className="cartpage">
        <div>
          {cart.length > 0 ? (
            <div>
              <h5 className="total">
                Your total: ${suma}
                <br />
                {cart.length > 1
                  ? `${cart.length} products in your cart`
                  : `${cart.length} product in your cart`}
              </h5>
              <button className="paycart">Pay your cart</button>
            </div>
          ) : (
            <h5 className="total empty">
              Your cart is empty, add something from the{" "}
              <span onClick={() => naveg("/home")}>shop</span>!
            </h5>
          )}
        </div>
        <ul className={cart.length > 0 ? "productlist" : "productshidden"}>
          {cart.map((element) => (
            <li className="element" key={element.name}>
              <img
                onClick={() => naveg(`/product/${element.id}`)}
                src={element.image}
                alt="product-image"
              />
              <h5 onClick={() => naveg(`/product/${element.id}`)}>
                {element.name}
              </h5>
              <h5>${element.price}</h5>
              <div className="operations">
                {element.cantidad > 1 ? (
                  <AiOutlineMinus
                    className="minus"
                    onClick={() => {
                      if (element.cantidad < 2) {
                        setSuma(suma - element.price * element.cantidad);
                        dispatch2({
                          type: "outcart",
                          payload: { name: element.name },
                        });
                      }
                      dispatch2({
                        type: "minus",
                        payload: { name: element.name },
                      });
                      setSuma(suma - element.price);
                    }}
                  />
                ) : null}
                <p>{element.cantidad}</p>
                <AiOutlinePlus
                  className="plus"
                  onClick={() => {
                    dispatch2({
                      type: "modify",
                      payload: { name: element.name },
                    });
                    setSuma(suma + element.price);
                  }}
                />
                <AiTwotoneDelete
                  className="delete"
                  onClick={() => {
                    setSuma(suma - element.price * element.cantidad);
                    dispatch2({
                      type: "outcart",
                      payload: { name: element.name },
                    });
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShoppingCar;
