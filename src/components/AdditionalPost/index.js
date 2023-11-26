"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { BsChat } from "react-icons/bs";

const AdditionalPost = ({data}) => {
  return (
    <div className="space-y-4 w-full">
      {data.post.map((dt,index)=>(
        <div>
          <div key={index} className="flex justify-between bg-white p-6 rounded-xl space-x-4">
            <div className="rounded-full space-x-4">
              <Image
              className="rounded-full"
              src={data.imgSrc}
              height={60}
              width={60}
              />
            </div>
              <div className="w-full">
                <div className="flex space-x-4" >
                  <div className="text-customDefaultText font-bold text-lg">
                    {data.name}
                  </div>
                  <div className="text-customColorGray text-lg">
                    {dt.date}
                  </div>
                </div>
                <div className="mt-4 text-customDefaultText text-base">
                  {dt.postData}
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
            <div>
              <button className="text-customColorOrange">
                <BsThreeDotsVertical/>
              </button>
            </div>
          </div> 
       </div>
      ))}
    </div>
  );
};

export default AdditionalPost;
