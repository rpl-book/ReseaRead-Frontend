import "./ModalAddNewReadinglist.css";
import React, { useState } from "react";

const ModalAddNewBookForm = ({}) => {
  return (
    <div className="mt-5\3">
      <div className="flex">
        <div className="bookimg mt-5">
          <img src={"/img-placeholder.png"} alt="Image Placeholder" />
        </div>

        <div className="bookdesc ml-9">
          <div className="book-desc-2">
            <label className="block">List Name</label>
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
            />
          </div>

          <div className="book-desc-2">
            <label className="block">Image URL</label>
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddNewBookForm;
