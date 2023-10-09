import type { Meta, StoryObj } from "@storybook/react";
import MenuPopover from "./MenuPopover";
import { movieLists } from "../../mockdata";

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
  args: { links: movieLists[0].MenuPopoverLinks },
};
