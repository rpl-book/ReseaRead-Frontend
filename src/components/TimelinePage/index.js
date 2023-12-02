"use client";

import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import AdditionalProfile from "../AdditionalProfile";
import TimelinePost from "../TimelinePost";
import NewPost from "../NewPost";
import { useEffect, useState } from "react";

const TimelinePage = ({data,otherData}) => {
  // const [newPost,setNewPost] = useState(null)
  const [dataPost,setDataPost] = useState([...data.post, ...otherData])

  return (
    <div>
      <div className="flex items-center">
        <NewPost data={data} setDataPost={setDataPost}/>
      </div>
      <div className=" mt-8 border-2">
      </div>
      <div className="flex items-center mt-8">
        <TimelinePost data={dataPost} dataUser={data.username} setDataPost={setDataPost}/>
      </div>
    </div>
  );
};

export default TimelinePage;
