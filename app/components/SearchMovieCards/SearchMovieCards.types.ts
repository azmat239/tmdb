export type SearchMovieCardsType = {
  lists: Array<{
    searchImage: { imgSrc: string; altText: string };
    title: string;
    date: string;
    description: string;
  }>;
  extraClasses?: string;
};
