import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie_Ratings: Story = {
  args: {
    value: 80,
    variant: "movie",
  },
};
