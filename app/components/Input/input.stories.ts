import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

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

export const button: Story = {
  args: {
    placeHolder: "Search for a Movie, Tv Shows or People ....",
    onInputChange: () => {
      console.log("Changed The Text");
    },
    // defaultValue: "Iron Man 4",
  },
};
