import { MovieCardtypes } from "../MovieCard/MovieCard.types";

export type MovieSectionTypes = {
  title: string;
  tabs?: Array<{ tabsName: string; onClick?: React.MouseEventHandler }>;
  movieLists: Array<MovieCardtypes>;
  extraClasses?: string;
};
