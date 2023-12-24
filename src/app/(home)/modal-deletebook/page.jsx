"use client";
import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import "./modal-deletebook.css";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ModalEditBook = ({ closeModalDelete, libraryId }) => {
  const removeBook = async () => {
    try {
      console.log("Test");
      const removeBookInLibResponse = await axios.delete(
        `${API_URL}/api/library/remove/${libraryId}`
      );

      if (removeBookInLibResponse.status === 200) {
        alert("Successfully remove a book from your Library");
        window.location.reload();
      }
    } catch (err) {
      console.log("There's is a a problem when removing: ", err);
    }
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
          <div className="mb-3">
            <p>Are you sure you want to remove this book from your Library?</p>
          </div>

          <div className="mt-2 ml-2">
            <div className="mt-3 mb-5 modal-button">
              <Button
                buttonName="Yes"
                color="white"
                targetPage="/library"
                width={"50px"}
                handleButton={removeBook}
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
    </div>
  );
};

export default ModalEditBook;
