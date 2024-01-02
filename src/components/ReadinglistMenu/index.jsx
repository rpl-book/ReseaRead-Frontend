"use client";
import React, { useState } from "react";
import Line from "../Line";
import NewReadingList from "../NewReadingList";
import "./ReadingListMenu.css";
import ModalNewReadinglist from "../../app/(home)/modal-newReadinglist/page";

const ReadingListMenu = ({ setStatus }) => {
  const [isModalNewReadinglistOpen, setModalNewReadinglistOpen] =
    useState(false);

  const openModalNewReadinglist = () => {
    setModalNewReadinglistOpen(true);
  };

  const closeModalNewReadinglist = () => {
    setModalNewReadinglistOpen(false);
  };

  const handleReadingListClick = (statusType) => {
    setStatus(statusType);
  };

  return (
    <div>
      <p className="pl-1 reading-list font-bold">Reading List</p>
      <div className="divider"></div>
      <div className="lib-readinglist mt-3">
        <NewReadingList
          readingListName={"All"}
          onUpdateTable={handleReadingListClick}
        />
        <NewReadingList
          readingListName={"Reading"}
          onUpdateTable={handleReadingListClick}
        />
        <NewReadingList
          readingListName={"Want To Read"}
          onUpdateTable={handleReadingListClick}
        />
        <NewReadingList
          readingListName={"Finished"}
          onUpdateTable={handleReadingListClick}
        />

        <div className="">
          <Line width="100px" height="0.5px" color="black" />{" "}
        </div>
        <NewReadingList readingListName={"Food For Thoughts"} />
        <button onClick={openModalNewReadinglist}>
          <div className="add-new-list">
            <NewReadingList readingListName={"Add New List"} />
          </div>
        </button>
      </div>
      {isModalNewReadinglistOpen && (
        <ModalNewReadinglist
          closeModalNewReadinglist={closeModalNewReadinglist}
        />
      )}
    </div>
  );
};

export default ReadingListMenu;
