import type { Meta, StoryObj } from "@storybook/react";
import SearchMovie from "./SearchMovieCardList";
import { listsResult } from "../../mockdata";

const meta = {
  title: "Components/SearchMovieCards",
  component: SearchMovie,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchMovie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search_Result_Movie: Story = {
  args: {
    movies: listsResult,
    variant: "company",
  },
};
