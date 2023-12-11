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
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-4 py-4">
        <img
          src={cover}
          alt="Book Cover"
          className="w-20 h-20 object-cover rounded"
        />
      </td>

      <td className="px-6 py-4 text-center text-m text-black-800">
        {bookTitle}
      </td>
      <td className="px-6 py-4 text-center text-m text-black-800">
        {bookAuthor}
      </td>
      <td className="px-6 py-4 text-center text-m text-black-800">
        {dateAdded}
      </td>
      <td className="px-6 py-4 text-center text-m text-black-800">
        {readingStatus}
      </td>
      <td className="px-6 py-4 text-center text-black-800">
        {currentPage}/{totalPage}
      </td>

      <td className="px-5 py-3 text-center text-m font-medium">
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
        <ModalDeleteBook closeModalDelete={closeModalDelete} />
      )}
      {isModalEditOpen && <ModalEditBook closeModalEdit={closeModalEdit} />}
    </tr>
  );
};

export default NewTableRow;
