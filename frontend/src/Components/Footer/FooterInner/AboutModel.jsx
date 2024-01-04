import React from "react";

const AboutModal = ({ showAboutModal, closeAboutModal }) => {
  return (
    showAboutModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeAboutModal}>
            &times;
          </span>
          <h2>About Us</h2>
          <p>
            We are a clothing retailer located in Sri Lanka, specializing in
            providing high-quality and fashionable clothing for men, women, and
            kids. Our journey began on April 29, 2020, with a mission to offer a
            wide variety of clothing options to suit the diverse tastes and
            preferences of our customers.
          </p>
          <p>
            At our store, you'll find a range of stylish and trendy apparel,
            from casual wear to formal attire, ensuring that everyone in the
            family can find something they love. Our commitment to customer
            satisfaction and our passion for fashion drive us to continually
            expand our collection and provide an exceptional shopping experience
            for all.
          </p>
        </div>
      </div>
    )
  );
};

export default AboutModal;
