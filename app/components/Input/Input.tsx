"use client";
import React from "react";
import { InputType } from "./input.types";
import classNames from "classnames";

const Input = ({ placeholder, onInputChange, extraClasses }: InputType) => {
  let inputClass = classNames(
    "h-[44px] w-full py-6 rounded-30 px-6 border-0 focus:outline-0"
  );
  return (
    <input
      type="text"
      name="search"
      onChange={onInputChange}
      placeholder={placeholder}
      className={`${inputClass} ${extraClasses ?? ""}`}
    />
  );
};

export default Input;
