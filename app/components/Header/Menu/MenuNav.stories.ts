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

export const MenuNav_movies: Story = {
  args: {
    text: "movies",
    url: "/",
  },
};
