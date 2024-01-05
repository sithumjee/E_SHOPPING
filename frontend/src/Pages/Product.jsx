import React, { useContext } from "react";
import "./CSS/Product.css";
import Footer from "../Components/Footer/Footer";
import { ShopContext } from "../Context/ShopContent";
import { useParams } from "react-router-dom";
import GetProductId from "../Components/GetProductId/GetProductId";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div
      className="main-product
    "
    >
      <GetProductId product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Footer />
    </div>
  );
}
