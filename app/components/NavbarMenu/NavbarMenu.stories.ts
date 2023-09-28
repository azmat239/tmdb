import type { Meta, StoryObj } from "@storybook/react";
import NavbarMenu from "./NavbarMenu";

const meta = {
  title: "Components/NavbarMenu",
  component: NavbarMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavbarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    links: [
      { text: "Movies", url: "/Movies" },
      { text: "Tv Show", url: "/TvShow" },
      { text: "People", url: "/People" },
      { text: "More", url: "/More" },
    ],
    extraClasses: "",
  },
};
