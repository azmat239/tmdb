import { MovieCardtypes } from "../MovieCard/MovieCard.types";

export type SearchMovieCardType = Omit<
  MovieCardtypes,
  "rating" | "MenuPopoverLinks"
> & { description: string; variant: "company" | "others" };
