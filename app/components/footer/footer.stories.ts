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
    menu: [
      {
        title: "THE Basics",
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
      },
      {
        title: "GET INVOLOVED",
        links: [
          { text: "Contribution Bible", url: "/contribution" },
          { text: "Add New Movies", url: "/addnewmovies" },
          { text: "Add New Tv Shows", url: "/addnewtvshows" },
        ],
      },
      {
        title: "COMMUNITY",
        links: [
          { text: "Guidelines", url: "/guidelines" },
          { text: "Discussion", url: "/discussion" },
          { text: "Leaderboard", url: "/leaderboard" },
          { text: "Twiter", url: "/twiter" },
        ],
      },
      {
        title: "LEGAL",
        links: [
          {
            text: "Terms of Use",
            url: "/terms",
          },
          {
            text: "API Terms of Use",
            url: "/apiterms",
          },
          {
            text: "Privacy Policy",
            url: "/privacypolicy",
          },
          {
            text: "DMCA Takedown Request",
            url: "/dmca",
          },
        ],
      },
    ],
    extraClasses: "",
  },
};
