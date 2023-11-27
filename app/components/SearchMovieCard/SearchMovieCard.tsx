import classNames from "classnames";
import React from "react";
import { SearchMovieCardType } from "./SearchMovieCard.types";
import Text from "../Text/Text";
import Image from "next/image";
import Link from "next/link";

const SearchMovieCard = ({
  image,
  date,
  title,
  url,
  variant,
  description,
  extraClasses,
}: SearchMovieCardType) => {
  const searchMovieCardClasses = classNames(
    "flex min-w-[820px] border-lightGrey"
  );
  const imageClasses = classNames("min-w-[95px] rounded-s-8", {
    " hidden ": variant == "company",
  });
  let titleClasses = classNames("font-semibold", {
    "text-slate-400 hover:text-slate-700": variant == "company",
    "text-black hover:text-slate-700": variant == "others",
  });
  let mainTextClasses = classNames({
    "py-5 px-4 gap-2 flex flex-col": variant == "others",
  });
  return (
    <div className={`${searchMovieCardClasses} ${extraClasses ?? ""}`}>
      <Image
        src={image.imgSrc}
        width={95}
        height={140}
        alt={image.altText}
        className={`${imageClasses}`}
      />

      <div className={`${mainTextClasses}`}>
        <div>
          <Link href={url}>
            <Text text={title} variant="20" extraClasses={`${titleClasses}`} />
          </Link>

          <Text text={date} variant="16" extraClasses="text-darkGrey" />
        </div>
        <div className="max-h-[38px] overflow-hidden">
          <Text text={description} variant="16" />
        </div>
      </div>
    </div>
  );
};
export default SearchMovieCard;
