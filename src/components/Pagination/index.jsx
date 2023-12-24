import "./Pagination.css";
import React, { useState, useEffect } from "react";

const Pagination = ({ totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const maxVisiblePages = 7;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <div className="pagination">
      <ul>
        <li
          className={currentPage === 1 ? "disabled" : ""}
          onClick={handlePrevClick}
        >
          <p>Prev</p>
        </li>
        {renderPageNumbers()}
        <li
          className={currentPage === totalPages ? "disabled" : ""}
          onClick={handleNextClick}
        >
          <p>Next</p>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
