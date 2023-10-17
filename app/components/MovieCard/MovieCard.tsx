"use client";
import React from "react";
import { MovieCardtypes } from "./MovieCard.types";
import Rating from "../Rating/Rating";
import Image from "next/image";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import MenuPopover from "../MenuPopover/MenuPopover";
import classNames from "classnames";
import Link from "next/link";

const MovieCard = ({
  image,
  rating,
  title,
  date,
  url,
  MenuPopoverLinks,
  extraClasses,
}: MovieCardtypes) => {
  const MovieCardClass = classNames("px-2 relative w-[160px] min-h-[380px]");
  return (
    <div className={`${MovieCardClass} ${extraClasses ?? ""} `}>
      <Link href={url}>
        <Image
          src={image.imgSrc}
          alt={image.altText}
          width={150}
          height={220}
          className="rounded-8 min-h-[225px]"
        />
      </Link>
      <MenuPopover
        links={MenuPopoverLinks}
        extraClasses="absolute top-1.5 right-4"
      />
      <Rating
        value={rating}
        variant="movie"
        extraClasses="absolute bottom-[36%] left-6"
      />
      <div className="mt-6">
        <Link href={url}>
          <Text
            text={title}
            variant="16"
            extraClasses="font-bold hover:text-lightBlue"
          />
        </Link>
        <Text text={date} variant="16" />
      </div>
    </div>
  );
};

export default MovieCard;
