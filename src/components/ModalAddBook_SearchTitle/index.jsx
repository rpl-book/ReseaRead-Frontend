import React, { useState } from "react";
import "./ModalAddBook_SearchTitle.css";
import ButtonIcon from "../../components/ButtonIcon";
import Button from "../Button";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ModalAddBook_SearchTitle = ({
  closeModal,
  updateTitleValue,
  handleSearchTitle,
}) => {
  return (
    <div className="ml-4">
      <div className="mt-3 modal-hedd">
        <p className="modal-header mt-3">New Book</p>
        <button onClick={closeModal}>
          <ButtonIcon
            iconTag={<IoClose />}
            fontSize="23px"
            color="#DA5E42"
            targetPage="#"
          />
        </button>
      </div>
      <div className="modal-form">
        <div className="book-descc">
          <div className="flex ml-3 mb-5 mt-5 items-center mx-auto">
            <input
              className="focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Input title"
              onChange={(e) => updateTitleValue(e.target.value)}
            />
            <Button
              iconTag={<IoSearch />}
              color="white"
              fontSize="30"
              targetPage="#"
              handleButton={handleSearchTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddBook_SearchTitle;
