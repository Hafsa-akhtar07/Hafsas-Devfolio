import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";

// Import generated images
import projectHostel from "@/assets/images/project-hostel.png";
import projectAiBlog from "@/assets/images/project-ai-blog.png";
import projectMentalHealth from "@/assets/images/project-mental-health.png";
import projectTodo from "@/assets/images/project-todo.png";
import projectSensor from "@/assets/images/project-sensor.png";

const projects = [
  {
    id: "hostel-mgmt",
    title: "Hostel Management System",
    shortDesc: "Comprehensive dashboard for managing hostel operations.",
    fullDesc: "A full-stack web application designed to streamline the daily operations of a hostel. Features include student registration, room allocation, fee tracking, attendance management, and detailed reporting dashboards for administrators.",
    image: projectHostel,
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    features: ["Real-time room availability tracking", "Automated fee reminders", "Student portal with complaint logging", "Admin analytics dashboard"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: "ai-blog",
    title: "AI-Powered Blog Summarizer",
    shortDesc: "NLP tool to extract key insights from long articles.",
    fullDesc: "Leveraging advanced Natural Language Processing models, this tool takes long-form articles or blog posts and generates concise, accurate summaries. It helps users save time while retaining the core message and key data points of the original text.",
    image: projectAiBlog,
    tags: ["Python", "Flask", "Hugging Face", "React"],
    features: ["Adjustable summary length", "Keyword extraction", "Sentiment analysis", "Export to PDF/Notion"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: "mental-health",
    title: "Mental Health Tracker",
    shortDesc: "Progressive web app for tracking mood and habits.",
    fullDesc: "A privacy-focused application that allows users to log their daily moods, journal entries, and habits. It includes data visualization to help users identify patterns and triggers over time, providing valuable insights for personal wellbeing.",
    image: projectMentalHealth,
    tags: ["Vue.js", "Firebase", "Chart.js", "PWA"],
    features: ["Daily mood logging interface", "Interactive trend charts", "Secure journal entries", "Resource directory"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: "todo-calendar",
    title: "ToDo App with Calendar",
    shortDesc: "Productivity app combining tasks with scheduling.",
    fullDesc: "A modern productivity tool that seamlessly integrates a task manager with a full calendar view. Users can drag and drop tasks onto specific dates, set recurring reminders, and organize their workflow visually.",
    image: projectTodo,
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    features: ["Drag-and-drop scheduling", "Task categorization", "Custom reminders", "Dark/Light mode support"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: "sensor-activity",
    title: "Sensor-Based Activity Classifier",
    shortDesc: "Machine learning model analyzing IoT sensor data.",
    fullDesc: "An AI/ML project that processes raw data from smartphone accelerometers and gyroscopes to accurately classify user physical activities (walking, running, sitting, etc.) in real-time.",
    image: projectSensor,
    tags: ["Python", "TensorFlow", "Scikit-Learn", "FastAPI"],
    features: ["Real-time data processing", "High accuracy classification", "Interactive data visualization", "REST API for predictions"],
    demoLink: "#",
    githubLink: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A selection of my recent work across full-stack development and AI integration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                    View Details <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 font-display">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none"
            >
              <div 
                className="bg-card border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative aspect-video md:aspect-[21/9] w-full bg-muted shrink-0">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                    {selectedProject.fullDesc}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 font-display flex items-center gap-2">
                      <div className="w-1 h-4 bg-primary rounded-full"></div>
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm bg-white/5 p-3 rounded-lg">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 flex gap-4">
                    <a 
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a 
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/5 gap-2"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
