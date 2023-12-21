"use client";
import { useState } from "react";
import Button from "../../../components/Button";
import CheckBox from "../../../components/CheckBox";
import ModalAddNewBookForm from "../../../components/ModalAddNewBookForm";
import "./modal.css";
import axios from "axios";

const Modal = ({ closeModal, userId, API_URL }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [listType, setListType] = useState("");
  const [page, setPage] = useState("");
  const [pageProgress, setPageProgress] = useState("");
  const [status, setStatus] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [review, setReview] = useState("");

  const handleAddBookToLib = async (e) => {
    e.preventDefault();

    try {
      const bookModelResponse = await axios.get(
        `${API_URL}/api/book/books/one/`,
        {
          params: { bookTitle: title },
        }
      );
      if (bookModelResponse.status === 404) {
        await axios.post(`${API_URL}/api/book/addBook`, {
          title,
          author,
          page,
          description: "There's no description yet.",
          rating: 0,
          coverImage: coverUrl,
          genre: "None",
        });
      }

      await axios.post(`${API_URL}/api/library/addBook`, {
        userId,
        title,
        readStatus: status,
        pageProgress,
        listType,
      });

      closeModal();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="mt-3 mb-3">
          <p className="modal-header">New Book</p>
        </div>

        <ModalAddNewBookForm
          setTitle={setTitle}
          setAuthor={setAuthor}
          setListType={setListType}
          setPage={setPage}
          setPageProgress={setPageProgress}
          setStatus={setStatus}
          setCoverUrl={setCoverUrl}
          setReview={setReview}
        />

        <div className="mt-2 ml-2">
          <div>
            <div className="grid grid-cols-2">
              <div className="mt-3 flex">
                {title ? (
                  <Button
                    buttonName="Save"
                    color="white"
                    targetPage="/library"
                    handleButton={handleAddBookToLib}
                  />
                ) : (
                  <Button
                    buttonName="Save"
                    color="white"
                    targetPage="/library"
                  />
                )}

                <button onClick={closeModal}>
                  <Button
                    buttonName="Cancel"
                    color="white"
                    targetPage="/library"
                  />
                </button>
              </div>
              <div className="modal-checkbox">
                <CheckBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
