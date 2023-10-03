import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const button: Story = {
  args: {
    text: "Search",
    variant: "Hero-section",
    onClicked: () => {
      alert(".... Searching ....");
    },
  },
};
