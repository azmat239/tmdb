import React from "react";
import FooterLogo from "../footerLogo/footerLogo";
import FooterMenu from "../footerMenu/FooterMenu";
import { FooterType } from "./Footer.types";
import classNames from "classnames";

const Footer = ({ menus, logo, extraClasses }: FooterType) => {
  let footerClass = classNames("flex  bg-darkBlue justify-center");
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
