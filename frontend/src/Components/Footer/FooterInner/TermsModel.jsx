import React from "react";

const TermsModal = ({ showTermsModal, closeTermsModal }) => {
  return (
    showTermsModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeTermsModal}>
            &times;
          </span>
          <h2>Terms and Conditions</h2>
          <p>
            By using our website, you agree to comply with and be bound by the
            following terms and conditions of use. Please read these terms
            carefully before using our website.
          </p>
          {/* ... (rest of the content) */}
        </div>
      </div>
    )
  );
};

export default TermsModal;
