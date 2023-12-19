import React, { useState } from 'react';
import "./ModalAddBook.css";
import { RxSlash } from "react-icons/rx";
import Button from '../Button'; 


const ModalAddBook = ({ closeModal, title, currentPage, totalPage, status: initialStatus }) => {
  const [InputTitle, setTitle] = useState(title || '');
  const [InputCurrentPage, setCurrentPage] = useState(currentPage || '');
  const [InputTotalPage, setTotalPage] = useState(totalPage || '');
  const [InputStatus, setStatus] = useState(initialStatus || ''); 
                                  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCurrentPageChange = (e) => {
    setCurrentPage(e.target.value);
  };  

  const handleTotalPageChange = (e) => {
    setTotalPage(e.target.value);
  };  

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };  

  return (
    <div className="ml-8">
      <div>
        <p className="modal-header mt-3">New Book</p>
      </div>

      <div className="modal-form flex"> 
        <div className="book-imgg mt-7">
          <img src={"/img-placeholder.png"} alt="Image Placeholder" />
        </div>
        <div className="book-desc mb-5 ml-8">
          <div className="book-desc-1">
            <label className="block">Title</label>
            <input className="focus:outline-none focus:shadow-outline" type="text" placeholder="Title" value={InputTitle} onChange={handleTitleChange}/>
          </div>

          <div className="book-desc-1">
            <label className="block">Page</label>
            <div className="flex items-center input-page-date">
              <input className="focus:outline-none focus:shadow-outline" type="text" placeholder="000" value={InputCurrentPage} onChange={handleCurrentPageChange}/>
              <div><RxSlash/></div>
              <input className="focus:outline-none focus:shadow-outline" type="text" placeholder="000" value={InputTotalPage} onChange={handleTotalPageChange}/>
            </div>
          </div>

          <div className="book-desc-1">
            <label className="block">List</label>
            <select
              className="focus:outline-none focus:shadow-outline"
              value={InputStatus}
              onChange={handleStatusChange}
            >
              <option value="" disabled selected>Select Reading List</option>
              <option value="reading">Food For Thoughts</option>
              <option value="finished">...</option>
            </select>
          </div>

          <div className="book-desc-1">
            <label className="block">Status</label>
            <select
              className="focus:outline-none focus:shadow-outline"
              value={InputStatus}
              onChange={handleStatusChange}
            >
              <option value="" disabled selected>Select Status</option>
              <option value="reading">Reading</option>
              <option value="finished">Finished</option>
            </select>
          </div>
        </div>
      </div>

      <div className='mod-btnn'>
        <Button buttonName="Save" color="white" width={70} targetPage="#"/>
        <button onClick={closeModal}>
          <Button buttonName="Discard" color="white" targetPage="/library" width={70}/>
        </button>
      </div>
    </div>
  );
};

export default ModalAddBook;
