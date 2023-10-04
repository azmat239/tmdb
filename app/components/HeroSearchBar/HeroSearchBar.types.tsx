import { ButtonTypes } from "../Button/Button.types";
import { InputType } from "../Input/input.types";

export type HeroSearchBarType = {
  inputProps: InputType;
  onSearchClick?: React.MouseEventHandler;
  extraClasses?: string;
};
