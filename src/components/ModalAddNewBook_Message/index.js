import React from 'react';
import Button from '../Button';
import "./ModalAddNewBook_Message.css";

const ModalAddNewBook_Message = ({ closeModal }) => {
  return (
    <div>
      <h3 className="ml-4 mt-6" style={{ textAlign: 'center' }}>Oops! It seems we haven't added that book to our database yet.</h3>
      <h3 style={{ textAlign: 'center' }}>Take a few steps to help us expand our collection!</h3>

      <div className='mod-btn'>
        <Button buttonName="Insert new book" color="white" targetPage="#"/>
        <button onClick={closeModal}>
          <Button buttonName="Close" color="white" targetPage="/library" width={110}/>
        </button>
      </div>
    </div>
  );
};

export default ModalAddNewBook_Message;
