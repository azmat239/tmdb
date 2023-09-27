import type { Meta, StoryObj } from "@storybook/react";
import MenuNav from "./MenuNav";

const meta = {
  title: "Components/MenuNav",
  component: MenuNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MenuNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavMenu: Story = {
  args: {
    links: [
      { text: "Movies", url: "/Movies" },
      { text: "Tv Show", url: "/TvShow" },
      { text: "People", url: "/People" },
      { text: "More", url: "/More" },
    ],
  },
};
