import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RightBar = () => {
  const knownAuthor = [
    {
      id:1,
      imgSrc:'/robert.jpg',
      name:'Robert Seethaler',
      username:'@Robertseethaler'
    },
    {
      id:2,
      imgSrc:'/brianna.jpg',
      name:'Brianna Wiest',
      username:'@BriannaWiest'
    },
    {
      id:3,
      imgSrc:'/brit.jpg',
      name:'Brit Bennett',
      username:'@BritBennett'
    }
  ]
  const bookTrend = [
    {
      id:1,
      imgSrc:'/tr1.jpg'
    },
    {
      id:2,
      imgSrc:'/tr2.jpg'
    },
    {
      id:3,
      imgSrc:'/tr3.jpg'
    },
    {
      id:4,
      imgSrc:'/tr4.jpg'
    },
    {
      id:5,
      imgSrc:'/tr5.jpg'
    },
    {
      id:6,
      imgSrc:'/tr6.jpg'
    },
  ]
  const searchData = [
    {
      id:1,
      username:'@lexxK',
      name:'Alexis Kim',
      imgSrc:'/prof-pic2.png'
    },
    {
      id:2,
      username:'@lexard',
      name:'Alicia',
      imgSrc:'/prof-pic3.png'
    }
  ]
  const [search,setSearch] = useState(null)
  const filteredData = searchData.filter((item) => item.username.includes(search));
  const router = useRouter()
  return (
    <div className="relative">
      <div className="mb-8" >
        <form className={!search?"search-bar m-0 w-full ":"search-bar m-0 w-full border-2 border-customColorOrange"}>
          <input type="text" placeholder="Search for.." value={search} onChange={(event)=>{
            setSearch(event.target.value)
          }} />
          <button type="submit">
            <Image src="/icon-search.png" alt="icon-search" width={20} height={20} />
          </button>
        </form>
        {search && 
          <div className="absolute z-10 mt-2 p-4 bg-white w-full rounded-xl space-y-4 border-customColorOrange border-2">
            {filteredData.length > 0 ? filteredData.map((dt,index)=>(
              <div key={'searchData_'+index} className="flex space-x-2 items-center cursor-pointer" onClick={()=>{
                router.push('/examplealex')
              }}>
                <div>
                  <Image className="rounded-full border-2 border-white"
                    src={dt.imgSrc}
                    alt={dt.imgSrc}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-col items-center">
                  <div>{dt.name}</div>
                  <div className="text-customColorGray">{dt.username}</div>
                </div>
              </div>
            )) :
            <div  className="flex mt-2 mb-2">
              User Not Found!
            </div>
          }
          </div>
        }
      </div>
      <div className="w-[285px] border-b-2 mb-8 mt-8">
        Author's You Might Know
      </div>
      {knownAuthor.map((dt,index)=>(
        <div className="flex pt-3 pb-3 items-center">
          <div>
            <Image
              className="rounded-full"
              src={dt.imgSrc}
              width={68}
              height={68}
            />
          </div>
          <div className="pl-4 flex-row justify-center">
            <div>
              {dt.name}
            </div>
            <div className="text-customColorGray">
              {dt.username}
            </div>
          </div>
        </div>
      ))}
      <div className="w-[285px] border-b-2 mb-8 mt-8">
        2023 Trends
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {bookTrend.map((dt,index)=>(
          <div>
            <Image
              className="rounded-xl cursor-pointer"
              src={dt.imgSrc}
              alt={dt.id}
              width={79}
              height={125}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default RightBar;
