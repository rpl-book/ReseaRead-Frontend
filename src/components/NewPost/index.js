"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { BsAt } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import Button from "../Button";
import { useState } from "react";

const NewPost = ({data,setDataPost}) => {
  const [postData,setPostData] = useState(null)
  
  const handleChange = (event) =>{
    setPostData(event.target.value)
  } 

  const handlePost = () =>{
    if(postData){
      const currentDate = new Date()
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Note: Month is zero-based, so we add 1
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const post = {
        id:Math.round(Math.random(5)*100),
        username:data.username,
        name:data.name,
        postData:{
          text:postData,
          books:null
        },
        likes:0,
        comments:0,
        imgSrc:data.imgSrc,
        // date:currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate()
        date:`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      }
      setDataPost(prevData => [...prevData, post])
      setPostData('')
    }
  }

  return (
    <div className="space-y-4 w-full bg-white p-6 rounded-xl ">
      <div className="flex justify-between space-x-4 h-[200px]">
        <div className="rounded-full space-x-4">
          <Image
          className="rounded-full"
          src={data.imgSrc}
          height={60}
          width={60}
          />
        </div>
          {/* <div className="text-customDefaultText text-base h-full w-full"> */}
            <textarea className="w-full h-full resize-none outline-none text-customDefaultText text-base" placeholder="Write your thoughts ..." value={postData} onChange={handleChange}/>
          {/* </div> */}
      </div> 
      <div className="flex justify-between items-center m-8">
        <div className="flex justify-between items-center w-2/12 text-customColorOrange text-xl">
          <BsCamera className="cursor-pointer"/>
          <BsAt className="cursor-pointer"/>
          <IoMdAttach className="cursor-pointer"/>
        </div>
        <div className="w-8/12 flex justify-end" onClick={()=>handlePost()}>
          <Button buttonName={'POST'} targetPage={'#'} color={'white'} fontSize={12} />
        </div>
      </div>
    </div>
  );
};

export default NewPost;
