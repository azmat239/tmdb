"use client";
import useSWR from "swr";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection/MovieSection";
import { movieLists } from "./mockdata";
import { apiKey, baseApiUrl, fetcher, imgUrl, movieLink } from "./api";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const {
    data: popularData,
    error: popularError,
    isLoading: popularIsLoading,
  } = useSWR(`${baseApiUrl}/3/movie/popular?api_key=${apiKey}`, fetcher);
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingIsLoading,
  } = useSWR(
    `${baseApiUrl}/3/trending/movie/${timeWindow}?api_key=${apiKey}`,
    fetcher
  );

  if (popularIsLoading || trendingIsLoading) {
    return <div>...Loading...</div>;
  }

  if (popularError) {
    return <div>Error: {popularError.message || "An error occurred"}</div>;
  }
  if (trendingError) {
    return <div>Error: {trendingError.message || "An error occurred"}</div>;
  }

  const getFormattedMovies = (movies: any) =>
    movies.map((movie: any) => {
      return {
        image: {
          imgSrc: `${imgUrl}${movie.poster_path}`,
          altText: "Image Not Found",
          url: "/",
        },
        title: movie.title,
        date: movie.release_date,
        rating: Math.floor(movie.vote_average * 10),
        url: `${movieLink}${movie.id}`,
        MenuPopoverLinks: [
          {
            text: "Option 1",
            url: "https://www.google.com",
          },
          {
            text: "Option 2",
            url: "https://www.google.com",
          },
          {
            text: "Option 3",
            url: "https://www.google.com",
          },
          {
            text: "Option 4",
            url: "https://www.google.com",
          },
        ],
      };
    });
  const trendingMovies = getFormattedMovies(trendingData.results);
  const popularMovies = getFormattedMovies(popularData.results);

  let tabs = [
    { tabName: "Today", onClick: () => setTimeWindow("day") },
    { tabName: "This Week", onClick: () => setTimeWindow("week") },
  ];
  return (
    <main className="flex flex-col justify-center">
      <Hero
        title="Welcome"
        description="Millions of movies, TV shows and people to discover. Explore Now."
        bgImg="https://picsum.photos/200"
      />
      <MovieSection title="Trending" tabs={tabs} movieList={trendingMovies} />
      <MovieSection title="What's Popular" movieList={popularMovies} />
    </main>
  );
}
