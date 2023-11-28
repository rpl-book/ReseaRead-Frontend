"use client";
import Button from '../../components/Button'; 
import Checkbox from '../../components/Checkbox';
import ModalAddNewBookForm from '../../components/ModalAddNewBookForm';
import "./modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div onClick={closeModal} className="overlay"></div>
      <div className="modal-content">
        <div className="mt-3 mb-3">
          <p className="modal-header">New Book</p>
        </div>

        <ModalAddNewBookForm/>

        <div className="mt-2 ml-2">
          <div>
            <div className="grid grid-cols-2">
              <div className="mt-3 flex">
                <Button buttonName="Save" color="white" targetPage="/" />
                <button onClick={closeModal} ><Button buttonName="Cancel" color="white" targetPage="/library" /></button>
                
              </div>
              <div className="modal-checkbox"><Checkbox/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
