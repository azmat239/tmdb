import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Hero
        title="Welcome"
        description="Millions of movies, TV shows and people to discover. Explore Now."
        bgImg="https://picsum.photos/200"
      />
    </main>
  );
}
