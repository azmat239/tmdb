export type MenuType = {
  text: string;
  url: string;
};

export type MenutypeMain = {
  links: Array<MenuType>;
  extraClasses?: string;
};
