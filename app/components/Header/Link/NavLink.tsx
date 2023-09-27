import React from "react";
import Link from "next/link";
import { NavLinkTypes } from "./NavLink.types";

const NavLink = ({ text, url }: NavLinkTypes) => {
  return (
    <div>
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavLink;
