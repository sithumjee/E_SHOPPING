import React from "react";
import "./Emailtab.css";

const Emailtab = () => {
  return (
    <div className="emailTab">
      <div className="emailTab__container">
        <div className="emailTab__container__left">
          <h1>Subscribe to our newsletter</h1>
          <p>Get updates on our latest products, offers and promotions</p>
        </div>
        <div className="emailTab__container__right">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Emailtab;
