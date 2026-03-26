import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Committee from "@/components/Committee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Committee />
    </main>
  );
}