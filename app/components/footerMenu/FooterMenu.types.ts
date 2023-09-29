import { FooterLinkType } from "../footerLink/footerLink.type";

export type FooterMenuType = {
  title: string;
  links: Array<FooterLinkType>;
  extraClasses?: string;
};
