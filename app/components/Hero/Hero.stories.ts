import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const hero: Story = {
  args: {
    title: "Welcome",
    description:
      "Millions of movies, TV shows and people to discover. Explore now.",
    bgImg: "HeroSection.svg",
  },
};
