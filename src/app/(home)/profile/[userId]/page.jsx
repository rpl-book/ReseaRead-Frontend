"use client";
import ProfilePage from "@/components/ProfilePage";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";
import { useState } from "react";
import ProfileSetting from "@/components/ProfileSetting";

// import ContinueReading from "@/components/ContinueReading/";
// import NewRelease from "@/components/NewRelease/";
// import TopPicks from "@/components/TopPicks/";

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  let dataProfile = {
    name: "Cattleya Yu",
    username: "@cattyu",
    birthDate: "September 15, 1992",
    gender: "Female",
    email: "cattleyayu@gmail.com",
    password: "**********",
    imgSrc: "/prof-pic1.jpg",
    bio: "Join me on this bookish adventure as we explore diverse genres, discover hidden gems, and discuss all things book-related",
    followers: "91",
    following: "11",
    read: {
      currentRead: {
        title: "After Lives",
        imgSrc: "/cr-book1.jpg",
        writer: "Abdul Razak Gurnah",
      },
      readList: [
        {
          id: 1,
          imgSrc: "/cr-book1.jpg",
        },
        {
          id: 2,
          imgSrc: "/rl1.jpg",
        },
        {
          id: 3,
          imgSrc: "/rl2.jpg",
        },
        {
          id: 4,
          imgSrc: "/rl3.jpg",
        },
        {
          id: 5,
          imgSrc: "/rl4.jpg",
        },
        {
          id: 6,
          imgSrc: "/rl5.jpg",
        },
      ],
    },
    post: [
      {
        name: "Cattleya Yu",
        username: "@cattyu",
        imgSrc: "/prof-pic1.jpg",
        id: 1,
        date: "2023-09-15",
        postData: {
          text: "I highly recommend The Mountain Is You by Brianna Wiest! Worth to buy",
          books: null,
        },
        comments: 1,
        likes: 4,
      },
      {
        name: "Cattleya Yu",
        username: "@cattyu",
        imgSrc: "/prof-pic1.jpg",
        id: 2,
        date: "2023-09-13",
        postData: {
          text: "Discovering great books through recommendations feels like exploring a treasure trove of knowledge and inspiration~~",
          books: null,
        },
        comments: 1,
        likes: 4,
      },
    ],
  };
  const onClickButton = (data) => {
    setActiveMenu((prevData) => {
      if (prevData == data) return null;
      else return data;
    });
  };
  return (
    <main className="flex mt-4">
      {/* <div className="container mx-auto max-w-screen-lg flex"> */}
      <div className="w-1/4 flex justify-center">
        <SideBar onClickButton={onClickButton} />
      </div>
      {activeMenu === null ? (
        <>
          <div className="w-2/4">
            <ProfilePage data={dataProfile} user={true} />
          </div>
          <div className="w-1/4 flex justify-center">
            <RightBar />
          </div>
        </>
      ) : activeMenu === "Setting" ? (
        <div className="w-3/4">
          <ProfileSetting data={dataProfile} />
        </div>
      ) : (
        "On Proggress"
      )}
      {/* </div> */}
    </main>
  );
};

export default Profile;
