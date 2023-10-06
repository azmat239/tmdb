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
  onMenuClick,
  extraClasses,
}: MovieCardtypes) => {
  const MovieCardClass = classNames(
    "flex flex-col gap-6 justify-center px-4 relative my-4 w-[190px] h-[330px]"
  );
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
        extraClasses="absolute top-8 right-8"
        onMenuClick={onMenuClick}
      />
      <Rating
        value={rating}
        variant="movie"
        extraClasses="absolute top-[220px] left-8"
      />
      <div>
        <Text text={title} variant="16" extraClasses="font-bold" />
        <Text text={date} variant="16" />
      </div>
    </div>
  );
};

export default MovieCard;
