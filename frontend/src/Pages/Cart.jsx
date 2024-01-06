import React from "react";
import Footer from "../Components/Footer/Footer";
import CardItems from "../Components/CardItems/CardItems";
import "./CSS/Cart.css";

export default function Cart() {
  return (
    <div className="cartdiv">
      <CardItems />
      <Footer />
    </div>
  );
}
