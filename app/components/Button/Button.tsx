import React from "react";
import { ButtonTypes } from "./Button.types";
import classNames from "classnames";
import Text from "../Text/Text";

const Button = ({ text, variant, onClicked, extraClasses }: ButtonTypes) => {
  let buttonClasses = classNames("", {
    "py-3 px-6 rounded-30 bg-lightBlue": variant == "Hero-section",
  });
  return (
    <button
      type="button"
      className={`${buttonClasses} ${extraClasses ?? ""}`}
      onClick={onClicked}
    >
      <Text text={text} variant="16" extraClasses="text-white" />
    </button>
  );
};

export default Button;
