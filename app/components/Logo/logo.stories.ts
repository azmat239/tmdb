import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";
import { logoValue } from "../../mockdata";

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo_svg: Story = {
  args: logoValue,
};
