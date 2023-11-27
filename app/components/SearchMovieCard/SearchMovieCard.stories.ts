import type { Meta, StoryObj } from "@storybook/react";

import SearchMovieCard from "./SearchMovieCard";
import { listsResult } from "../../mockdata";

const meta = {
  title: "Components/SearchMovieCard",
  component: SearchMovieCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchMovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search_Movie_card: Story = {
  args: listsResult[0],
};
