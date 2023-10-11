import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./FooterMenu";
import { links, menus } from "../../mockdata";

const meta = {
  title: "Components/footerMenu",
  component: FooterMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer_Menu: Story = {
  args: menus[0],
};
