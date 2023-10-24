import { SearchMovieCardType } from "../SearchMovieCard/SearchMovieCard.types";

export type SearchMovieCardListType = {
  movies: Array<SearchMovieCardType>;
  variant: "company" | "others";
  extraClasses?: string;
};
