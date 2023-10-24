"use client";
import React, { useState } from "react";
import SearchSideBar from "../components/SearchSideBar/SearchSideBar";
import SearchMovieCardList from "../components/SearchMovie/SearchMovieCardList";
import GlobalSearchInput from "../components/GlobalSearchInput/GlobalSearchInput";
import { BiSearchAlt2 } from "react-icons/bi";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { apiKey, fetcher, imgUrl } from "../api";
import Paging from "../components/Paging/Paging";

const Search = () => {
  const SearchInputClasses = classNames("absolute top-[68px] left-0");
  const SearchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const searchValue = SearchParams.get("query");
  const [value, setValue] = useState<
    "collection" | "movie" | "company" | "keyword" | "multi" | "person" | "tv"
  >("movie");

  const {
    data: movieData,
    error: movieError,
    isLoading: movieisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}&page=${pageNumber.toString()}`,
    fetcher
  );
  const {
    data: tvData,
    error: tvError,
    isLoading: tvisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/tv?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );

  const {
    data: collectionData,
    error: collectionError,
    isLoading: collectionisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/collection?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );
  const {
    data: peopleData,
    error: peopleError,
    isLoading: peopleisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/person?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );
  const {
    data: companyData,
    error: companyError,
    isLoading: companyisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/company?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );
  const {
    data: multiData,
    error: multiError,
    isLoading: multiisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/multi?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );
  const {
    data: keywordData,
    error: keywordError,
    isLoading: keywordisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/keyword?query=${searchValue}&api_key=${apiKey}`,
    fetcher
  );
  if (
    movieisLoading ||
    tvisLoading ||
    collectionisLoading ||
    peopleisLoading ||
    keywordisLoading ||
    multiisLoading ||
    companyisLoading
  ) {
    return <div>Loading</div>;
  }
  if (
    movieError ||
    tvError ||
    collectionError ||
    peopleError ||
    keywordError ||
    multiError ||
    companyError
  ) {
    return <div>Error</div>;
  }

  const collectionResults =
    collectionData &&
    collectionData.results &&
    collectionData.results.map((movie: any) => {
      return {
        image: {
          imgSrc: `${imgUrl}${movie.poster_path}`,
          altText: "not found",
        },
        title: movie.name,
        date: "",
        description: movie.overview,
        url: "/",
      };
    });
  const searchResults = (movie: any) =>
    movie.results.map((movie: any) => {
      return {
        image: {
          imgSrc: `${imgUrl}${movie.poster_path}`,
          altText: "not found",
        },
        title: movie.title,
        date: movie.release_date,
        description: movie.overview,
        url: "/",
      };
    });
  const peopleResults =
    peopleData &&
    peopleData.results &&
    peopleData.results.map((movie: any) => {
      return {
        image: {
          imgSrc: `${imgUrl}${movie.profile_path}`,
          altText: "not found",
        },
        title: movie.name,
        date: "",
        description: movie.known_for_department,
        url: "/",
      };
    });
  const keywordResults = searchResults(keywordData);
  const movieResults = searchResults(movieData);
  const tvResults = tvData.results.map((movie: any) => {
    return {
      image: {
        imgSrc: `${imgUrl}${movie.poster_path}`,
        altText: "not found",
      },
      title: movie.name,
      date: movie.first_air_date,
      description: movie.overview,
      url: "/",
    };
  });
  const multiResults = searchResults(multiData);
  const companyResults = companyData.results.map((movie: any) => {
    return {
      image: {
        imgSrc: `${imgUrl}${movie.poster_path}`,
        altText: "not found",
      },
      title: movie.name,
      date: movie.first_air_date,
      description: movie.overview,
      url: "/",
    };
  });
  const Results =
    value == "movie"
      ? movieResults
      : value == "tv"
      ? tvResults
      : value == "collection"
      ? collectionResults
      : value == "person"
      ? peopleResults
      : value == "multi"
      ? multiResults
      : value == "company"
      ? companyResults
      : value == "keyword"
      ? keywordResults
      : "";
  var totalPages =
    value == "movie"
      ? movieData.total_pages
      : value == "tv"
      ? tvData.total_pages
      : value == "collection"
      ? collectionData.total_pages
      : value == "person"
      ? peopleData.total_pages
      : value == "multi"
      ? multiData.total_pages
      : value == "company"
      ? companyData.total_pages
      : value == "keyword"
      ? keywordData.total_pages
      : "";
  const items = [
    {
      text: "Movies",
      url: () => {
        setValue("movie");
        setPageNumber(1);
      },
      badgeNumber: movieData.total_results,
    },
    {
      text: "People",
      url: () => {
        setValue("person");
        setPageNumber(1);
      },
      badgeNumber: peopleData.total_results,
    },
    {
      text: "Tv Shows",
      url: () => {
        setValue("tv");
        setPageNumber(1);
      },
      badgeNumber: tvData.total_results,
    },
    {
      text: "Collections",
      url: () => {
        setValue("collection");
        setPageNumber(1);
      },
      badgeNumber: collectionData.total_results,
    },
    {
      text: "Companies",
      url: () => {
        setValue("company");
        setPageNumber(1);
      },
      badgeNumber: companyData.total_results,
    },
    {
      text: "Keyword",
      url: () => {
        setValue("keyword");
        setPageNumber(1);
      },
      badgeNumber: keywordData.total_results,
    },
    {
      text: "Network",
      url: () => {
        setValue("multi");
        setPageNumber(1);
      },
      badgeNumber: multiData.total_results,
    },
  ];

  const handleClick = (newpage: number) => {
    setPageNumber(newpage);
  };
  return (
    <div>
      <GlobalSearchInput
        ActionIcon={BiSearchAlt2}
        //@ts-ignore
        placeholder={searchValue}
        extraClasses={`${SearchInputClasses}`}
      />
      <div className="flex gap-4 mt-24">
        <SearchSideBar heading="Search Result" items={items} />
        <SearchMovieCardList
          movies={Results}
          variant={value == "company" ? "company" : "others"}
          extraClasses={
            value == "company"
              ? "h-[30px] border-y-[1px] mb-1"
              : "h-[140px] shadow-md border-[1px] mb-4 rounded-8 "
          }
        />
      </div>

      <Paging
        pageNumber={pageNumber}
        totalPages={totalPages}
        onClick={handleClick}
      />
    </div>
  );
};

export default Search;
