import type { Meta, StoryObj } from "@storybook/react";
import MenuPopover from "./MenuPopover";

const meta = {
  title: "Components/MenuPopover",
  component: MenuPopover,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MenuPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu_popover: Story = {
  args: {
    links: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
  },
};
