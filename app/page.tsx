"use client";
import Hero from "./components/Hero/Hero";
import MovieCard from "./components/MovieCard/MovieCard";

let links = [
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
];

export default function Home() {
  const handleClick = () => {
    return alert("Image Clicked");
  };
  const handleMenuClick = () => {
    return alert("Menu Clicked");
  };
  return (
    <main className="flex flex-col justify-center">
      <Hero
        title="Welcome"
        description="Millions of movies, TV shows and people to discover. Explore Now."
        bgImg="https://picsum.photos/200"
      />
      <MovieCard
        image={{ imgSrc: "MovieImage.svg", altText: "Not Found" }}
        rating={70}
        title="The Good Doctor"
        date="Sep 27,2017"
        onClick={handleClick}
        MenuPopoverLinks={links}
        onMenuClick={handleMenuClick}
      />
    </main>
  );
}
