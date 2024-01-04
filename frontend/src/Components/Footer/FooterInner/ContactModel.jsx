import React from "react";

const ContactModal = ({ showContactModal, closeContactModal }) => {
  return (
    showContactModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeContactModal}>
            &times;
          </span>
          <h2>Contact Us</h2>
          <p>
            We are available to assist you with any inquiries or assistance you
            may need. You can reach us through the following channels:
          </p>
          {/* ... (rest of the content) */}
        </div>
      </div>
    )
  );
};

export default ContactModal;
