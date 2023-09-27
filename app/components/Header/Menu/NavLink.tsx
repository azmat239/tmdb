import React from "react";
import Link from "next/link";
import { NavLinkTypes } from "./NavLink.types";
import Text from "../../Text/Text";

const NavLink = ({ text, url, extraClasses }: NavLinkTypes) => {
  return (
    <Link href={url} className={`${extraClasses}`}>
      <Text text={text} variant="16" extraClasses="text-white p-2" />
    </Link>
  );
};

export default NavLink;
