export type MovieCardtypes = {
  image: { imgSrc: string; altText: string };
  rating: number;
  title: string;
  date: string;
  onClick?: React.MouseEventHandler;
  onMenuClick?: React.MouseEventHandler;
  extraClasses?: string;
};
