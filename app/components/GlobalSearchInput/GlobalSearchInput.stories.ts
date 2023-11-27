import type { Meta, StoryObj } from "@storybook/react";
import { BiSearchAlt2 } from "react-icons/bi";
import GlobalSearchInput from "./GlobalSearchInput";
import { inputProps } from "../../mockdata";

const meta = {
  title: "Components/GlobalSearchInput",
  component: GlobalSearchInput,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GlobalSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Global_Search_Input: Story = {
  args: {
    ActionIcon: BiSearchAlt2,
    placeholder: inputProps.placeholder,
    onInputChange: inputProps.onInputChange,
  },
};
