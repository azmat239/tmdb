import { IconType } from "react-icons";

export type HeaderType = {
  logo: { ImgSrc: string; url: string; altText: string };
  links: Array<{ text: string; url: string }>;
  ActionIcon: IconType;
  extraClasses?: string;
};
