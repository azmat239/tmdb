import React from "react";
import Logo from "./Logo/Logo";
import Link from "./Menu/NavLink";
import MenuNav from "./Menu/MenuNav";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-evenly  bg-darkBlue py-4">
      <div className="flex gap-2">
        <Logo />
        <MenuNav />
      </div>

      <a href="#" className="search ">
        <BiSearchAlt2 className="text-2xl text-lightBlue" />
      </a>
    </div>
  );
};

export default Header;
