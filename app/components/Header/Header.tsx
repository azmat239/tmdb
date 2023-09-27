"use client";
import React from "react";
import Logo from "./Logo/Logo";
import Link from "./Menu/NavLink";
import MenuNav from "./Menu/MenuNav";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = ({ imgsrc, links, actionIcon }: any) => {
  return (
    <header className="flex justify-evenly  bg-darkBlue py-4">
      <div className="flex gap-2">
        <Logo ImgSrc={imgsrc} url="/" altText="image Not found" />
        <MenuNav links={links} />
      </div>

      <button onClick={() => alert("Clicked On Search")}>
        <BiSearchAlt2 className={actionIcon} />
      </button>
    </header>
  );
};

export default Header;
