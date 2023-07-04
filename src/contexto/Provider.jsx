import React, { useRef } from "react";
import { useState, useReducer } from "react";
import Contexto from "./Contexto";
import reducer from "./reducer";
import reducer2 from "./reducer2";

const Provider = ({ children }) => {
  const initialValue = [];
  const [responsive, setResponsive] = useState(false);
  const [username, setUsername] = useState("");
  const [cart, dispatch2] = useReducer(reducer2, initialValue);
  const [suma, setSuma] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const init = () => {
    const user = localStorage.getItem("logeado");
    return {
      logeado: !!user,
    };
  };
  const [auth, dispatch] = useReducer(reducer, {}, init);
  const logearme = () => {
    const action = { type: "login" };
    localStorage.setItem("logeado", true);
    dispatch(action);
  };
  const deslogearme = () => {
    const action = { type: "logout" };
    localStorage.removeItem("logeado");
    dispatch(action);
  };

  return (
    <Contexto.Provider
      value={{
        ...auth,
        responsive,
        setResponsive,
        logearme,
        deslogearme,
        username,
        setUsername,
        cart,
        dispatch2,
        suma,
        setSuma,
        navbar,
        setNavbar,
        active,
        setActive,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
