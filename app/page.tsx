import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Committee from "@/components/Committee";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Committee />
      <Events />
      <Achievements />
      <Contact />
    </main>
  );
}