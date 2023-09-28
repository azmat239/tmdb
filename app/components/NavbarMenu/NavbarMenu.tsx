import React from "react";
import NavLink from "../NavLink/NavLink";
import classNames from "classnames";
import { navbarMenutype } from "./NavbarMenu.types";

const NavbarMenu = ({ links, extraClasses }: navbarMenutype) => {
  let menuNavClasses = classNames("flex gap-4 px-4");
  return (
    <ul className={`${menuNavClasses} ${extraClasses ?? ""}`}>
      {links.map((links, index) => {
        return (
          <li key={index}>
            <NavLink text={links.text} url={links.url} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
