"use client";
import React from "react";
import { InputType } from "./input.types";
import classNames from "classnames";

const Input = ({
  placeHolder,
  onInputChange,
  // defaultValue,
  extraClasses,
}: InputType) => {
  let inputClass = classNames("h-[44px] w-[1220px] px-5 py-3 rounded-30");
  let inputMain = classNames("px-10 border-0 focus:outline-0");
  return (
    <div className={`${inputMain} ${extraClasses ?? ""}`}>
      <input
        type="text"
        name="search"
        // value={defaultValue}
        onChange={onInputChange}
        placeholder={placeHolder}
        className={`${inputClass}`}
      />
    </div>
  );
};

export default Input;
