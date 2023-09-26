import classNames from "classnames";
import React from "react";
import { HeadingType } from "./Heading.types";

const Heading = ({ text, variant, extraClasses }: HeadingType) => {
  let headingClasses = classNames({
    "text-[48px] leading-[48px]": variant == "48",
    "text-[36px] leading-[44px]": variant == "36",
    "text-[32px] leading-[40px]": variant == "32",
    "text-[24px] leading-[30px]": variant == "24",
    "text-[22px] leading-[28px]": variant == "22",
    "text-[20px] leading-[24px]": variant == "20",
  });
  let DynamicTag = "h1" as keyof JSX.IntrinsicElements;
  switch (variant) {
    case "48":
      DynamicTag = "h1";
      break;
    case "36":
      DynamicTag = "h2";
      break;
    case "32":
      DynamicTag = "h3";
      break;
    case "24":
      DynamicTag = "h4";
      break;
    case "22":
      DynamicTag = "h5";
      break;
    case "20":
      DynamicTag = "h6";
      break;
  }
  return (
    <DynamicTag className={`${headingClasses} ${extraClasses}`}>
      {text}
    </DynamicTag>
  );
};

export default Heading;
