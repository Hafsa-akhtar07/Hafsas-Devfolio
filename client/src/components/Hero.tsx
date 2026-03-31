import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for new projects
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Hi, I'm Hafsa Akhtar.<br />
            <span className="text-gradient">Full-Stack & AI</span> Developer.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I architect intelligent digital solutions, blending robust full-stack engineering with cutting-edge AI and Machine Learning models to solve complex problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 glass-panel px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative glowing orb */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </section>
  );
}
