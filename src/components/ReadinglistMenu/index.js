"use client";
import React, { useState } from 'react';
import Line from "../Line";
import NewReadingList from "../NewReadingList";
import "./ReadingListMenu.css";
import ModalNewReadinglist from '../../app/modal-newReadinglist/page'; 

const ReadingListMenu = () => {
  const [isModalNewReadinglistOpen, setModalNewReadinglistOpen] = useState(false);

  const openModalNewReadinglist = () => {
    setModalNewReadinglistOpen(true);
  };

  const closeModalNewReadinglist = () => {
    setModalNewReadinglistOpen(false);
  };

  return (
    <div>
       <p className="pl-1 reading-list font-bold">Reading List</p>
        <div className="divider"></div>
        <div className="lib-readinglist mt-3">
            <NewReadingList readingListName={"All"} route={"#"}/>
            <NewReadingList readingListName={"Reading"} route={"#"}/>
            <NewReadingList readingListName={"Want To Read"} route={"#"}/>
            <NewReadingList readingListName={"Finished"} route={"#"}/>
           
            <div className="mt-5 mb-5"> <Line width="100px" height="0.5px" color="black" /> </div>
            <NewReadingList readingListName={"Food For Thoughts"} route={"#"}/>
            <button onClick={openModalNewReadinglist}>
              <div className="add-new-list"><NewReadingList readingListName={"Add New List"} route={"#"}/></div>
            </button>
          </div>
          {isModalNewReadinglistOpen && <ModalNewReadinglist closeModalNewReadinglist={closeModalNewReadinglist} />}
    </div>
  );
};

export default ReadingListMenu;
