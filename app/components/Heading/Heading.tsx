import classNames from "classnames";
import React from "react";
import { HeadingType } from "./Heading.types";

const Heading = ({ text, variant, extraClasses }: HeadingType) => {
  let tag1 = classNames({
    "text-[48px] leading-[48px]": variant == "48",
    "text-[36px] leading-[44px]": variant == "36",
    "text-[32px] leading-[40px]": variant == "32",
    "text-[24px] leading-[30px]": variant == "24",
    "text-[22px] leading-[28px]": variant == "22",
    "text-[20px] leading-[24px]": variant == "20",
  });
  return <h1 className={`${tag1} ${extraClasses}`}>{text} </h1>;
};

export default Heading;
