import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
