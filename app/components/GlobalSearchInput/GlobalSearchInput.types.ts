import { IconType } from "react-icons";

export type GlobalSearchInputType = {
  ActionIcon: IconType;
  placeholder?: string;
  onInputChange: React.ChangeEventHandler;
  defaultValue?: string;
  extraClasses?: string;
};
