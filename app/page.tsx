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
let footerValue = {
  imgSrc: "footerlogo.svg",
  url: "/footer",
  imgAlt: "Not Found",
};
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header logo={logoValue} links={links} ActionIcon={BiSearchAlt2} />
      Homepage
      <Footer logo={footerValue} />
    </main>
  );
}
