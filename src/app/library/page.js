"use client";
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import ReadingListMenu from '../../components/ReadingListMenu'; 
import LibraryTable from '../../components/LibraryTable'; 
import Modal from '../modal-addbook/page';
import "./library.css";

const library = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-screen-lg mt-20">
      <div className="flex flex-row gap-10">
        <div className="basis-3/4 header-lib">
          <h3>LIBRARY</h3>
        </div>
        <div className="basis-1/4 library-tools">
          <button><CiSearch /></button>
          <button><CiFilter /></button>
          <button><MdOutlineSort /></button>
          <button onClick={openModal}><CiCirclePlus /></button>
        </div>
      </div>
      
      <div className="flex">
        <div className="mt-10">
          <ReadingListMenu/>
        </div>

        <div className="mt-10 ml-10">        
          <LibraryTable/>     
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default library;
