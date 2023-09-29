import type { Meta, StoryObj } from "@storybook/react";
import footerLogo from "./footerLogo";

const meta = {
  title: "Components/footerLogo",
  component: footerLogo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof footerLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo_footer: Story = {
  args: {
    imgSrc: "https://placehold.jp/130x94.png",
    url: "/",
    imgAlt: "nothing",
    extraClasses: "",
  },
};
