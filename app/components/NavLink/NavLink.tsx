import React from "react";
import Link from "next/link";
import { NavLinkType } from "./NavLink.types";
import Text from "../Text/Text";
import classNames from "classnames";

const NavLink = ({
  text,
  url,
  variant,
  subLinks,
  extraClasses,
}: NavLinkType) => {
  const NavLinkClasses = classNames("group relative");
  const NavLinkTextClasses = classNames("p-2 font-bold", {
    "text-white": variant == "Link",
    "text-black": variant == "subLink",
  });
  return (
    <div className={`${NavLinkClasses} ${extraClasses ?? ""}`}>
      <Link href={url}>
        <Text text={text} variant="14" extraClasses={NavLinkTextClasses} />
        <ul className="absolute top-8 bg-white hidden group-hover:block rounded-5 py-2 w-[160px]">
          {subLinks.map((subLink, index) => {
            return (
              <li
                key={index}
                className="py-1 px-6 hover:bg-lightGrey rounded-8 font-normal"
              >
                <Link href={subLink.url}>{subLink.text}</Link>
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default NavLink;
