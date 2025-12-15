import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Portfolio from "@/components/Portfolio";
import Thoughts from "@/components/Thoughts";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

import Gallery from "@/components/Gallery"; // Added import for Gallery

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Projects />
        <Portfolio />
        <Thoughts />
        <Articles />
      </div>
      <Gallery /> {/* Added Gallery component */}
      <Contact />
    </>
  );
}
