import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContent";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div className="shop-category"></div>

      <Footer />
    </div>
  );
}
