"use client";
import { useState } from "react";
import "./modal.css";
import axios from "axios";
import ModalAddBook_SearchTitle from "@/components/ModalAddBook_SearchTitle";

import ModalAddNewBook_Message from "@/components/ModalAddNewBook_Message";
import ModalAddBook from "@/components/ModalAddBook";
import ModalAddNewBookForm from "../../../components/ModalAddNewBookForm";

const Modal = ({ closeModal, userId, API_URL }) => {
  const [title, setTitle] = useState("");
  const [showSearchTitleModal, setShowSearchTitleModal] = useState(true);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showNewBookToLibModal, setShowNewBookToLibModal] = useState(false);
  const [showNewBookFormAndLibModal, setShowNewBookFormAndLibModal] =
    useState(false);

  const handleSearchTitle = async (e) => {
    e.preventDefault();
    console.log("its pressed");
    try {
      const bookTitleResponse = await axios.get(
        `${API_URL}/api/book/books/one`,
        {
          params: {
            bookTitle: title,
          },
        }
      );
      setShowSearchTitleModal(false);
      if (bookTitleResponse.data.message === "Book Not Found") {
        setShowMessageModal(true);
      } else {
        setShowNewBookToLibModal(true);
      }
    } catch (err) {
      console.error("There's an error during API Request : ", err.message);
    }
  };

  const onInsertNewBook = () => {
    setShowMessageModal(false);
    setShowNewBookFormAndLibModal(true);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        {showSearchTitleModal && (
          <ModalAddBook_SearchTitle
            closeModal={closeModal}
            updateTitleValue={setTitle}
            handleSearchTitle={handleSearchTitle}
          />
        )}
        {showMessageModal && (
          <ModalAddNewBook_Message
            closeModal={closeModal}
            onInsertNewBook={onInsertNewBook}
          />
        )}
        {showNewBookToLibModal && (
          <ModalAddBook
            closeModal={closeModal}
            userId={userId}
            API_URL={API_URL}
          />
        )}
        {showNewBookFormAndLibModal && (
          <ModalAddNewBookForm
            closeModal={closeModal}
            userId={userId}
            API_URL={API_URL}
            addedTitle={title}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
