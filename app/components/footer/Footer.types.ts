import { FooterMenuType } from "../footerMenu/FooterMenu.types";

export type FooterType = {
  logo: {
    imgSrc: string;
    url: string;
    imgAlt: string;
  };
  menus: Array<FooterMenuType>;
  extraClasses?: string;
};
