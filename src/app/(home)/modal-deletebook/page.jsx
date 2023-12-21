"use client";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import "./modal-deletebook.css";

const ModalEditBook = ({ closeModalDelete }) => {
  return (
    <div className="modal">
      <div onClick={closeModalDelete} className="overlay"></div>
      <div className="modalcontent">
        <div className="mb-3">
          <p>Are you sure you want to remove this book from your Library?</p>
        </div>

        <div className="mt-2 ml-2">
          <div className="mt-3 mb-5 modal-button">
            <Button
              buttonName="Yes"
              color="white"
              targetPage="#"
              width={"50px"}
            />
            <button onClick={closeModalDelete}>
              <Button
                buttonName="No"
                color="white"
                targetPage="/library"
                width={"50px"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditBook;
