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
  const heroSearchBarClass = classNames(
    "flex mx-10 mt-10 bg-white rounded-30 justify-between max-w-[1220px]"
  );
  return (
    <div className={`${heroSearchBarClass} ${extraClasses ?? ""}`}>
      <Input
        placeholder={inputProps.placeholder}
        onInputChange={inputProps.onInputChange}
      />

      <Button text="Search" variant="hero-section" onClick={onSearchClick} />
    </div>
  );
};

export default HeroSearchBar;
