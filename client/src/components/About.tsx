import { motion } from "framer-motion";
import { Code, Database, Brain, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend Development", icon: Code, desc: "React, Vue, Tailwind CSS, Next.js" },
    { name: "Backend Architecture", icon: Terminal, desc: "Node.js, Python, Express, REST APIs" },
    { name: "Database Design", icon: Database, desc: "PostgreSQL, MongoDB, Redis, Prisma" },
    { name: "AI & Machine Learning", icon: Brain, desc: "TensorFlow, PyTorch, NLP, Computer Vision" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Bridging the gap between <span className="text-gradient">logic</span> and <span className="text-gradient">intelligence</span>.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a passionate Full-Stack Developer with a deep focus on Artificial Intelligence and Machine Learning, I build more than just websites. I create intelligent systems that solve real-world problems.
              </p>
              <p>
                My background allows me to handle entire project lifecycles—from designing scalable database architectures and crafting intuitive user interfaces to integrating predictive ML models that give applications a competitive edge.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="glass-panel p-4 rounded-xl border-l-2 border-l-primary flex-1">
                <h4 className="text-3xl font-display font-bold text-foreground">3+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass-panel p-4 rounded-xl border-l-2 border-l-secondary flex-1">
                <h4 className="text-3xl font-display font-bold text-foreground">20+</h4>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:bg-white/[0.08] transition-colors group"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
