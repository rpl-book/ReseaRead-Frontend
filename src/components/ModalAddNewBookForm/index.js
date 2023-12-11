import React, { useState } from "react";
import "./ModalAddNewBookForm.css";
import { RxSlash } from "react-icons/rx";
import ModalReviewTextbox from "../ModalReviewTextbox";

const ModalAddNewBookForm = ({
  img,
  title,
  author,
  currentPage,
  totalPage,
  status: initialStatus,
  dateAddedMM,
  dateAddedYY,
  dateAddedDD,
  reviews: initialReviews,
}) => {
  const [InputTitle, setTitle] = useState(title || "");
  const [InputAuthor, setAuthor] = useState(author || "");
  const [InputImg, setImg] = useState(img || "");
  const [InputCurrentPage, setCurrentPage] = useState(currentPage || "");
  const [InputTotalPage, setTotalPage] = useState(totalPage || "");
  const [InputStatus, setStatus] = useState(initialStatus || "");
  const [InputDateAddedMM, setDateMM] = useState(dateAddedMM || "");
  const [InputDateAddedYY, setDateYY] = useState(dateAddedYY || "");
  const [InputDateAddedDD, setDateDD] = useState(dateAddedDD || "");
  const [InputReviews, setReviews] = useState(initialReviews || "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleCurrentPageChange = (e) => {
    setCurrentPage(e.target.value);
  };

  const handleTotalPageChange = (e) => {
    setTotalPage(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleYearChange = (e) => {
    setDateYY(e.target.value);
  };

  const handleMonthChange = (e) => {
    setDateMM(e.target.value);
  };

  const handleDayChange = (e) => {
    setDateDD(e.target.value);
  };

  const handleReviewsChange = (e) => {
    setReviews(e.target.value);
  };

  return (
    <div className="">
      <div className="modal-form">
        <div className="grid grid-cols-6 gap-3">
          <div className="book-img mt-5">
            <img src={"/img-placeholder.png"} alt="Image Placeholder" />
          </div>

          <div className="col-span-5">
            <div className="grid grid-cols-2">
              <div>
                <div className="book-desc">
                  <div className="book-desc-1">
                    <label className="block">Title</label>
                    <input
                      className="focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Title"
                      value={InputTitle}
                      onChange={handleTitleChange}
                    />
                  </div>

                  <div className="book-desc-1">
                    <label className="block">Author</label>
                    <input
                      className="focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Author"
                      value={InputAuthor}
                      onChange={handleAuthorChange}
                    />
                  </div>

                  <div className="book-desc-1">
                    <label className="block">List</label>
                    <select
                      className="focus:outline-none focus:shadow-outline"
                      value={InputStatus}
                      onChange={handleStatusChange}
                    >
                      <option value="" disabled selected>
                        Select Reading List
                      </option>
                      <option value="reading">Food For Thoughts</option>
                      <option value="finished">...</option>
                    </select>
                  </div>

                  <div className="book-desc-1">
                    <label className="block">Page</label>
                    <div className="flex items-center input-page-date">
                      <input
                        className="focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="000"
                        value={InputCurrentPage}
                        onChange={handleCurrentPageChange}
                      />
                      <div>
                        <RxSlash />
                      </div>
                      <input
                        className=" focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="000"
                        value={InputTotalPage}
                        onChange={handleTotalPageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="book-desc">
                  <div className="book-desc-2">
                    <label className="block">Status</label>
                    <select
                      className="focus:outline-none focus:shadow-outline"
                      value={InputStatus}
                      onChange={handleStatusChange}
                    >
                      <option value="" disabled selected>
                        Select Status
                      </option>
                      <option value="reading">Reading</option>
                      <option value="finished">Finished</option>
                    </select>
                  </div>
                </div>

                <div className="book-desc-2">
                  <label className="block">Date Added</label>
                  <div className="flex items-center input-page-date">
                    <input
                      className="focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="dd"
                      value={InputDateAddedDD}
                      onChange={handleDayChange}
                    />
                    <div>
                      <RxSlash />
                    </div>
                    <input
                      className=" focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="mm"
                      value={InputDateAddedMM}
                      onChange={handleMonthChange}
                    />
                    <div>
                      <RxSlash />
                    </div>
                    <input
                      className=" focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="yy"
                      value={InputDateAddedYY}
                      onChange={handleYearChange}
                    />
                  </div>
                </div>

                <div className="book-desc-2 book-desc2">
                  <label className="block">Cover URL</label>
                  <input
                    className="focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Cover URL"
                    value={InputImg}
                    onChange={handleImgChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-2 mt-5">
          <ModalReviewTextbox
            handleInputChange={handleReviewsChange}
            text={InputReviews}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalAddNewBookForm;
