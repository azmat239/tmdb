export type SearchSideBarType = {
  heading: string;
  items: Array<{
    text: string;
    url: React.MouseEventHandler;
    badgeNumber: string;
  }>;
  extraClasses?: string;
};
