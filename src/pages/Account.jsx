import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { deslogearme, username, setUsername, suma } = useContext(Contexto);
  const naveg = useNavigate();
  const leave = (e) => {
    e.preventDefault();
    setUsername("");
    naveg("login", { replace: true });

    deslogearme();
  };
  return (
    <>
      <div className="account">
        <div className="accountcage">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            alt="profile"
          />
          <h3>Username:</h3>
          <h5>{username}</h5>
          <h3>Total in cart: ${suma}</h3>
          <button onClick={leave}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Account;
