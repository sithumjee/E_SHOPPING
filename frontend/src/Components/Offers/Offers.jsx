import React from "react";
import "./Offers.css";
import exclusive from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <section>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers to You</h1>
          <p>Get the best deals on the most popular products.</p>
          <button>Check Now</button>
        </div>

        <div className="offers-right">
          <img src={exclusive} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
