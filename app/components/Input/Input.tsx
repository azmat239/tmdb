import React from "react";
import { InputType } from "./input.types";
import classNames from "classnames";

const Input = ({
  placeHolder,
  onChange,
  defaultValue,
  extraClasses,
}: InputType) => {
  let inputClass = classNames("h-[46px] w-[1000px] px-5 py-3 rounded-30");
  let inputMain = classNames("px-8");
  return (
    <div className={`${inputMain} ${extraClasses ?? ""}`}>
      <input
        type="text"
        name="search"
        value={defaultValue}
        onChange={onChange}
        placeholder={placeHolder}
        className={`${inputClass}`}
      />
    </div>
  );
};

export default Input;
