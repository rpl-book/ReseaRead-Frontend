import "./ModalAddNewReadinglist.css";
import React, { useState } from 'react';


const ModalAddNewBookForm = ({}) => {
                            
  return (
    <div className="mt-5\3">
        <div className="flex">
            <div class="bookimg mt-5">
                    <img src={"/img-placeholder.png"} alt="Image Placeholder" />
            </div>

            <div className="bookdesc ml-9">
                <div class="book-desc-2">
                    <label class="block">List Name</label>
                    <input class="focus:outline-none focus:shadow-outline" type="text" placeholder="Title"/>
                </div>

                <div class="book-desc-2">
                    <label class="block">Image URL</label>
                    <input class="focus:outline-none focus:shadow-outline" type="text" placeholder="Title"/>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ModalAddNewBookForm;
