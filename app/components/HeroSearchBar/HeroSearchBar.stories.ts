import type { Meta, StoryObj } from "@storybook/react";
import HeroSearchBar from "./HeroSearchBar";
import { inputProps } from "../../mockdata";

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
    inputProps: inputProps,

    onSearchClick: () => {
      alert(".... Searching ....");
    },
  },
};
