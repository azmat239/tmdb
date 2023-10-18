"use client";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import classNames from "classnames";
import { HeaderType } from "./Header.types";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import GlobalSearchInput from "../GlobalSearchInput/GlobalSearchInput";
import { inputProps } from "../../mockdata";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ logo, links, extraClasses }: HeaderType) => {
  const [searchDisplay, setSearchDisplay] = useState<"hidden" | "block">(
    "hidden"
  );
  const IconDisplay = searchDisplay == "hidden" ? BiSearchAlt2 : AiOutlineClose;
  const HeaderClass = classNames(
    "flex justify-evenly  bg-darkBlue py-4 relative"
  );
  const iconClasses = classNames("text-[21px]", {
    "text-lightBlue": searchDisplay == "hidden",
    "text-white ": searchDisplay == "block",
  });
  const SearchInputClasses = classNames("absolute top-[68px]");
  return (
    <header className={`${HeaderClass} ${extraClasses ?? ""}`}>
      <div className="flex gap-2">
        <Logo imgSrc={logo.imgSrc} url={logo.url} altText={logo.altText} />
        <NavbarMenu links={links} />
      </div>

      <button
        onClick={() => {
          searchDisplay == "block"
            ? setSearchDisplay("hidden")
            : setSearchDisplay("block");
        }}
      >
        <IconDisplay className={`${iconClasses}`} />
      </button>

      <GlobalSearchInput
        ActionIcon={BiSearchAlt2}
        placeholder={inputProps.placeholder}
        onInputChange={inputProps.onInputChange}
        extraClasses={`${searchDisplay} ${SearchInputClasses}`}
      />
    </header>
  );
};

export default Header;
