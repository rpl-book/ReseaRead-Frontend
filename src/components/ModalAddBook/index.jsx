import React, { useState } from "react";
import "./ModalAddBook.css";
import { RxSlash } from "react-icons/rx";
import Button from "../Button";
import axios from "axios";

const ModalAddBook = ({
  closeModal,
  userId,
  API_URL,
  addedTitle,
  addedPage,
  addedCoverImage,
}) => {
  const [currentPage, setCurrentPage] = useState("");
  const [listType, setListType] = useState("");
  const [status, setStatus] = useState("");

  const handleCurrentPageChange = (e) => {
    setCurrentPage(e.target.value);
  };

  const handleListTypeChange = (e) => {
    setListType(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddingNewBook = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/library/addBook`, {
        userId,
        title: addedTitle,
        readStatus: status,
        pageProgress: currentPage,
        listType,
      });

      alert("Successfully add new Book to Library");
      window.location.reload();
    } catch (err) {
      console.error("Error on adding book to Library: ", err.message);
    }
  };

  return (
    <div className="ml-8">
      <div>
        <p className="modal-header mt-3">New Book</p>
      </div>

      <div className="modal-form flex">
        <div className="book-imgg mt-7">
          <img src={`${addedCoverImage}`} alt={`${addedTitle}`} />
        </div>
        <div className="book-desc mb-5 ml-8">
          <div className="book-desc-1">
            <label className="block">Page</label>
            <div className="flex items-center input-page-date">
              <input
                className="focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="000"
                value={currentPage}
                onChange={handleCurrentPageChange}
              />
              <div>
                <RxSlash />
              </div>
              <input
                className="focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="000"
                value={addedPage}
                disabled={true}
              />
            </div>
          </div>

          <div className="book-desc-1">
            <label className="block">List</label>
            <select
              className="focus:outline-none focus:shadow-outline"
              value={listType}
              onChange={handleListTypeChange}
              required
            >
              <option value="" disabled hidden>
                Select Reading List
              </option>
              <option value="Food For Thoughts">Food For Thoughts</option>
            </select>
          </div>

          <div className="book-desc-1">
            <label className="block">Status</label>
            <select
              className="focus:outline-none focus:shadow-outline"
              value={status}
              onChange={handleStatusChange}
              required
            >
              <option value="" disabled hidden>
                Select Status
              </option>
              <option value="Reading">Reading</option>
              <option value="Want To Read">Want to Read</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mod-btnn">
        <Button
          buttonName="Save"
          color="white"
          targetPage="/library"
          width={70}
          handleButton={handleAddingNewBook}
        />
        <button onClick={closeModal}>
          <Button
            buttonName="Discard"
            color="white"
            targetPage="/library"
            width={70}
          />
        </button>
      </div>
    </div>
  );
};

export default ModalAddBook;
