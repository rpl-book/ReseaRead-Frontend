"use client";
import "./modal-loadingpage.css";
import LoadingSpinner from '../../components/LoadingSpinner';

const Modal = ({}) => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <LoadingSpinner></LoadingSpinner>
      </div>
    </div>
  );
};

export default Modal;
