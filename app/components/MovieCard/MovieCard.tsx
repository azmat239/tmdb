"use client";
import React from "react";
import { MovieCardtypes } from "./MovieCard.types";
import Rating from "../Rating/Rating";
import Image from "next/image";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import MenuPopover from "../MenuPopover/MenuPopover";
import classNames from "classnames";

const MovieCard = ({
  image,
  rating,
  title,
  date,
  onClick,
  MenuPopoverLinks,
  extraClasses,
}: MovieCardtypes) => {
  const MovieCardClass = classNames("px-2 relative w-[160px] h-[380px]");
  return (
    <div className={`${MovieCardClass} ${extraClasses ?? ""} `}>
      <Image
        src={image.imgSrc}
        alt={image.altText}
        width={150}
        height={220}
        className="rounded-8"
        onClick={onClick}
      />
      <MenuPopover
        links={MenuPopoverLinks}
        extraClasses="absolute top-1.5 right-4"
      />
      <Rating
        value={rating}
        variant="movie"
        extraClasses="absolute bottom-[38%] left-6"
      />
      <div className="mt-6">
        <Text text={title} variant="16" extraClasses="font-bold" />
        <Text text={date} variant="16" />
      </div>
    </div>
  );
};

export default MovieCard;
