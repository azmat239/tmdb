import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footerLogoType } from "./footerLogo.type";
import classNames from "classnames";

const FooterLogo = ({ imgSrc, url, imgAlt, extraClasses }: footerLogoType) => {
  let footerLogoclass = classNames("px-8 py-16");
  return (
    <Link href={url} className={`${footerLogoclass} ${extraClasses ?? ""}`}>
      <Image src={imgSrc} alt={imgAlt} width={130} height={95}></Image>
    </Link>
  );
};

export default FooterLogo;
