import React from "react";
import NavLink from "./NavLink";

export type MenuType = {
  text: string;
  url: string;
};

export type MenutypeMain = {
  links: Array<MenuType>;
};

const MenuNav = ({ links }: MenutypeMain) => {
  return (
    <ul className="flex gap-4 mr-24 ">
      {links.map((links) => {
        return (
          <li>
            <NavLink text={links.text} url={links.url} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuNav;
