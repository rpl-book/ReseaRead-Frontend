"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import AdditionalProfile from "../AdditionalProfile";
import AdditionalPost from "../AdditionalPost";

const ProfilePage = ({data}) => {
  return (
    <div>
      <div className="p-4 h-[160px] mb-[10%] customGrad">
        <div className="flex justify-end items-center ">
          <button className="customBgButton">
            <BsThreeDotsVertical/>
          </button>
        </div>
        <div className="relative top-[20%] ">
          <div className=" border-4 border-white rounded-full w-40 h-40 flex flex-nowrap items-center">
            <Image 
              className="rounded-full"
              src={data.imgSrc}
              alt="Profile pic"
              height={159}
              width={159}
            />
          </div>
      </div>
      </div>
      <div className="p-6">
        <p className="font-bold text-xl">{data.name}</p>
        <p className="text-xs text-customColorGray">{data.username}</p>
        <p className="pt-4 text-lg text-customDefaultText">{data.bio}</p>
        <div className="flex text-customColorOrange space-x-4 mt-4"  >
          <div><Link href='#'>{data.followers} Followers</Link></div>
          <div><Link href='#'>{data.following} Following</Link></div>
        </div>
      </div>
      <div className="p-8 mt-6">
        <AdditionalProfile data={data.read}/>
      </div>
      <div className="flex items-center">
        <div className="w-8/12 px-4">
          <div className="border-2">
          </div>
        </div>
        <div className="w-4/12 text-customColorOrange">
          <button className="flex items-center space-x-4">
            <BsFillPlusCircleFill className="text-4xl"/>
            <span> Add New Post </span>
          </button>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <AdditionalPost data={data}/>
      </div>
    </div>
  );
};

export default ProfilePage;
