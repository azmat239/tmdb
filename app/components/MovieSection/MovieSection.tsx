"use client";
import React from "react";
import { MovieSectionTypes } from "./MovieSection.types";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import MovieCard from "../MovieCard/MovieCard";
import Text from "../Text/Text";

const MovieSection = ({
  title,
  tabs,
  movieList,
  extraClasses,
}: MovieSectionTypes) => {
  const movieClasses = classNames("flex flex-col mt-6");
  return (
    <div className={`${movieClasses} ${extraClasses ?? ""}`}>
      <div className="flex gap-6 mx-4">
        <Heading text={title} variant="24" extraClasses="font-bold" />
        {tabs && (
          <div className="border-2 border-darkBlue rounded-30">
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  onClick={tab.onClick}
                  className="py-1 px-5 active:bg-darkBlue rounded-30 "
                >
                  <Text
                    text={tab.tabName}
                    variant="16"
                    extraClasses="active:text-transparent bg-clip-text active:bg-gradient-to-b active:from-lightGreen active:to-lightBlue font-semibold"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex my-6  hide-scrollbar overflow-x-auto">
        {movieList.map((movieList, index) => {
          return (
            <div key={index}>
              <MovieCard
                image={movieList.image}
                rating={movieList.rating}
                date={movieList.date}
                onClick={movieList.onClick}
                title={movieList.title}
                MenuPopoverLinks={movieList.MenuPopoverLinks}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSection;
