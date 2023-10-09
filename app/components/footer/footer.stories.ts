import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./footer";
import Footer from "./footer";
import { Footerlogo, logoValue, menus } from "../../mockdata";

const meta = {
  title: "Components/footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer_Menu: Story = {
  args: {
    logo: Footerlogo,
    menus: menus,
  },
};
