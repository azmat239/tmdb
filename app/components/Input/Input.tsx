"use client";
import React from "react";
import { InputType } from "./input.types";
import classNames from "classnames";

const Input = ({
  placeholder,
  onInputChange,
  defaultValue,
  extraClasses,
}: InputType) => {
  let inputClass = classNames(
    "h-[44px] w-full py-6 rounded-30 px-8 border-0 focus:outline-0"
  );
  return (
    <input
      type="text"
      name="search"
      defaultValue={defaultValue}
      onChange={onInputChange}
      placeholder={placeholder}
      className={`${inputClass} ${extraClasses ?? ""}`}
    />
  );
};

export default Input;
