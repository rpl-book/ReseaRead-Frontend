"use client";

import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const NavRouteLink = ({ route, title }) => {
  return (
    <Link href={route} className="font-sans text-xl">
      {title}
    </Link>
  );
};

const NavigationBar = () => {
  return (
    <header>
      <div
        className="flex md:flex-row flex-col md:gap-20 sm:gap-4 justify-center items-center
        p-7"
      >
        <NavRouteLink route="/" title="ReseaRead" />
        <NavRouteLink route="/" title="Home" />
        <NavRouteLink route="/" title="Catalog" />
        <NavRouteLink route="/" title="Add Book" />
        <NavRouteLink route="/" title="Browse" />
        <NavRouteLink route="/" title="Login" />
        <div className="flex flex-row items-center relative">
          <input
            name=""
            type="text"
            placeholder="Book title"
            className="px-3 bg-white block pr-8"
          />
          <IconContext.Provider value={{ color: "#D27C2C" }}>
            <i>
              <BsSearch className="absolute top-1 right-2" />
            </i>
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
