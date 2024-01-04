import React from "react";
import "./GetProductId.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const GetProductId = (props) => {
  const { product } = props;
  return (
    <div className="getProductId">
      HOME <img src={arrow_icon} alt="arrow_icon" />
      SHOP
      <img src={arrow_icon} alt="arrow_icon" />
      {product.category}
      <img src={arrow_icon} alt="arrow_icon" />
      {product.name}
    </div>
  );
};

export default GetProductId;
