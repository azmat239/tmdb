import { MovieCardtypes } from "../MovieCard/MovieCard.types";

export type MovieSectionTypes = {
  title: string;
  tabs?: Array<{ tabName: string; onClick?: React.MouseEventHandler }>;
  movieList: Array<MovieCardtypes>;
  extraClasses?: string;
};
