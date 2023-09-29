import React from "react";
import FooterLogo from "../footerLogo/footerLogo";
import FooterMenu from "../footerMenu/FooterMenu";
import { FooterType } from "./Footer.types";
import classNames from "classnames";

const Footer = ({ menus, logo, extraClasses }: FooterType) => {
  let footerClass = classNames(
    "flex h-[308px] bg-darkBlue justify-center items-center"
  );
  return (
    <footer className={`${footerClass} ${extraClasses ?? ""}`}>
      <FooterLogo imgSrc={logo.imgSrc} imgAlt={logo.imgAlt} url={logo.url} />
      {menus.map((menu, index) => {
        return <FooterMenu key={index} title={menu.title} links={menu.links} />;
      })}
    </footer>
  );
};

export default Footer;
