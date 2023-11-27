import { IconType } from "react-icons";
import { LogoType } from "../Logo/Logo.type";
import { NavLinkType } from "../NavLink/NavLink.types";

export type HeaderType = {
  logo: LogoType;
  links: Array<NavLinkType>;

  extraClasses?: string;
};
