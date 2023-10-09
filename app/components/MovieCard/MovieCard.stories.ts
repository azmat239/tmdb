import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";
import { movieLists } from "../../mockdata";

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
  args: movieLists[0],
};
