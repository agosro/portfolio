import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import pomodoroKittyImg from "../assets/pomodoro-kitty.png";
import suplementsImg from "../assets/suple.png";
import malbecImg from "../assets/malbec.png";
import weatherAppImg from "../assets/weather.png";
import chatbotImg from "../assets/chatbot.png";
import tesisImg from "../assets/tesis.png";
import sooniImg from "../assets/sooni.png";

const projects = [
  {
    title: "SOONI Skincare - E-commerce Website",
    description: "Full‑stack e‑commerce for Korean skincare. Built as a production‑ready project that covers product catalog, persistent cart, MercadoPago checkout, order tracking, admin dashboard with role‑based access (admin, viewer, demo), Google OAuth, and seed scripts for quick setup. Focused on scalability, real‑world e‑commerce workflows, and an intuitive admin UX for managing products, orders and coupons.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: sooniImg,
    github: "https://github.com/agosro/ecoomerce-sooni"
  },
  {
    title: "School Management System",
    description: "Comprehensive school management system developed as my thesis. It handles students, teachers, courses, grades, reports, and role-based access control, focusing on scalability and real-world academic workflows.",
    technologies: ["React", "Vite", "Bootstrap", "JWT", "Java", "Spring Boot", "MySQL"],
    image: tesisImg,
    github: "https://github.com/agosro/LuteranoFrontEnd"
  },
  {
    title: "Maestro de los Cuentos",
    description: "AI-powered storytelling assistant that generates and answers questions about stories using LLMs, embeddings, and RAG techniques, focusing on grounded and context-aware responses.",
    technologies: ["Python", "React", "Vite", "Tailwind", "LLMs", "RAG", "Embeddings", "Prompt Engineering"],
    image: chatbotImg,
    github: "https://github.com/agosro/maestro-de-los-cuentos",
    live: "https://maestro-de-los-cuentos.netlify.app/"
  },
  {
    title: "Weather App",
    description: "A fun weather web app featuring kittens that change with the weather, with real-time forecasts, language toggle, and a responsive design.",
    technologies: ["Javascript", "CSS", "HTML"],
    image: weatherAppImg,
    github: "https://github.com/agosro/weather-app",
    live: "https://agosro.github.io/weather-app/"
  },
  {
    title: "Pomodoro Kitty",
    description: "A simple Pomodoro timer web app with work and break modes, visual/audio alerts, and a responsive design.",
    technologies: ["Javascript", "CSS", "HTML"],
    image: pomodoroKittyImg,
    github: "https://github.com/agosro/pomodoro-kitty",
    live: "https://agosro.github.io/pomodoro-kitty/"
  },
  {
    title: "Malbec & Grill - Argentine Restaurant Website",
    description: "A modern, responsive website for a traditional Argentine restaurant, showcasing the menu, desserts, promotions, and the restaurant's story with a rustic and friendly design.",
    technologies: ["Javascript", "CSS", "HTML"],
    image: malbecImg,
    github: "https://github.com/agosro/malbec-grill",
    live: "https://agosro.github.io/malbec-grill/"
  },
  {
    title: "Green Sups - Informative Landing Page",
    description: "A modern, responsive landing page showcasing sports and daily supplements with clear info, benefits, and an intuitive layout.",
    technologies: ["Javascript", "CSS", "HTML"],
    image: suplementsImg,
    github: "https://github.com/agosro/landing-page-suplementos",
    live: "https://agosro.github.io/landing-page-suplementos/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-glow-subtle transition-all duration-500 border-border/50 group flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {/* GitHub Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {/* Live Demo Button */}
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;