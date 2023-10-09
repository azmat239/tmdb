import type { Meta, StoryObj } from "@storybook/react";
import NavbarMenu from "./NavbarMenu";
import { links } from "../../mockdata";

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
    links: links,
  },
};
