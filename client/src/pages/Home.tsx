import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Mail, Code, Database, Cpu, ChevronRight } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} Hafsa Akhtar. All rights reserved.</p>
      </footer>
    </div>
  );
}
