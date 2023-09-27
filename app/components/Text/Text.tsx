import React from "react";
import { TextType } from "./Text.types";
import classNames from "classnames";

const Text = ({ text, variant, extraClasses }: TextType) => {
  let textClasses = classNames("text-black", {
    "text-[12px] leading-[16px]": variant == "12",
    "text-[14px] leading-[18px]": variant == "14",
    "text-[16px] leading-[20px]": variant == "16",
    "text-[20px] leading-[24px]": variant == "20",
    "text-[22px] leading-[26px]": variant == "22",
    "text-[24px] leading-[28px]": variant == "24",
  });
  return <p className={`${textClasses} ${extraClasses ?? ""}`}>{text}</p>;
};

export default Text;
