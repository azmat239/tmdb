import { NavLinkType } from "../NavLink/NavLink.types";

export type MovieCardtypes = {
  image: { imgSrc: string; altText: string };
  rating: number;
  title: string;
  date: string;
  MenuPopoverLinks: Array<NavLinkType>;
  onClick?: React.MouseEventHandler;
  extraClasses?: string;
};
