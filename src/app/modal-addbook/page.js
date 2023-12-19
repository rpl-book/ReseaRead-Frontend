"use client";
import Button from '../../components/Button'; 
import ModalAddNewBookForm from '../../components/ModalAddNewBookForm';
import ModalAddNewBookForm3 from '../../components/ModalAddNewBookForm3';
import ModalAddNewBookForm2 from '../../components/ModalAddNewBookForm2';
import ModalAddNewBookForm4 from '../../components/ModalAddNewBookForm4';
import "./modal.css";

const Modal = ({}) => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        {/*<ModalAddNewBookForm/> */} 
        {/*<ModalAddNewBookForm2/> */} 
        {/*<ModalAddNewBookForm3/> */} 
        <ModalAddNewBookForm/>
      </div>
    </div>
  );
};

export default Modal;
