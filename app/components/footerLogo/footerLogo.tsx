import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footerLogoType } from "./footerLogo.type";

const FooterLogo = ({ imgSrc, url, imgAlt, extraClasses }: footerLogoType) => {
  return (
    <Link href={url} className={`${extraClasses ?? ""}`}>
      <Image src={imgSrc} alt={imgAlt} width={130} height={94}></Image>
    </Link>
  );
};

export default FooterLogo;
