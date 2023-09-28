import React from "react";
import Link from "next/link";
import { NavLinkType } from "./NavLink.types";
import Text from "../Text/Text";

const NavLink = ({ text, url, extraClasses }: NavLinkType) => {
  return (
    <Link href={url} className={`${extraClasses ?? ""}`}>
      <Text text={text} variant="14" extraClasses="text-white p-2" />
    </Link>
  );
};

export default NavLink;
