import React from "react";
import logoImg from "../../../../public/tmdblogo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="p-2">
      <Image src={logoImg} alt="no" width={150} height={150} />
    </div>
  );
};

export default Logo;
