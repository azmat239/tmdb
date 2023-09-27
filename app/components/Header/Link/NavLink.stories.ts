import type { Meta, StoryObj } from "@storybook/react";
import NavLink from "./NavLink";

const meta = {
  title: "Components/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading_24: Story = {
  args: {
    text: "Movies",
    url: "/",
  },
};
