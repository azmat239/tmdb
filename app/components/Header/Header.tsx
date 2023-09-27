import React from "react";
import Logo from "./Logo/Logo";
import Link from "./Link/NavLink";
import NavLink from "./Link/NavLink";

const Header = () => {
  return (
    <div>
      <div>
        <Logo />
        <div>
          <NavLink text="Movies" url="/" />
        </div>
      </div>

      <div className="search"></div>
    </div>
  );
};

export default Header;
