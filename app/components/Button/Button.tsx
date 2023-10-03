"use client";
import React from "react";
import { ButtonTypes } from "./Button.types";
import classNames from "classnames";
import Text from "../Text/Text";

const Button = ({ text, variant, onClick, extraClasses }: ButtonTypes) => {
  let buttonClasses = classNames("", {
    "py-3 px-6 rounded-30 bg-lightBlue text-white text-[16px]":
      variant == "hero-section",
  });
  return (
    <button
      type="button"
      className={`${buttonClasses} ${extraClasses ?? ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
