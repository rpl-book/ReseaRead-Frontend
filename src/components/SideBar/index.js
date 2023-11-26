"use client";

import { useState } from "react";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";

const SideBar = ({onClickButton}) => {
  const [activeButton,setActiveButton] = useState(null); 
  const iconMapping = {
      Timeline: <CiViewTimeline />,
      Notification: <BsBell />,
      Message: <CiMail />,
      Setting: <BsGear />,
      };
  const buttonLabel = ['Timeline','Notification','Message','Setting']
  const changeActiveButton = (label) => {
    setActiveButton((prevLabel) => {
      // console.log(activeButton,label)
      if(prevLabel == label)
      return null
      else return label
    })
    onClickButton(label)
  }
  return (
    <div>
        {buttonLabel.map((data,index)=>(
            <button key={index} className={activeButton !== data ? 
              "flex items-center w-full hover:bg-gray-300 hover:text-white font-bold py-2 px-4 rounded text-customDefaultText" : 
              "flex items-center w-full hover:bg-gray-300 bg-gray-300 hover:text-white font-bold py-2 px-4 rounded text-white"} onClick={()=>{
              changeActiveButton(data)
            }}>
                <div className='pr-6'>{iconMapping[data]}</div>
                <span>{data}</span>
            </button>
            ))}
    </div>
  );
};

export default SideBar;
