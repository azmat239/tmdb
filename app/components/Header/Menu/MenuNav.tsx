import React from "react";
import NavLink from "./NavLink";

const MenuNav = () => {
  return (
    <div className="flex gap-4 mr-24 ">
      <NavLink text="Movies" url="/" />
      <NavLink text="Tv Shows" url="/" />
      <NavLink text="Profile" url="/" />
      <NavLink text="More" url="/" />
    </div>
  );
};

export default MenuNav;
