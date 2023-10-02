import React from "react";
import FooterLink from "../footerLink/footerLink";
import { FooterMenuType } from "./FooterMenu.types";
import classNames from "classnames";
import Heading from "../Heading/Heading";

const FooterMenu = ({ title, links, extraClasses }: FooterMenuType) => {
  let footerMenuClass = classNames("px-8 py-24");
  return (
    <div className={`${footerMenuClass} ${extraClasses ?? ""}`}>
      <Heading text={title} variant="20" extraClasses="text-white pb-1" />
      {links.map((links, index) => {
        return <FooterLink key={index} url={links.url} text={links.text} />;
      })}
    </div>
  );
};

export default FooterMenu;
