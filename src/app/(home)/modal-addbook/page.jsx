"use client";
import { useEffect, useState } from "react";
import "./modal.css";
import axios from "axios";
import ModalAddBook_SearchTitle from "@/components/ModalAddBook_SearchTitle";

import ModalAddNewBook_Message from "@/components/ModalAddNewBook_Message";
import ModalAddBook from "@/components/ModalAddBook";
import ModalAddNewBookForm from "../../../components/ModalAddNewBookForm";

const Modal = ({ closeModal, userId, API_URL }) => {
  const [title, setTitle] = useState("");
  const [bookData, setBookData] = useState({});
  const [showSearchTitleModal, setShowSearchTitleModal] = useState(true);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showNewBookToLibModal, setShowNewBookToLibModal] = useState(false);
  const [showNewBookFormAndLibModal, setShowNewBookFormAndLibModal] =
    useState(false);

  const handleSearchTitle = async (e) => {
    e.preventDefault();

    if (title.length === 0) {
      alert("its empty you fuck");
      return;
    }

    const words = title.split(" ");
    words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    setTitle(words);
    setShowSearchTitleModal(false);
    try {
      const bookTitleResponse = await axios.get(
        `${API_URL}/api/book/books/one`,
        {
          params: {
            bookTitle: title,
          },
        }
      );

      if (bookTitleResponse.data.message === "Book Not Found") {
        setShowMessageModal(true);
      } else {
        setShowNewBookToLibModal(true);
        setBookData(bookTitleResponse.data.payload);
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
            addedTitle={bookData.title}
            addedPage={bookData.page}
            addedCoverImage={bookData.coverImage}
            closeModal={closeModal}
            userId={userId}
            API_URL={API_URL}
          />
        )}
        {showNewBookFormAndLibModal && (
          <ModalAddNewBookForm
            addedTitle={title}
            closeModal={closeModal}
            userId={userId}
            API_URL={API_URL}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
