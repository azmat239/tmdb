import React from "react";
import FooterLogo from "../footerLogo/footerLogo";
import FooterMenu from "../footerMenu/FooterMenu";
import { footerType } from "./Footer.types";
import classNames from "classnames";

const Footer = ({ menu, logo, extraClasses }: footerType) => {
  let footerClass = classNames(
    "flex h-[308px] bg-darkBlue justify-center items-center"
  );
  return (
    <footer className={`${footerClass} ${extraClasses}`}>
      <FooterLogo imgSrc={logo.imgSrc} imgAlt={logo.imgAlt} url={logo.url} />
      {menu.map((menu, index) => {
        return <FooterMenu key={index} title={menu.title} links={menu.links} />;
      })}
    </footer>
  );
};

export default Footer;
