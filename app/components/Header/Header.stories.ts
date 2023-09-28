import type { Meta, StoryObj } from "@storybook/react";
import { BiSearchAlt2 } from "react-icons/bi";
import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headers: Story = {
  args: {
    logo: {
      imgSrc: "https://placehold.jp/150x20.png",
      url: "/",
      altText: "nothing",
    },
    links: [
      { text: "Movies", url: "/Movies" },
      { text: "Tv Show", url: "/TvShow" },
      { text: "People", url: "/People" },
      { text: "More", url: "/More" },
    ],
    ActionIcon: BiSearchAlt2,
    extraClasses: "",
  },
};
