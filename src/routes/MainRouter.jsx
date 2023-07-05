import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Router2 from "./Router2";
import Contexto from "../contexto/Contexto";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const MainRouter = () => {
  const { setResponsive, logeado } = useContext(Contexto);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1264) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  });
  return (
    <Routes>
      <Route
        path="e-commerce/login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route path="e-commerce/" element={<Navigate to="home" />} />
      <Route
        path="e-commerce/*"
        element={
          <PrivateRoutes>
            <Router2 />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default MainRouter;
