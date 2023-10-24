import React, { useState } from "react";
import { SearchSideBarType } from "./SearchSideBar.types";
import Text from "../Text/Text";
import classNames from "classnames";

const SearchSideBar = ({ heading, items, extraClasses }: SearchSideBarType) => {
  const searchSideBarClasses = classNames(
    "flex flex-col min-w-[280px] max-h-[420px] rounded-8 border-[1px] border-lightGrey"
  );
  const [isActive, setIsActive] = useState(0);
  return (
    <div className={`${searchSideBarClasses} ${extraClasses ?? ""} `}>
      <div className="py-5 pl-5 bg-lightBlue rounded-t-8">
        <Text
          text={heading}
          variant="20"
          extraClasses="text-white font-semibold"
        />
      </div>
      <div className="flex flex-col py-2">
        {items.map((item, index) => {
          return (
            <button
              onClick={() => {
                setIsActive(index);
                //@ts-ignore
                item.url();
              }}
              key={index}
              data-isactive={isActive == index}
              className="flex justify-between items-center p-2 text-[16px] hover:bg-lightGrey group data-[isActive=true]:bg-lightGrey  data-[isActive=true]:font-semibold "
            >
              {item.text}
              <div className="flex justify-center items-center min-h-[16px] min-w-[40px] px-2 py-1 rounded-8  bg-slate-100 group-hover:bg-white ">
                {item.badgeNumber}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSideBar;
