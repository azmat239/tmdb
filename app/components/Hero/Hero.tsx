"use client";
import React from "react";
import { HeroType } from "./Hero.types";
import Heading from "../Heading/Heading";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";
import classNames from "classnames";

const Hero = ({ title, description, bgImg, extraClasses }: HeroType) => {
  let inputProp = {
    placeholder: "Search for a Movie, Tv Shows or People ....",
    onInputChange: () => {
      console.log("Changed The Text");
    },
    // defaultValue: "Iron Man 4",
  };
  const heroClass = classNames("py-16 ");
  return (
    <div
      className={`${heroClass} ${extraClasses}`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-12 py-6">
        <Heading text={title} variant="48" extraClasses="text-white" />
        <Heading text={description} variant="32" extraClasses="text-white" />
      </div>

      <HeroSearchBar
        inputProps={inputProp}
        onSearchClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
};

export default Hero;
