"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsTag } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

import Button from "../Button";

const Trending = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-10 grid-flow-row-dense">
        {
          data.map((dt,index)=>(
            <div key={'trending_'+index} className="flex flex-col ">
              <div className="mt-4 relative h-[292px] rounded-xl">
                <Image
                  className="rounded-xl "
                  src={dt.imgSrc}
                  alt={dt.title}
                  fill
                  objectFit="cover"
                />
              </div>
                <div className="mt-4 text-xl font-bold ">
                  {dt.title}
                </div>
                <div className="mt-2 text-base text-customColorOrange">
                  {dt.writer}
                </div>
                <div className="mt-2 flex items-center justify-between text-sm font-bold">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, idx) => (
                      idx < Math.round(dt.rating) ? 
                      <span className="text-customColorOrange">
                        <BsStarFill/>
                      </span> : 
                      <span className="text-customColorGray">
                        <BsStar/>
                      </span> 
                    ))}
                  </div>
                  <div>
                    {dt.rating}
                  </div>
                </div>
                <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
                  <div>
                    <BsTag/>
                  </div> 
                  <div>
                    {dt.category}
                  </div>
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

export default Trending;
