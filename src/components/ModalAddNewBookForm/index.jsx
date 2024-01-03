import React, { useState } from "react";
import "./ModalAddNewBookForm.css";
import { RxSlash } from "react-icons/rx";
import Button from "../Button";
import axios from "axios";

const ModalAddNewBookForm = ({ closeModal, userId, API_URL, addedTitle }) => {
  const [title, setTitle] = useState(addedTitle);
  const [author, setAuthor] = useState("");
  const [coverBook, setCoverBook] = useState("/img-placeholder.png");
  const [currentPage, setCurrentPage] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [listType, setListType] = useState("");
  const [status, setStatus] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImgChange = (e) => {
    const newBookCoverBookUrl = e.target.value;
    setCoverBook(newBookCoverBookUrl);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCurrentPageChange = (e) => {
    setCurrentPage(e.target.value);
  };

  const handleTotalPageChange = (e) => {
    setTotalPage(e.target.value);
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
      const addBookToSystem = await axios.post(`${API_URL}/api/book/addBook`, {
        author,
        description: "There is no description yet.",
        rating: 0,
        genre: "Other",
        coverImage: coverBook,
        page: totalPage,
        title,
      });

      if (addBookToSystem.status === 200) {
        await axios.post(`${API_URL}/api/library/addBook`, {
          userId,
          title,
          readStatus: status,
          pageProgress: currentPage,
          listType,
        });

        alert("Successfully add new Book to Library");
        window.location.reload();
      }
    } catch (err) {
      console.lo;
      console.error("Error when add new book", err.message);
    }
  };

  console.log(title);

  return (
    <div className="ml-8">
      <div>
        <p className="modal-header mt-3">New Book</p>
      </div>

      <div className="modal-form flex">
        <div className="book-imgg mt-7">
          <img src={coverBook} />
        </div>
        <div className="book-desc mb-5 ml-8">
          <div className="book-desc-1">
            <label className="block">Title</label>
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="book-desc-1">
            <label className="block">Author</label>
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>

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
                value={totalPage}
                onChange={handleTotalPageChange}
              />
            </div>
          </div>

          <div className="book-desc-1">
            <label className="block">Cover URL</label>
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Cover URL"
              onChange={handleImgChange}
            />
          </div>

          <div className="book-desc-1">
            <label className="block">List</label>
            <select
              className="focus:outline-none focus:shadow-outline"
              value={listType}
              onChange={handleListTypeChange}
            >
              <option value="" disabled>
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
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Reading">Reading</option>
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

export default ModalAddNewBookForm;
