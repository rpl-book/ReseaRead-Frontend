"use client";
import Button from '../../components/Button'; 
import ModalAddNewBookData from '../../components/ModalAddNewBookData';
import ModalAddNewBook_Message from '../../components/ModalAddNewBook_Message';
import ModalAddBook_SearchTitle from '../../components/ModalAddBook_SearchTitle';
import ModalAddBook from '../../components/ModalAddBook';
import "./modal.css";

const Modal = ({}) => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        {/*<ModalAddBook/> */} 
        {/*<ModalAddNewBook_Message/> */} 
        {/*<ModalAddNewBookData/> */} 
        <ModalAddBook_SearchTitle/> 
      </div>
    </div>
  );
};

export default Modal;
