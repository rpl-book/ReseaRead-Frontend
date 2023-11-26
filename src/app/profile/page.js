import ProfilePage from "@/components/ProfilePage";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";

// import ContinueReading from "@/components/ContinueReading/";
// import NewRelease from "@/components/NewRelease/";
// import TopPicks from "@/components/TopPicks/";


const Profile = () => {
  const dataProfile = {
    name:'Sopia Yu',
    username:'@sopiayu',
    imgSrc:'/com-card6.jpg',
    bio:'Join me on this bookish adventure as we explore diverse genres, discover hidden gems, and discuss all things book-related',
    followers:'100',
    following:'100',
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
          imgSrc:'/cr-book2.jpg', 
        },
        {
          id:3,
          imgSrc:'/cr-book3.jpeg', 
        },
        {
          id:4,
          imgSrc:'/tp-book1.jpg', 
        },
        {
          id:5,
          imgSrc:'/tp-book2.jpg', 
        },
      ]
    },
    post:[
      {
        id:1,
        date:'15 September 2023',
        postData:'I highly recommend The Mountain Is You by Brianna Wiest! Worth to buy',
        comments:1,
        likes:4,
      },
      {
        id:2,
        date:'13 September 2023',
        postData:'Discovering great books through recommendations feels like exploring a treasure trove of knowledge and inspiration~~',
        comments:1,
        likes:4,
      }
    ]
  }
  return (
    <main className="flex mt-4">
      {/* <div className="container mx-auto max-w-screen-lg flex"> */}
        <div className="w-1/4 flex justify-center"><SideBar/></div>
        <div className="w-2/4"><ProfilePage data={dataProfile}/></div>
        <div className="w-1/4 flex justify-center"><RightBar/></div>
      {/* </div> */}
    </main>
  );
};

export default Profile;
