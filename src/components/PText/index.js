import React from "react";
import "./PText.css";

const PTitle = ({ bookTitle, size, linktobook}) => {
  const fontSize = size ? `${size}px` : 'inherit';

  return (
    <div>
      <p className="p-title" style={{ fontSize }}>
        <a href={linktobook}>{bookTitle}</a>
      </p>
    </div>
  );
};


const PSTitle = ({bookTitle, linktobook}) => {

  return (
    <div>
      <p className="ps-title">
        <a href={linktobook}>{bookTitle}</a>
      </p>
    </div>
  );
};


const PAuthor = ({ bookAuthor, size, linktoauthor }) => {
  const fontSize = size ? `${size}px` : 'inherit';

  return (
    <div>
      <p className="p-author" style={{ fontSize }}>
        <a href={linktoauthor}>{bookAuthor}</a>
      </p>
    </div>
  );
};


const PSAuthor = ({bookAuthor, linktoauthor}) => {

  return (
    <div>
      <p className="ps-author">
        <a href={linktoauthor}>{bookAuthor}</a>
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

const PTag = ({tag1, route1, tag2, route2, tag3, route3, tag4, route4, tag5, route5}) => {
  return (
    <div>
      <p className="p-tag">
        <a href={route1}>{tag1}</a> 
        <a href={route2}>{tag2}</a> 
        <a href={route3}>{tag3}</a> 
        <a href={route4}>{tag4}</a> 
        <a href={route5}>{tag5}</a>
      </p>
    </div>
  );
};

export { PTitle, PSTitle, PSAuthor, PAuthor, PPage, PDesc, PRate, PTag};
