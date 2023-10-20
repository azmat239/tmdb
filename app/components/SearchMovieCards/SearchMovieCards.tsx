import React from "react";
import { SearchMovieCardsType } from "./SearchMovieCards.types";
import classNames from "classnames";
import Image from "next/image";
import Text from "../Text/Text";

const SearchMovieCards = ({ lists, extraClasses }: SearchMovieCardsType) => {
  const searchMovieCardClasses = classNames(
    "flex gap-3 mb-4 max-w-[1020px] h-[140px] rounded-8 border-[1px] border-lightGrey shadow-md"
  );
  return (
    <div>
      {lists.map((list, index) => {
        return (
          <div
            key={index}
            className={`${searchMovieCardClasses} ${extraClasses ?? ""}`}
          >
            <Image
              src="MovieImage.svg"
              width={95}
              height={140}
              alt={list.searchImage.imgSrc}
              className=" rounded-s-8"
            />
            <div className="py-5 px-4 flex flex-col gap-2">
              <div>
                <Text
                  text={list.title}
                  variant="20"
                  extraClasses="font-semibold"
                />
                <Text
                  text={list.date}
                  variant="16"
                  extraClasses="text-darkGrey"
                />
              </div>
              <div>
                <Text text={list.description} variant="16" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchMovieCards;
