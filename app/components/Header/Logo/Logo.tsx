import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoType } from "./Logo.type";

const Logo = ({ ImgSrc, url, altText }: LogoType) => {
  return (
    <Link href={url} className="p-2">
      <Image src={ImgSrc} alt={altText} width={150} height={150} />
    </Link>
  );
};

export default Logo;
