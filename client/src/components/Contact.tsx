import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Let's build something <span className="text-gradient">amazing</span> together.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-10"
            >
              Whether you need a robust web application, an intelligent AI solution, or just want to chat about tech—I'm ready to help bring your ideas to life.
            </motion.p>
            
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-medium">hello@example.com</span>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-[#00b22d]/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:text-[#00b22d] transition-colors">
                    <path d="M22.316 2.336a3.526 3.526 0 0 0-2.484-1.02H4.168c-.94 0-1.844.372-2.484 1.02A3.526 3.526 0 0 0 .664 4.82v14.36c0 .94.372 1.844 1.02 2.484.64.64 1.544 1.02 2.484 1.02h15.664c.94 0 1.844-.372 2.484-1.02a3.526 3.526 0 0 0 1.02-2.484V4.82a3.526 3.526 0 0 0-1.02-2.484zm-3.66 12.068h-2.148v-2.316c0-1.06-.596-1.572-1.556-1.572-.94 0-1.604.576-1.604 1.556v2.332H11.2V8.988h2.148v1.076c.4-.732 1.256-1.22 2.224-1.22 1.636 0 3.084 1.06 3.084 3.064v2.5zM6.924 14.404H4.776V8.988h2.148v5.416zm-1.072-6.26c-.732 0-1.328-.596-1.328-1.328 0-.732.596-1.328 1.328-1.328.732 0 1.328.596 1.328 1.328 0 .732-.596 1.328-1.328 1.328z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Available on Fiverr</span>
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="text-primary w-6 h-6" /> Send a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <input 
                      {...register("name", { required: true })}
                      className="flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <input 
                      {...register("email", { required: true })}
                      type="email"
                      className="flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Project Details</label>
                  <textarea 
                    {...register("message", { required: true })}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none"
                    placeholder="Tell me about what you want to build..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
