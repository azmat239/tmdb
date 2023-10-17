import React from "react";
import { GlobalSearchInputType } from "./GlobalSearchInput.types";

const GlobalSearchInput = ({
  ActionIcon,
  placeholder,
  onInputChange,
  defaultValue,
  extraClasses,
}: GlobalSearchInputType) => {
  return (
    <div className="flex gap-2 bg-white items-center h-10 w-[1220px] p-4">
      <ActionIcon className="text-lg mt-1" />
      <input
        type="search"
        onChange={onInputChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="focus:outline-0 min-w-[1150px] text-gray"
      />
    </div>
  );
};

export default GlobalSearchInput;
