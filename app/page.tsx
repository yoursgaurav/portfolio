import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
