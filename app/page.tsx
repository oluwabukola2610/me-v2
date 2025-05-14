import { Header } from "@/components/organisms/header";
import { Hero } from "@/components/organisms/hero";
import { Skills } from "@/components/organisms/skills";
import { Expertise } from "@/components/organisms/expertise";
import { About } from "@/components/organisms/about";
import { Contact } from "@/components/organisms/contact";
import { Footer } from "@/components/organisms/footer";
import Projects from "@/components/organisms/projects";
import { Experience } from "@/components/organisms/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
