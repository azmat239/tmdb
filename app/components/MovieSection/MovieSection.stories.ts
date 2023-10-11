import type { Meta, StoryObj } from "@storybook/react";
import MovieSection from "./MovieSection";
import { movieLists, tabs } from "../../mockdata";

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
    tabs: tabs,
    movieList: movieLists,
  },
};
