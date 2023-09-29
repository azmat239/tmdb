import Image from "next/image";
import Header from "@/app/components/Header/Header";
import { BiSearchAlt2 } from "react-icons/bi";
import Footer from "./components/footer/footer";

const links = [
  {
    text: "Movies",
    url: "/movies",
  },
  {
    text: "Tv Shows",
    url: "/tv",
  },
  {
    text: "People",
    url: "/people",
  },
  {
    text: "more",
    url: "/more",
  },
];

let logoValue = { imgSrc: "tmdblogo.svg", url: "/", altText: "Not Found" };
let Footerlogo = { imgSrc: "footerlogo.svg", url: "/", imgAlt: "Not Found" };
const menus = [
  {
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
];
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header logo={logoValue} links={links} ActionIcon={BiSearchAlt2} />
      Homepage
      <Footer menus={menus} logo={Footerlogo} />
    </main>
  );
}
