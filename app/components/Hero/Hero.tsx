"use client";
import React from "react";
import { HeroType } from "./Hero.types";
import Heading from "../Heading/Heading";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";
import classNames from "classnames";
import { inputProps } from "../../mockdata";
import { useRouter } from "next/navigation";

const Hero = ({ title, description, bgImg, extraClasses }: HeroType) => {
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

      <HeroSearchBar inputProps={inputProps} />
    </div>
  );
};

export default Hero;
