"use client";
import React, { useState } from "react";
import { GlobalSearchInputType } from "./GlobalSearchInput.types";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const GlobalSearchInput = ({
  ActionIcon,
  placeholder,
  defaultValue,
  extraClasses,
}: GlobalSearchInputType) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleInputKeyPress = (e: any) => {
    if (e.key == "Enter") {
      router.push(`/search`);
    }
  };
  const GlobalInputClasses = classNames(
    "flex gap-2 bg-white items-center h-10 max-w-[1440px] py-6 px-20 border-y-[1px] border-black"
  );
  return (
    <div className={`${GlobalInputClasses} ${extraClasses ?? ""}`}>
      <ActionIcon className="text-lg mt-1" />
      <input
        type="search"
        onChange={handleInputChange}
        onKeyUp={handleInputKeyPress}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="focus:outline-0 text-gray min-w-[1125px]"
      />
    </div>
  );
};

export default GlobalSearchInput;
