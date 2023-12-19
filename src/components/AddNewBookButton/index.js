/* @jsxImportSource client */
import React, { useState, useEffect } from "react";
import "./AddNewBookButton.css";
import { CiCirclePlus } from "react-icons/ci";

export default function AddNewBookButton() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('active-modal');
    };
  }, [modal]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal}><CiCirclePlus/></button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              <h2>fsdsdvdsvdsvdsvdsvsd</h2>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

    </>
  );
}
