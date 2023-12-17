import React, { useState } from "react";
import "./ModalAddNewBookForm.css";
import { RxSlash } from "react-icons/rx";
import ModalReviewTextbox from "../ModalReviewTextbox";

const ModalAddNewBookForm = ({
  setTitle,
  setAuthor,
  setListType,
  setPage,
  setPageProgress,
  setStatus,
  setCoverUrl,
  setReview,
}) => {
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
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="book-desc-1">
                    <label className="block">Author</label>
                    <input
                      className="focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Author"
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>

                  <div className="book-desc-1">
                    <label className="block">List</label>
                    <select
                      className="focus:outline-none focus:shadow-outline"
                      onChange={(e) => setListType(e.target.value)}
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
                        onChange={(e) => setPageProgress(e.target.value)}
                      />
                      <div>
                        <RxSlash />
                      </div>
                      <input
                        className=" focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="000"
                        onChange={(e) => setPage(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select Status
                      </option>
                      <option value="reading">Reading</option>
                      <option value="finished">Finished</option>
                    </select>
                  </div>
                </div>

                <div className="book-desc-2 book-desc2">
                  <label className="block">Cover URL</label>
                  <input
                    className="focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Cover URL"
                    onChange={(e) => setCoverUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-2 mt-5">
          <ModalReviewTextbox handleInputChange={setReview} />
        </div>
      </div>
    </div>
  );
};

export default ModalAddNewBookForm;
