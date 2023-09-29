import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./FooterMenu";

const meta = {
  title: "Components/footerMenu",
  component: FooterMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer_Menu: Story = {
  args: {
    title: "THE BASICS",
    links: [
      {
        text: "AboutTMDB",
        url: "/about",
      },
      {
        text: "Contact us",
        url: "/contactus",
      },
      {
        text: "Support Forum",
        url: "/supportforum",
      },
      {
        text: "Api",
        url: "/api",
      },
      {
        text: "System Support",
        url: "/systemsupport",
      },
    ],
    extraClasses: "",
  },
};
