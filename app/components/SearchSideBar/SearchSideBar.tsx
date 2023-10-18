import React from "react";
import { SearchSideBarType } from "./SearchSideBar.types";
import Text from "../Text/Text";
import Link from "next/link";
import classNames from "classnames";

const SearchSideBar = ({ heading, items, extraClasses }: SearchSideBarType) => {
  const searchSideBarClasses = classNames(
    "flex flex-col w-[280px] rounded-8 border-[1px] border-lightGrey"
  );
  return (
    <div className={`${searchSideBarClasses} ${extraClasses ?? ""} `}>
      <div className="py-5 pl-5 bg-lightBlue rounded-t-8  ">
        <Text
          text={heading}
          variant="20"
          extraClasses="text-white font-semibold"
        />
      </div>
      <div className="flex flex-col py-2">
        {items.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className="flex justify-between items-center p-2 hover:bg-lightGrey group"
            >
              <Text
                text={item.text}
                variant="16"
                extraClasses="group-hover:font-semibold"
              />
              <div className="flex justify-center items-center min-h-[16px] min-w-[40px] px-2 py-1 rounded-8  bg-lightGrey group-hover:bg-white">
                {item.badgeNumber}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSideBar;
