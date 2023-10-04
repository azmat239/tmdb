import React from "react";
import { MovieCardtypes } from "./MovieCard.types";
import Rating from "../Rating/Rating";
import Image from "next/image";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import PopoverDemo from "../Popover/PopoverDemo";

const MovieCard = ({
  image,
  rating,
  title,
  date,
  onClick,
  onMenuClick,
  extraClasses,
}: MovieCardtypes) => {
  return (
    <div className="flex flex-col gap-3 justify-center px-4 relative">
      <Image
        src={image.imgSrc}
        alt={image.altText}
        width={150}
        height={250}
        className="rounded-8"
      />
      <PopoverDemo />
      <Rating value={rating} variant="movie" />
      <div className="mt-6">
        <Heading text={title} variant="20" extraClasses="font-extrabold" />
        <Text text={date} variant="16" />
      </div>
    </div>
  );
};

export default MovieCard;
