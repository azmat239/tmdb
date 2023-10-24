import type { Meta, StoryObj } from "@storybook/react";
import Paging from "./Paging";

const meta = {
  title: "Components/Paging",
  component: Paging,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Paging>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie_Card: Story = {
  args: {
    totalPages: 20,
    pageNumber: 1,
    onClick: (new_page) => new_page + 1,
  },
};
