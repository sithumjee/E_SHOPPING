import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="display-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productDisplay-img">
          <img className="productDisplay-img-main" src={product.image} alt="" />
        </div>
      </div>

      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="display-right-price">
          <div className="rightPriceOld">Rs {product.old_price}</div>
          <div className="rightPriceNew">Rs {product.new_price}</div>
        </div>

        <div className="display-right-description">
          <p>{product.description}</p>
        </div>

        <div className="display-right-size">
          <h3>Size</h3>
          <div className="sizeList">
            <div className="sizeList-item">S</div>
            <div className="sizeList-item">M</div>
            <div className="sizeList-item">L</div>
            <div className="sizeList-item">XL</div>
            <div className="sizeList-item">XXL</div>
          </div>
        </div>

        <button>ADD TO CART</button>
        <p className="displayCategory">
          <span>Category :</span>Women , T-shirt, Crop Top{" "}
        </p>
        <p className="displayCategory">
          <span>Tags :</span>Modern , Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
