import { motion } from "framer-motion";
import { Laptop, Cpu, ServerCog, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web App Development",
      description: "End-to-end development of scalable, responsive, and performant web applications using modern frameworks.",
      icon: Laptop,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "AI-Powered Solutions",
      description: "Integration of machine learning models, NLP, and intelligent algorithms into existing or new applications.",
      icon: Cpu,
      color: "from-purple-500 to-fuchsia-400"
    },
    {
      title: "Database Architecture",
      description: "Designing robust, normalized, and optimized database structures for secure and fast data retrieval.",
      icon: ServerCog,
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Workflow Automation",
      description: "Streamlining business processes through custom scripting and third-party API integrations.",
      icon: Sparkles,
      color: "from-orange-500 to-amber-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/20 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive technical solutions tailored to elevate your business and streamline your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-20`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
