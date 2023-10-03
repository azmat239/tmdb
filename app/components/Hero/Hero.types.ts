import { ButtonTypes } from "../Button/Button.types";
import { InputType } from "../Input/input.types";

export type HeroType = {
  title: string;
  description: string;
  HeroProp: {
    inputProps: InputType;
    buttonProps: ButtonTypes;
  };
  bgImg: string;
  extraClasses?: "";
};
