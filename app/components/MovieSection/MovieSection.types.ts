import { MovieCardtypes } from "../MovieCard/MovieCard.types";

export type MovieSectionTypes = {
  title: string;
  tabs?: Array<{ tabName: string; onClick: () => void }>;
  movieList: Array<MovieCardtypes>;
  extraClasses?: string;
};
