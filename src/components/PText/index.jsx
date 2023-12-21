import React from "react";
import "./PText.css";
import Link from "next/link";

const PTitle = ({ bookTitle, size, linktobook }) => {
  const fontSize = size ? `${size}px` : "inherit";

  return (
    <div>
      <p className="p-title" style={{ fontSize }}>
        <a href={linktobook}>{bookTitle}</a>
      </p>
    </div>
  );
};

const PSTitle = ({ bookTitle, linkToBook }) => {
  return (
    <div>
      <p className="ps-title">
        <Link href={`/book/${linkToBook}`}>{bookTitle}</Link>
      </p>
    </div>
  );
};

const PAuthor = ({ bookAuthor, size, linktoauthor }) => {
  const fontSize = size ? `${size}px` : "inherit";

  return (
    <div>
      <p className="p-author" style={{ fontSize }}>
        <a href={linktoauthor}>{bookAuthor}</a>
      </p>
    </div>
  );
};

const PSAuthor = ({ bookAuthor, linktoauthor }) => {
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
      <p className="p-page">
        Page {currentPage}/{totalPage}
      </p>
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

const PDesc = ({ desc }) => {
  return (
    <div>
      <p className="p-desc">{desc}</p>
    </div>
  );
};

const PTag = ({ tags }) => {
  return (
    <div>
      <p className="p-tag">
        {tags.map((tag, index) => (
          <a key={index} href={tag.route}>
            {tag.name}
          </a>
        ))}
      </p>
    </div>
  );
};

export { PTitle, PSTitle, PSAuthor, PAuthor, PPage, PDesc, PRate, PTag };
