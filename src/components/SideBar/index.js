"use client";

import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";

const SideBar = () => {
    const iconMapping = {
        Timeline: <CiViewTimeline />,
        Notification: <BsBell />,
        Message: <CiMail />,
        Setting: <BsGear />,
        };
    const buttonLabel = ['Timeline','Notification','Message','Setting']
  return (
    <div>
        {buttonLabel.map((data,index)=>(
            <button key={index} className="flex items-center w-full hover:bg-gray-300 hover:text-white font-bold py-2 px-4 rounded text-customDefaultText">
                <div className='pr-6'>{iconMapping[data]}</div>
                <span>{data}</span>
            </button>
            ))}
    </div>
  );
};

export default SideBar;
