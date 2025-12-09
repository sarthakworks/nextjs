import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </main>
  );
}
