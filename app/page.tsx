import { Header } from "@/components/organisms/header";
import { Hero } from "@/components/organisms/hero";
import { Skills } from "@/components/organisms/skills";
import { Expertise } from "@/components/organisms/expertise";
import { About } from "@/components/organisms/about";
import { Projects } from "@/components/organisms/projects";
import { Contact } from "@/components/organisms/contact";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
