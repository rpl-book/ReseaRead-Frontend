import React from "react";
import "./PText.css";

const PTitle = ({bookTitle}) => {

  return (
    <div>
      <p className="p-title">
        <a href="#">{bookTitle}</a>
      </p>
    </div>
  );
};


const PSTitle = ({bookTitle}) => {

  return (
    <div>
      <p className="ps-title">
        <a href="#">{bookTitle}</a>
      </p>
    </div>
  );
};


const PAuthor = ({bookAuthor}) => {

  return (
    <div>
      <p className="p-author">
        <a href="#">{bookAuthor}</a>
      </p>
    </div>
  );
};

const PSAuthor = ({bookAuthor}) => {

  return (
    <div>
      <p className="ps-author">
        <a href="#">{bookAuthor}</a>
      </p>
    </div>
  );
};

const PPage = ({ currentPage, totalPage }) => {
  return (
    <div>
      <p className="p-page">Page {currentPage}/{totalPage}</p>
    </div>
  );
};

const PRate = ({ rate }) => {
  return (
    <div>
      <p className="p-page"> {rate}</p>
    </div>
  );
};


const PDesc = ({desc}) => {
  return (
    <div>
      <p className="p-desc">{desc}</p>
    </div>
  );
};


export { PTitle, PSTitle, PSAuthor, PAuthor, PPage, PDesc, PRate};
