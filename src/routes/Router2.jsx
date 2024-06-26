import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Helmets from "../pages/Helmets";
import Gloves from "../pages/Gloves";
import Boots from "../pages/Boots";
import Suits from "../pages/Suits";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Account from "../pages/Account";
import Buy from "../pages/Buy";
import ShoppingCar from "../pages/ShoppingCar";
import Menu from "../components/Menu";
import MenuHamburguer from "../components/MenuHamburguer";
import Contexto from "../contexto/Contexto";

const Router2 = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <MenuHamburguer />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="helmets" element={<Helmets />} />
        <Route path="gloves" element={<Gloves />} />
        <Route path="boots" element={<Boots />} />
        <Route path="suits" element={<Suits />} />
        <Route path="product/:id" element={<Buy />} />
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<ShoppingCar />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router2;
