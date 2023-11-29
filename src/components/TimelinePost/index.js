"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear, BsStar, BsStarFill, BsTag } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { useEffect, useState } from "react";
import Button from "../Button";

const TimelinePost = ({data,dataUser,setDataPost}) => {
  
  let sortedDataPost = data.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
  const [newData,setNewData] = useState(sortedDataPost)
  const [dropdownStates, setDropdownStates] = useState(newData.map(() => false));
  
  const [deleteIndex, setDeleteIndex] = useState(null); // Track the index to delete
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDeleteIndex(null);
    setIsModalOpen(false);
  };

  const deleteItem = () => {
    if (deleteIndex !== null) {
      setNewData((prevData) => 
        {
          // prevData.filter((_, i) => i !== deleteIndex)
          setDataPost(prevData.filter((_, i) => i !== deleteIndex))
          return prevData.filter((_, i) => i !== deleteIndex)
        }
      );
      // setDataPost((prevData) => {
      //   prevData.sort((a, b) => new Date(b.date) - new Date(a.date))
      //   prevData.filter((_, i) => i !== deleteIndex)
      // })
      closeModal(); 
    }
  };

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  
  
  useEffect(()=>{
    setNewData(data.slice().sort((a, b) => new Date(b.date) - new Date(a.date)))
  },[data])

  return (
    <>
    <div className="space-y-4 w-full">
      {newData.map((dt,index)=>(
        <div>
          <div key={index} className="flex justify-between bg-white p-6 rounded-xl space-x-4">
            <div className="rounded-full space-x-4">
              <Image
              className="rounded-full"
              src={dt.imgSrc}
              height={60}
              width={60}
              />
            </div>
              <div className="w-full">
                <div className="flex space-x-4" >
                  <div className="text-customDefaultText font-bold text-lg">
                    {dt.name}
                  </div>
                  <div className="text-customColorGray text-lg">
                    {dt.date}
                  </div>
                </div>
                <div className="mt-4 text-customDefaultText text-base">
                  {dt.postData.text}
                  {dt.postData.books && 
                    <div>
                      <div className="flex space-x-6 p-4 rounded-lg backdrop-brightness-95">
                        <div className="relative h-[140px] w-[100px] rounded-xl">
                          <Image
                            className="rounded-xl "
                            src={dt.postData.books.imgSrc}
                            alt={dt.postData.books.title}
                            fill
                            objectFit="cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div className="mt-4 h-1/6 text-xl font-bold ">
                            {dt.postData.books.title}
                          </div>
                          <div className="mt-2 text-base text-customColorOrange">
                            {dt.postData.books.writer}
                          </div>
                          <div className="mt-2 flex items-center justify-between text-sm font-bold">
                            <div className="flex">
                              {Array.from({ length: 5 }, (_, idx) => (
                                idx < Math.round(dt.postData.books.rating) ? 
                                <span className="text-customColorOrange">
                                  <BsStarFill/>
                                </span> : 
                                <span className="text-customColorGray">
                                  <BsStar/>
                                </span> 
                              ))}
                            </div>
                            <div>
                              {dt.postData.books.rating}
                            </div>
                          </div>
                          <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
                            <div>
                              <BsTag/>
                            </div> 
                            <div>
                              {dt.postData.books.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="flex items-center space-x-4 mt-4 text-customColorGray">
                  <button className="flex items-center space-x-2">
                    <BsHeart/>
                    <span>{dt.likes}</span>
                  </button>
                  <button className="flex items-center space-x-4">
                    <BsChat/>
                    <span>{dt.comments}</span>
                  </button>
                </div>
              </div>
              {dataUser === dt.username &&
              <div className="relative">
                <button className="text-customColorOrange" onClick={()=>{
                  toggleDropdown(index)}}>
                  <BsThreeDotsVertical/>
                </button>
                {dropdownStates[index] && (
                  <div className="bg-white rounded-md absolute w-[140px] border-2 py-4 border-black outline-2 dropdown-content right-0">
                    <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2" onClick={()=>{
                      openModal(index)
                      toggleDropdown(index)
                    }} >Delete</div>
                    <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2" >Edit</div>
                  </div>
                )}
              </div>
              }
          </div> 
       </div>
      ))}
    </div>
    {isModalOpen && (
      // <div className="modal">
      //   <div className="modal-content">
      //     <p>Are you sure you want to delete this item?</p>
      //     <button onClick={deleteItem}>Yes</button>
      //     <button onClick={closeModal}>No</button>
      //   </div>
      // </div>
      <div className="fixed top-0 left-0 m-0 w-full h-full flex items-center justify-center backdrop-brightness-50">
        <div className="w-5/12 bg-white rounded-xl flex flex-col items-center justify-center mb-96 p-12">
          <p className="text-customDefaultText text-xl">Are you sure you want to delete this item?</p>
          <div className="flex w-4/12 justify-around mt-8">  
            <div onClick={closeModal}><Button targetPage={'#'} buttonName={'No '} fontSize={14} /></div>
            <div onClick={deleteItem}><Button targetPage={'#'} buttonName={'Yes'} fontSize={14} /></div>
          </div>
        </div>  
      </div>
    )}
    </>
  );
};

export default TimelinePost;
