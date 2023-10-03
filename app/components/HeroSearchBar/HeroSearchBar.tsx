import React from "react";
import Input from "../Input/Input";
import { HeroSearchBarType } from "./HeroSearchBar.types";
import Button from "../Button/Button";
import classNames from "classnames";

const HeroSearchBar = ({
  inputProps,
  onSearchClick,
  extraClasses,
}: HeroSearchBarType) => {
  const HeroSearchBarClass = classNames("flex relative pt-12 px-6");
  return (
    <div className={`${HeroSearchBarClass} ${extraClasses ?? ""}`}>
      <Input
        placeholder={inputProps.placeholder}
        onInputChange={inputProps.onInputChange}
        // defaultValue={inputProps.defaultValue}
      />

      <Button
        text="Search"
        variant="hero-section"
        onClick={onSearchClick}
        extraClasses="absolute right-6"
      />
    </div>
  );
};

export default HeroSearchBar;
