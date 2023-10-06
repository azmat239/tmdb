import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";

const meta = {
  title: "Components/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie_Card: Story = {
  args: {
    image: {
      imgSrc: "https://placehold.jp/150x220.png",
      altText: "Not found",
    },
    rating: 80,
    title: "The Good Doctor",
    date: "Sep 25,2017",
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
  },
};
