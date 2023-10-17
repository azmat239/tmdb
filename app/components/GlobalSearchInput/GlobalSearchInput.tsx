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
    "flex gap-2 bg-white items-center h-10 p-6"
  );
  return (
    <div className={`${GlobalInputClasses} ${extraClasses ?? ""}`}>
      <ActionIcon className="text-lg mt-1" />
      <input
        type="search"
        onChange={onInputChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="focus:outline-0 min-w-[1120px] text-gray"
      />
    </div>
  );
};

export default GlobalSearchInput;
