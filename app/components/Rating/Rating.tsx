import React from "react";
import { RatingTypes } from "./Rating.types";
import classNames from "classnames";

const Rating = ({ value, variant, extraClasses }: RatingTypes) => {
  const ratingClasses = classNames({
    "flex justify-center items-center w-10 bg-lightBlack rounded-full h-10 text-sm text-white font-bold border-2":
      variant == "movie",
    " border-green-800": value >= 70 && value <= 100,
    " border-yellow-800": value >= 50 && value < 70,
    " border-red-800": value > 0 && value < 59,
  });
  return (
    <div className={`${ratingClasses} ${extraClasses ?? ""}`}>
      {value}
      <sup>%</sup>
    </div>
  );
};

export default Rating;
