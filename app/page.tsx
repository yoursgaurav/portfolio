import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
