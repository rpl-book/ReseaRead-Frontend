import React from "react";
import Button from "../Button";
import "./ModalAddNewBook_Message.css";

const ModalAddNewBook_Message = ({ closeModal, onInsertNewBook }) => {
  return (
    <div>
      <h3 className="ml-4 mt-6" style={{ textAlign: "center" }}>
        Oops! It seems we haven't added that book to our collection yet.
      </h3>
      <h3 style={{ textAlign: "center" }}>
        Take a few steps to help us expand our collection!
      </h3>

      <div className="mod-btn">
        <button onClick={onInsertNewBook}>
          <Button
            buttonName="Insert New Book"
            color="white"
            targetPage="/library"
            width={120}
          />
        </button>
        <button onClick={closeModal}>
          <Button
            buttonName="Close"
            color="white"
            targetPage="/library"
            width={110}
          />
        </button>
      </div>
    </div>
  );
};

export default ModalAddNewBook_Message;
