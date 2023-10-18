import type { Meta, StoryObj } from "@storybook/react";
import SearchMovieCards from "./SearchMovieCards";
import { listsResult } from "../../mockdata";

const meta = {
  title: "Components/SearchMovieCards",
  component: SearchMovieCards,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchMovieCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search_Result_MovieCards: Story = {
  args: {
    lists: listsResult,
  },
};
