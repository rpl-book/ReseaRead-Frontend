import React from 'react';
import ButtonIcon from '../../components/ButtonIcon'; 
import Button from '../Button';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./ModalAddNewBookForm3.css";

const ModalAddNewBookForm3 = ({ closeModal }) => {
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

export default ModalAddNewBookForm3;
