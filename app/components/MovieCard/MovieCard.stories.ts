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
    image: { imgSrc: "https://placehold.co/600x400", altText: "Not found" },
    rating: 80,
    title: "The Good Doctor",
    date: "Sep 25,2017",
  },
};
