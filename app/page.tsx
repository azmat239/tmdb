import Image from "next/image";
import Header from "@/app/components/Header/Header";
import { BiSearchAlt2 } from "react-icons/bi";

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
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header logo={logoValue} links={links} ActionIcon={BiSearchAlt2} />
    </main>
  );
}
