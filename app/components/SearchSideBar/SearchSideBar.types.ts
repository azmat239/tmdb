export type SearchSideBarType = {
  heading: string;
  items: Array<{
    text: string;
    url: () => void;
    badgeNumber: string;
  }>;
  value: string;
  extraClasses?: string;
};
