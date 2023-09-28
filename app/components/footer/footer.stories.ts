import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./footer";
import Footer from "./footer";

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
    logo: {
      imgSrc: "https://placehold.jp/130x94.png",
      url: "/",
      imgAlt: "Not Found",
    },
  },
};
