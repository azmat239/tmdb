import React from "react";
import { SearchMovieCardListType } from "./SearchMovieCardList.types";
import SearchMovieCard from "../SearchMovieCard/SearchMovieCard";

const SearchMovieCardList = ({
  movies,
  variant,
  extraClasses,
}: SearchMovieCardListType) => {
  return (
    <div>
      {movies &&
        movies.length > 0 &&
        movies.map((movie, index) => {
          return (
            <SearchMovieCard
              image={movie.image}
              date={movie.date}
              title={movie.title}
              url={movie.url}
              description={movie.description}
              variant={variant}
              extraClasses={extraClasses ?? ""}
            />
          );
        })}
    </div>
  );
};

export default SearchMovieCardList;
