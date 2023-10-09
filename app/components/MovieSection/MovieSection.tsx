"use client";
import React, { useState } from "react";
import { MovieSectionTypes } from "./MovieSection.types";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import MovieCard from "../MovieCard/MovieCard";

const MovieSection = ({
  title,
  tabs,
  movieList,
  extraClasses,
}: MovieSectionTypes) => {
  const movieClasses = classNames("flex flex-col mt-6");
  const [activeTab, setActiveTab] = useState(0);
  const tabButtonClasses = classNames(
    "py-1 px-5  rounded-30 data-[isactive=true]:bg-darkBlue data-[isactive=true]:text-lightGreen font-semibold"
  );
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
                  onClick={() => setActiveTab(index)}
                  className={tabButtonClasses}
                  data-isActive={activeTab == index}
                >
                  {tab.tabName}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex my-6  hide-scrollbar overflow-x-auto shadow-insetWhite">
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
