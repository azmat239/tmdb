import type { Meta, StoryObj } from "@storybook/react";
import { BiSearchAlt2 } from "react-icons/bi";
import Header from "./Header";
import { links, logoValue } from "../../mockdata";

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
    logo: logoValue,
    links: links,
    ActionIcon: BiSearchAlt2,
  },
};
