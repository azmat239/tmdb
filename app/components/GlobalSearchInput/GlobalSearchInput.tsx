import React from "react";
import { GlobalSearchInputType } from "./GlobalSearchInput.types";
import classNames from "classnames";

const GlobalSearchInput = ({
  ActionIcon,
  placeholder,
  onInputChange,
  defaultValue,
  extraClasses,
}: GlobalSearchInputType) => {
  const GlobalInputClasses = classNames(
    "flex gap-2 bg-white items-center h-10 max-w-[1440px] py-6 px-20 border-y-[1px] border-black"
  );
  return (
    <div className={`${GlobalInputClasses} ${extraClasses ?? ""}`}>
      <ActionIcon className="text-lg mt-1" />
      <input
        type="search"
        onChange={onInputChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="focus:outline-0 text-gray min-w-[1125px]"
      />
    </div>
  );
};

export default GlobalSearchInput;
