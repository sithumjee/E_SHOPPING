import React, { useContext } from "react";
import "./CardItems.css";
import { ShopContext } from "../../Context/ShopContent";
import remove_icon from "../Assets/cart_cross_icon.png";

const CardItems = () => {
  const { all_product, cartItems, removeToCart, cartTotal } =
    useContext(ShopContext);
  return (
    <div className="carditems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="carditems-format">
                <img className="carditemImg" src={item.image} alt="Product" />
                <p>{item.name}</p>
                <p>Rs {item.new_price}</p>
                <button className="carditem-quantity">
                  {cartItems[item.id]}
                </button>
                <p className="totalprice">
                  Rs {item.new_price * cartItems[item.id]}
                </p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => {
                    removeToCart(item.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Ensure a value is always returned from the map function
      })}

      <div className="cardItems-down">
        <hr />
        <hr />
        <div className="cardItems-total">
          <h1>CART TOTAL</h1>
          <div>
            <div className="cardItems-total-item">
              <p>SubTotal</p>
              <p>Rs {cartTotal()}</p>
            </div>
            <hr />

            <div className="cardItems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cardItems-total-item">
              <h3>Total</h3>
              <h3>Rs {cartTotal()}</h3>
            </div>
          </div>

          <button>Proceed to Checkout</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cardItems-promobox">
            <input type="text" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
