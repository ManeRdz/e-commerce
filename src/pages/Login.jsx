import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Login = () => {
  const user = [
    { name: "Test", pass: "test" },
    { name: "Chito", pass: "123" },
  ];
  const [password, setPassword] = useState("");
  const [wrongpass, setWrongpass] = useState(false);
  const [wronguser, setWronguser] = useState(false);
  const naveg = useNavigate();
  const { logearme, username, setUsername } = useContext(Contexto);
  const login = (e) => {
    e.preventDefault();
    const findUser = user.find((element) => element.name == username);
    if (username != findUser.name) {
      console.log(findUser);
      setWronguser(true);
    } else if (password != findUser.pass) {
      setWrongpass(true);
    } else {
      setWrongpass(false);
      setWronguser(false);
      naveg("/home");
      logearme();
    }
  };
  return (
    <>
      <div className="login-page">
        <form onSubmit={login} className="loginform">
          <h1>Welcome to Motociclon Shop</h1>
          <h3>Find the best accesories for bikers here!</h3>
          <h5>Please log in to continue</h5>
          <label htmlFor="user">Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="user"
            placeholder="Write your username here..."
            value={username}
            required
            autoComplete="off"
          />
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Write your password here..."
            value={password}
            required
          />
          <button>Login</button>
          {wrongpass || wronguser ? (
            <h5 className="advice">Verify your login info and try again</h5>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Login;
