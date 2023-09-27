import React from "react";
import Link from "next/link";
import { NavLinkTypes } from "./NavLink.types";
import Text from "../../Text/Text";

const NavLink = ({ text, url, extraClasses }: NavLinkTypes) => {
  return (
    <div className={`${extraClasses}`}>
      <Link href={url}>
        <Text text={text} variant="16" extraClasses="text-white p-2" />
      </Link>
    </div>
  );
};

export default NavLink;
