import { NavLinkType } from "../NavLink/NavLink.types";

export type MenuPopoverType = {
  links: Array<{ text: string; url: string }>;
  extraClasses?: string;
};
