import type { Meta, StoryObj } from "@storybook/react";
import SearchSideBar from "./SearchSideBar";
import { Items } from "../../mockdata";

const meta = {
  title: "Components/SearchSideBar",
  component: SearchSideBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search_Side_Bar: Story = {
  args: {
    heading: "Search Results",
    items: Items,
  },
};
