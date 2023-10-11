import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { inputProps } from "../../mockdata";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero_Input: Story = {
  args: inputProps,
};
