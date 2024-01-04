import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import { ShopContext } from "../Context/ShopContent";
import { useParams } from "react-router-dom";
import GetProductId from "../Components/GetProductId/GetProductId";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div>
      <GetProductId product={product} />
      <ProductDisplay product={product} />
      <Footer />
    </div>
  );
}
