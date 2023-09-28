import React from "react";
import Logo from "../Logo/Logo";
import classNames from "classnames";
import { HeaderType } from "./Header.types";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Header = ({ logo, links, ActionIcon, extraClasses }: HeaderType) => {
  let HeaderClass = classNames("text-2xl text-lightBlue");
  return (
    <header className="flex justify-evenly  bg-darkBlue py-4">
      <div className="flex gap-2">
        <Logo logo={logo} />
        <NavbarMenu links={links} />
      </div>

      <button>
        <ActionIcon className={`${HeaderClass} ${extraClasses ?? ""}`} />
      </button>
    </header>
  );
};

export default Header;
