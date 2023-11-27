"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import Button from "../Button";

const PublicReadList = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-3">
        {
          data.map((dt,index)=>(
            <div key={'publicread_'+index} className="flex flex-col justify-start">
              <div className="mt-4">
                <ul className="relative h-[274px]">
                  {dt.books.map((data,index)=>(
                    index < 6 && <li key={'list_'+index} className="absolute" style={{ left: `${index * 20}px` }}>
                      <Image 
                        className="rounded-xl inset-0"
                        src={data.imgSrc}
                        width={150}
                        height={217}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-xl font-bold text-customColorOrange ">
                {dt.group}
              </div>
              <div className="mt-2 text-base text-customDefaultText">
                {dt.books.length} Books
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center m-8">
        <Button buttonName="See More" size="20" color="white" targetPage="#" />
      </div>
    </div>
  );
};

export default PublicReadList;
