import type { Meta, StoryObj } from "@storybook/react";
import footerLink from "./footerLink";

const meta = {
  title: "Components/footerLink",
  component: footerLink,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof footerLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer_Link: Story = {
  args: {
    title: "The Basics",
    text: ["AboutTMDB", "Contact us", "Support Forum", "Api", "System Support"],
    extraClasses: "",
  },
};
