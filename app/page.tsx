"use client";
import useSWR from "swr";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection/MovieSection";
import { movieLists } from "./mockdata";
import { apiKey, baseApiUrl, fetcher, imgUrl } from "./api";
import { useState } from "react";

export default function Home() {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const { data: popularData, error: popularError } = useSWR(
    `${baseApiUrl}/3/movie/popular?api_key=${apiKey}`,
    fetcher
  );
  const { data: trendingData, error: trendingError } = useSWR(
    `${baseApiUrl}/3/trending/movie/${timeWindow}?api_key=945747413f8ed82865430ae895bdf874`,
    fetcher
  );

  if (!popularData && !popularError) {
    return <div>...Loading...</div>;
  }

  if (popularError) {
    return <div>Error: {popularError.message || "An error occurred"}</div>;
  }
  const popularMovies = popularData.results.map((movie: any) => {
    return {
      image: {
        imgSrc: `${imgUrl}${movie.poster_path}`,
        altText: "Image Not Found",
      },
      title: movie.title,
      date: movie.release_date,
      rating: Math.floor(movie.vote_average * 10),
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

  if (!trendingData && !trendingError) {
    return <div>...Loading...</div>;
  }

  if (trendingError) {
    return <div>Error: {trendingError.message || "An error occurred"}</div>;
  }
  const trendingMovies = trendingData.results.map((movie: any) => {
    return {
      image: {
        imgSrc: `${imgUrl}${movie.poster_path}`,
        altText: "Image Not Found",
      },
      title: movie.title,
      date: movie.release_date,
      rating: Math.floor(movie.vote_average * 10),
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
