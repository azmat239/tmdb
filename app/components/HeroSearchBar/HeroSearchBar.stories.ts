import type { Meta, StoryObj } from "@storybook/react";
import HeroSearchBar from "./HeroSearchBar";

const meta = {
  title: "Components/HeroSearchBar",
  component: HeroSearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero_Search_Bar: Story = {
  args: {
    inputProps: {
      placeholder: "Search for a Movie, Tv Shows or People ....",
      onInputChange: () => {
        console.log("Changed The Text");
      },
      defaultValue: "Iron Man 4",
    },

    onSearchClick: () => {
      alert(".... Searching ....");
    },
  },
};
