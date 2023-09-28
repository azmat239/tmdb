import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoType } from "./Logo.type";
import classNames from "classnames";

const Logo = ({ imgSrc, url, altText, extraClasses }: LogoType) => {
  let logoClass = classNames("p-2");
  return (
    <Link href={url} className={`${logoClass} ${extraClasses ?? ""}`}>
      <Image src={imgSrc} alt={altText} width={150} height={20} />
    </Link>
  );
};

export default Logo;
