"use client";
import Button from "../../../components/Button";
import "./modal-newReadinglist.css";
import ModalAddNewReadinglist from "../../../components/ModalAddNewReadinglist";

const ModalNewReadinglist = ({ closeModalNewReadinglist }) => {
  return (
    <div className="modal">
      <div onClick={closeModalNewReadinglist} className="overlay"></div>
      <div className="modal--content ">
        <div className="mt-3 mb-3">
          <p className="modalheader">New Reading List</p>
        </div>

        <ModalAddNewReadinglist />

        <div className="modal-button mt-2 ml-2">
          <Button
            buttonName="Save"
            color="white"
            targetPage="#"
            width={"50px"}
          />
          <button onClick={closeModalNewReadinglist}>
            <Button
              buttonName="Discard"
              color="white"
              targetPage="/library"
              width={"50px"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNewReadinglist;
