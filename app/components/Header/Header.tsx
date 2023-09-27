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

      <button onClick={() => alert("Clicked On Search")}>
        <BiSearchAlt2 className="text-2xl text-lightBlue" />
      </button>
    </div>
  );
};

export default Header;
