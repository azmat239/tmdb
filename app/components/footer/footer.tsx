import React from "react";
import FooterLogo from "../footerLogo/footerLogo";
import FooterMenu from "../footerMenu/FooterMenu";
import { footerType } from "./Footer.types";

const Footer = ({ logo }: footerType) => {
  return (
    <footer className="flex h-[308px] bg-darkBlue justify-center items-center">
      <FooterLogo imgSrc={logo.imgSrc} imgAlt={logo.imgAlt} url={logo.url} />
      <FooterMenu />
    </footer>
  );
};

export default Footer;
