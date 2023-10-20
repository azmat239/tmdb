"use client";
import React from "react";
import SearchSideBar from "../components/SearchSideBar/SearchSideBar";
import SearchMovieCards from "../components/SearchMovieCards/SearchMovieCards";
import { inputProps, items, listsResult } from "../mockdata";
import GlobalSearchInput from "../components/GlobalSearchInput/GlobalSearchInput";
import { BiSearchAlt2 } from "react-icons/bi";
import classNames from "classnames";

const Search = () => {
  const SearchInputClasses = classNames("absolute top-[68px] left-0");
  return (
    <div>
      <GlobalSearchInput
        ActionIcon={BiSearchAlt2}
        placeholder={inputProps.placeholder}
        extraClasses={`${SearchInputClasses}`}
      />
      <div className="flex gap-4 mt-24">
        <SearchSideBar heading="Search Result" items={items} />
        <SearchMovieCards lists={listsResult} />
      </div>
    </div>
  );
};

export default Search;
