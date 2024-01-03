import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import "./TableRow.css";
import ModalDeleteBook from "../../app/(home)/modal-deletebook/page";
import ModalEditBook from "../../app/(home)/modal-editbook/page";

const NewTableRow = ({
  cover,
  bookTitle,
  bookAuthor,
  dateAdded,
  readingStatus,
  currentPage,
  totalPage,
  libraryId,
}) => {
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setModalEditOpen] = useState(false);

  const openModalDelete = () => {
    setModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setModalDeleteOpen(false);
  };

  const openModalEdit = () => {
    setModalEditOpen(true);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-200">
      <td className="items-center">
        <div className="flex justify-center items-center">
          <img src={cover} alt="Book Cover" className="h-40 py-2" />
        </div>
      </td>

      <td className=" text-center text-m text-black-800">{bookTitle}</td>
      <td className=" text-center text-m text-black-800">{bookAuthor}</td>
      <td className="text-center text-m text-black-800">{dateAdded}</td>
      <td className="text-center text-m text-black-800">{readingStatus}</td>
      <td className="text-center text-black-800">
        {currentPage}/{totalPage}
      </td>

      <td className="text-center text-m font-medium">
        <div className="configure">
          <button
            type="button"
            className="inline-flex items-center gap-x-2"
            onClick={openModalDelete}
          >
            <AiOutlineDelete />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 ml-5"
            onClick={openModalEdit}
          >
            <GoPencil />
          </button>
        </div>
      </td>

      {isModalDeleteOpen && (
        <ModalDeleteBook
          closeModalDelete={closeModalDelete}
          libraryId={libraryId}
        />
      )}
      {isModalEditOpen && (
        <ModalEditBook closeModalEdit={closeModalEdit} libraryId={libraryId} />
      )}
    </tr>
  );
};

export default NewTableRow;
