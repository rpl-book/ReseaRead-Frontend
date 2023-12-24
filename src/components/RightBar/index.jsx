import Image from "next/image";
import "./style.css";
import { BsBell, BsGear } from "react-icons/bs";
import { CiViewTimeline, CiMail } from "react-icons/ci";

const RightBar = () => {
  const knownAuthor = [
    {
      id: 1,
      imgSrc: "/robert.jpg",
      name: "Robert Seethaler",
      username: "@Robertseethaler",
    },
    {
      id: 2,
      imgSrc: "/brianna.jpg",
      name: "Brianna Wiest",
      username: "@BriannaWiest",
    },
    {
      id: 3,
      imgSrc: "/brit.jpg",
      name: "Brit Bennett",
      username: "@BritBennett",
    },
  ];
  const bookTrend = [
    {
      id: 1,
      imgSrc: "/tr1.jpg",
    },
    {
      id: 2,
      imgSrc: "/tr2.jpg",
    },
    {
      id: 3,
      imgSrc: "/tr3.jpg",
    },
    {
      id: 4,
      imgSrc: "/tr4.jpg",
    },
    {
      id: 5,
      imgSrc: "/tr5.jpg",
    },
    {
      id: 6,
      imgSrc: "/tr6.jpg",
    },
  ];
  return (
    <div>
      <div className="w-[285px] border-b-2 mb-8">Author's You Might Know</div>
      {knownAuthor.map((dt, index) => (
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
            <div>{dt.name}</div>
            <div className="text-customColorGray">{dt.username}</div>
          </div>
        </div>
      ))}
      <div className="w-[285px] border-b-2 mb-8 mt-8">2023 Trends</div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {bookTrend.map((dt, index) => (
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
