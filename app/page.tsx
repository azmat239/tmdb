"use client";
import Hero from "./components/Hero/Hero";
import MovieSection from "./components/MovieSection/MovieSection";

let tabs = [
  { tabsName: "Today", onClick: () => console.log("Today") },
  { tabsName: "This Week", onClick: () => console.log("Today") },
];

let movieLists = [
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "The Good Doctor",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 90,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Spider-Man: Across The Spider:Verse",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 20,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Meg 2:The Trench",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 10,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Avatar The Way Of Water",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 60,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "The Amazing SpiderMan",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 75,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "War Of The Worlds:The Attack",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 79,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Guardian of the Galaxy Vol.3",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 100,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Guardian of the Galaxy Vol.3",
    date: "Sep 27,2017",
    onClick: () => {
      return alert("Image Clicked");
    },
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
    rating: 70,
  },
];
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
      <MovieSection title="Trending" tabs={tabs} movieLists={movieLists} />
      <MovieSection title="What's Popular" movieLists={movieLists} />
    </main>
  );
}
