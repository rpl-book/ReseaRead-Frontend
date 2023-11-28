"use client";
import Button from '../../components/Button'; 
import Checkbox from '../../components/Checkbox';
import ModalAddNewBookForm from '../../components/ModalAddNewBookForm';
import "./modal-editbook.css";

const ModalEditBook = ({ closeModalEdit }) => {
  return (
    <div className="modal">
      <div onClick={closeModalEdit} className="overlay"></div>
      <div className="modal-content">
        <div className="mt-3 mb-3">
          <p className="modal-header">Edit Book</p>
        </div>

        <ModalAddNewBookForm/>

        <div className="mt-2 ml-2">
          <div>
            <div className="grid grid-cols-2">
              <div className="mt-3 flex">
                <Button buttonName="Save" color="white" targetPage="/" />
                <button onClick={closeModalEdit}><Button buttonName="Cancel" color="white" targetPage="/library" /></button>
              </div>
              <div className="modal-checkbox"><Checkbox/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditBook;
