import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const top = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <footer>
      <div className="Help">
        <p className="title">Help</p>
        <ul>
          <li>FAQ</li>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Return policy</li>
          <li>Terms & Conditions</li>
          <li>Make a return</li>
          <li>Warranty</li>
        </ul>
      </div>
      <div className="footer-products">
        <p className="title">Shop</p>
        <ul>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="helmets">Helmets</NavLink>
          </li>
          <li>
            <NavLink to="gloves">Gloves</NavLink>
          </li>
          <li>
            <NavLink to="boots">Boots</NavLink>
          </li>
          <li>
            <NavLink to="suits">Suits</NavLink>
          </li>
          <li onClick={top}>
            Top
            {"  "}
            <AiOutlineArrowUp />
          </li>
        </ul>
      </div>
      <div className="contact">
        <p className="title">Contact</p>
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <AiOutlineMail />
          </li>
          <li>
            <AiOutlineWhatsApp />
          </li>
        </ul>
      </div>
      <form className="subscribe">
        <p>Subscribe to receive the best offers</p>
        <input type="email" placeholder="Write your email..." required />
        <label htmlFor="check">
          <input type="checkbox" name="check" required />
          Considering the Motociclon Inc. <span>Privacy Policy</span>, I confirm
          that I want to subscribe to the newsletter of MotociclonShop*.
        </label>
        <button>Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
