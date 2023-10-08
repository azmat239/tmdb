import type { Meta, StoryObj } from "@storybook/react";
import MovieSection from "./MovieSection";

const meta = {
  title: "Components/MovieSection",
  component: MovieSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie_Section: Story = {
  args: {
    title: "Trending",
    tabs: [
      { tabName: "Today", onClick: () => console.log("Today") },
      { tabName: "This Week", onClick: () => console.log("Today") },
    ],
    movieList: [
      {
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
        image: {
          imgSrc: "https://placehold.jp/150x220.png",
          altText: "Not Found",
        },
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
    ],
  },
};
