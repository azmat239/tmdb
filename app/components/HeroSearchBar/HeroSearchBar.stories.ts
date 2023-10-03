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
      placeHolder: "Search for a Movie, Tv Shows or People ....",
      onInputChange: () => {
        console.log("Changed The Text");
      },
      defaultValue: "Iron Man 4",
    },
    buttonProps: {
      text: "Search",
      variant: "Hero-section",
      onButtonClicked: () => {
        alert(".... Searching ....");
      },
    },
  },
};
