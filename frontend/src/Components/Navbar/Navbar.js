import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
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
          Shop
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          style={{
            borderBottom: menu === "men" ? "4px solid #ff4141" : "none",
          }}
        >
          Men
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          style={{
            borderBottom: menu === "women" ? "4px solid #ff4141" : "none",
          }}
        >
          Women
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          style={{
            borderBottom: menu === "kids" ? "4px solid #ff4141" : "none",
          }}
        >
          Kids
        </li>
      </ul>

      <div className="navbar__cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <span className="cart_count">0</span>
      </div>
    </div>
  );
}
