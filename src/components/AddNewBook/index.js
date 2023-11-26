import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import "./TableRow.css"; 

const AddNewBook = ({ cover, bookTitle, bookAuthor, dateAdded, readingStatus, currentPage, totalPage }) => {
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-4 py-4">
        <img src={cover} alt="Book Cover" className="w-20 h-20 object-cover rounded" />
      </td>
      <td className="px-6 py-4 text-center text-m text-black-800">{bookTitle}</td>
      <td className="px-6 py-4 text-center text-m text-black-800">{bookAuthor}</td>
      <td className="px-6 py-4 text-center text-m text-black-800">{dateAdded}</td>
      <td className="px-6 py-4 text-center text-m text-black-800">{readingStatus}</td>
      <td className="px-6 py-4 text-center text-black-800">{currentPage}/{totalPage}</td>
      
      <td className="px-5 py-3 text-center text-end text-m font-medium">
        <div className="configure">
          <button type="button" className="inline-flex items-center gap-x-2"><AiOutlineDelete /></button>
          <button type="button" className="inline-flex items-center gap-x-2 ml-5"><GoPencil /></button>
        </div>
      </td>
      
    </tr>
  );
};

export default AddNewBook;
