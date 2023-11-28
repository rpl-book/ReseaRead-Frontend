"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { useState } from "react";
import Button from "../Button";

const ProfileSetting = ({data}) => {
  const [name,setName] = useState(data.name)
  const [activeButton,setActiveButton] = useState('Account')
  const label = ['Account','Notification','Privacy','Languages','Help']
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="w-full bg-white rounded-xl">
      <div className="flex text-[20px] w-full h-[12%]">
        {label.map((dt,index)=>(
        <button className={index===0 ? 
          ("w-full px-10 py-5 hover:bg-customGrayButton hover:text-white text-customDefaultText rounded-tl-xl "+(activeButton === dt ? " bg-customGrayButton text-white" : "")) :
          index===(label.length-1) ? 
          ("w-full px-10 py-5 hover:bg-customGrayButton hover:text-white text-customDefaultText rounded-tr-xl "+(activeButton === dt ? " bg-customGrayButton text-white" : "")) :
          ("w-full px-10 py-5 hover:bg-customGrayButton hover:text-white text-customDefaultText"+(activeButton === dt ? " bg-customGrayButton text-white" : ""))
        } 
        onClick={()=>{
          setActiveButton(dt)
        }}>
          {dt}
        </button>
        ))}
      </div>
      {activeButton === 'Account' ? 
      <div className="flex h-[88%]">
        <div className="flex w-1/4 items-start justify-center pt-16">
          <Image
            src={data.imgSrc}
            width={130}
            height={130}
          />
        </div>
        <div className="w-3/4 pt-16">
          <form action="#">
          <div className="grid grid-cols-2 text-customDefaultText">
            <div className="pt-4 pb-4">
              Name
            </div>
            <input className="pt-4 pb-4" value={name} type="text" onChange={handleInputChange}/>
              {/* {data.name} */}
            {/* </div> */}
            <div className="pt-4 pb-4">
              Date of Birth
            </div>
            <div className="pt-4 pb-4">
              {data.birthDate}
            </div>
            <div className="pt-4 pb-4">
              Gender
            </div>
            <select className="pt-4 pb-4">
              <option>Female</option>
              <option>Male</option>
            </select>
            {/* <div className="pt-4 pb-4"> */}
              {/* {data.gender} */}
            {/* </div> */}
            <div className="pt-4 pb-4">
              Email
            </div>
            <div className="pt-4 pb-4">
              {data.email}
            </div>
          </div>
          </form>
          <div className="pt-8 pb-4 text-customDefaultText font-bold">
            Account Info
          </div>
          <div className="grid grid-cols-2 text-customDefaultText">
            <div className="pt-4 pb-4">
              Username
            </div>
            <div className="pt-4 pb-4">
              {data.username}
            </div>
            <div className="pt-4 pb-4">
              Password
            </div>
            <div className="pt-4 pb-4">
              {data.password}
            </div>
          </div>
          <div className="flex w-full justify-end pr-8 pb-8">
            <Button iconTag={null} buttonName={'Save'} fontSize={12} color={'white'} targetPage={"#"}/>
          </div>
        </div>
      </div>
      :
      <div className="flex h-96 justify-center items-center text-4xl">
        We're On Proggress
      </div>
      }
      {/* {data.post.map((dt,index)=>(
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
      ))} */}
    </div>
  );
};

export default ProfileSetting;
