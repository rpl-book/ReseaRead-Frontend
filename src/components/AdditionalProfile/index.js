"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const AdditionalProfile = ({data}) => {
  return (
    <div className="flex justify-around text-lg ">
      <div>
        <div className="border-b w-[190px] border-b-gray-300"> 
          Currently Reading
        </div>
        <div className="mt-4 space-y-4">
          <Image 
            className="rounded-xl"
            src={data.currentRead.imgSrc}
            width={95}
            height={120}
          />
          <div className="w-8/12 text-lg text-customDefaultText">
            {data.currentRead.title}
          </div>
          <div className="w-8/12 text-base text-customColorOrange">
            {data.currentRead.writer}
          </div>
          <div className="w-8/12 text-sm color text-customColorOrange">
            <Link href={'#'}> See More </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="border-b w-[190px] border-b-gray-300"> 
          Reading List
        </div>
        <div className="mt-4 space-y-4">
          <ul className="relative h-[150px]">
            {data.readList.map((data,index)=>(
              <li key={'list_'+index} className="absolute" style={{ left: `${index * 20}px` }}>
                <Image 
                  className="rounded-xl inset-0"
                  src={data.imgSrc}
                  width={95}
                  height={120}
                />
              </li>
            ))}
          </ul>
          <div className="w-10/12 text-base text-customColorOrange">
            Food for Thoughts
          </div>
          <div className="w-8/12 text-base text-customDefaultText">
            {data.readList.length} Books
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalProfile;
