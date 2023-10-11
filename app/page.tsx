"use client";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection/MovieSection";
import { movieLists, tabs } from "./mockdata";

export default function Home() {
  const handleClick = () => {
    return alert("Image Clicked");
  };
  return (
    <main className="flex flex-col justify-center">
      <Hero
        title="Welcome"
        description="Millions of movies, TV shows and people to discover. Explore Now."
        bgImg="https://picsum.photos/200"
      />
      <MovieSection title="Trending" tabs={tabs} movieList={movieLists} />
      <MovieSection title="What's Popular" movieList={movieLists} />
    </main>
  );
}
