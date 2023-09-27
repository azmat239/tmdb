import Image from "next/image";
import Header from "@/app/components/Header/Header";
import img from "@/public/tmdblogo.svg";

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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header imgsrc={img} links={links} actionIcon="text-2xl text-lightBlue" />
    </main>
  );
}
