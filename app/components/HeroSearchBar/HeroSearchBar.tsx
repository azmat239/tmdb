import React from "react";
import Input from "../Input/Input";
import { HeroSearchBarType } from "./HeroSearchBar.types";
import Button from "../Button/Button";
import { button } from "../Button/Button.stories";
import classNames from "classnames";

const HeroSearchBar = ({
  inputProps,
  buttonProps,
  extraClasses,
}: HeroSearchBarType) => {
  const HeroSearchBarClass = classNames("flex relative pt-12");
  return (
    <div className={`${HeroSearchBarClass} ${extraClasses ?? ""}`}>
      <Input
        placeHolder={inputProps.placeHolder}
        onInputChange={inputProps.onInputChange}
        // defaultValue={inputProps.defaultValue}
      />

      <Button
        text={buttonProps.text}
        variant={buttonProps.variant}
        onButtonClicked={buttonProps.onButtonClicked}
        extraClasses="absolute right-12"
      />
    </div>
  );
};

export default HeroSearchBar;
