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
    "py-1 px-5  rounded-30 data-[isactive=true]:bg-darkBlue data-[isactive=true]:text-lightGreen font-semibold max-w-[1300px]"
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
                  onClick={() => {
                    setActiveTab(index);
                    //@ts-ignore
                    tab.onClick();
                  }}
                  className={tabButtonClasses}
                  data-isactive={activeTab == index}
                >
                  {tab.tabName}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="my-6 relative">
        <div className="flex  hide-scrollbar overflow-x-auto overflow-y-hidden  ">
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

        <div className="absolute bg-gradient-to-l from-white  to-transparent right-0 w-10 inset-y-0 "></div>
      </div>
    </div>
  );
};

export default MovieSection;
