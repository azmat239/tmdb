import React from "react";
import { RatingTypes } from "./Rating.types";
import classNames from "classnames";

const Rating = ({ value, variant, extraClasses }: RatingTypes) => {
  const ratingClasses = classNames({
    "w-10 bg-lightBlack rounded-full h-10 text-white text-center p-1 text-sm font-bold absolute top-20 left-6 border-4 border-green-800":
      variant == "movie",
  });
  return (
    <div className={`${ratingClasses} ${extraClasses ?? ""}`}>
      {value}
      <sup>%</sup>
    </div>
  );
};

export default Rating;
