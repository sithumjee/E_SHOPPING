import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <h3>E_Shopping </h3>
      </div>

      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          style={{
            borderBottom: menu === "shop" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/"> Shop</Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          style={{
            borderBottom: menu === "men" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/men">Men</Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          style={{
            borderBottom: menu === "women" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/women">Women</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          style={{
            borderBottom: menu === "kids" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="navbar__cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <span className="cart_count">0</span>
      </div>
    </div>
  );
}
