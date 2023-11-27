import type { Meta, StoryObj } from "@storybook/react";
import { listsResult } from "../../mockdata";
import SearchMovieCardList from "./SearchMovieCardList";

const meta = {
  title: "Components/SearchMovieCardsList",
  component: SearchMovieCardList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchMovieCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search_Movie_card_list: Story = {
  args: {
    movies: listsResult,
    variant: "company",
  },
};
