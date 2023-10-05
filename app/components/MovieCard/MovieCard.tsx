"use client";
import React from "react";
import { MovieCardtypes } from "./MovieCard.types";
import Rating from "../Rating/Rating";
import Image from "next/image";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import MenuPopover from "../MenuPopover/MenuPopover";

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
  return (
    <div className="flex flex-col gap-6 justify-center px-4 relative my-10">
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
        extraClasses="absolute top-2 left-36"
      />
      <Rating value={rating} variant="movie" />
      <div>
        <Text text={title} variant="16" extraClasses="font-bold" />
        <Text text={date} variant="16" />
      </div>
    </div>
  );
};

export default MovieCard;
