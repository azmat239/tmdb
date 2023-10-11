export type NavLinkType = {
  text: string;
  url: string;
  subLinks: Array<{ text: string; url: string }>;
  variant?: "Link" | "subLink";
  extraClasses?: string;
};
