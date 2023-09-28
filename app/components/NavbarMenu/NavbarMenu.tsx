import React from "react";
import NavLink from "../NavLink/NavLink";
import { MenutypeMain } from "./NavbarMenu.types";
import classNames from "classnames";

const MenuNav = ({ links, extraClasses }: MenutypeMain) => {
  let MenuNavClasses = classNames("flex mr-24");
  return (
    <ul className={`${MenuNavClasses} ${extraClasses ?? ""}`}>
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

export default MenuNav;
