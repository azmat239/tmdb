"use client";
import React, { useEffect, useState } from "react";
import SearchSideBar from "../components/SearchSideBar/SearchSideBar";
import SearchMovieCardList from "../components/SearchMovie/SearchMovieCardList";
import GlobalSearchInput from "../components/GlobalSearchInput/GlobalSearchInput";
import { BiSearchAlt2 } from "react-icons/bi";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { apiKey, fetcher, imgUrl } from "../api";
import ReactPaginate from "react-paginate";

const Search = () => {
  const SearchInputClasses = classNames("absolute top-[68px] left-0");
  const router = useRouter();
  const SearchParams = useSearchParams();
  const [pageOffset, setPageOffset] = useState(1);
  const searchValue = SearchParams.get("query");
  const [category, setCategory] = useState<
    "collection" | "movie" | "company" | "keyword" | "multi" | "person" | "tv"
  >("movie");

  const {
    data: movieData,
    error: movieError,
    isLoading: movieisLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}`,
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

  const itemsPerPage = 5;

  const searchResults = (movies: any, itemsPerPage: any) => {
    const start = (pageOffset - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedMovies = movies.slice(start, end);
    return paginatedMovies.map((movie: any) => {
      return {
        image: movie.poster_path
          ? {
              imgSrc:
                `${imgUrl}${movie.poster_path}` ||
                `${imgUrl}${movie.profile_path}`,
              altText: "not found",
            }
          : movie.profile_path
          ? {
              imgSrc: `${imgUrl}${movie.profile_path}`,
              altText: "not found",
            }
          : {
              imgSrc: "https://placehold.jp/150x150.png",
              altText: "notfound",
            },
        title: movie.title || movie.name,
        date: movie.release_date || movie.first_air_date,
        description: movie.overview || movie.known_for_department,
        url: "/",
      };
    });
  };

  var totalPages =
    category == "movie"
      ? movieData.total_pages
      : category == "tv"
      ? tvData.total_pages
      : category == "collection"
      ? collectionData.total_pages
      : category == "person"
      ? peopleData.total_pages
      : category == "multi"
      ? multiData.total_pages
      : category == "company"
      ? companyData.total_pages
      : category == "keyword"
      ? keywordData.total_pages
      : "";

  var results = searchResults(
    category == "movie"
      ? movieData.results
      : category == "tv"
      ? tvData.results
      : category == "collection"
      ? collectionData.results
      : category == "person"
      ? peopleData.results
      : category == "multi"
      ? multiData.results
      : category == "company"
      ? companyData.results
      : category == "keyword"
      ? keywordData.results
      : "",
    itemsPerPage
  );

  const updateURL = (searchQuery: any, value: any) => {
    router.push(`/search?query=${searchQuery}&category=${value}`);
  };
  const items = [
    {
      text: "Movies",
      url: () => {
        setCategory("movie");
        // setPageNumber(1);
        updateURL(searchValue, "movies");
      },
      badgeNumber: movieData.total_pages,
    },
    {
      text: "People",
      url: () => {
        setCategory("person");
        // setPageNumber(1);
        updateURL(searchValue, "person");
      },
      badgeNumber: peopleData.total_pages,
    },
    {
      text: "Tv Shows",
      url: () => {
        setCategory("tv");
        // setPageNumber(1);
        updateURL(searchValue, "Tv");
      },
      badgeNumber: tvData.total_pages,
    },
    {
      text: "Collections",
      url: () => {
        setCategory("collection");
        // setPageNumber(1);
        updateURL(searchValue, "collection");
      },
      badgeNumber: collectionData.total_pages,
    },
    {
      text: "Companies",
      url: () => {
        setCategory("company");
        // setPageNumber(1);
        updateURL(searchValue, "company");
      },
      badgeNumber: companyData.total_pages,
    },
    {
      text: "Keyword",
      url: () => {
        setCategory("keyword");
        // setPageNumber(1);
        updateURL(searchValue, "keyword");
      },
      badgeNumber: keywordData.total_pages,
    },
    {
      text: "Network",
      url: () => {
        setCategory("multi");
        // setPageNumber(1);
        updateURL(searchValue, "network");
      },
      badgeNumber: multiData.total_pages,
    },
  ];
  const handlePageClick = (data: any) => {
    const selectedPage = data.selected + 1;
    setPageOffset(selectedPage);
  };
  const pageCount = Math.ceil(20 / itemsPerPage);

  return (
    <div>
      <GlobalSearchInput
        ActionIcon={BiSearchAlt2}
        //@ts-ignore
        placeholder={searchValue}
        extraClasses={`${SearchInputClasses}`}
      />
      <div className="flex gap-4 mt-24">
        <SearchSideBar heading="Search Result" items={items} value={category} />
        <SearchMovieCardList
          movies={results}
          variant={category == "company" ? "company" : "others"}
          extraClasses={
            category == "company"
              ? "h-[30px] border-y-[1px] mb-1"
              : "h-[140px] shadow-md border-[1px] mb-4 rounded-8 "
          }
        />
      </div>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={8}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel=""
          disableInitialCallback={true}
        />
      </div>
    </div>
  );
};

export default Search;
