'use client'
import ProfilePage from "@/components/ProfilePage";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";
import { useState } from "react";
import ProfileSetting from "@/components/ProfileSetting";
import { useRouter } from "next/navigation";

// import ContinueReading from "@/components/ContinueReading/";
// import NewRelease from "@/components/NewRelease/";
// import TopPicks from "@/components/TopPicks/";


const Profile = () => {
  const [activeMenu,setActiveMenu] = useState(null)
  const router = useRouter()
  let dataProfile = {
    name:'Alexis Kim',
    username:'@lexxK',
    birthDate:'1992-09-15',
    gender:'Female',
    email:'cattleyayu@gmail.com',
    password:'asdfghjklqwe123',
    imgSrc:'/prof-pic2.png',
    bio:'Books enthu',
    followers:'91',
    following:'11',
    read:{
      currentRead:{
        title:'After Lives',
        imgSrc:'/cr-book1.jpg',
        writer:'Abdul Razak Gurnah',
      },
      readList:[
        {
          id:1,
          imgSrc:'/cr-book1.jpg', 
        },
        {
          id:2,
          imgSrc:'/rl1.jpg', 
        },
        {
          id:3,
          imgSrc:'/rl2.jpg', 
        },
        {
          id:4,
          imgSrc:'/rl3.jpg', 
        },
        {
          id:5,
          imgSrc:'/rl4.jpg', 
        },
        {
          id:6,
          imgSrc:'/rl5.jpg', 
        }
      ]
    },
    post:[
      {
        id:1,
        name:'Alexis Kim',
        imgSrc:'/prof-pic2.png',
        username:'@lexxK',
        date:'2023-11-28',
        postData:{
          text:'Hello Friends, just started to read this amazing book.. !',
          books:{
            id:2,
            title:'Happily Never After',
            writer:'Lynn Painter',
            rating:4.3,
            category:'Romance, Citypop',
            imgSrc:'/trend2.jpg'
          }
        },
        comments:1,
        likes:4,
      },
    ]
  }
  const onClickButton = (data) => {
    setActiveMenu((prevData)=>{
      if(prevData == data) 
        return null
      else
        return data
    })
  }
  return (
    <main className="flex mt-4">
      {/* <div className="container mx-auto max-w-screen-lg flex"> */}
        <div className="w-1/4 flex justify-center"><SideBar onClickButton={onClickButton}/></div>
        {activeMenu === null ?
        <>
          <div className="w-2/4">
            <ProfilePage data={dataProfile}/> 
          </div>
          <div className="w-1/4 flex justify-center"><RightBar/></div>
        </>
        : activeMenu === 'Timeline' ? router.push('/timeline') 
        : "On Proggress" }
      {/* </div> */}
    </main>
  );
};

export default Profile;
