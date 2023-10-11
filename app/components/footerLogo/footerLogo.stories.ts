import type { Meta, StoryObj } from "@storybook/react";
import footerLogo from "./footerLogo";
import { Footerlogo } from "../../mockdata";

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
  args: Footerlogo,
};
