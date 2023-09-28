import React from "react";
import Logo from "../Logo/Logo";
import classNames from "classnames";
import { HeaderType } from "./Header.types";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Header = ({ logo, links, ActionIcon, extraClasses }: HeaderType) => {
  let HeaderClass = classNames("flex justify-evenly  bg-darkBlue py-4");
  return (
    <header className={`${HeaderClass} ${extraClasses ?? ""}`}>
      <div className="flex gap-2">
        <Logo imgSrc={logo.imgSrc} url={logo.url} altText={logo.altText} />
        <NavbarMenu links={links} />
      </div>

      <button>
        <ActionIcon className="text-lightBlue" />
      </button>
    </header>
  );
};

export default Header;
